"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("preloader-shown")) {
      setVisible(false);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("preloader-shown", "1");
        setVisible(false);
      },
    });

    tl.to(barRef.current, { width: "100%", duration: 0.9, ease: "power2.inOut" })
      .to(overlayRef.current, { yPercent: -100, duration: 0.55, ease: "power3.inOut" }, "+=0.1");

    return () => { tl.kill(); };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center pointer-events-none"
    >
      <div className="text-center">
        <p className="text-white font-bold text-lg tracking-tight mb-6">
          AI Design <span className="text-indigo-400">Canarias</span>
        </p>
        <div className="w-40 h-px bg-slate-800 overflow-hidden rounded-full">
          <div
            ref={barRef}
            className="h-full bg-indigo-500 rounded-full"
            style={{ width: 0 }}
          />
        </div>
      </div>
    </div>
  );
}
