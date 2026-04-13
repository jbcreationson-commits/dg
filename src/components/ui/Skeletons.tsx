"use client";

import { motion } from "framer-motion";

function SkeletonBase({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      className={`bg-white/5 rounded-xl ${className}`}
    />
  );
}

export function PortfolioCardSkeleton() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl h-full flex items-start gap-5">
      <SkeletonBase className="size-16 shrink-0" />
      <div className="flex-1 space-y-4">
        <SkeletonBase className="h-4 w-24" />
        <SkeletonBase className="h-8 w-3/4" />
        <SkeletonBase className="h-16 w-full" />
        <div className="space-y-2 pt-2">
          <SkeletonBase className="h-3 w-1/2" />
          <SkeletonBase className="h-3 w-1/3" />
        </div>
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
      <SkeletonBase className="aspect-[16/11] rounded-none w-full" />
      <div className="space-y-5 p-6">
        <SkeletonBase className="h-4 w-24" />
        <div className="space-y-3">
          <SkeletonBase className="h-8 w-3/4" />
          <SkeletonBase className="h-12 w-full" />
        </div>
        <SkeletonBase className="h-6 w-32" />
      </div>
    </div>
  );
}

export function PortfolioSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {Array.from({ length: count }).map((_, i) => (
        <PortfolioCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function BlogSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}
