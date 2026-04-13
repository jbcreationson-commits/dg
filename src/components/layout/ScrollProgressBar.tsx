"use client";

import { motion } from "framer-motion";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgressBar() {
  const { progress } = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 origin-left bg-brand-gradient"
      style={{ scaleX: progress }}
    />
  );
}
