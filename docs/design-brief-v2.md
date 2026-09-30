# CIBIL Decoded — Phased Copilot Build Prompts

Stack locked: Next.js 15 (App Router, TypeScript strict) + Tailwind + shadcn/ui + Framer Motion (sparing) + React Hook Form + Zod. Backend (Spring Boot + MySQL) comes later, once the frontend is real.

How to use: paste one phase's prompt into Copilot Chat at a time, in order. Don't start Phase 2 until Phase 1's acceptance checks pass. Keep `docs/reference/cibil-decoded-website.html` and `docs/reference/design-brief-v2.md` in the repo — reference both in every prompt so Copilot pulls exact copy and section order instead of inventing content.

---

## Phase 1 — Project scaffold + design system

**Prompt:**

> Scaffold a Next.js 15 project using the App Router and TypeScript strict mode. Add Tailwind CSS and initialize shadcn/ui. Add Framer Motion and next/font for Sora and Source Sans 3.
>
> Set up the Tailwind theme with these exact tokens as CSS variables and Tailwind colors: ink `#0C2340`, blue `#1D5FAE`, teal `#0F8F84`, page background `#FFFFFF`, section background `#F4F7FA`, line `#D8E1EA`, muted text `#4A5B6E`, error `#B42318`. One border radius token, 8px, used everywhere. Body text 17px on desktop, line-height 1.6.
>
> Create the folder structure:
> ```
> src/app/            (page.tsx, layout.tsx, privacy/, terms/, grievance/)
> src/components/ui/  (shadcn primitives)
> src/components/sections/  (one file per homepage section, empty placeholders for now)
> src/lib/             (constants.ts, utils.ts)
> ```
>
> In `src/lib/constants.ts`, add a `BANNED_PHRASES` array containing: "RBI regulated", "RBI approved", "government approved", "authorized partner", "official partner", "credit repair", "fix your CIBIL", "boost your score", "loan provider", "guaranteed approval", "instant approval". Add a Vitest test that scans every file under `src/` for these phrases (case-insensitive) and fails if any appear.
>
> Add ESLint, Prettier, and a GitHub Actions workflow that runs lint, type-check, and test on every push and pull request.
>
> Do not build any homepage content yet. This phase is scaffold only.

**Acceptance check:**
- `npm run dev` runs a blank Next.js app with the fonts and Tailwind theme loading correctly.
- The banned-phrase test exists and passes on an empty codebase.
- CI is green on a fresh push.

---

## Phase 2 — Header, Hero, and layout shell

**Prompt:**

