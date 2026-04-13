import { FadeInUp } from "@/components/animations/FadeInUp";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { valueProps } from "@/lib/constants";

export default function AboutUs() {
  return (
    <section className="relative py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="About Us"
            title="We build premium growth engines, not random tactics"
            description="VYES DigiGrow blends strategy, media, design, and development so the full funnel feels coherent from first impression to closed deal."
          />
          <FadeInUp>
            <p className="max-w-xl text-base leading-8 text-white/68">
              The agency sits in the gap between brand studios that ignore
              performance and performance shops that flatten every brand into the
              same lookalike funnel. We care about both.
            </p>
          </FadeInUp>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {valueProps.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeInUp key={item.title} delay={index * 0.08}>
                <Card className="h-full">
                  <span className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-brand-200">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 font-heading text-4xl uppercase leading-none text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{item.text}</p>
                </Card>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
