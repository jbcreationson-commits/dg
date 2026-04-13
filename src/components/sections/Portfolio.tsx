"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { FadeInUp } from "@/components/animations/FadeInUp";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PortfolioSkeleton } from "@/components/ui/Skeletons";
import { methodologyCards } from "@/lib/constants";

export default function Portfolio({
  limit,
  enableFilters = false,
  isLoading = false,
}: {
  limit?: number;
  enableFilters?: boolean;
  isLoading?: boolean;
}) {
  const cards =
    typeof limit === "number" ? methodologyCards.slice(0, limit) : methodologyCards;

  return (
    <section className="py-24">
      <div className="container space-y-12">
        <SectionTitle
          eyebrow="Our Approach"
          title="Methodology you can count on"
          description="We may not have a long client list yet — but we have a disciplined process, modern tools, and the drive to over-deliver for every brand we partner with."
        />

        {/* Methodology Cards */}
        {isLoading ? (
          <PortfolioSkeleton count={limit || 4} />
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {cards.map((item, index) => (
              <FadeInUp key={item.step} delay={index * 0.08}>
                <Card className="h-full group hover:border-brand-500/40 transition-colors duration-300">
                  <div className="flex items-start gap-5">
                    <span className="font-heading text-4xl leading-none text-brand-500/20 group-hover:text-brand-500/50 transition-colors duration-300 shrink-0 sm:text-6xl">
                      {item.step}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-300">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-heading text-3xl uppercase leading-none text-white sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-white/65">
                        {item.description}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {item.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2 text-xs text-white/50"
                          >
                            <CheckCircle2
                              size={13}
                              className="text-brand-400 shrink-0"
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </FadeInUp>
            ))}
          </div>
        )}

        {/* "Be Our First Case Study" CTA — only shown on full portfolio page */}
        {!limit && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-brand-500/40 bg-[linear-gradient(135deg,rgba(204,0,0,0.10),rgba(0,0,0,0.65))] p-10 md:p-16"
          >
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-500/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-900/40 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-block rounded-full border border-brand-500/50 bg-brand-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-brand-300">
                Limited Pilot Spots — 2 of 3 Remaining
              </span>

              <h2 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-none text-white">
                Be our first <br className="hidden md:block" />
                case study
              </h2>

              <p className="mt-6 text-base leading-8 text-white/70 max-w-xl">
                We&apos;re partnering with 2–3 ambitious brands to build our
                portfolio together. You get <strong className="text-white">pilot pricing</strong>,
                founder-level attention on every deliverable, and results we&apos;re
                genuinely motivated to prove — no filler, no juniors.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(204,0,0,0.35)] hover:bg-brand-600 hover:shadow-[0_0_45px_rgba(204,0,0,0.55)] transition-all duration-300"
                >
                  Claim a pilot spot <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact?intent=audit"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white/70 hover:border-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  Free strategy audit first
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Compact CTA — shown on homepage preview */}
        {limit && (
          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white/70 hover:border-brand-500/40 hover:text-white hover:bg-white/8 transition-all duration-300"
            >
              See our full approach <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