> Reference `docs/reference/cibil-decoded-website.html` for exact copy and `docs/reference/design-brief-v2.md` section 1 and 2 for behavior.
>
> Build `src/app/layout.tsx` with the root HTML structure, metadata (title, description from the reference file), and font variables applied.
>
> Build `src/components/sections/Header.tsx`:
> - Sticky header, white background, 1px bottom border (not a shadow).
> - Logo text left ("CIBIL" in a teal-to-blue gradient span, "Decoded" in ink), nav anchor links (What we do, Credit bureaus, Process, Loans, Reviews, FAQ), one primary shadcn Button linking to #contact.
> - On scroll past 40px, animate vertical padding from 20px to 12px using Framer Motion. One-time direction-aware transition, no bounce.
> - Nav links hidden below 820px width; keep the logo and primary button visible on mobile.
>
> Build `src/components/sections/Hero.tsx`:
> - Two-column grid on desktop (1.1fr / 0.9fr), single column stacked on mobile.
> - Left: h1 headline, one-paragraph positioning line, two shadcn Buttons (primary solid "Get your credit issue reviewed" linking to #contact, secondary outline "Explore loan options" linking to #loans), one line of small trust text below the buttons.
> - Right: build the sample-report illustration as a static card component — a small table-like layout showing three account rows (one visually flagged with an amber border, labeled "Loan closed, balance zero, still marked active"), with a caption reading "Sample illustration, not a real report" in small muted text above it. This is not real data — hardcode it as a props-driven component so it's easy to edit later.
> - On page load, fade and slide the hero content up 12px over 400ms using Framer Motion, once, no repeat, respecting `prefers-reduced-motion`.
> - No stock photography anywhere in this component.
>
> Assemble both into `src/app/page.tsx` in order: Header, then Hero.

**Acceptance check:**
- Matches the design brief's "is this real" job for the hero: no clutter, generous whitespace, one clear headline and one clear action.
- Responsive and legible at 360px width.
- Keyboard focus visible on both buttons and every nav link.
- Lighthouse accessibility score 95+ on this partial page.

---

## Phase 3 — "What we solve" and bureaus sections

**Prompt:**

> Reference the design brief sections 3 and 4, and the reference HTML for exact copy (Understand/Resolve/Finance cards, the comparison table, and the four bureau cards).
>
> Build `src/components/sections/WhatWeSolve.tsx`:
> - Section background `#F4F7FA` (alternating section pattern — this section is shaded, Hero and Header were not).
> - Three equal-height cards in a row on desktop, stacked on mobile: Understand, Resolve, Finance. Each card: small line icon (use lucide-react, already bundled with shadcn), heading, one sentence. No paragraphs.
> - Below the cards, render the comparison table (Credit bureaus / Score apps / CIBIL Decoded columns) as a real `<table>` with horizontal scroll wrapper on mobile, not a div-table. The CIBIL Decoded column cells get a subtle teal-tinted background to draw the eye without using color that implies "you are here" aggressively.
>
> Build `src/components/sections/Bureaus.tsx`:
> - White background (unshaded, alternating back from the previous section).
> - Four equal cards: TransUnion CIBIL, Experian, Equifax, CRIF High Mark, one sentence each, from the reference file.
> - Below the cards, one small muted disclaimer line: not affiliated with any of them.
> - Deliberately plain, no icons, no color accents on these four cards — this section should read like a neutral reference explainer, distinct in feel from the sales-flavored section above it.
>
> Add both to `src/app/page.tsx` after Hero, in that order.

**Acceptance check:**
- Section background alternates correctly (white, shaded, white) reading top to bottom.
- Table is a real semantic table, readable and scrollable on mobile without breaking layout.
- No banned phrases introduced (CI check still passes).

---

## Phase 4 — Process timeline (highest-value section)

**Prompt:**

> Reference design brief section 5 and the reference HTML's six-step process copy.
>
> Build `src/components/sections/Process.tsx`:
> - Shaded background section.
> - Vertical stepper: a continuous left-side line with six numbered circles (blue fill, white number), each with a bold 3-5 word title and one supporting sentence. Use the exact step copy from the reference file (Tell us what happened → Initial call → Report review → Resolution guidance → Follow-up → Loan assessment).
> - Scroll-triggered animation: as each step enters the viewport, animate its circle and the line segment above it from 0 to full opacity/scale using Framer Motion's `whileInView`, once per step, no replay on scroll-back. This is the one section in the whole site allowed scroll-triggered motion — do not add this pattern anywhere else.
> - On mobile, keep the same vertical layout (already mobile-friendly by default), just tighter spacing.

**Acceptance check:**
- Steps animate in once as scrolled into view, not on every scroll direction change.
- Readable and untruncated at 360px.
- Respects `prefers-reduced-motion`: motion disabled, content still visible immediately.

---

## Phase 5 — Problems, Loans, and Consultation sections

**Prompt:**

> Reference design brief sections 6, 7, and the reference HTML's chip list, loan categories, and consultation cards.
>
> Build `src/components/sections/Problems.tsx`: unshaded, a wrapped chip/pill list (shadcn Badge component styled as pills) of the problem types from the reference file. One small muted disclaimer line below about accurate entries and identity fraud, from the reference file.
>
> Build `src/components/sections/Loans.tsx`: shaded, headline and one-paragraph positioning line, chip list of the eight loan categories, then a three-card row of "Lending Partner 1/2/3" placeholder cards with dashed borders (visually distinct from real content cards — signal clearly these are placeholders, not broken content).
>
> Build `src/components/sections/Consultation.tsx`: unshaded, headline "Talk to a credit specialist," three cards (Phone call, WhatsApp, Video meeting) each with a short line and a real `tel:`/`https://wa.me/` link using placeholder numbers from the reference file.
>
> Add all three to `page.tsx` in order after Process.

**Acceptance check:**
- Placeholder cards are visually distinguishable from real content at a glance.
- All links use correct `tel:` and `wa.me` formats even with placeholder numbers.

---

## Phase 6 — Reviews (conditional render) and FAQ

**Prompt:**

> Reference design brief sections 8 and 9.
>
> Build `src/components/sections/Reviews.tsx` as a component that accepts a `reviews: Review[]` prop. If the array is empty, the component renders nothing (return null) — do not render placeholder or example review cards. When reviews exist, render simple cards: name/city, one-line problem, quote, optional photo. For now, call it in `page.tsx` with an empty array so the section is correctly absent.
>
> Build `src/components/sections/FAQ.tsx` using the shadcn Accordion component, one item open at a time, with the exact questions and answers from the reference HTML, ordered from the most common doubt ("Can you directly change my CIBIL score") down to more specific questions.
>
> Add both to `page.tsx` after Loans/Consultation. Reviews first, then FAQ, per the psychology order — proof before objection-handling.

**Acceptance check:**
- Reviews section confirmed absent from the rendered page with an empty array (inspect the DOM, no empty section wrapper left behind either).
- Accordion is keyboard-operable and only one panel open at a time.

---

## Phase 7 — Contact form

**Prompt:**

> Reference design brief section 10 and the reference HTML's form fields exactly.
>
> Build `src/components/sections/ContactForm.tsx` using React Hook Form and Zod:
> - Fields: full name, mobile (10 digits, starts 6-9), email, city, problem type (select), preferred contact method (select), preferred time (select), short description (textarea, max 800 chars), consent checkbox (required), hidden honeypot field.
> - Zod schema in `src/lib/schemas.ts`, shared shape ready to match a future backend DTO.
> - Inline validation on blur, not only on submit.
> - A visible note near the top of the form, before any inputs: "We never ask for your PAN, Aadhaar, bank details, passwords or OTP. Please don't enter them here."
> - Submit button disabled while submitting. For now (no backend yet), on submit just log the validated payload to the console and show a calm, non-celebratory success message ("Received. We'll contact you by your preferred method.") — leave a clearly marked `// TODO: replace with real API call in Phase 8+` comment where the fetch will go.
> - Error state shows a muted error summary, not red text dumped everywhere.
>
> Add to `page.tsx` after FAQ.

**Acceptance check:**
- Form is fully usable and validates correctly with no backend connected.
- Screen reader announces validation errors (`aria-live`, correct `aria-describedby` wiring).
- The banned-phrase and PAN/Aadhaar-pattern checks belong in Phase 8+ when the backend exists — don't build backend validation logic here.

---

## Phase 8 — Footer and legal pages

**Prompt:**

> Reference design brief section 11 and the reference HTML's Privacy Policy, Terms, and Grievance content exactly — copy it, do not rewrite it.
>
> Build `src/components/sections/Footer.tsx`: plain, dense, four-column responsive grid (brand blurb, contact placeholders, links, business detail placeholders), full disclaimer paragraph, copyright line. Deliberately unstyled/plain relative to the rest of the site, per the design brief's reasoning.
>
> Build `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`, `src/app/grievance/page.tsx` as separate routed pages using the exact text from the reference HTML's existing Privacy Policy, Terms, and Grievance sections. Add a "Back to home" link at the top of each.
>
> Update the footer and the form's consent line to link to `/privacy`, `/terms`, `/grievance` instead of in-page anchors, since these are now real routes.
>
> Add `robots.txt` disallowing nothing yet (admin doesn't exist in the frontend yet) and a basic `sitemap.xml` listing the home page and the three legal pages.

**Acceptance check:**
- All three legal pages render with the exact reference copy, reachable by direct URL and by footer/form links.
- Footer renders correctly at 360px without column overlap.

---

## Phase 9 — Full-page polish and Lighthouse pass

**Prompt:**

> Do not add new sections. Review the assembled `page.tsx` top to bottom against `docs/reference/design-brief-v2.md` in full.
>
> Fix any: inconsistent spacing between sections (target 64-80px vertical padding throughout), inconsistent border-radius (must be 8px everywhere), any shadow used outside the hero's sample-report card and the form, any icon style inconsistency, and any remaining default browser focus outline that should be the shadcn-consistent focus ring instead.
>
> Add proper metadata, Open Graph tags, and a JSON-LD `ProfessionalService` block to `layout.tsx` using placeholder business details clearly marked for the owner to replace.
>
> Run and report a Lighthouse audit (mobile). Target: Performance 90+, Accessibility 95+, SEO 95+, Best Practices 95+. Fix what's blocking each target and re-report.

**Acceptance check:**
- Lighthouse targets met on mobile.
- Visual consistency pass confirmed against the design brief's "Visual language" section.
- Site is a complete, deployable static frontend, backend not yet connected.

---

## What comes after this document

Once Phase 9 passes, the frontend is a real, deployable, backend-less site with a form that logs to console instead of saving data. The next document — not this one — covers the Spring Boot + MySQL backend phases (lead storage, admin dashboard, security, the banned-phrase and PAN/Aadhaar checks at the API layer) from the earlier build brief. Don't start that until this frontend is done and you've actually looked at it running.