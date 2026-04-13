import { ArrowRight } from "lucide-react";

import { MagneticButton } from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(204,0,0,0.26),rgba(255,255,255,0.05))] px-8 py-14 shadow-glow backdrop-blur-2xl md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,68,68,0.25),transparent_30%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="font-accent text-sm uppercase tracking-[0.42em] text-brand-100">
                Ready when you are
              </p>
              <h2 className="max-w-3xl font-heading text-5xl uppercase leading-none text-white md:text-6xl">
                Let’s turn attention into growth without watering down the brand.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-white/72 md:text-base">
                Book a discovery call, request a free audit, or tell us where the
                current funnel feels stuck. We’ll meet you there.
              </p>
            </div>

            <MagneticButton className="w-fit">
              <Button href="/contact">
                Get Free Audit <ArrowRight size={16} />
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
