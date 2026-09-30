export function Problems() {
  const problems = [
    "Late Payments",
    "Default / Written-off",
    "Settlement Flags",
    "Multiple Hard Inquiries",
    "Identity Theft",
    "Incorrect Balances",
    "Closed Accounts Marked Active",
    "Overdue Amounts",
  ];

  return (
    <section id="problems" className="bg-white py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading text-ink">Problems we look at</h2>
          <p className="text-muted-text md:text-lg">
            Common credit report issues we help you identify and resolve.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {problems.map((problem) => (
            <span
              key={problem}
              className="inline-flex items-center rounded-lg bg-[#F4F7FA] border border-line px-4 py-2 text-sm font-medium text-ink"
            >
              {problem}
            </span>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs text-muted-text">
            Disclaimer: We can only help dispute inaccurate entries and identity fraud. We cannot remove accurate, verifiable information from your report.
          </p>
        </div>
      </div>
    </section>
  );
}

