import dynamic from "next/dynamic";

import AboutUs from "@/components/sections/AboutUs";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Stats from "@/components/sections/Stats";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Loader } from "@/components/ui/Loader";
import { faqItems } from "@/lib/constants";
import { createFaqSchema, createMetadata, siteConfig } from "@/lib/seo";

const Portfolio = dynamic(() => import("@/components/sections/Portfolio"), {
  loading: () => <Loader />,
});
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => <Loader />,
});
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), {
  loading: () => <Loader />,
});
const Blog = dynamic(() => import("@/components/sections/Blog"), {
  loading: () => <Loader />,
});
const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <Loader />,
});
const CTA = dynamic(() => import("@/components/sections/CTA"), {
  loading: () => <Loader />,
});

export const metadata = createMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export const revalidate = 3600;

export default function HomePage() {
  const faqSchema = createFaqSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <TrustedBy />
      <ServicesGrid limit={6} />
      <Stats />
      <AboutUs />
      <Process />
      <Portfolio limit={3} />
      <Testimonials />
      <WhyChooseUs />
      <Blog limit={3} />
      <FAQ />
      <CTA />
    </>
  );
}
