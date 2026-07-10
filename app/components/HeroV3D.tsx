"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// three.js va en su propio chunk: solo se descarga en desktop y tras el primer render
const Hero3DCanvas = dynamic(() => import("./Hero3DCanvas"), { ssr: false });

/**
 * Hero experimental 3D-céntrico:
 * - Torus knot gigante centrado que rota solo y sigue al cursor con inercia
 * - Al hacer scroll el hero se queda pineado ~1.5 viewports: el objeto da una
 *   vuelta completa y escala mientras el titular se desvanece (scrub)
 * - Texto por encima (z-20); el canvas no roba clicks
 * - Solo desktop: en móvil, texto + blobs aurora CSS como siempre
 */

export default function HeroV3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useRef(0);
  const [canvasOn, setCanvasOn] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const id = requestAnimationFrame(() => setCanvasOn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useGSAP(
    () => {
      const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (noMotion) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        // Un solo timeline pineado: el scroll alimenta la rotación del objeto
        // y funde el texto (varios triggers sobre un elemento pineado se
        // desincronizan por el pin spacer)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=70%",
            pin: true,
            scrub: true,
            onUpdate: (self) => {
              progress.current = self.progress;
            },
          },
        });

        tl.to(".h3d-bottom", { autoAlpha: 0, y: 40, ease: "none", duration: 0.35 }, 0)
          .to(".h3d-headline", { autoAlpha: 0, y: -60, ease: "none", duration: 0.5 }, 0.1)
          .to({}, { duration: 0.4 }, 0.6); // margen para que el objeto siga girando solo
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="grain relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink text-white py-28 lg:py-0"
    >
      {/* Aurora CSS (móvil y capa base desktop) */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[820px] max-h-[820px] bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-25%] right-[-5%] w-[45vw] h-[45vw] max-w-[680px] max-h-[680px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Objeto 3D protagonista — solo desktop */}
      {canvasOn && (
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-10" aria-hidden>
          <Hero3DCanvas progress={progress} />
        </div>
      )}

      {/* Titular por encima del objeto */}
      <div className="h3d-headline relative z-20 text-center px-6 max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent-bright mb-8">
          <span className="w-8 h-px bg-accent-bright" aria-hidden />
          Agencia digital en Gran Canaria
          <span className="w-8 h-px bg-accent-bright" aria-hidden />
        </span>
        <h1 className="font-display font-bold tracking-tight leading-[0.95] text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 drop-shadow-[0_4px_30px_rgba(10,10,18,0.8)]">
          <span className="block">Diseño web</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-bright via-violet-400 to-sky-400">
            profesional
          </span>
          <span className="block">en Gran Canaria</span>
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(10,10,18,0.9)]">
          Con IA que atiende a tus clientes mientras duermes. Sin permanencia y
          con soporte en español.
        </p>
      </div>

      {/* CTAs + trust — en móvil bajo el titular; en desktop anclados abajo (se funden con el scroll) */}
      <div className="h3d-bottom relative z-20 mt-12 w-full px-6 lg:absolute lg:bottom-10 lg:left-0 lg:right-0 lg:mt-0">
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
