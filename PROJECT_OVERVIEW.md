# CIBIL Decoded - Project Overview

## What is CIBIL Decoded?
CIBIL Decoded is a professional web-based service designed to help individuals understand, troubleshoot, and resolve issues with their credit reports (specifically CIBIL, Experian, Equifax, and CRIF High Mark), and to guide them in exploring loan options. It serves as an advisory and consultation platform rather than a direct loan provider or a "credit repair" scheme.

## Target Audience
Individuals facing unexpected loan rejections, struggling to understand their credit scores, or dealing with inaccurate/fraudulent entries on their credit reports. 

## Core Objectives & The User Journey (From Start to End)

The platform is designed to take the user from a state of confusion regarding their credit score to actionable resolution:

### 1. Education & Awareness
The project starts by educating the user. It explicitly clarifies that the service is a consultation body, not affiliated with official bureaus. It outlines what CIBIL Decoded does:
- **Understand**: Explains complex credit reports in simple terms.
- **Resolve**: Helps flag inaccuracies, delays, or fraud, and guides users on how to dispute them.
- **Finance**: Offers guidance on loan eligibility based on the user's real credit profile.

### 2. The 6-Step Process
The platform outlines a transparent, end-to-end process for the user to get their issues solved:
1. **Tell us what happened**: The user submits their issue via the contact form on the website.
2. **Initial call**: A credit specialist reaches out to understand the nuances of the issue.
3. **Report review**: The team analyzes the user's actual credit report to find anomalies.
4. **Resolution guidance**: The user receives a step-by-step action plan to fix errors.
5. **Follow-up**: Ongoing support until the issue is officially updated with the bureaus.
6. **Loan assessment**: Once the profile is healthy, the user is guided toward appropriate lending partners.

### 3. Lead Generation (Contact Form)
The primary conversion goal of the frontend application is the Contact Form. It gathers essential details (Name, Mobile, Email, City, Problem Type, Contact Preference) to connect the user with a specialist, explicitly without asking for highly sensitive information like PAN or Aadhaar upfront to build trust.

## Technical Implementation
- **Frontend Stack**: Built with modern web technologies: Next.js 15 (App Router), TypeScript, Tailwind CSS, and shadcn/ui.
- **Animations**: Minimal, professional scroll animations using Framer Motion.
- **Forms**: Robust form handling and validation managed via React Hook Form and Zod.
- **Compliance Guardrails**: The codebase includes strict automated checks (Vitest) to prevent the usage of misleading, banned phrases (like "RBI approved" or "guaranteed approval") to maintain regulatory compliance.

## Future Scope (The Backend)
While the current implementation covers the complete frontend and user journey, the project is structured to eventually integrate with a Spring Boot + MySQL backend. This future backend will handle secure lead storage, an admin dashboard for the team to manage follow-ups, and server-side validation.
