"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
  /** Distancia inicial en Y (px). Default 40 */
  y?: number;
  /** Delay para staggers manuales */
  delay?: number;
  /** Duración */
  duration?: number;
  /** Stagger entre children directos (en segundos). Si > 0, hace stagger de los children */
  stagger?: number;
  /** Cuándo dispara el reveal — % del viewport. Default "top 80%" */
  start?: string;
  className?: string;
}

/**
 * Wrapper que anima children al entrar en viewport.
 * - Sin stagger: anima el wrapper completo
 * - Con stagger > 0: anima los hijos directos uno por uno
 * Respeta prefers-reduced-motion (sin transform).
 */
export default function RevealOnScroll({
  children,
  y = 40,
  delay = 0,
  duration = 0.9,
  stagger = 0,
  start = "top 80%",
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (noMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      if (stagger > 0) {
        const children = Array.from(ref.current!.children) as HTMLElement[];
        gsap.set(children, { y, autoAlpha: 0 });
        gsap.to(children, {
          y: 0,
          autoAlpha: 1,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current!, start },
        });
      } else {
        gsap.set(ref.current, { y, autoAlpha: 0 });
        gsap.to(ref.current, {
          y: 0,
          autoAlpha: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current!, start },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [y, delay, duration, stagger, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
