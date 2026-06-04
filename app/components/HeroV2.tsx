"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Parallax from "./agency/Parallax";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MOCKUPS = [
  { src: "/portfolio/taberna.webp", label: "La Taberna El Tablero", tag: "Restaurante" },
  { src: "/portfolio/cabana.webp", label: "Cabana by Efi", tag: "Gastrobar" },
  { src: "/portfolio/corona.webp", label: "Corona Roja", tag: "Ferretería" },
];

/**
 * Hero V2 — versión agency-tier.
 * - Tipografía gigante con reveal por palabra (mask)
 * - El span con gradiente se trata como UNA palabra para no romper bg-clip-text
 * - CTAs magnéticos (siguen el cursor en hover)
 * - Carrusel cross-fade de mockups del portfolio
 * - Sin scramble: el reveal es puro y limpio
 */
export default function HeroV2() {
  const containerRef = useRef<HTMLElement>(null);
  const mag1Ref = useRef<HTMLAnchorElement>(null);
  const mag2Ref = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fine = window.matchMedia("(pointer: fine)").matches;

      if (noMotion) {
        // Sin animaciones: solo asegurar visibilidad
        gsap.set([".hv2-badge", ".hv2-word", ".hv2-subtitle", ".hv2-cta", ".hv2-trust", ".hv2-mockup", ".hv2-mockup-frame", ".hv2-slide-0"], {
          autoAlpha: 1,
          x: 0,
          y: 0,
          yPercent: 0,
          scale: 1,
        });
        return;
      }

      // Estado inicial
      gsap.set(".hv2-badge", { y: -16, autoAlpha: 0 });
      gsap.set(".hv2-word", { yPercent: 110 });
      gsap.set(".hv2-subtitle", { y: 24, autoAlpha: 0 });
      gsap.set(".hv2-cta", { y: 18, autoAlpha: 0 });
      gsap.set(".hv2-trust", { autoAlpha: 0, x: -10 });
      gsap.set(".hv2-mockup", { autoAlpha: 0 });
      gsap.set(".hv2-slide-0", { scale: 0.92, y: 30 });
      gsap.set(".hv2-mockup-frame", { autoAlpha: 0, y: 40 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".hv2-badge", { y: 0, autoAlpha: 1, duration: 0.5 })
        .to(
          ".hv2-word",
          { yPercent: 0, duration: 0.85, stagger: 0.05, ease: "expo.out" },
          "-=0.2",
        )
        .to(".hv2-subtitle", { y: 0, autoAlpha: 1, duration: 0.5 }, "-=0.45")
        .to(".hv2-cta", { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.08 }, "-=0.35")
        .to(".hv2-trust", { autoAlpha: 1, x: 0, duration: 0.4, stagger: 0.1 }, "-=0.25")
        .to(".hv2-mockup-frame", { autoAlpha: 1, y: 0, duration: 0.7 }, 0.35)
        .to(".hv2-slide-0", { autoAlpha: 1, scale: 1, y: 0, duration: 0.7 }, 0.5);

      // Carrusel: cross-fade entre mockups en loop
      const fade = gsap.timeline({ repeat: -1, repeatDelay: 2.6, defaults: { duration: 0.9, ease: "power2.inOut" } });
      for (let i = 0; i < MOCKUPS.length; i++) {
        const next = (i + 1) % MOCKUPS.length;
        fade
          .to(`.hv2-slide-${i}`, { autoAlpha: 0 }, ">2.6")
          .to(`.hv2-slide-${next}`, { autoAlpha: 1 }, "<");
      }

      // Magnetic CTAs — los botones tiran del cursor en hover
      const magnetic = (el: HTMLElement | null, strength = 22) => {
        if (!el || noMotion || !fine) return () => {};
        const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          xTo((dx / r.width) * strength);
          yTo((dy / r.height) * strength);
        };
        const reset = () => {
          xTo(0);
          yTo(0);
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", reset);
        return () => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", reset);
        };
      };
      const cleanups = [magnetic(mag1Ref.current), magnetic(mag2Ref.current)];

      // Parallax cinemático: headline sube/desaparece, mockup BAJA (capas separadas)
      if (!noMotion && containerRef.current) {
        gsap.to(".hv2-headline-stack", {
          yPercent: -40,
          autoAlpha: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
        gsap.to(".hv2-mockup-stack", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      return () => cleanups.forEach((fn) => fn?.());
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-24"
    >
      {/* Background mesh con parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/70 to-sky-50" />
      <Parallax speed={0.5} className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-indigo-300/30 rounded-full blur-3xl pointer-events-none" >
        <span />
      </Parallax>
      <Parallax speed={-0.4} className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-3xl pointer-events-none" >
        <span />
      </Parallax>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-12 items-center">
        {/* Izquierda: contenido */}
        <div className="hv2-headline-stack">
          <span className="hv2-badge inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-indigo-700 mb-8 px-3 py-1 border border-indigo-200 bg-white/70 backdrop-blur rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Agencia digital en Gran Canaria
          </span>

          <h1 className="font-extrabold tracking-tighter leading-[0.95] text-5xl md:text-6xl lg:text-6xl xl:text-7xl mb-6">
            <span className="block">
              <Word>Diseño</Word> <Word>web</Word> <Word>profesional</Word>
            </span>
            <span className="block">
              {/* "en Gran Canaria" — UN solo word para preservar bg-clip-text */}
              <span className="hv2-word-mask inline-block overflow-hidden align-bottom">
                <span className="hv2-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500">
                  en Gran Canaria
                </span>
              </span>
            </span>
            <span className="block text-slate-800/90">
              <Word>con</Word> <Word>IA</Word> <Word>que</Word> <Word>atiende</Word>
            </span>
            <span className="block text-slate-800/90">
              <Word>mientras</Word> <Word>duermes</Word>
            </span>
          </h1>

          <p className="hv2-subtitle text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
            Webs profesionales para negocios en Gran Canaria. Sin permanencia,
            soporte en español y una IA integrada que responde a tus clientes 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              ref={mag1Ref}
              href="#contacto"
              className="hv2-cta group relative px-9 py-4 rounded-full bg-slate-900 text-white font-semibold tracking-wide shadow-lg shadow-slate-900/20 overflow-hidden text-center"
              data-cursor
            >
              <span className="relative z-10">Solicitar presupuesto gratis</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              ref={mag2Ref}
              href="#servicios"
              className="hv2-cta px-9 py-4 rounded-full border border-slate-300 hover:border-slate-900 hover:bg-white transition-colors font-semibold text-slate-700 text-center"
              data-cursor
            >
              Ver servicios
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6 text-sm text-slate-500">
            <div className="hv2-trust flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Entrega en 7–14 días
            </div>
            <div className="hv2-trust flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Soporte en español
            </div>
            <div className="hv2-trust flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Sin permanencia
            </div>
          </div>
        </div>

        {/* Derecha: stack de mockups (cross-fade) */}
        <div className="hv2-mockup-stack hidden lg:block">
          <div className="hv2-mockup-frame relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200/60 border border-white/60 bg-slate-100">
            {MOCKUPS.map((m, i) => (
              <div
                key={m.src}
                className={`hv2-mockup hv2-slide-${i} absolute inset-0`}
              >
                <Image
                  src={m.src}
                  alt={`${m.label} — web creada por AI Design Canarias`}
                  fill
                  sizes="(max-width: 1023px) 0vw, 50vw"
                  className="object-cover object-top"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                  <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-medium border border-white/20">
                    {m.tag}
                  </span>
                  <span className="font-semibold drop-shadow">{m.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Badge flotante */}
          <div className="hv2-mockup-frame inline-flex items-center gap-3 mt-6 bg-white rounded-2xl shadow-lg px-5 py-3 border border-slate-100">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 font-bold">↗</span>
            <div>
              <div className="text-xs text-slate-500">Webs entregadas</div>
              <div className="font-bold text-slate-900 text-sm">+30 proyectos en 18 meses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Una palabra en un wrapper enmascarado (overflow hidden + translateY). */
function Word({ children, delay = 1 }: { children: React.ReactNode; delay?: number }) {
  void delay;
  return (
    <span className="hv2-word-mask inline-block overflow-hidden align-bottom">
      <span className="hv2-word inline-block">{children}</span>
    </span>
  );
}
