import { FadeInUp } from "@/components/animations/FadeInUp";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { whyChooseUs } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container space-y-12">
        <SectionTitle
          eyebrow="Why VYES"
          title="Sharp enough for premium brands, practical enough to ship"
          description="We like brave ideas, but we like delivery too. That combination keeps the work tasteful without slowing it down."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeInUp key={item.title} delay={index * 0.06}>
                <Card className="h-full">
                  <span className="inline-flex rounded-2xl border border-white/10 bg-brand-500/10 p-3 text-brand-200">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 font-heading text-4xl uppercase leading-none text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
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
