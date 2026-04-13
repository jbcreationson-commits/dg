"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export function TextReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const words = scope.current?.querySelectorAll("[data-reveal='word']");
      if (!words?.length) {
        return;
      }

      gsap.fromTo(
        words,
        { opacity: 0, yPercent: 120, skewX: 8 },
        {
          opacity: 1,
          yPercent: 0,
          skewX: 0,
          duration: 0.9,
          stagger: 0.05,
          ease: "power4.out",
        },
      );
    },
    { scope },
  );

  return (
    <div ref={scope} className={cn("overflow-hidden", className)}>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          data-reveal="word"
          className="mr-[0.2em] inline-block"
        >
          {word}
        </span>
      ))}
    </div>
  );
}
