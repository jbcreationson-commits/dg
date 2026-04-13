"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export function CountUpNumber({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {isVisible ? <CountUp end={end} duration={2.2} suffix={suffix} /> : `0${suffix}`}
    </span>
  );
}
