"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

import { MagneticButton } from "@/components/animations/MagneticButton";
import { ParticlesBg } from "@/components/animations/ParticlesBg";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden pt-20">
      <ParticlesBg />
      <div className="absolute inset-0 bg-brand-radial" />
      
      {/* Static Grid Background (Better for performance and clarity) */}
      <div className="absolute inset-0 z-0 opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-white/5" />

      <div className="container relative z-10 grid gap-16 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">

          <div className="space-y-6">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] uppercase leading-[0.9] md:leading-[0.8] tracking-tighter text-white">
              Grow <br />
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 block bg-brand-gradient bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-shift"
              >
                Fearlessly.
              </motion.span>
            </h1>
            <FadeInUp delay={0.15}>
              <p className="max-w-2xl text-lg sm:text-lg leading-7 sm:leading-8 text-white/72 md:text-xl font-medium">
                SEO · PPC · Social Media · Web · Branding · Content softwares & GMB
              </p>
            </FadeInUp>
            <FadeInUp delay={0.25}>
              <p className="max-w-xl text-lg leading-relaxed text-white/62 md:text-lg">
                VYES DigiGrow helps ambitious brands turn sharp positioning into
                qualified demand, faster websites, and campaigns that actually
                move revenue.
              </p>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.35} className="flex flex-col gap-4 sm:flex-row">
            <MagneticButton className="w-fit">
              <Button href="/contact">
                Get a Free Audit <ArrowRight size={16} />
              </Button>
            </MagneticButton>
            <Button href="/portfolio" variant="secondary" className="w-fit">
              See Our Approach
            </Button>
          </FadeInUp>
        </div>

        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="relative size-64 sm:h-[28rem] sm:w-[28rem] rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 bg-white/5 p-4 sm:p-8 shadow-[0_50px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_70%_60%,rgba(255,68,68,0.35),transparent_36%)]" />
            <motion.div
              className="relative flex h-full items-center justify-center p-2"
            >
              <Image
                src="/logo.png"
                alt="VYES DigiGrow Eagle"
                width={320}
                height={320}
                priority
                className="h-full w-full rounded-full object-cover border-4 border-white/10 shadow-[0_30px_50px_rgba(204,0,0,0.35)] bg-white"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 inset-x-0 z-20 flex flex-col items-center gap-3 pointer-events-none sm:bottom-10"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Scroll</span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5 backdrop-blur-sm">
          <motion.div
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5, 
              ease: "easeInOut" 
            }}
            className="w-1 h-2 rounded-full bg-brand-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
