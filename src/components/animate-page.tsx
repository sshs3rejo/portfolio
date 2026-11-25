"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

export function AnimatePage() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    animate("[data-hero]", {
      opacity: [0, 1],
      y: [24, 0],
      duration: 650,
      delay: stagger(60),
      ease: "outExpo",
    });

    animate("[data-avatar-float]", {
      y: [-5, 5],
      duration: 3200,
      loop: true,
      alternate: true,
      ease: "inOutSine",
    });

    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          animate(entry.target, {
            opacity: [0, 1],
            y: [20, 0],
            duration: 700,
            ease: "outCubic",
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    items.forEach((item) => {
      item.style.opacity = "0";
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
