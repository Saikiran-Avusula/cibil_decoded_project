"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/schemas";
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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      city: "",
      problemType: "",
      contactMethod: "",
      contactTime: "",
      description: "",
      consent: false,
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Hidden honeypot check
    if (data.honeypot) {
      return;
    }

    console.log("Validated Form Payload:", data);
    // TODO: replace with real API call in Phase 8+
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSuccess(true);
    form.reset();
  };

  return (
    <section id="contact" className="bg-[#F4F7FA] py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-ink">Get your credit issue reviewed</h2>
          <p className="text-muted-text md:text-lg max-w-2xl mx-auto">
            Tell us a bit about your situation, and our specialists will reach out to guide you.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-line p-6 md:p-10 shadow-sm">
          {isSuccess ? (
            <div className="text-center py-12">
              <h3 className="font-heading text-xl text-ink mb-2">Received.</h3>
              <p className="text-muted-text">
                We&apos;ll contact you by your preferred method shortly.
              </p>
              <Button
                variant="outline"
                className="mt-6 border-[#004AAD] text-[#004AAD]"
                onClick={() => setIsSuccess(false)}
              >
                Submit another request
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} method="POST" className="space-y-8">
                {/* Security Note */}
                {/* <div className="bg-[#FFFBEB] border border-[#FCD34D] p-4 rounded-lg text-sm text-[#92400E] font-medium text-center">
                  We never ask for your PAN, Aadhaar, bank details, passwords or OTP. Please don't enter them here.
                </div> */}

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-muted-text" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">Mobile Number</FormLabel>
                        <FormControl>
                          <Input placeholder="10-digit number" type="tel" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-muted-text" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">Email Address (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-muted-text" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">City</FormLabel>
                        <FormControl>
                          <Input placeholder="Hyderabad" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-muted-text" />
                      </FormItem>
                    )}
                  />
                  <div className="md:col-span-2">
                    <FormField
                      control={form.control}
                    name="problemType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">Primary Issue</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-line focus:ring-[#004AAD]">
                              <SelectValue placeholder="Select an issue" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="score_drop">Unexplained Score Drop</SelectItem>
                            <SelectItem value="late_payment">Incorrect Late Payment</SelectItem>
                            <SelectItem value="settlement">Settlement/Default Status</SelectItem>
                            <SelectItem value="identity_theft">Identity Theft / Fraud</SelectItem>
                            <SelectItem value="loan_assistance">Looking for a Loan</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs text-muted-text" />
                      </FormItem>
                    )}
                  />
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:col-span-2">
                    <FormField
                      control={form.control}
                      name="contactMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-ink">Contact Method</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-line focus:ring-[#004AAD]">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="phone">Phone Call</SelectItem>
                              <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs text-muted-text" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contactTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-ink">Best Time</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-line focus:ring-[#004AAD]">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                              <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs text-muted-text" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ink">Short Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe what happened..."
                          className="resize-none border-line focus-visible:ring-[#004AAD]"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-muted-text" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border border-line p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-[#004AAD] data-[state=checked]:text-white border-[#004AAD]"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        
                        <FormLabel className="text-[12px] text-muted-text leading-snug cursor-pointer select-none font-normal">
                          <strong className="text-ink font-semibold">I agree:</strong>We never request sensitive data without your explicit approval. Read our{" "}
                          <a href="/privacy" className="text-[#004AAD] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-1 rounded-sm" target="_blank" rel="noopener noreferrer">Privacy Policy</a>{" "}
                          and{" "}
                          <a href="/terms" className="text-[#004AAD] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-1 rounded-sm" target="_blank" rel="noopener noreferrer">Terms of Service</a>.
                        </FormLabel>
                        <FormMessage className="text-xs text-muted-text" />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Honeypot field - hidden from users but catches bots */}
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

                {/* Global Error Summary (if any fields have errors) */}
                {Object.keys(form.formState.errors).length > 0 && (
                  <div className="p-3 bg-[#FEF2F2] border border-[#B42318]/20 rounded-lg text-sm text-[#B42318] font-medium">
                    Please correct the highlighted fields above before submitting.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full md:w-auto px-8"
                  style={{ background: "linear-gradient(90deg, #5DE0E6, #004AAD)", color: "#fff" }}
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Submit request"}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}




