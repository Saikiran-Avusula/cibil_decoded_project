"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

// ─── Sample report data ───────────────────────────────────────────────────────
interface ReportRow {
  account: string;
  lender: string;
  status: string;
  balance: string;
  flagged?: boolean;
  flagLabel?: string;
}

const SAMPLE_ROWS: ReportRow[] = [
  { account: "Home Loan",     lender: "HDFC Bank",     status: "Closed", balance: "₹0"      },
  { account: "Credit Card",   lender: "SBI Cards",     status: "Active", balance: "₹12,400" },
  {
    account: "Personal Loan", lender: "Bajaj Finserv", status: "Active", balance: "₹0",
    flagged: true,
    flagLabel: "Loan closed, balance zero, still marked active",
  },
];

// ─── Sample Report Card ───────────────────────────────────────────────────────

function SampleReportCard({ rows }: { rows: ReportRow[] }) {
  return (
    <div className="bg-white rounded-lg border border-line shadow-md overflow-hidden w-full max-w-md mx-auto">
      <p className="text-xs text-muted-text text-center px-4 pt-3 pb-1 italic">
        Sample illustration, not a real report
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-section border-b border-line">
              <th className="text-left px-4 py-2 text-xs font-semibold text-muted-text whitespace-nowrap">Account</th>
              <th className="text-left px-4 py-2 text-xs font-semibold text-muted-text whitespace-nowrap">Lender</th>
              <th className="text-left px-4 py-2 text-xs font-semibold text-muted-text whitespace-nowrap">Status</th>
              <th className="text-right px-4 py-2 text-xs font-semibold text-muted-text whitespace-nowrap">Balance</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <Fragment key={i}>
                <tr
                  className={`border-b border-line last:border-0 ${
                    row.flagged ? "border-l-[3px] border-l-[#D97706] bg-[#FFFBEB]" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-ink whitespace-nowrap">{row.account}</td>
                  <td className="px-4 py-3 text-muted-text whitespace-nowrap">{row.lender}</td>
                  <td className="px-4 py-3 text-muted-text whitespace-nowrap">{row.status}</td>
                  <td className="px-4 py-3 text-right text-ink whitespace-nowrap font-medium">{row.balance}</td>
                </tr>
                {row.flagged && row.flagLabel && (
                  <tr className="bg-[#FFFBEB]">
                    <td colSpan={4} className="px-4 pb-3 text-xs text-[#92400E] leading-snug">
                      ⚠ {row.flagLabel}
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white pt-24 pb-12 md:pt-28 md:pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 [@media(min-width:820px)]:grid-cols-[1.1fr_0.9fr] gap-12 items-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* ── Left column ── */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-ink leading-tight">
              Your credit report,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #5DE0E6, #004AAD)" }}
              >
                finally decoded.
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-text leading-relaxed">
              We help people in Telangana and Andhra Pradesh understand exactly
              what&apos;s in their credit report, spot errors, and resolve disputes
              with bureaus — then connect them with the right lenders when
              they&apos;re ready.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {/* Primary — navy gradient */}
              <Button
                size="lg"
                id="hero-cta-primary"
                nativeButton={false}
                render={<a href="#contact" />}
                className="border-0 text-white font-semibold w-full sm:w-auto"
                style={{ background: "linear-gradient(90deg, #5DE0E6, #004AAD)", color: "#fff" }}
              >
                Get your credit issue reviewed
              </Button>
              {/* Secondary — navy outline */}
              <Button
                size="lg"
                variant="outline"
                id="hero-cta-secondary"
                nativeButton={false}
                render={<a href="#loans" />}
                className="w-full sm:w-auto"
                style={{ borderColor: "#0C2340", color: "#0C2340" }}
              >
                Explore loan options
              </Button>
            </div>

            <p className="text-xs text-muted-text">
              Serving Telangana &amp; Andhra Pradesh &nbsp;·&nbsp; Not affiliated
              with any credit bureau &nbsp;·&nbsp; Your data stays private
            </p>
          </div>

          {/* ── Right column — sample report card ── */}
          <div className="w-full">
            <SampleReportCard rows={SAMPLE_ROWS} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


