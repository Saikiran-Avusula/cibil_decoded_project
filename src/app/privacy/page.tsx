import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-page-bg py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white border border-line rounded-lg p-6 sm:p-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-semibold text-blue hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>
        <h1 className="text-3xl font-sora font-bold text-ink mb-6">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-muted-text space-y-4">
          <section>
            <h2 className="text-xl font-sora font-semibold text-ink mt-6 mb-2">Who we are</h2>
            <p>This website is run by Saikiran Avusula, trading as CIBIL Decoded, based in Hyderabad, Telangana.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-sora font-semibold text-ink mt-6 mb-2">What we collect</h2>
            <p>From the enquiry form: name, mobile number, email, city, the type of help needed, preferred contact method and time, and your description. Later, only with your written consent, we may collect credit report details needed for your case.</p>
          </section>

          <section>
            <h2 className="text-xl font-sora font-semibold text-ink mt-6 mb-2">Data Security Notice</h2>
            <p>We prioritize your absolute privacy. Sensitive government or financial identifiers (such as PAN cards, Aadhaar details, bank passwords, or OTPs) are never requested, stored, or scraped without your explicit approval and a verified use case.</p>
          </section>

          <section>
            <h2 className="text-xl font-sora font-semibold text-ink mt-6 mb-2">Why we use your data</h2>
            <p>To contact you about your enquiry, review your credit report issue, and — only if you ask — assess loan options and share relevant details with lending partners.</p>
          </section>

          <section>
            <h2 className="text-xl font-sora font-semibold text-ink mt-6 mb-2">Storage</h2>
            <p>Your enquiry is stored in a secured Google Sheet accessible only to Saikiran Avusula / CIBIL Decoded. We do not sell your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-sora font-semibold text-ink mt-6 mb-2">Your rights</h2>
            <p>You can ask us to show, correct or delete your data, or withdraw consent, by writing to cibildecoded@gmail.com.</p>
          </section>

          <section>
            <h2 className="text-xl font-sora font-semibold text-ink mt-6 mb-2">Retention</h2>
            <p>We keep enquiry data for up to 6 months if no service is provided, and for the duration of any active case plus 1 year after it closes.</p>
          </section>

          <p className="pt-4 text-sm font-semibold">Last updated: October 2, 2026</p>
        </div>
      </div>
    </div>
  );
}
