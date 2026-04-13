"use client";

import { useEffect, useState } from "react";

type ScrollState = {
  progress: number;
  direction: "up" | "down";
  y: number;
};

export function useScrollProgress(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    progress: 0,
    direction: "up",
    y: 0,
  });

  useEffect(() => {
    let previous = 0;

    const onScroll = () => {
      const y = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? y / scrollHeight : 0;
      const direction = y > previous ? "down" : "up";
      previous = y;

      setScrollState({
        progress,
        direction,
        y,
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrollState;
}
