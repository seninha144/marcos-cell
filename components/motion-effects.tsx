"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduced) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8%" });

    elements.forEach((element) => observer.observe(element));

    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const onMove = (event: PointerEvent) => {
      if (!hero || window.innerWidth < 1024) return;
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      hero.style.setProperty("--pointer-x", `${x * 5}px`);
      hero.style.setProperty("--pointer-y", `${y * 4}px`);
      hero.style.setProperty("--pointer-bg-x", `${x * -3}px`);
    };
    const onLeave = () => {
      hero?.style.setProperty("--pointer-x", "0px");
      hero?.style.setProperty("--pointer-y", "0px");
      hero?.style.setProperty("--pointer-bg-x", "0px");
    };

    hero?.addEventListener("pointermove", onMove);
    hero?.addEventListener("pointerleave", onLeave);
    return () => {
      observer.disconnect();
      hero?.removeEventListener("pointermove", onMove);
      hero?.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return null;
}
