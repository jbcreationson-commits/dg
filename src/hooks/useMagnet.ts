"use client";

import { useState } from "react";

export function useMagnet(radius = 80) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;
    const distance = Math.hypot(x, y);

    if (distance < radius) {
      setOffset({ x: x * 0.18, y: y * 0.18 });
      return;
    }

    setOffset({ x: 0, y: 0 });
  };

  const reset = () => {
    setOffset({ x: 0, y: 0 });
  };

  return {
    offset,
    handleMouseMove,
    reset,
  };
}
