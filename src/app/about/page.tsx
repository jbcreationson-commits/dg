import { Metadata } from "next";
import { Target, Eye, Heart } from "lucide-react";

import { FadeInUp } from "@/components/animations/FadeInUp";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import CTA from "@/components/sections/CTA";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { aboutTimeline } from "@/lib/constants";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: `About Us | ${siteConfig.title}`,
  description:
    "Learn more about VYES DigiGrow — our story, mission, team, and what makes a fresh agency the right choice for ambitious brands ready to grow.",
  path: "/about",
});

const missionVisionValues = [
  {
    title: "Mission",
    description:
      "To deliver sharp brand positioning and performance marketing that compound real revenue — without the bloat, politics, or template-thinking of larger agencies.",
    icon: Target,
  },
  {
    title: "Vision",
    description:
      "To become the premium performance branding agency that proves you don't have to choose between aesthetics and attribution — you can have both.",
    icon: Eye,
  },
  {
    title: "Values",
    description:
      "Radical honesty, fearless strategy, transparent reporting, and always putting the brand's true identity first — even when the easier path is to copy a template.",
    icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-brand-radial opacity-50" />
        <div className="container relative z-10">
          <SectionTitle
            eyebrow="Our Story"
            title="We build systems for growth"
            description="VYES DigiGrow sits in the gap between brand studios that ignore performance and performance shops that flatten every brand into the same lookalike funnel."
          />

          <div className="mt-20">
            <StaggerChildren className="space-y-12 border-l border-white/10 pl-8 ml-4 md:ml-8 relative">
              {aboutTimeline.map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border border-brand-500 bg-brand-900 shadow-[0_0_10px_rgba(204,0,0,0.5)]" />
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-300">
                    {item.year}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-white/70 max-w-2xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/[0.02]">
        <div className="container">
          <SectionTitle
            eyebrow="Foundation"
            title="Mission, Vision & Values"
            description="The core tenets that guide our strategies, influence our creative, and drive our execution — from the first brief to the final report."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {missionVisionValues.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeInUp key={item.title} delay={index * 0.1}>
                  <Card className="h-full border-t border-brand-500/30">
                    <span className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-brand-200">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-6 font-heading text-3xl uppercase leading-none text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/65">
                      {item.description}
                    </p>
                  </Card>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>



      <CTA />
    </>
  );
}
