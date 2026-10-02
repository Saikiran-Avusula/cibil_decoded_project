"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required."),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Must be a valid 10-digit Indian mobile number."),
  email: z.string().email("Please enter a valid email address."),
  city: z.string().min(2, "City is required."),
  dateTime: z.string().min(1, "Please select a date and time."),
  topic: z.string().min(1, "Please select a topic."),
  description: z.string().optional(),
  honeypot: z.string().max(0).optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookMeetingPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      dateTime: "",
      topic: "",
      description: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    if (data.honeypot) return;

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formType: "booking",
            ...data,
            submittedAt: new Date().toISOString(),
          }),
        });
      }
    } catch (error) {
      console.error("Booking error:", error);
    }
    
    setIsSuccess(true);
    form.reset();
  };

  return (
    <>
      <Header />
      <main className="pt-[70px] min-h-screen bg-[#F4F7FA] flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-xl w-full bg-white rounded-lg border border-line p-8 md:p-12 shadow-sm">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-3xl font-heading text-[#0A2540]">Book a Consultation</h1>
            <p className="text-muted-text">
              Schedule a dedicated time with our credit specialists to review your situation.
            </p>
          </div>

          {isSuccess ? (
            <div className="text-center py-12">
              <h3 className="font-heading text-xl text-[#0A2540] mb-2">Request Received</h3>
              <p className="text-muted-text">
                Your consultation request has been sent. We&apos;ll send a confirmation email with meeting details shortly.
              </p>
              <Button
                variant="outline"
                className="mt-6 border-[#004AAD] text-[#004AAD]"
                onClick={() => setIsSuccess(false)}
              >
                Book another meeting
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A2540]">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A2540]">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="10-digit number" type="tel" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A2540]">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A2540]">City</FormLabel>
                      <FormControl>
                        <Input placeholder="Hyderabad" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="dateTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A2540]">Preferred Date & Time</FormLabel>
                        <FormControl>
                          <Input type="datetime-local" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A2540]">Topic</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-line focus:ring-[#004AAD]">
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="credit_report_review">Credit Report Review</SelectItem>
                            <SelectItem value="dispute_guidance">Dispute Guidance</SelectItem>
                            <SelectItem value="loan_assistance">Loan Assistance</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A2540]">Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Briefly describe what happened..."
                          className="resize-none border-line focus-visible:ring-[#004AAD]"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="honeypot"
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormControl>
                        <Input tabIndex={-1} autoComplete="off" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-[#004AAD] hover:bg-[#003882] text-white"
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Schedule Meeting"}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
