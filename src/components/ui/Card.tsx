import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "group relative rounded-[2rem] p-[1px] transition-all duration-500",
        className
      )}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500/0 via-brand-500/0 to-brand-500/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-500/50 group-hover:via-brand-400/20 group-hover:to-brand-500/50 group-hover:opacity-100" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-[2rem] bg-brand-500/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 px-10" />

      <div
        className="relative h-full w-full rounded-[2rem] border border-white/10 bg-black/80 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-transparent group-hover:bg-black/40"
      >
        {children}
      </div>
    </div>
  );
}
