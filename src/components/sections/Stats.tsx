import { FadeInUp } from "@/components/animations/FadeInUp";
import { Card } from "@/components/ui/Card";
import { stats } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="py-8">
      <div className="container grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <FadeInUp key={item.subline} delay={index * 0.06}>
            <Card className="relative overflow-hidden bg-white/[0.04] h-full">
              <div className="absolute inset-x-0 top-0 h-px bg-brand-gradient" />
              <p className="font-heading text-5xl uppercase leading-none text-white">
                {item.headline}
              </p>
              <p className="mt-1 font-heading text-xl uppercase leading-none text-brand-300">
                {item.subline}
              </p>
              <p className="mt-4 text-sm leading-6 text-white/55">
                {item.description}
              </p>
            </Card>
          </FadeInUp>
        ))}
      </div>
    </section>
  );
}
