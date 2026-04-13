"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { FadeInUp } from "@/components/animations/FadeInUp";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { serviceHighlights } from "@/lib/constants";

export default function ServicesGrid({ limit }: { limit?: number }) {
  const services = typeof limit === "number" ? serviceHighlights.slice(0, limit) : serviceHighlights;

  return (
    <section className="py-24">
      <div className="container space-y-12">
        <SectionTitle
          eyebrow="Services"
          title="Systems built to compound digital growth"
          description="From technical SEO to premium website builds, every service is designed to sharpen the signal between your brand and your next customer."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeInUp key={service.slug} delay={index * 0.08}>
                <motion.div whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}>
                  <Card className="group relative h-full overflow-hidden border-t-2 border-t-brand-400/70 bg-white/[0.04] transition">
                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(255,68,68,0.22),transparent_40%)]" />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-center justify-between">
                        <span className="rounded-2xl border border-white/10 bg-white/5 p-3 text-brand-200 transition group-hover:scale-110">
                          <Icon size={24} />
                        </span>
                        <span className="text-xs uppercase tracking-[0.28em] text-white/38">
                          {service.shortTitle}
                        </span>
                      </div>

                      <h3 className="mt-8 font-heading text-4xl uppercase leading-none text-white md:text-4xl">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-white/65">
                        {service.summary}
                      </p>

                      <ul className="mt-6 space-y-3 text-base text-white/62">
                        {service.bullets.map((bullet) => (
                          <li key={bullet}>• {bullet}</li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-8">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.26em] text-brand-100"
                        >
                          Explore service <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
