"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { useEffect } from "react";

import { navLinks } from "@/lib/constants";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="fixed inset-0 z-[70] bg-gradient-to-br from-neutral-950 via-brand-900 to-black px-8 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <p className="font-accent text-sm uppercase tracking-[0.42em] text-white/70">
              Menu
            </p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 p-3 text-white"
              aria-label="Close navigation menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-16 flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="font-heading text-5xl uppercase tracking-[0.08em] text-white"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-auto flex gap-4 pt-20 text-white/75">
            <Link href="https://www.instagram.com" aria-label="Instagram">
              <Instagram />
            </Link>
            <Link href="https://www.linkedin.com" aria-label="LinkedIn">
              <Linkedin />
            </Link>
            <Link href="https://www.facebook.com" aria-label="Facebook">
              <Facebook />
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
