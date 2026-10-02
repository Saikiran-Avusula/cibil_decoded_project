import { Phone, MessageCircle, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Consultation() {
  return (
    <section id="consultation" className="bg-white py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading text-ink">Talk to a credit specialist</h2>
          <p className="text-muted-text md:text-lg">
            Get personalized advice and start resolving your credit issues today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Card */}
          <div className="p-6 rounded-lg border border-line flex flex-col items-center text-center gap-4 ">
            <div className="w-12 h-12 bg-[#F4F7FA] rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-[#004AAD]" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-ink">Phone call</h3>
              <p className="text-sm text-muted-text mt-1">Will be soon available </p>
            </div>
            <Button
              className="mt-2 w-full opacity-50 cursor-not-allowed"
              variant="outline"
              disabled
            >
              Coming soon
            </Button>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-lg border border-line flex flex-col items-center text-center gap-4 ">
            <div className="w-12 h-12 bg-[#F4F7FA] rounded-lg flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-[#004AAD]" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-ink">WhatsApp</h3>
              <p className="text-sm text-muted-text mt-1">Will be soon available</p>
            </div>
            <Button
              className="mt-2 w-full opacity-50 cursor-not-allowed"
              variant="outline"
              disabled
            >
              Coming soon
            </Button>
          </div>

          {/* Video Card */}
          <div className="p-6 rounded-lg border border-line flex flex-col items-center text-center gap-4 ">
            <div className="w-12 h-12 bg-[#F4F7FA] rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-[#004AAD]" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-ink">Video meeting</h3>
              <p className="text-sm text-muted-text mt-1">Detailed face-to-face review</p>
            </div>
            <Button
              className="mt-2 w-full border-[#004AAD] text-[#004AAD] hover:bg-[#F4F7FA]"
              variant="outline"
              nativeButton={false}
              render={<a href="/book" />}
            >
              Book a meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


