import Image from "next/image";

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

  const lenders = [
    { name: "Aadhar Housing", file: "aadhar.png" },
    { name: "Bajaj Finserv", file: "bajaj.png" },
    { name: "Canara Bank", file: "canara.png" },
    { name: "HDFC Bank", file: "hdfc.png" },
    { name: "ICICI Bank", file: "icici.png" },
    { name: "Muthoot Finance", file: "muthoot.png" },
    { name: "Piramal Capital", file: "piramal.png" },
    { name: "State Bank of India", file: "sbi.png" },
    { isText: true, name: "Many More" }
  ];

  return (
    <section id="loans" className="bg-[#F4F7FA] py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 px-4 sm:px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading text-[#0A2540]">Loan assistance</h2>
          <p className="text-muted-text md:text-lg">
            Once your credit is healthy, we connect you with the right lenders to match your requirements.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {loanCategories.map((loan) => (
            <span
              key={loan}
              className="inline-flex items-center rounded-lg bg-white border border-line px-4 py-2 text-sm font-medium text-ink shadow-sm"
            >
              {loan}
            </span>
          ))}
        </div>
      </div>

      {/* Edge-to-edge Marquee section */}
      <div className="pt-4 w-full">
        <p className="text-center text-sm font-semibold text-muted-text mb-8 uppercase tracking-wider">Our Lending Partners</p>
        
        <div className="relative w-full flex py-4">
          {/* Edge gradients fading to the section background (#F4F7FA) */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#F4F7FA] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#F4F7FA] to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling track */}
          <div className="flex shrink-0 w-max animate-marquee pause-on-hover items-center">
            {[...lenders, ...lenders].map((item, i) => {
              if (item.isText) {
                return (
                  <div key={i} className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-12 md:h-16">
                    <div className="bg-white border border-[#0A2540]/10 text-[#0A2540] px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap shadow-sm">
                      Many More + Leading NBFCs
                    </div>
                  </div>
                );
              }
              return (
                <div key={i} className="flex-shrink-0 mx-8 md:mx-12 w-28 md:w-40 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 mix-blend-multiply transition-all duration-300 h-12 md:h-16">
                  <Image
                    src={`/lenders/${item.file}`}
                    alt={item.name}
                    width={160}
                    height={80}
                    className="object-contain max-h-full w-auto"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

