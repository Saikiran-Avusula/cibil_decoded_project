import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80 py-12 px-4 sm:px-6 border-t border-line">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand blurb */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-lg px-6 py-3 inline-flex items-center justify-center self-start w-fit">
              <Image
                src="/logo-footer.png"
                alt="CIBIL Decoded"
                width={160}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Know your credit. Own your story. Credit-report guidance and loan-assistance service helping consumers navigate their financial journey.
            </p>
          </div>

          {/* Column 2: Contact Placeholders */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-sora font-semibold mb-2">Contact Us</h3>
            {/* <p className="text-sm">Phone: <a href="tel:+919876543210" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 rounded-sm">Will soon be available</a></p> */}
            <p className="text-sm">Email: <a href="mailto:support@cibildecoded.in" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 rounded-sm">cibildecoded@gmail.com</a></p>
            {/* <p className="text-sm">WhatsApp: <a href="https://wa.me/919876543210" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 rounded-sm">Will soon be available</a></p> */}
          </div>

          {/* Column 3: Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-sora font-semibold mb-2">Legal</h3>
            <Link href="/privacy" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 rounded-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 rounded-sm">Terms of Service</Link>
            <Link href="/grievance" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-2 rounded-sm">Grievance Redressal</Link>
          </div>

          {/* Column 4: Business Details */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-sora font-semibold mb-2">Business Details</h3>
            <p className="text-sm">CIBIL Decoded Services</p>
            <p className="text-sm leading-relaxed">
              {/* [Office Address Line 1] */}
              Kukatpally, Hyderabad, Telangana<br />
              India - 500072
            </p>
            {/* <p className="text-sm mt-2 text-white/60">CIN: [Placeholder CIN]</p> */}
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-4">
          <p className="text-xs text-center max-w-4xl leading-relaxed text-white/60">
            <strong>Disclaimer:</strong> CIBIL Decoded is an independent credit-report guidance and loan-assistance service. 
            We are <strong>not</strong> affiliated with TransUnion CIBIL, Experian, Equifax, or CRIF High Mark. 
            We are not a credit bureau and are not RBI-regulated. We do not provide loans directly, nor do we guarantee any specific 
            outcomes regarding your credit score or loan approval. All services are subject to our terms and conditions.
          </p>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} CIBIL Decoded. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

