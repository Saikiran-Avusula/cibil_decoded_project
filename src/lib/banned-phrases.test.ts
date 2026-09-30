import { readdirSync, readFileSync, statSync } from "node:fs";
import { basename, join, relative } from "node:path";
import { describe, expect, it } from "vitest";
import { BANNED_PHRASES } from "./constants";

const SRC_ROOT = join(__dirname, "..");
const SKIP_FILES = new Set(["constants.ts", "banned-phrases.test.ts"]);

function collectFiles(dir: string): string[] {
  const entries = readdirSync(dir);
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...collectFiles(fullPath));
      continue;
    }

    if (SKIP_FILES.has(basename(fullPath))) {
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

describe("banned phrases", () => {
  it("does not appear in src/", () => {
    const hits: string[] = [];

    for (const file of collectFiles(SRC_ROOT)) {
      const content = readFileSync(file, "utf8");
      const lower = content.toLowerCase();

      for (const phrase of BANNED_PHRASES) {
        if (lower.includes(phrase.toLowerCase())) {
          hits.push(`${relative(SRC_ROOT, file)}: ${phrase}`);
        }
      }
    }

    expect(hits).toEqual([]);
  });
});
