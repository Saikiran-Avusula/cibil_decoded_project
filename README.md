# CIBIL Decoded

CIBIL Decoded is a professional web application built to provide guidance and solutions for credit-related issues. This repository contains the frontend application for the service.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## Project Structure

The project is structured following Next.js App Router conventions:

- `src/app/`: Contains the main pages (`page.tsx`), layout, and dedicated routes (`/privacy`, `/terms`, `/grievance`).
- `src/components/ui/`: Contains reusable, accessible UI primitives built with shadcn/ui.
- `src/components/sections/`: Contains the main sections of the homepage (Hero, Header, Footer, ContactForm, WhatWeSolve, Process, etc.).
- `src/lib/`: Utility functions, Zod validation schemas, and constants.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Guidelines

- **Component Design**: Components use Tailwind CSS variables for theming (ink, blue, teal, page background, section background, line, muted text, error).
- **Compliance**: The project enforces strict compliance to avoid specific banned phrases (e.g., "RBI regulated", "credit repair"). These are tested via Vitest on CI.
- **Accessibility**: Built with semantic HTML, proper ARIA labels, and keyboard navigability following WCAG guidelines.

## Deployment

This Next.js app can be easily deployed to [Vercel](https://vercel.com/) or any hosting platform that supports Node.js. 

To build for production:

```bash
npm run build
```

Then, start the production server:

```bash
npm run start
```
