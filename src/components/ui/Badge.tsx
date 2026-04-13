import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-brand-400/25 bg-brand-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.28em] text-brand-100",
        className,
      )}
    >
      {children}
    </span>
  );
}
