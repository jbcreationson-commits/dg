import { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import Blog from "@/components/sections/Blog";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: `Insights | ${siteConfig.title}`,
  description: "Read our latest insights on performance marketing, website design, and growth strategy.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-36 pb-8 overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-brand-radial opacity-40 mix-blend-screen" />
        <div className="container relative z-10 text-center">
            <h1 className="font-heading text-5xl md:text-7xl uppercase tracking-wider text-white">
                Insights
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70">
                Strategy, tactics, and lessons learned from growing brands digitally.
            </p>
        </div>
      </section>

      <Blog isLoading={false} />

      <CTA />
    </>
  );
}
