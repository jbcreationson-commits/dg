"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { staggerChildren } from "@/lib/animations";

export function StaggerChildren({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}
