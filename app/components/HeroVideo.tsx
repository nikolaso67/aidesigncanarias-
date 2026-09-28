"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroSwarm from "./HeroSwarm";

gsap.registerPlugin(useGSAP);

/**
 * Hero con fondo animado a sangre (tratamiento tipo Forja Training):
 * - Canvas de partículas (HeroSwarm) a pantalla completa + degradados y grano encima
 * - En todos los tamaños; se pausa cuando el hero sale de pantalla. Los blobs
 *   aurora CSS quedan debajo como fallback si el canvas no arranca
 * - El titular es texto SSR: el LCP no depende de que el canvas arranque
 * - prefers-reduced-motion: el canvas se queda en un frame estático
 */
export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  // Deriva lenta de cámara sobre el canvas (HeroSwarm no mueve la cámara)
  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.fromTo(
      bg,
      { scale: 1.06, xPercent: -1 },
      { scale: 1.18, xPercent: 1, duration: 24, ease: "sine.inOut", repeat: -1, yoyo: true },
    );
    return () => {
      tween.kill();
    };
  }, []);

  useGSAP(
    () => {
      const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (noMotion) return;
      // Si el JS llega tarde no re-ocultamos contenido ya pintado (protege LCP)
      if (performance.now() > 1500) return;

      gsap.set(".hv-eyebrow", { autoAlpha: 0, y: -14 });
      gsap.set(".hv-line", { yPercent: 115 });
      gsap.set(".hv-sub", { autoAlpha: 0, y: 20 });
      gsap.set(".hv-bottom", { autoAlpha: 0, y: 20 });

      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .to(".hv-eyebrow", { autoAlpha: 1, y: 0, duration: 0.6 })
        .to(".hv-line", { yPercent: 0, duration: 1, stagger: 0.08 }, "-=0.3")
        .to(".hv-sub", { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.55")
        .to(".hv-bottom", { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.4");
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="grain relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink text-white py-28 lg:py-0"
    >
      {/* Aurora CSS: fondo en móvil y fallback si el vídeo no llega a montarse */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[820px] max-h-[820px] bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-25%] right-[-5%] w-[45vw] h-[45vw] max-w-[680px] max-h-[680px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Fondo de partículas — tapa la aurora CSS */}
      <div ref={bgRef} className="absolute inset-0 scale-[1.06]" aria-hidden>
        <HeroSwarm className="absolute inset-0 w-full h-full" />
      </div>

      {/* Legibilidad: oscurece arriba (navbar) y abajo (CTAs) dejando ver la
          retícula en los bordes; viñeta suave en los bordes */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/10 to-ink/85 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,18,0.3)_0%,rgba(10,10,18,0.05)_40%,rgba(10,10,18,0.7)_100%)] pointer-events-none" />

      {/* Titular */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:pt-28 lg:pb-10">
        <span className="hv-eyebrow self-center inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent-bright mb-8">
          <span className="w-8 h-px bg-accent-bright" aria-hidden />
          Agencia digital en Gran Canaria
          <span className="w-8 h-px bg-accent-bright" aria-hidden />
        </span>
        <h1 className="font-display font-bold tracking-tight leading-[0.95] text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 drop-shadow-[0_4px_30px_rgba(10,10,18,0.8)]">
          <span className="block overflow-hidden">
            <span className="hv-line block">Diseño web</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hv-line block text-transparent bg-clip-text bg-gradient-to-r from-accent-bright via-violet-400 to-sky-400">
              profesional
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hv-line block">en Gran Canaria</span>
          </span>
        </h1>
        <p className="hv-sub text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(10,10,18,0.9)]">
          Con IA que atiende a tus clientes mientras duermes. Sin permanencia y
          con soporte en español.
        </p>
      </div>

      {/* CTAs + trust — en móvil bajo el titular; en desktop al pie del hero.
          En flujo (no absolute): en pantallas bajas el titular empuja los CTAs
          en vez de quedar tapado por ellos */}
      <div className="hv-bottom relative z-20 mt-12 w-full px-6 lg:mt-0 lg:pb-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="group relative px-9 py-4 rounded-full bg-white text-ink font-semibold tracking-wide shadow-lg shadow-accent/20 overflow-hidden text-center"
            data-cursor
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Solicitar presupuesto gratis
            </span>
            <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#servicios"
            className="px-9 py-4 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-colors font-semibold text-white/90 text-center"
            data-cursor
          >
            Ver servicios
          </a>
        </div>
        <div className="mt-6 hidden sm:flex items-center justify-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Entrega en 7–14 días
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Demo gratis antes de pagar
          </span>
          <span className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Sin permanencia
          </span>
        </div>
      </div>
    </section>
  );
}
