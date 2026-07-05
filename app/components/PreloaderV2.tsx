"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export default function PreloaderV2() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("preloader-shown")) {
      setVisible(false);
      return;
    }

    const counter = counterRef.current;
    if (!counter) return;

    const obj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("preloader-shown", "1");
        setVisible(false);
      },
    });

    tl.to(obj, {
      val: 100,
      duration: 1.2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counter) counter.textContent = String(Math.round(obj.val)).padStart(2, "0");
      },
    })
      .to([labelRef.current, counterRef.current], { autoAlpha: 0, duration: 0.3 }, "+=0.15")
      .to(overlayRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.7,
        ease: "power4.inOut",
      }, "-=0.1");

    return () => {
      tl.kill();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-ink flex items-end justify-between pointer-events-none p-8 md:p-12"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div ref={labelRef} className="text-white">
        <div className="text-xs font-medium tracking-widest uppercase text-slate-400 mb-2">
          AI Design Canarias
        </div>
        <div className="text-2xl md:text-3xl font-bold tracking-tighter">
          Cargando experiencia
        </div>
      </div>
      <div
        ref={counterRef}
        className="font-display font-bold text-white tracking-tight text-7xl md:text-9xl leading-none tabular-nums"
      >
        00
      </div>
    </div>
  );
}
