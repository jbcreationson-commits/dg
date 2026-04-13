import { FadeInUp } from "@/components/animations/FadeInUp";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { processSteps } from "@/lib/constants";

export default function Process() {
  return (
    <section className="py-24">
      <div className="container space-y-12">
        <SectionTitle
          eyebrow="Process"
          title="A growth workflow built for momentum"
          description="We move from diagnosis to scale with a pacing model that keeps learning loops short and priorities obvious."
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <FadeInUp key={item.step} delay={index * 0.08}>
              <Card className="h-full bg-white/[0.03]">
                <p className="font-heading text-5xl uppercase leading-none text-brand-100/80">
                  {item.step}
                </p>
                <h3 className="mt-5 font-heading text-3xl uppercase leading-none text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
