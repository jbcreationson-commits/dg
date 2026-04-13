"use server";

import { Resend } from "resend";
import { z } from "zod";
import { contactSchema, type ContactFormData } from "../../lib/validations";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;



export async function submitContact(data: ContactFormData) {
  try {
    const parsedData = contactSchema.parse(data);

    if (resend) {
      await resend.emails.send({
        from: "VYES DigiGrow <onboarding@resend.dev>",
        to: "vyesdigigrow@gmail.com", // Adjust to your actual email
        subject: `New Inquiry from ${parsedData.name} - ${parsedData.serviceInterest}`,
        text: `
          Name: ${parsedData.name}
          Phone: ${parsedData.phone}
          Service Interest: ${parsedData.serviceInterest}
          
          Message:
          ${parsedData.message}
        `,
      });
    } else {
      console.log("================= CONTACT SUBMISSION =================");
      console.log("RESEND_API_KEY not found. Simulating email send:");
      console.log(parsedData);
      console.log("======================================================");
    }

    return { success: true };
  } catch (error) {
    let message = "Something went wrong. Please try again.";
    if (error instanceof Error) {
      message = error.message;
    }

    return { success: false, error: message };
  }
}
