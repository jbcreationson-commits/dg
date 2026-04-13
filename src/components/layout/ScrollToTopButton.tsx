"use client";

import { ArrowUp } from "lucide-react";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollToTopButton() {
  const { y, progress } = useScrollProgress();

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-glow backdrop-blur-md transition ${
        y > 400 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      aria-label="Scroll back to top"
    >
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(#ff4444 ${Math.round(progress * 360)}deg, rgba(255,255,255,0.08) 0deg)`,
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 4px), white calc(100% - 3px))",
          mask:
            "radial-gradient(farthest-side, transparent calc(100% - 4px), white calc(100% - 3px))",
        }}
      />
      <ArrowUp size={18} className="relative z-10" />
    </button>
  );
}
