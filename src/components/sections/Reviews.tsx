"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Review {
  id: string;
  name: string;
  city: string;
  problem: string;
  quote: string;
  photoUrl?: string;
  category?: string;
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.quote.length > 150;

  return (
    <div className="w-72 sm:w-80 flex-shrink-0 bg-white rounded-xl border border-line flex flex-col justify-between overflow-hidden">
      
      {/* Body section */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Issue tag */}
        <span className="self-start text-xs font-semibold text-[#004AAD] bg-[#E6F8F9] px-2.5 py-1 rounded-full leading-none">
          {review.problem}
        </span>

        {/* Quote — clamped to 3 lines */}
        <div>
          <blockquote className={`text-ink text-sm italic leading-relaxed ${!expanded ? "line-clamp-3" : ""}`}>
            &ldquo;{review.quote}&rdquo;
          </blockquote>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1 text-xs font-semibold text-[#004AAD] hover:underline focus-visible:outline-none"
            >
              {expanded ? "Show less ↑" : "Read more ↓"}
            </button>
          )}
        </div>
      </div>

      {/* Author — always pinned at bottom */}
      <div className="px-5 py-3 border-t border-line flex items-center gap-3">
        {review.photoUrl ? (
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-[#F4F7FA]">
            <Image src={review.photoUrl} alt={review.name} width={32} height={32} className="object-cover" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-[#E6F8F9] flex items-center justify-center flex-shrink-0">
            <span className="text-[#004AAD] font-bold text-sm">{review.name.charAt(0)}</span>
          </div>
        )}
        <div className="min-w-0">
          <p className="font-heading text-sm text-ink leading-tight truncate">{review.name}</p>
          <p className="text-xs text-muted-text truncate">{review.city}</p>
        </div>
      </div>
    </div>
  );
}

export function Reviews({ reviews }: { reviews: Review[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section id="reviews" className="bg-[#F4F7FA] py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading text-ink">What our clients say</h2>
            <p className="text-muted-text md:text-lg">
              Real stories from people we&apos;ve helped navigate the credit system.
            </p>
          </div>
          
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex gap-2">
              <button 
                onClick={() => handleScroll('left')}
                className="p-2.5 rounded-full bg-white border border-line text-[#004AAD] hover:bg-[#F4F7FA] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD]"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleScroll('right')}
                className="p-2.5 rounded-full bg-white border border-line text-[#004AAD] hover:bg-[#F4F7FA] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD]"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link 
              href="/client-success-stories"
              className="text-sm font-semibold text-[#004AAD] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] rounded-sm whitespace-nowrap"
            >
              View all reviews &rarr;
            </Link>
          </div>
        </div>

        <div className="relative w-full overflow-hidden -mx-4 sm:mx-0 px-4 sm:px-0">
          <div 
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-3"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

