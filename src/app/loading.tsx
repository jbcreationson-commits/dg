import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="container min-h-screen pt-40 space-y-12">
      <div className="space-y-4">
        <div className="h-12 w-1/3 bg-white/5 animate-pulse rounded-xl" />
        <div className="h-6 w-2/3 bg-white/5 animate-pulse rounded-xl" />
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-[16/11] bg-white/5 animate-pulse rounded-[2rem]" />
        ))}
      </div>
    </div>
  );
}
