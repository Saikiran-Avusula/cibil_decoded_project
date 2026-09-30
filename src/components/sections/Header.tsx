"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "What we do", href: "/#what-we-solve" },
  { label: "Credit bureaus", href: "/#bureaus" },
  { label: "Process", href: "/#process" },
  { label: "Loans", href: "/#loans" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-line"
      animate={{
        paddingTop: scrolled ? "12px" : "16px",
        paddingBottom: scrolled ? "12px" : "16px",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          aria-label="CIBIL Decoded — home"
          className="flex-shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/logo_header_updated.png"
            alt="CIBIL Decoded"
            width={600}
            height={150}
            style={{ height: "38px", width: "auto", maxWidth: "180px" }}
            priority
          />
        </Link>

        {/* Nav links — hidden below 820px */}
        <nav
          aria-label="Main navigation"
          className="[@media(min-width:820px)]:flex hidden items-center gap-6 flex-1 justify-center"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-muted-text hover:text-[#004AAD] transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          {/* Primary CTA */}
          <Button
            size="default"
            className="flex-shrink-0 border-0 text-white font-semibold hidden sm:inline-flex"
            style={{ background: "linear-gradient(90deg, #5DE0E6, #004AAD)", color: "#fff" }}
            nativeButton={false}
            render={<Link href="/#contact" id="header-cta" onClick={() => setIsMobileMenuOpen(false)} />}
          >
            Get help now
          </Button>
          
          {/* Mobile Menu Toggle */}
          <button
            className="[@media(min-width:820px)]:hidden p-2 -mr-2 text-ink rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="[@media(min-width:820px)]:hidden absolute top-full left-0 right-0 bg-white border-b border-line shadow-lg py-4 px-4 sm:px-6 flex flex-col gap-4 max-h-[calc(100vh-70px)] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-base font-medium text-ink bg-gray-50 rounded-lg hover:bg-[#F4F7FA] hover:text-[#004AAD] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            size="default"
            className="w-full justify-center border-0 text-white font-semibold py-6 sm:hidden mt-2"
            style={{ background: "linear-gradient(90deg, #5DE0E6, #004AAD)", color: "#fff" }}
            nativeButton={false}
            render={<Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} />}
          >
            Get help now
          </Button>
        </div>
      )}
    </motion.header>
  );
}


