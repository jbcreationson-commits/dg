"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { fadeInUp } from "@/lib/animations";

export function FadeInUp({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
