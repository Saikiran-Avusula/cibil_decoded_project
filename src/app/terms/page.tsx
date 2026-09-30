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
            [PLACEHOLDER: Please replace this text with your exact Terms of Service.]
          </p>
          <p>
            This is a generic placeholder for the Terms of Service page. As stated in the 
            project reference, the exact text will be provided by the business owner.
          </p>
        </div>
      </div>
    </div>
  );
}
