import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { FadeInUp } from "@/components/animations/FadeInUp";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { MagneticButton } from "@/components/animations/MagneticButton";
import CTA from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { serviceHighlights } from "@/lib/constants";
import { createMetadata, createServiceSchema, siteConfig } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return serviceHighlights.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = serviceHighlights.find((s) => s.slug === params.slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: `${service.title} | Services | ${siteConfig.title}`,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceService({ params }: Props) {
  const service = serviceHighlights.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  const serviceSchema = createServiceSchema({
      name: service.title,
      description: service.intro,
      providerName: siteConfig.name,
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-brand-radial opacity-30 mix-blend-screen" />
        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
             <div>
                <FadeInUp>
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pr-4 pl-1 py-1 text-sm text-brand-300 backdrop-blur-md">
                        <span className="bg-brand-900 border border-brand-500 rounded-full p-1.5"><Icon size={16} /></span>
                        {service.shortTitle}
                    </div>
                </FadeInUp>
                <FadeInUp delay={0.1}>
                    <h1 className="mt-8 font-heading text-5xl md:text-7xl uppercase tracking-wider text-white">
                        {service.title}
                    </h1>
                </FadeInUp>
                <FadeInUp delay={0.2}>
                    <p className="mt-6 max-w-2xl text-xl text-white/70 leading-relaxed">
                        {service.intro}
                    </p>
                </FadeInUp>
                
                <FadeInUp delay={0.3} className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton>
                    <Button href="/contact">
                      Get a Free Audit <ArrowRight size={16} />
                    </Button>
                  </MagneticButton>
                </FadeInUp>
             </div>

             {/* Right side stats/metrics card */}
             <FadeInUp delay={0.4} className="h-full">
                <Card className="h-full flex flex-col justify-center border-l-2 border-l-brand-500 bg-gradient-to-br from-white/[0.08] to-transparent p-10">
                   <p className="text-sm uppercase tracking-widest text-brand-300">Highlight Metric</p>
                   <p className="mt-2 text-4xl md:text-5xl font-heading text-white">{service.heroMetric}</p>
                   <p className="mt-4 text-white/60">Delivered through systematic execution and data-driven adjustments.</p>
                </Card>
             </FadeInUp>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/[0.02]">
         <div className="container">
            <div className="grid gap-16 md:grid-cols-2">
                <div>
                   <h2 className="font-heading text-4xl uppercase text-white mb-8">What We Deliver</h2>
                   <StaggerChildren className="space-y-4">
                     {service.bullets.map((bullet, idx) => (
                         <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                            <CheckCircle2 className="text-brand-400 shrink-0 mt-0.5" size={20} />
                            <p className="text-white/80">{bullet}</p>
                         </div>
                     ))}
                   </StaggerChildren>
                </div>

                <div>
                   <h2 className="font-heading text-4xl uppercase text-white mb-8">Expected Outcomes</h2>
                   <StaggerChildren className="space-y-4">
                     {service.outcomes.map((outcome, idx) => (
                         <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl border-l-2 border-brand-500 bg-gradient-to-r from-brand-900/40 to-transparent">
                            <span className="font-heading text-xl text-brand-300">0{idx + 1}</span>
                            <p className="text-white font-medium">{outcome}</p>
                         </div>
                     ))}
                   </StaggerChildren>
                </div>
            </div>
         </div>
      </section>

      <CTA />
    </>
  );
}
