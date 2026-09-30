"use client";

import React, { useRef } from "react";
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading text-ink">What our clients say</h2>
            <p className="text-muted-text md:text-lg">
              Real stories from people we&apos;ve helped navigate the credit system.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button 
                onClick={() => handleScroll('left')}
                className="p-2 rounded-full bg-white border border-line text-[#004AAD] hover:bg-[#F4F7FA] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD]"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleScroll('right')}
                className="p-2 rounded-full bg-white border border-line text-[#004AAD] hover:bg-[#F4F7FA] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD]"
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

        <div className="relative w-full overflow-hidden py-4 -mx-4 sm:mx-0 px-4 sm:px-0">
          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Render styling to hide webkit scrollbar in globals.css or inline */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {reviews.map((review, index) => (
              <div 
                key={`${review.id}-${index}`} 
                className="min-w-[300px] md:min-w-[350px] bg-white p-6 rounded-lg border border-line flex flex-col gap-4 flex-shrink-0"
              >
                <p className="text-sm font-medium text-[#004AAD] mb-2">{review.problem}</p>
                <blockquote className="text-ink text-sm italic leading-relaxed flex-1 whitespace-normal">
                  &quot;{review.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-line">
                  {review.photoUrl ? (
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-[#F4F7FA]">
                      <Image
                        src={review.photoUrl}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-[#E6F8F9] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#004AAD] font-semibold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-heading text-sm text-ink">{review.name}</p>
                    <p className="text-xs text-muted-text">{review.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
