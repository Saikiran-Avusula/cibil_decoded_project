import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-page-bg py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white border border-line rounded-lg p-6 sm:p-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-semibold text-blue hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>
        <h1 className="text-3xl font-sora font-bold text-ink mb-6">Terms of Service</h1>
        <div className="prose prose-slate max-w-none text-muted-text space-y-4">
          <p>
            CIBIL Decoded helps you understand your credit report, identify potential discrepancies, and navigate the correction and dispute process. We also connect customers with banks, NBFCs and lending partners. We are not a credit bureau, not a lender, and not affiliated with TransUnion CIBIL, Experian, Equifax, CRIF High Mark or the RBI.
          </p>
          <p>
            We do not guarantee any change to your credit score, removal of any entry, or loan approval. Only the lender that reported the data can correct it. Loan approval, amount and terms are decided by each lender, not by us.
          </p>
          <p>
            You agree to give us accurate information, log into your own accounts yourself, and never share passwords or OTPs with us. Our fees, if any, are agreed in writing before work starts.
          </p>
          <p>
            These terms are governed by the laws of India. Courts at Hyderabad, Telangana have jurisdiction.
          </p>
          <p className="pt-4 text-sm font-semibold">Last updated: October 2, 2026</p>
        </div>
      </div>
    </div>
  );
}
