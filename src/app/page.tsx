import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { WhatWeSolve } from "@/components/sections/WhatWeSolve";
import { Bureaus } from "@/components/sections/Bureaus";
import { Process } from "@/components/sections/Process";
import { Problems } from "@/components/sections/Problems";
import { Loans } from "@/components/sections/Loans";
import { Consultation } from "@/components/sections/Consultation";
import React, { lazy, Suspense } from 'react';

// Lazy load heavy components below the fold
const Reviews = lazy(() => import("@/components/sections/Reviews").then(mod => ({ default: mod.Reviews })));
const FAQ = lazy(() => import("@/components/sections/FAQ").then(mod => ({ default: mod.FAQ })));
const ContactForm = lazy(() => import("@/components/sections/ContactForm").then(mod => ({ default: mod.ContactForm })));
const Footer = lazy(() => import("@/components/sections/Footer").then(mod => ({ default: mod.Footer })));

const DEMO_REVIEWS = [
  {
    id: "1",
    name: "Ramesh Kumar",
    city: "Hyderabad",
    problem: "Wrong active loan on report",
    quote: "I was rejected for a home loan because a closed two-wheeler loan was still showing active. The team guided me on exactly how to dispute it.",
  },
  {
    id: "2",
    name: "Sneha Reddy",
    city: "Vijayawada",
    problem: "Identity mismatch",
    quote: "Someone else's default was showing up on my CIBIL due to a similar name. CIBIL Decoded helped me understand the process to get it removed.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      {/*
       * pt-[70px]: 38px logo + 16px top padding + 16px bottom padding = 70px navbar.
       * Matches the header's default (non-scrolled) height exactly.
       */}
      <main className="pt-[70px]">
        <Hero />
        <WhatWeSolve />
        <Bureaus />
        <Process />
        <Problems />
        <Loans />
        <Consultation />
        
        {/* Below the fold content loaded asynchronously */}
        <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading sections...</div>}>
          <Reviews reviews={DEMO_REVIEWS} />
          <FAQ />
          <ContactForm />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
