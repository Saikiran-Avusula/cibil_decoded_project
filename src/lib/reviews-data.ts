export interface Review {
  id: string;
  name: string;
  city: string;
  problem: string;
  quote: string;
  photoUrl?: string;
  category?: string;
}

export const ALL_REVIEWS: Review[] = [
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
  },
];
