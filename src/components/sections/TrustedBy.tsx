import { trustLogos } from "@/lib/constants";

export function TrustedBy() {
  const items = [...trustLogos, ...trustLogos];

  return (
    <section className="border-y border-white/10 bg-black/30 py-6">
      <div className="overflow-hidden">
        <div className="flex min-w-max gap-12 whitespace-nowrap px-6 animate-marquee">
          {items.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="font-accent text-sm uppercase tracking-[0.46em] text-white/40"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
