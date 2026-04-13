import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { contactDetails, navLinks, serviceHighlights } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.2fr_0.7fr_0.8fr]">
        <div className="space-y-6">
          <p className="font-accent text-sm uppercase tracking-[0.42em] text-brand-100">
            VYES DigiGrow
          </p>
          <h2 className="max-w-md font-heading text-5xl uppercase leading-none text-white">
            Growth systems that feel as premium as the brand.
          </h2>
          <p className="max-w-xl text-white/68">
            SEO, PPC, Social, Web, Branding, Content, and GMB stitched into one
            bold digital growth engine.
          </p>
          <Button href="/contact" className="w-fit">
            Start Your Growth <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">Explore</p>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.24em] text-white/70 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">Contact</p>
          <div className="space-y-3 text-white/70">
            <a href={`mailto:${contactDetails.email}`} className="block hover:text-white transition-colors">{contactDetails.email}</a>
            <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} className="block hover:text-white transition-colors">{contactDetails.phone}</a>
            <p>{contactDetails.address}</p>
            <p>{contactDetails.hours}</p>
          </div>
          <div className="pt-3">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">Services</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {serviceHighlights.map((service) => (
                <span
                  key={service.slug}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/65"
                >
                  {service.shortTitle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} VYES DigiGrow. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
