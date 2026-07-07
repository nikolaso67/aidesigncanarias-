"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MOCKUPS = [
  { src: "/portfolio/taberna.webp", label: "La Taberna El Tablero", tag: "Restaurante" },
  { src: "/portfolio/cabana.webp", label: "Cabana by Efi", tag: "Gastrobar" },
  { src: "/portfolio/corona.webp", label: "Corona Roja", tag: "Ferretería" },
];

/**
 * Hero V3 — estudio premium sobre tinta.
 * - Fondo oscuro con aurora animada (GSAP loop) + grano
 * - Tipografía display gigante con reveal por palabra (mask)
 * - CTAs magnéticos (siguen el cursor en hover)
 * - Carrusel cross-fade de mockups del portfolio
 * - Badge honesto: demo gratis antes de pagar (cero claims inventados)
 */
export default function HeroV2() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mag1Ref = useRef<HTMLAnchorElement>(null);
  const mag2Ref = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fine = window.matchMedia("(pointer: fine)").matches;

      if (noMotion) {
        // Vídeo parado en un frame estático, misma opacidad que animado
        if (videoRef.current) {
          videoRef.current.pause();
          gsap.set(videoRef.current, { autoAlpha: 0.55 });
        }
        // Sin animaciones: solo asegurar visibilidad (los slides 1+ quedan ocultos por CSS)
        gsap.set([".hv2-badge", ".hv2-word", ".hv2-subtitle", ".hv2-cta", ".hv2-trust", ".hv2-mockup-frame", ".hv2-slide-0"], {
          autoAlpha: 1,
          x: 0,
          y: 0,
          yPercent: 0,
          scale: 1,
        });
        return;
      }

      // Fade-in del vídeo de fondo cuando puede reproducirse (evita el pop)
      const video = videoRef.current;
      if (video) {
        gsap.set(video, { autoAlpha: 0 });
        const showVideo = () => gsap.to(video, { autoAlpha: 0.55, duration: 1.4, ease: "power2.out" });
        if (video.readyState >= 3) showVideo();
        else video.addEventListener("canplay", showVideo, { once: true });
      }

      // Aurora: dos blobs que respiran en loop
      gsap.to(".hv2-aurora-1", {
        xPercent: 18,
        yPercent: -12,
        scale: 1.25,
        duration: 9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(".hv2-aurora-2", {
        xPercent: -15,
        yPercent: 10,
        scale: 1.15,
        duration: 11,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Si el JS llega tarde (conexión lenta, Lighthouse), el contenido SSR ya
      // lleva rato pintado: re-ocultarlo para animarlo destroza LCP/Speed Index.
      const skipIntro = performance.now() > 1200;

      if (!skipIntro) {
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
      }

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
      className="grain relative min-h-screen flex items-center overflow-hidden pt-20 pb-24 bg-ink text-white"
    >
      {/* Vídeo aurora de fondo — solo desktop; en móvil quedan los blobs (222KB, muted loop) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none hidden lg:block"
        src="/hero-loop.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />

      {/* Aurora animada (fallback móvil / capa extra) */}
      <div className="hv2-aurora-1 absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[820px] max-h-[820px] bg-accent/25 rounded-full blur-3xl pointer-events-none lg:hidden" />
      <div className="hv2-aurora-2 absolute bottom-[-25%] right-[-5%] w-[45vw] h-[45vw] max-w-[680px] max-h-[680px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none lg:hidden" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,10,18,0.85)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-12 items-center">
        {/* Izquierda: contenido */}
        <div className="hv2-headline-stack">
          <span className="hv2-badge inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent-bright mb-8">
            <span className="w-8 h-px bg-accent-bright" aria-hidden />
            Agencia digital en Gran Canaria
          </span>

          <h1 className="font-display font-bold tracking-tight leading-[0.98] text-5xl md:text-6xl lg:text-6xl xl:text-7xl mb-6">
            <span className="block">
              <Word>Diseño</Word> <Word>web</Word> <Word>profesional</Word>
            </span>
            <span className="block">
              {/* "en Gran Canaria" — UN solo word para preservar bg-clip-text */}
              <span className="hv2-word-mask inline-block overflow-hidden align-bottom">
                <span className="hv2-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent-bright via-violet-400 to-sky-400">
                  en Gran Canaria
                </span>
              </span>
            </span>
            <span className="block text-white/70">
              <Word>con</Word> <Word>IA</Word> <Word>que</Word> <Word>atiende</Word>
            </span>
            <span className="block text-white/70">
              <Word>mientras</Word> <Word>duermes</Word>
            </span>
          </h1>

          <p className="hv2-subtitle text-base md:text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
            Webs profesionales para negocios en Gran Canaria. Sin permanencia,
            soporte en español y una IA integrada que responde a tus clientes 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              ref={mag1Ref}
              href="#contacto"
              className="hv2-cta group relative px-9 py-4 rounded-full bg-white text-ink font-semibold tracking-wide shadow-lg shadow-accent/20 overflow-hidden text-center"
              data-cursor
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Solicitar presupuesto gratis</span>
              <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              ref={mag2Ref}
              href="#servicios"
              className="hv2-cta px-9 py-4 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-colors font-semibold text-white/90 text-center"
              data-cursor
            >
              Ver servicios
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6 text-sm text-slate-400">
            <div className="hv2-trust flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Entrega en 7–14 días
            </div>
            <div className="hv2-trust flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Soporte en español
            </div>
            <div className="hv2-trust flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Sin permanencia
            </div>
          </div>
        </div>

        {/* Derecha: stack de mockups (cross-fade) */}
        <div className="hv2-mockup-stack hidden lg:block">
          <div className="hv2-mockup-frame relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-accent/20 border border-white/10 bg-ink-soft">
            {MOCKUPS.map((m, i) => (
              <div
                key={m.src}
                className={`hv2-mockup hv2-slide-${i} absolute inset-0 ${i > 0 ? "opacity-0" : ""}`}
              >
                <Image
                  src={m.src}
                  alt={`${m.label} — web creada por AI Design Canarias`}
                  fill
                  sizes="(max-width: 1023px) 0vw, 50vw"
                  className="object-cover object-top"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                  <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-medium border border-white/20">
                    {m.tag}
                  </span>
                  <span className="font-semibold drop-shadow">{m.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Badge flotante — honesto: cómo trabajamos, sin números inventados */}
          <div className="hv2-mockup-frame inline-flex items-center gap-3 mt-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl px-5 py-3">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-accent/20 text-accent-bright font-bold">✓</span>
            <div>
              <div className="text-xs text-slate-400">Cómo trabajamos</div>
              <div className="font-bold text-white text-sm">Demo gratis antes de pagar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Una palabra en un wrapper enmascarado (overflow hidden + translateY). */
function Word({ children }: { children: React.ReactNode }) {
  return (
    <span className="hv2-word-mask inline-block overflow-hidden align-bottom">
      <span className="hv2-word inline-block">{children}</span>
    </span>
  );
}
