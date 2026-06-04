"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
  /**
   * Velocidad relativa al scroll natural.
   * Positivo = se mueve hacia arriba (efecto "lento al fondo")
   * Negativo = se mueve hacia abajo (efecto "rápido al frente")
   * 0 = sin parallax. Default 0.2 (movimiento sutil)
   */
  speed?: number;
  className?: string;
  /** Tag a usar. Default "div" */
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Wrapper que aplica parallax vertical a sus children durante el scroll.
 * Respeta prefers-reduced-motion (sin parallax).
 *
 * @example
 * <Parallax speed={0.3}>
 *   <BackgroundBlob />
 * </Parallax>
 */
export default function Parallax({ children, speed = 0.2, className, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (noMotion || speed === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -speed * 50 },
        {
          yPercent: speed * 50,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [speed]);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
