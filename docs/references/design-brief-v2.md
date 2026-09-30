# CIBIL Decoded — Website Brief v2 (Psychology-Ordered, Corrected Stack)

## Stack (final)

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router), TypeScript strict | SEO needs server rendering, not plain React |
| Styling | Tailwind CSS | Fast, consistent spacing/type scale |
| Components | shadcn/ui | Unstyled primitives you skin yourself — reads custom and trustworthy, not "generic template" like MUI does |
| Animation | Framer Motion, used sparingly | "Jitter" is a design tool for exporting Lottie/video, not a React library — drop it. Framer Motion is the actual code equivalent |
| Forms | React Hook Form + Zod | Type-safe validation matching backend |
| Backend | Spring Boot 3, MySQL, JPA, Flyway | Matches your existing skills, keeps you able to review the code yourself |

Rule for animation: motion only on things the user's action triggers — a card fading in as it enters view, a form success state, an accordion opening. No auto-playing decoration. Decorative motion reads as "marketing site," which undercuts trust for a finance product.

---

## Why this section order (the psychology, stated plainly)

A first-time visitor to a finance site runs an unconscious sequence: *is this real → do they get my problem → can I picture how this works → have other people like me used this → what's the catch → how do I start.* Sections below are ordered to answer those questions in that order. Answering them out of order — proof before explanation, CTA before trust — is why many lead-gen sites feel salesy even when the copy is accurate.

---

## Section-by-section spec

### 1. Header (persistent, not scroll content)
**Job:** signal "established business," not "landing page."
- Logo left, 3–4 nav anchors, one primary button, right-aligned.
- White background, 1px bottom border, not a shadow — shadows read as "floating card," a border reads as "structural."
- Shrinks slightly on scroll (padding 20px → 12px) so it never dominates. Framer Motion, one line, triggered by scroll position.

### 2. Hero — "is this real" (0–3 seconds)
**Job:** pass the instant credibility check.
- Left: headline (one sentence, plain language, no jargon) + one-line positioning + two buttons (primary solid, secondary outline).
- Right: the sample-report illustration with one flagged row — this single element does more trust work than any badge, because it shows *specific competence* instead of claiming it.
- No stock photography of people shaking hands or smiling at laptops — that imagery is now a scam-site signal to a credit-anxious visitor, not a trust signal.
- Generous white space. Cramped hero = cramped-feeling business.
- Motion: content fades/slides up 12px on load, once, 400ms. Nothing after that.

### 3. What we solve — "do they get my problem" (next screen)
**Job:** visitor sees their specific situation named, not a vague pitch.
- Three cards: Understand / Resolve / Finance, one sentence each, no fluff.
- Directly under it: the comparison table (bureaus vs score apps vs you). This answers "why not just use the free app" before they ask it — that objection kills conversion if left for later.
- Layout: cards in a row on desktop, stacked on mobile, equal height, icon + heading + one sentence. No paragraphs here — this section is scanned, not read.

### 4. The four bureaus — "are they knowledgeable" (supporting proof)
**Job:** demonstrate real domain knowledge in a neutral, non-salesy way.
- Four equal cards, one line each. This section should feel like a Wikipedia-clean explainer, not a pitch — that contrast is what builds credibility here.
- Small disclaimer line directly below: not affiliated with any of them. Placing the disclaimer here, right after using their names, is deliberate — it reads as honesty, not legal cover.

### 5. Process — "can I picture how this works" (mid-scroll, highest-value section)
**Job:** replace anxiety with a mental model. This is the section most lead-gen sites underbuild.
- Vertical stepper, 6 steps, connecting line, numbered circles.
- Each step: bold 3–5 word title + one sentence, nothing more. If someone has to read a paragraph to understand step 3, the section has failed its job.
- Motion: each step's number/line fills in as it scrolls into view — this is the one place scroll-triggered animation earns its cost, because it mirrors the "moving through a process" idea rather than decorating.

### 6. Problems we look at (scannable proof of scope)
**Job:** let the visitor self-identify ("that's my issue") without reading prose.
- Chip/pill layout, not paragraphs. Visitors scan this in under 2 seconds looking for their own situation.

### 7. Loan assistance
**Job:** secondary offer, placed after credit trust is built, not before.
- Same card pattern as section 3 for consistency. Partner logos as clearly-labeled placeholders until real ones exist — an empty section reads worse than an honest placeholder.

### 8. Social proof — reviews (only after the above)
**Job:** confirm "people like me did this and it worked," now that the visitor understands what "this" is.
- Simple cards: name/city, one-line problem, quote, photo if permitted.
- **Render nothing here if there are no real approved reviews yet** — an empty section is honest; a placeholder review is not, and a visitor who suspects one fake review discounts everything above it too.

### 9. FAQ — objection handling (right before the ask)
**Job:** answer the doubts that have accumulated by this point in the scroll.
- Accordion, one open at a time, shadcn Accordion component. Order questions from most-common doubt ("can you guarantee my score") to more specific ones.

### 10. Contact form — the ask
**Job:** convert, with friction only where it protects the visitor.
- Two-column on desktop, single column mobile, generous field spacing (not cramped — cramped forms feel like a data grab).
- Inline validation, not just on submit — reduces the "did it work" anxiety.
- Visible line near the top of the form stating what you'll never ask for (PAN, Aadhaar, OTP, passwords) — placed at the point of highest hesitation, right before they type personal details in.
- Success state should feel calm, not celebratory — confetti or "Yay!" undercuts a finance brand's tone.

### 11. Footer — the trust anchor
**Job:** what a skeptical visitor checks last, before deciding to trust the form above.
- Real contact details, grievance officer, registration details, legal links, full disclaimer.
- This section is plain-text dense on purpose — a footer that looks "designed" here can read as trying too hard; a footer that looks like a filing cabinet reads as legitimate.

---

## Visual language (applies across all sections)

- **Color:** ink `#0C2340`, blue `#1D5FAE`, teal `#0F8F84` as the only accent colors. No red anywhere except form error states — red near "credit" reads as danger/warning, which works against you.
- **Type:** Sora for headings, Source Sans 3 for body. One heading weight (700), one body weight (400), one bold-inline weight (600). More weights = less "clean."
- **Spacing:** generous section padding (64–80px vertical). Tight spacing is the single fastest way to make a finance site feel low-trust, because it reads as "cramming in content to look busy."
- **Icons:** line icons, not filled/glossy. Consistent stroke width.
- **Shadows:** avoid except on the sample-report card and form — everywhere else, use borders. Shadows everywhere = generic SaaS template look.
- **Corner radius:** one consistent value (8px) across every card, button and input. Mixed radii is a small detail that subconsciously reads as "not designed carefully."

---

## What I need from you before I build this as a working mockup

Pick one:
1. I write this as a static HTML/Tailwind mockup right now (fast, you can see it today, but you'd port it to Next.js/shadcn yourself or hand it to Copilot as the visual reference).
2. I write the actual Next.js + shadcn component structure (matches your real stack exactly, but is code files, not something you can preview instantly here).

Given your Copilot build plan already exists, option 1 as the visual/UX reference for Copilot to match is the faster path. Which do you want?