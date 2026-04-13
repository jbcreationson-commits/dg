import Link from "next/link";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
  }
>;

const variantStyles = {
  primary:
    "bg-brand-gradient text-white shadow-glow hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-brand-400/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300",
  ghost:
    "text-white/85 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300",
};

const sharedClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg sm:text-base font-semibold tracking-[0.18em] uppercase transition duration-300 active:scale-[0.97]";

export function Button({
  children,
  href,
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(sharedClasses, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
