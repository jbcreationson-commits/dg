"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { ArrowRight, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { submitContact } from "../actions/contact";
import { contactSchema, type ContactFormData } from "../../lib/validations";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { Button } from "@/components/ui/Button";
import { contactDetails, serviceInterestOptions } from "@/lib/constants";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorObj, setErrorObj] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorObj(null);

    const result = await submitContact(data);

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#CC0000", "#FF4444", "#FFFFFF"],
      });
    } else {
      setErrorObj(result.error || "An error occurred");
    }
  };

  return (
    <section className="relative min-h-screen pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-brand-radial opacity-30 mix-blend-screen" />
      <div className="container relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          
          {/* Left Column - Brand Info & Map */}
          <div>
             <FadeInUp>
                 <h1 className="font-heading text-6xl md:text-7xl uppercase tracking-wider text-white leading-none">
                    Let's Build <br />
                    <span className="bg-brand-gradient bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(204,0,0,0.4)]">Something Great.</span>
                 </h1>
             </FadeInUp>
             <FadeInUp delay={0.1}>
                 <p className="mt-8 text-lg text-white/70 max-w-md">
                    Ready to scale? Drop us a line and let's discuss how we can engineer a growth system for your brand.
                 </p>
             </FadeInUp>

             <FadeInUp delay={0.2} className="mt-12 space-y-6">
                 <div className="flex items-start gap-4">
                     <span className="p-3 rounded-xl bg-white/5 border border-white/10 text-brand-400">
                         <Mail size={24} />
                     </span>
                     <div>
                         <p className="text-sm uppercase tracking-widest text-white/40 font-bold mb-1">Email</p>
                         <a href={`mailto:${contactDetails.email}`} className="text-lg text-white hover:text-brand-400 transition-colors uppercase font-medium">{contactDetails.email}</a>
                     </div>
                 </div>
                 <div className="flex items-start gap-4">
                     <span className="p-3 rounded-xl bg-white/5 border border-white/10 text-brand-400">
                         <Phone size={24} />
                     </span>
                     <div>
                         <p className="text-sm uppercase tracking-widest text-white/40 font-bold mb-1">Phone</p>
                         <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} className="text-lg text-white hover:text-brand-400 transition-colors uppercase font-medium">{contactDetails.phone}</a>
                     </div>
                 </div>
                 <div className="flex items-start gap-4">
                     <span className="p-3 rounded-xl bg-white/5 border border-white/10 text-brand-400">
                         <MapPin size={24} />
                     </span>
                     <div>
                         <p className="text-sm uppercase tracking-widest text-white/40 font-bold mb-1">HQ</p>
                         <p className="text-lg text-white">{contactDetails.address}</p>
                         <p className="text-white/50 mt-1">{contactDetails.hours}</p>
                     </div>
                 </div>
             </FadeInUp>

             {/* Map */}
             <FadeInUp delay={0.3} className="mt-12 w-full h-48 md:h-64 rounded-3xl overflow-hidden border border-white/10 relative">
                 <iframe 
                   src="https://maps.google.com/maps?q=AJS+Tower,+Kailash+Nagar,+Tiruchirappalli,+Tamil+Nadu+620019&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9)" }} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                 />
                 <div className="absolute inset-0 pointer-events-none mix-blend-color bg-brand-900 opacity-40"></div>
             </FadeInUp>
          </div>

          {/* Right Column - Form */}
          <FadeInUp delay={0.4} className="h-full">
             <div className="bg-canvas border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20" />
                
                <h2 className="text-3xl font-heading uppercase text-white mb-8">Start the Conversation</h2>

                <AnimatePresence mode="wait">
                    {isSuccess ? (
                        <motion.div 
                           key="success"
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="flex flex-col items-center justify-center py-20 text-center"
                        >
                           <div className="w-20 h-20 rounded-full bg-brand-500/20 flex items-center justify-center mb-6 border border-brand-500/50 text-brand-400">
                               <Send size={40} className="ml-1" />
                           </div>
                           <h3 className="text-3xl font-heading uppercase text-white mb-4">Request Sent!</h3>
                           <p className="text-lg text-white/70">
                              Thank you for reaching out. A growth strategist will connect with you within 24 hours.
                           </p>
                        </motion.div>
                    ) : (
                        <motion.form 
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onSubmit={handleSubmit(onSubmit)} 
                            className="space-y-6 relative z-10"
                        >
                            {/* Standard Fields */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                   <label className="text-xs font-bold uppercase tracking-widest text-white/50">Name</label>
                                   <input {...register("name")} className="w-full bg-white/5 border border-white/10 focus:border-brand-500 rounded-xl px-4 py-3 text-white placeholder-white/20 transition-colors" placeholder="e.g. Rahul Sharma" />
                                   {errors.name && <p className="text-brand-400 text-xs mt-1">{errors.name.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                               <label className="text-xs font-bold uppercase tracking-widest text-white/50">Phone</label>
                               <input type="tel" {...register("phone")} className="w-full bg-white/5 border border-white/10 focus:border-brand-500 rounded-xl px-4 py-3 text-white placeholder-white/20 transition-colors" placeholder="+91 91234 56789" />
                               {errors.phone && <p className="text-brand-400 text-xs mt-1">{errors.phone.message}</p>}
                            </div>

                            {/* Dropdown */}
                            <div className="space-y-2">
                               <label className="text-xs font-bold uppercase tracking-widest text-white/50">What are you looking for?</label>
                               <select {...register("serviceInterest")} className="w-full bg-white/5 border border-white/10 focus:border-brand-500 rounded-xl px-4 py-3 text-white appearance-none transition-colors">
                                  <option value="" className="bg-canvas text-white/50">Select a service...</option>
                                  {serviceInterestOptions.map(opt => (
                                     <option key={opt.value} value={opt.label} className="bg-canvas text-white">{opt.label}</option>
                                  ))}
                               </select>
                               {errors.serviceInterest && <p className="text-brand-400 text-xs mt-1">{errors.serviceInterest.message}</p>}
                            </div>


                            {/* Textarea */}
                            <div className="space-y-2">
                               <label className="text-xs font-bold uppercase tracking-widest text-white/50">How can we help?</label>
                               <textarea {...register("message")} rows={4} className="w-full bg-white/5 border border-white/10 focus:border-brand-500 rounded-xl px-4 py-3 text-white placeholder-white/20 transition-colors resize-y" placeholder="Tell us about your goals..." />
                               {errors.message && <p className="text-brand-400 text-xs mt-1">{errors.message.message}</p>}
                            </div>

                            {errorObj && (
                                <div className="p-4 bg-brand-500/10 border border-brand-500 rounded-xl text-brand-300 text-sm">
                                    {errorObj}
                                </div>
                            )}

                            {/* Submit */}
                            <div className="space-y-4">
                               <button 
                                  type="submit" 
                                  disabled={isSubmitting}
                                  className="w-full py-4 rounded-xl bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-brand-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                               >
                                  {isSubmitting ? (
                                     <><Loader2 className="animate-spin" size={20} /> Processing...</>
                                  ) : (
                                     <>Submit Inquiry <ArrowRight size={18} /></>
                                  )}
                               </button>
                               <p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
                                  We typically reply within <span className="text-brand-400">4 hours</span>
                                </p>
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
             </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
