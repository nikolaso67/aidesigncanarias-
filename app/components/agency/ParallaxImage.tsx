"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props extends Omit<ImageProps, "fill"> {
  /** Clases adicionales para el wrapper (que define el frame fijo) */
  frameClassName?: string;
  /** Intensidad del parallax interno. 1 = movimiento normal, 0.5 = sutil. Default 1 */
  intensity?: number;
}

/**
 * Imagen con parallax interno: el frame queda fijo, la imagen se mueve dentro.
 * El frame mantiene aspecto y bordes; la imagen es 120% del frame y se desliza
 * 0%→-20% durante el scroll que la atraviesa. Efecto Lusion/Active Theory.
 */
export default function ParallaxImage({
  frameClassName = "",
  intensity = 1,
  ...imgProps
}: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const wrap = imgWrapRef.current;
    if (!frame || !wrap) return;
    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (noMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrap,
        { yPercent: -10 * intensity },
        {
          yPercent: 10 * intensity,
          ease: "none",
          scrollTrigger: {
            trigger: frame,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [intensity]);

  return (
    <div ref={frameRef} className={`relative overflow-hidden ${frameClassName}`}>
      <div ref={imgWrapRef} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image {...imgProps} fill />
      </div>
    </div>
  );
}
