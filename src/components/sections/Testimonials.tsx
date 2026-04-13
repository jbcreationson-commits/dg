"use client";

import { Zap, Shield, Users } from "lucide-react";

import { FadeInUp } from "@/components/animations/FadeInUp";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

const whyFreshWins = [
  {
    icon: Zap,
    title: "No legacy baggage",
    description:
      "Established agencies carry years of outdated templates and internal politics. We approach every brief with fresh eyes, zero assumptions, and full senior focus on your brand.",
  },
  {
    icon: Shield,
    title: "Pilot pricing — lower risk",
    description:
      "Because we're building our track record, you get founder-led execution at rates far below what a seasoned agency charges — and we're deeply motivated to over-deliver on every brief.",
  },
  {
    icon: Users,
    title: "Founders do the work",
    description:
      "Every strategy call, every creative decision, and every performance report comes directly from our core team — never handed off to an account manager who joined last month.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container space-y-12">
        <SectionTitle
          eyebrow="Why Work With Us"
          title="Fresh energy beats legacy overhead"
          description="Being new isn't a weakness — it's a structural advantage for brands that want genuine attention, not an overloaded account team managing 30 clients at once."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {whyFreshWins.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeInUp key={item.title} delay={index * 0.08}>
                <Card className="h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] group hover:border-brand-500/40 transition-colors duration-300">
                  <span className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-brand-200 group-hover:bg-brand-500/10 group-hover:border-brand-500/30 transition-colors duration-300">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-6 font-heading text-2xl uppercase leading-none text-white">
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
  );
}
