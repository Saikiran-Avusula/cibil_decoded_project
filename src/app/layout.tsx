import type { Metadata } from "next";
import { Sora, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  // TODO: replace with the production domain once known
  metadataBase: new URL("https://cibildecoded.in"),
  title: "CIBIL Decoded — Know your credit, own your story",
  description:
    "Credit-report guidance and loan-assistance service in Hyderabad. We help you understand your credit report, identify discrepancies, and navigate disputes.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "CIBIL Decoded",
    description:
      "Know your credit. Own your story. Credit-report guidance and loan assistance — Hyderabad.",
    images: [{ url: "/logo.png", width: 1080, height: 1080, alt: "CIBIL Decoded logo" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${sourceSans.variable}`}>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "CIBIL Decoded",
              "description": "Credit-report guidance and loan-assistance service.",
              "url": "https://cibildecoded.in",
              "logo": "https://cibildecoded.in/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "[Placeholder Address Line 1]",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500001",
                "addressCountry": "IN"
              },
              "telephone": "[Placeholder Phone Number]",
              "priceRange": "$$"
            })
          }}
        />
      </body>
    </html>
  );
}
