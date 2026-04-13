"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useCallback, useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { direction, y } = useScrollProgress();

  const isHidden = direction === "down" && y > 120 && !open;

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <motion.header
        animate={{ y: isHidden ? -120 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container pt-5">
          <div
            className={cn(
              "flex items-center justify-between rounded-full border border-white/10 px-4 py-3 transition duration-300",
              y > 24
                ? "bg-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
                : "bg-transparent",
            )}
          >
            <Link href="/" className="group flex items-center gap-3">
              <div className="overflow-hidden rounded-full border border-white/10 transition group-hover:scale-105 bg-white">
                <Image src="/logo.png" alt="VYES DigiGrow" width={36} height={36} priority className="rounded-full object-cover" />
              </div>
              <div>
                <p className="font-heading text-2xl uppercase leading-none tracking-[0.16em] text-white">
                  VYES
                </p>
                <p className="font-accent text-[12px] uppercase tracking-[0.42em] text-white/60">
                  DIGI GROW
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.28em] text-white/72 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <MagneticButton>
                <Button href="/contact" className="px-6 py-2.5">
                  Get Free Audit <ArrowRight size={16} />
                </Button>
              </MagneticButton>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label="Open menu"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            >
              <span className="relative h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-5 bg-white transition",
                    open && "top-2 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-2 h-0.5 w-5 bg-white transition",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-4 h-0.5 w-5 bg-white transition",
                    open && "top-2 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={closeMenu} />
    </>
  );
}
