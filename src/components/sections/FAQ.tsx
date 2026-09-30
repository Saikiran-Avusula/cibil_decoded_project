import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Can you directly change my CIBIL score or remove defaults?",
    answer: "No. We cannot directly alter your score or remove accurate, verifiable defaults from your report. What we do is help you identify inaccuracies, outdated information, or identity fraud, and guide you through the official dispute process to get those errors corrected.",
  },
  {
    question: "How long does it take to see changes on my credit report?",
    answer: "Once a dispute is raised, credit bureaus typically take 30 to 45 days to investigate and resolve the issue. The exact timeline depends on how quickly the bank or lending institution responds to the bureau's query.",
  },
  {
    question: "Are you affiliated with TransUnion CIBIL or other credit bureaus?",
    answer: "No. CIBIL Decoded is an independent credit consultancy. We are not affiliated with, endorsed by, or connected to TransUnion CIBIL, Experian, Equifax, or CRIF High Mark. We work strictly on your behalf.",
  },
  {
    question: "Do you guarantee loan approval after I use your service?",
    answer: "We do not guarantee loan approvals. Lending decisions are made entirely by the banks and financial institutions based on their own criteria. However, resolving inaccuracies and having a clean credit profile significantly improves your chances of approval.",
  },
  {
    question: "Is my personal data safe with you?",
    answer: "Absolutely! Your privacy and data security are our top priorities. We never request sensitive information such as PAN cards, Aadhaar details, bank passwords, or OTPs—on our website without your explicit consent and a verified use case."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading text-ink">Frequently asked questions</h2>
          <p className="text-muted-text md:text-lg">
            Clear answers to help you understand our services and limitations.
          </p>
        </div>

        <Accordion className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-heading text-ink hover:text-[#004AAD] text-base md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-text text-sm md:text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

