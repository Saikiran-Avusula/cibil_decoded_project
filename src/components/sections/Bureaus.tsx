export function Bureaus() {
  return (
    <section id="bureaus" className="bg-white py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading text-ink">The four credit bureaus</h2>
          <p className="text-muted-text md:text-lg">
            The official agencies that maintain your credit records in India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg border border-line">
            <h3 className="font-heading text-lg text-ink mb-2">TransUnion CIBIL</h3>
            <p className="text-muted-text text-sm">The most widely used credit information company in India.</p>
          </div>
          <div className="p-6 rounded-lg border border-line">
            <h3 className="font-heading text-lg text-ink mb-2">Experian</h3>
            <p className="text-muted-text text-sm">A global bureau providing detailed consumer credit scoring.</p>
          </div>
          <div className="p-6 rounded-lg border border-line">
            <h3 className="font-heading text-lg text-ink mb-2">Equifax</h3>
            <p className="text-muted-text text-sm">An international agency tracking credit history and trends.</p>
          </div>
          <div className="p-6 rounded-lg border border-line">
            <h3 className="font-heading text-lg text-ink mb-2">CRIF High Mark</h3>
            <p className="text-muted-text text-sm">Provides comprehensive credit information across sectors.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-muted-text">
            Disclaimer: Not affiliated with TransUnion CIBIL, Experian, Equifax, or CRIF High Mark.
          </p>
        </div>
      </div>
    </section>
  );
}

