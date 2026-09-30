"use client";

import { motion } from "framer-motion";

const PROCESS_STEPS = [
  {
    title: "Tell us what happened",
    description: "Submit a short form explaining your credit issue or loan requirement.",
  },
  {
    title: "Initial call",
    description: "We reach out to understand your specific situation and gather details.",
  },
  {
    title: "Report review",
    description: "Our experts decode your credit report to pinpoint exact problems.",
  },
  {
    title: "Resolution guidance",
    description: "We provide step-by-step guidance on how to fix errors and raise disputes.",
  },
  {
    title: "Follow-up",
    description: "We track the progress of your disputes with the credit bureaus.",
  },
  {
    title: "Loan assessment",
    description: "Once your profile is ready, we match you with the right lending partner.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#F4F7FA] py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading text-ink">How it works</h2>
          <p className="text-muted-text md:text-lg">
            A simple, transparent process to get your credit back on track.
          </p>
        </div>

        <div className="relative border-l-2 border-line ml-4 md:ml-8">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={index}
              className="mb-10 last:mb-0 pl-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* The numbered circle */}
              <motion.div
                className="absolute -left-[17px] top-0 w-8 h-8 rounded-lg bg-[#004AAD] text-white flex items-center justify-center text-sm font-bold"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
              >
                {index + 1}
              </motion.div>

              <div className="pt-1">
                <h3 className="text-xl font-heading text-ink mb-2">{step.title}</h3>
                <p className="text-muted-text">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

