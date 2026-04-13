"use client";

import { useEffect, useState } from "react";

const particles = [
  { left: "4%", top: "12%", size: 6, delay: "0s", duration: "9s" },
  { left: "14%", top: "72%", size: 4, delay: "1s", duration: "8s" },
  { left: "26%", top: "28%", size: 8, delay: "0.4s", duration: "10s" },
  { left: "38%", top: "62%", size: 10, delay: "1.8s", duration: "11s" },
  { left: "48%", top: "18%", size: 5, delay: "0.6s", duration: "7s" },
  { left: "58%", top: "84%", size: 7, delay: "2s", duration: "8s" },
  { left: "68%", top: "36%", size: 9, delay: "1.2s", duration: "12s" },
  { left: "78%", top: "54%", size: 6, delay: "2.6s", duration: "10s" },
  { left: "88%", top: "20%", size: 7, delay: "0.8s", duration: "9s" },
];

export function ParticlesBg() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-brand-300/20 blur-sm"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration} ease-in-out ${particle.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
