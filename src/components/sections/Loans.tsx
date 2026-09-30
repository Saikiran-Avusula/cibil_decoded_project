export function Loans() {
  const loanCategories = [
    "Personal Loans",
    "Home Loans",
    "Business Loans",
    "Loan Against Property",
    "Car Loans",
    "Education Loans",
    "Credit Cards",
    "Balance Transfers",
  ];

  return (
    <section id="loans" className="bg-[#F4F7FA] py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading text-ink">Loan assistance</h2>
          <p className="text-muted-text md:text-lg">
            Once your credit is healthy, we connect you with the right lenders to match your requirements.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {loanCategories.map((loan) => (
            <span
              key={loan}
              className="inline-flex items-center rounded-lg bg-white border border-line px-4 py-2 text-sm font-medium text-ink"
            >
              {loan}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-transparent border-2 border-dashed border-[#A0B0C0] rounded-lg p-8 flex flex-col items-center justify-center min-h-[160px] text-center"
            >
              <div className="text-muted-text font-semibold mb-1">Lending Partner {i}</div>
              <div className="text-xs text-muted-text/70">(Placeholder logo)</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

