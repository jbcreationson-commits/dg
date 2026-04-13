import { z } from "zod";

// Validation schema for the contact form
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceInterest: z.string().min(1, "Please select what you are interested in"),
  message: z.string().min(10, "Please briefly describe your goal"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
