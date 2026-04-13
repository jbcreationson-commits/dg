"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { ParticlesBg } from "@/components/animations/ParticlesBg";

const termsGroups = [
  {
    title: "Agreement to Terms",
    content: "By accessing or using the services provided by VYES DigiGrow (\"the Agency\"), you agree to be bound by these Terms and Conditions. These terms apply to all clients, visitors, and others who access or use our services. Your continued use of the site signifies your formal acceptance of any subsequent updates."
  },
  {
    title: "Scope of Services",
    content: "VYES DigiGrow provides digital marketing services including but not limited to SEO, Performance Marketing (PPC), Social Media Management, Web Development, and Brand Design. The specific scope of work for each project will be defined in a separate Statement of Work (SOW) or Proposal. Any changes to the scope must be agreed upon in writing by both parties."
  },
  {
    title: "Performance and Results",
    content: "While we use industry best practices and proven strategies to drive growth, digital marketing performance is subject to external factors (search engine algorithm changes, market competition, etc.). Therefore, results are not guaranteed, and the Agency is not liable for fluctuations in digital visibility or traffic. We commit to transparency through regular reporting."
  },
  {
    title: "Payment Terms",
    content: "All services are invoiced according to the agreed schedule. Retainer-based services in India are typically invoiced on a monthly advance basis. Failure to clear invoices within 7 days of the due date may result in a temporary suspension of services. All payments are non-refundable once work has commenced."
  },
  {
    title: "Intellectual Property",
    content: "Upon full payment of all invoices, the Client owns the final deliverables. All tools, proprietary methodologies, and background code used by the Agency to deliver the services remain the property of VYES DigiGrow unless otherwise agreed in writing. The Agency reserves the right to showcase completed work in its portfolio unless a non-disclosure agreement (NDA) is in place."
  },
  {
    title: "Confidentiality",
    content: "Both parties agree to treat all business-sensitive data, strategies, and internal information as strictly confidential. This obligation extends beyond the duration of the engagement. We implement strict data security protocols to ensure your brand's competitive advantage remains protected."
  },
  {
    title: "Governing Law",
    content: "These terms are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Tiruchirappalli, Tamil Nadu."
  }
];

export default function TermsPage() {
  return (
    <main className="relative min-h-screen pt-40 pb-32 overflow-hidden bg-black">
      <ParticlesBg />
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-500/5 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-brand-500" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-400">Legal Excellence</span>
            </div>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter text-white mb-12">
              Terms & <br />
              <span className="bg-brand-gradient bg-clip-text text-transparent">Conditions.</span>
            </h1>
            <p className="text-lg text-white/50 font-medium">
              Last updated: April 13, 2026 — These terms outline the rules and regulations for the use of VYES DigiGrow's Services.
            </p>
          </FadeInUp>

          <div className="mt-24 grid gap-8">
            {termsGroups.map((section, idx) => (
              <FadeInUp key={section.title} delay={idx * 0.1}>
                <div className="group relative p-8 md:p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-brand-500/50 transition-all duration-500">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                      <span className="text-brand-400 font-heading text-xl">{idx + 1}</span>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-2xl font-heading uppercase text-white tracking-wide group-hover:text-brand-400 transition-colors">
                        {section.title}
                      </h2>
                      <p className="text-lg text-white/60 leading-relaxed font-light">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.8} className="mt-20 p-10 rounded-[2.5rem] border border-dashed border-white/20 text-center">
            <h3 className="text-xl text-white mb-4 uppercase font-heading">Have Questions?</h3>
            <p className="text-white/50 mb-8">
              If you have any questions about these Terms, please contact our support team.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-brand-500 hover:text-white transition-all duration-300"
            >
              Contact Support
            </a>
          </FadeInUp>
        </div>
      </div>
    </main>
  );
}
