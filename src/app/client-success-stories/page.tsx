import React from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Client Success Stories | CIBIL Decoded",
  description: "Read authentic feedback from users who transformed their credit profiles with CIBIL Decoded in Telangana and Andhra Pradesh.",
};

const ALL_REVIEWS = [
  {
    id: "1",
    name: "Ramesh Kumar",
    city: "Hyderabad",
    problem: "Wrong active loan on report",
    category: "reports",
    quote: "I was rejected for a home loan because a closed two-wheeler loan was still showing active. The team guided me on exactly how to dispute it and my score bounced back.",
  },
  {
    id: "2",
    name: "Sneha Reddy",
    city: "Vijayawada",
    problem: "Identity mismatch",
    category: "reports",
    quote: "Someone else's default was showing up on my CIBIL due to a similar name. CIBIL Decoded helped me understand the process to get it removed completely.",
  },
  {
    id: "3",
    name: "Vikram Singh",
    city: "Vizag",
    problem: "Score improvement",
    category: "score-repair",
    quote: "I had no idea how credit utilization was tanking my score. Following their simple blueprint helped me gain 60 points in just 3 months.",
  },
  {
    id: "4",
    name: "Anjali Desai",
    city: "Secunderabad",
    problem: "Settlement status",
    category: "score-repair",
    quote: "I settled a card years ago and it was blocking my new car loan. The experts at CIBIL Decoded explained exactly what I needed to do to start rebuilding trust with lenders.",
  }
];

export default async function AllReviewsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;
  const currentFilter = params.filter || "all";

  const filteredReviews =
    currentFilter === "all"
      ? ALL_REVIEWS
      : ALL_REVIEWS.filter((r) => r.category === currentFilter);

  return (
    <>
      <Header />
      <main className="pt-[70px] min-h-screen bg-[#F4F7FA]">
        <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heading text-ink mb-4">Client Success Stories</h1>
            <p className="text-muted-text md:text-lg max-w-2xl mb-8">
              Read authentic feedback from users in Telangana and Andhra Pradesh who successfully transformed their credit profiles.
            </p>

            {/* Security / Privacy Warning Notice */}
            <div className="p-4 rounded-xl bg-[#E6F8F9] border border-[#004AAD]/20 text-xs md:text-sm text-muted-text flex items-start gap-3 shadow-sm max-w-3xl">
              <span className="text-[#004AAD] font-bold text-base leading-none">🔒</span>
              <p className="leading-relaxed">
                <strong className="text-ink font-medium">Data Security Notice:</strong> We prioritize your absolute privacy. Sensitive government or financial identifiers (such as PAN cards, Aadhaar details, bank passwords, or OTPs) are never requested, stored, or scraped without your explicit approval and a verified use case.
              </p>
            </div>
          </div>

          {/* Filter Tabs using standard anchor links for server-side simplicity */}
          <div className="flex flex-wrap gap-3 mb-10 border-b border-line pb-4">
            <a 
              href="/client-success-stories?filter=all" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] ${currentFilter === 'all' ? 'bg-[#004AAD] text-white' : 'bg-white text-ink border border-line hover:bg-gray-50'}`}
            >
              All
            </a>
            <a 
              href="/client-success-stories?filter=reports" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] ${currentFilter === 'reports' ? 'bg-[#004AAD] text-white' : 'bg-white text-ink border border-line hover:bg-gray-50'}`}
            >
              Report Analysis
            </a>
            <a 
              href="/client-success-stories?filter=score-repair" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] ${currentFilter === 'score-repair' ? 'bg-[#004AAD] text-white' : 'bg-white text-ink border border-line hover:bg-gray-50'}`}
            >
              Score Improvement
            </a>
          </div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-white border border-line rounded-lg p-6 flex flex-col gap-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#D97706]">
                    {'★★★★★'}
                  </div>
                  <span className="text-xs font-medium bg-[#E6F8F9] text-[#004AAD] px-2 py-1 rounded-full">
                    {review.problem}
                  </span>
                </div>
                
                <blockquote className="text-ink text-sm italic leading-relaxed flex-1">
                  &quot;{review.quote}&quot;
                </blockquote>
                
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-line">
                  <div className="w-10 h-10 rounded-lg bg-[#E6F8F9] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#004AAD] font-semibold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading text-sm text-ink">{review.name}</p>
                    <p className="text-xs text-muted-text">{review.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-20 text-muted-text">
              No reviews found for this category.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
