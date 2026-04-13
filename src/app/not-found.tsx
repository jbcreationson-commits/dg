"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { FadeInUp } from "@/components/animations/FadeInUp";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden text-center px-4">
      <div className="absolute inset-0 bg-brand-radial opacity-30 mix-blend-screen" />
      
      {/* Animated Eagle flying off screen */}
      <motion.div
        initial={{ x: "-100vw", y: "50vh", rotate: -15, scale: 0.5 }}
        animate={{ 
            x: "100vw", 
            y: "-50vh", 
            rotate: 15,
            scale: 1 
        }}
        transition={{ 
            duration: 5, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2
        }}
        className="absolute z-0 opacity-20 pointer-events-none"
      >
        <Image src="/logo.png" alt="Eagle" width={400} height={400} />
      </motion.div>

      <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
        <FadeInUp>
          <h1 className="font-heading text-8xl md:text-[12rem] leading-none uppercase text-white/5 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            404
          </h1>
        </FadeInUp>
        
        <FadeInUp delay={0.1}>
           <h2 className="font-heading text-4xl md:text-5xl uppercase text-white tracking-widest">
              Lost in the Noise
           </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
           <p className="text-lg text-white/60 leading-relaxed max-w-md mx-auto">
             It seems our eagle flew a bit too high and lost track of this page. Let's get you back to growing your brand.
           </p>
        </FadeInUp>

        <FadeInUp delay={0.3} className="pt-8">
           <MagneticButton>
              <Button href="/" variant="primary" className="px-8 py-3">
                 <ArrowLeft size={18} className="mr-2" /> Back to Base
              </Button>
           </MagneticButton>
        </FadeInUp>
      </div>
    </div>
  );
}
