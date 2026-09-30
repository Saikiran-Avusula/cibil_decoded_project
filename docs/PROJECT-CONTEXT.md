# Project: CIBIL Decoded website

Business: credit-report guidance and loan-assistance service, Hyderabad,
serving Telangana and Andhra Pradesh. Helps people understand credit reports,
identify discrepancies, navigate disputes. Connects customers to lenders.
Does NOT lend money, is NOT a credit bureau, NOT RBI-regulated.

Stack: Next.js 15 (App Router, TS strict), Tailwind, shadcn/ui, Framer Motion
(sparing), React Hook Form + Zod. Backend (later phase): Spring Boot + MySQL.

## Brand palette (from actual logo file, do not substitute)

- Brand gradient (primary accent, used for "CIBIL" text, magnifying glass,
  key highlights): linear or radial gradient from `#5DE0E6` (teal-cyan) to
  `#004AAD` (deep blue). Define as a Tailwind gradient utility:
  `bg-gradient-to-r from-[#5DE0E6] to-[#004AAD]`.
- Solid blue (for buttons, links, icons where a gradient is impractical,
  e.g. small UI elements, focus rings): `#004AAD`.
- Solid teal (for secondary accents, success states): `#5DE0E6`, used
  sparingly — it's light, so pair with dark text on top of it, never as
  body-text color.
- Ink / body text and headings: `#1C1C1C`.
- Section background (alternating sections): `#F4F7FA`.
- Line / border: `#D8E1EA`.
- Muted text: `#5A5A5A`.
- Error only: `#B42318`. Never use red elsewhere — it reads as danger next
  to "credit," which works against trust.
- White: `#FFFFFF`.

Border radius: one value, 8px, everywhere. Shadows only on the hero's
sample-report card and the form — everywhere else, borders not shadows.

Reference files (read these before building anything):
- docs/reference/cibil-decoded-website.html — exact copy, section content
- docs/reference/design-brief-v2.md — section order, psychology reasoning,
  visual rules (colors below supersede any color values in that file)
- docs/CIBIL-Decoded-Frontend-Phases.md — the 9 build phases, in order
- docs/reference/logo.png — actual logo file, use for header/favicon

Hard rules, every phase:
- Never write: "RBI regulated", "credit repair", "guaranteed approval",
  or any bureau-affiliation claim. See BANNED_PHRASES in src/lib/constants.ts.
- Never invent fake reviews, fake partner names, fake statistics.
- Use only the palette above. No colors outside it, no red except form errors.
- One border-radius (8px) everywhere. Borders over shadows except hero
  card and form.

Current phase: Phase 1 — scaffold