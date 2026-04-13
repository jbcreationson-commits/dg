import { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import Portfolio from "@/components/sections/Portfolio";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: `Our Approach | ${siteConfig.title}`,
  description:
    "See exactly how VYES DigiGrow works — our 4-step methodology for SEO, paid ads, web design, and branding, plus our founding-client pilot offer.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="relative pt-36 pb-8 overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-brand-radial opacity-40 mix-blend-screen" />
        <div className="container relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-7xl uppercase tracking-wider text-white">
            Our Approach
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70">
            No inflated case studies. A clear 4-step methodology, modern tools,
            and a pilot offer built for brands ready to grow with us from day one.
          </p>
        </div>
      </section>

      <Portfolio enableFilters={false} isLoading={false} />

      <CTA />
    </>
  );
}
