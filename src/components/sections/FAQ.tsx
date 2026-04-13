"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { faqItems } from "@/lib/constants";

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24">
      <div className="container space-y-12">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions we get before partnerships begin"
          description="A few quick answers about fit, scope, timelines, and how we tend to work."
        />

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={item.question}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] px-6"
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-heading text-3xl uppercase leading-none text-white md:text-4xl">
                    {item.question}
                  </span>
                  <span className="rounded-full border border-white/10 p-3 text-brand-100">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-16 text-sm leading-7 text-white/65">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
