"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Cursor blob que sigue el ratón con interpolación suave (GSAP quickTo).
 * Crece sobre [data-cursor], a, button. Solo desktop con pointer fino.
 * Respeta prefers-reduced-motion (no monta nada).
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || noMotion) return;

    const dot = dotRef.current;
    if (!dot) return;

    document.documentElement.classList.add("custom-cursor-active");
    gsap.set(dot, { xPercent: -50, yPercent: -50, opacity: 0 });

    const xTo = gsap.quickTo(dot, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.35, ease: "power3.out" });

    let entered = false;
    const onMove = (e: MouseEvent) => {
      if (!entered) {
        gsap.to(dot, { opacity: 1, duration: 0.2 });
        entered = true;
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const grow = () => gsap.to(dot, { scale: 2.2, duration: 0.25, ease: "power2.out" });
    const shrink = () => gsap.to(dot, { scale: 1, duration: 0.25, ease: "power2.out" });

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("a, button, [data-cursor]")) grow();
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("a, button, [data-cursor]")) shrink();
    };
    const onLeave = () => {
      gsap.to(dot, { opacity: 0, duration: 0.2 });
      entered = false; // reset flag para que el próximo mousemove vuelva a hacer fade-in
    };

    // Cuando vuelve a entrar al documento: si ya hay coordenadas, restauramos visibilidad
    const onEnter = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      gsap.to(dot, { opacity: 1, duration: 0.2 });
      entered = true;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 rounded-full bg-indigo-500 mix-blend-difference"
    />
  );
}
