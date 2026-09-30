import { Search, ShieldAlert, IndianRupee } from "lucide-react";

export function WhatWeSolve() {
  return (
    <section id="what-we-solve" className="bg-[#F4F7FA] py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading text-ink">What we solve</h2>
          <p className="text-muted-text md:text-lg">
            How we help you navigate the credit system and get back on track.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-line flex flex-col gap-4">
            <Search className="w-6 h-6 text-[#004AAD]" />
            <h3 className="font-heading text-xl text-ink">Understand</h3>
            <p className="text-muted-text text-sm">We decode your credit report so you know exactly what is affecting your score.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-line flex flex-col gap-4">
            <ShieldAlert className="w-6 h-6 text-[#004AAD]" />
            <h3 className="font-heading text-xl text-ink">Resolve</h3>
            <p className="text-muted-text text-sm">We guide you through the dispute process to fix errors and inaccuracies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-line flex flex-col gap-4">
            <IndianRupee className="w-6 h-6 text-[#004AAD]" />
            <h3 className="font-heading text-xl text-ink">Finance</h3>
            <p className="text-muted-text text-sm">We connect you with the right lending partners when your profile is ready.</p>
          </div>
        </div>

        <div className="overflow-x-auto mt-12 bg-white rounded-lg border border-line">
          <table className="w-full text-sm text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-line">
                <th className="p-4 font-semibold text-ink bg-white">Feature</th>
                <th className="p-4 font-semibold text-ink bg-white">Credit bureaus</th>
                <th className="p-4 font-semibold text-ink bg-white">Score apps</th>
                <th className="p-4 font-semibold text-ink bg-[#E6F8F9]">CIBIL Decoded</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line">
                <td className="p-4 text-muted-text">Provide credit reports</td>
                <td className="p-4 text-muted-text">Yes</td>
                <td className="p-4 text-muted-text">Yes</td>
                <td className="p-4 text-ink font-medium bg-[#F0FBFC]">Yes, via detailed analysis</td>
              </tr>
              <tr className="border-b border-line">
                <td className="p-4 text-muted-text">Explain why a score dropped</td>
                <td className="p-4 text-muted-text">No</td>
                <td className="p-4 text-muted-text">Basic</td>
                <td className="p-4 text-ink font-medium bg-[#F0FBFC]">Yes, line by line</td>
              </tr>
              <tr className="border-b border-line">
                <td className="p-4 text-muted-text">Help resolve active disputes</td>
                <td className="p-4 text-muted-text">No</td>
                <td className="p-4 text-muted-text">No</td>
                <td className="p-4 text-ink font-medium bg-[#F0FBFC]">Yes, full guidance</td>
              </tr>
              <tr>
                <td className="p-4 text-muted-text">Connect to lenders</td>
                <td className="p-4 text-muted-text">No</td>
                <td className="p-4 text-muted-text">Ads</td>
                <td className="p-4 text-ink font-medium bg-[#F0FBFC]">Yes, curated matching</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

