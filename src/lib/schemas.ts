import * as z from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Must be a valid 10-digit Indian mobile number."),
  email: z.string().email("Please enter a valid email address.").or(z.literal("")),
  city: z.string().min(2, "City must be at least 2 characters."),
  problemType: z.string().min(1, "Please select a problem type."),
  contactMethod: z.string().min(1, "Please select a preferred contact method."),
  contactTime: z.string().min(1, "Please select a preferred time."),
  description: z.string().max(800, "Description must be under 800 characters.").optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms.",
  }),
  honeypot: z.string().max(0, "Invalid submission").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
