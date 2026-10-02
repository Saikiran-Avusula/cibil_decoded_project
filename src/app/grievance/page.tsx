import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GrievancePage() {
  return (
    <div className="min-h-screen bg-page-bg py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white border border-line rounded-lg p-6 sm:p-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-semibold text-blue hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>
        <h1 className="text-3xl font-sora font-bold text-ink mb-6">Grievance Redressal</h1>
        <div className="prose prose-slate max-w-none text-muted-text space-y-4">
          <p>If you&apos;re unhappy with our service, write to:</p>
          <ul className="list-none pl-0 space-y-2 font-medium text-ink">
            <li>Grievance officer: Saikiran Avusula</li>
            <li>Email: cibildecoded@gmail.com</li>
            <li>Phone: [Please insert your real phone number here]</li>
          </ul>
          <p>
            We acknowledge complaints within 2 working days and aim to resolve within 15 days.
          </p>
          <p>
            For complaints about a bank, NBFC or bureau, use their own grievance process first, then the RBI Integrated Ombudsman Scheme at <a href="https://cms.rbi.org.in" target="_blank" rel="noreferrer" className="text-[#004AAD] hover:underline">cms.rbi.org.in</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
