"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { useMagnet } from "@/hooks/useMagnet";

export function MagneticButton({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const { offset, handleMouseMove, reset } = useMagnet();

  return (
    <motion.div
      className={className}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}
