import { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import ServicesGrid from "@/components/sections/ServicesGrid";
import { createMetadata, siteConfig } from "@/lib/seo";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = createMetadata({
  title: `Our Services | ${siteConfig.title}`,
  description: "From technical SEO to premium website builds, explore the services we offer to help brands grow digitally.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-36 pb-12 overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-brand-radial opacity-40 mix-blend-screen" />
        <div className="container relative z-10 text-center">
            <h1 className="font-heading text-5xl md:text-7xl uppercase tracking-wider text-white">
                Our Services
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70">
                We design paid funnels, search systems, and visual identities that scale with confidence.
            </p>
        </div>
      </section>

      {/* Re-use the existing ServicesGrid but without limits so it shows all */}
      <ServicesGrid />

      <CTA />
    </>
  );
}
