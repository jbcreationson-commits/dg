"use client";

import { motion } from "framer-motion";

import { useMousePosition } from "@/hooks/useMousePosition";

export function CursorHalo() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-16 w-16 rounded-full border border-brand-300/30 bg-brand-400/10 blur-[2px] md:block"
      animate={{
        x: x - 32,
        y: y - 32,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.35 }}
    />
  );
}
