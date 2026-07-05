"use client";

import ParallaxImage from "./agency/ParallaxImage";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Parallax from "./agency/Parallax";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Compromisos verificables — nada de cifras infladas
const stats = [
  { value: 14, suffix: " días", label: "Entrega máxima" },
  { value: 100, suffix: "%", label: "Sin permanencia" },
  { value: 24, suffix: "/7", label: "IA atendiendo" },
  { value: 24, suffix: "h", label: "Respuesta a presupuestos" },
];

export default function AboutV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (noMotion) return;

      gsap.set(".av2-image", { clipPath: "inset(100% 0% 0% 0%)", autoAlpha: 0 });
      gsap.set(".av2-image-badge", { scale: 0.6, autoAlpha: 0 });
      gsap.set(".av2-text-block > *", { y: 30, autoAlpha: 0 });
      gsap.set(".av2-stat", { y: 30, autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: ".av2-image",
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(".av2-image", {
            clipPath: "inset(0% 0% 0% 0%)",
            autoAlpha: 1,
            duration: 1.1,
            ease: "power3.inOut",
          });
          gsap.to(".av2-image-badge", {
            scale: 1,
            autoAlpha: 1,
            duration: 0.55,
            ease: "back.out(1.7)",
            delay: 0.7,
          });
        },
      });

      gsap.to(".av2-text-block > *", {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".av2-text-block", start: "top 82%", once: true },
      });

      gsap.to(".av2-stat", {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".av2-stats", start: "top 85%", once: true },
      });

      stats.forEach((s, i) => {
        const el = counterRefs.current[i];
        if (!el) return;
        const obj = { val: 0 };
        ScrollTrigger.create({
          trigger: ".av2-stats",
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              val: s.value,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = Math.round(obj.val) + s.suffix;
              },
            });
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="sobre-nosotros"
      className="grain relative py-32 px-6 bg-ink text-white overflow-hidden"
    >
      {/* Mesh gradient con parallax */}
      <Parallax speed={0.4} className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-accent/15 rounded-full blur-3xl pointer-events-none">
        <span />
      </Parallax>
      <Parallax speed={-0.5} className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none">
        <span />
      </Parallax>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="av2-text-block lg:col-span-7 order-2 lg:order-1">
            <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent-bright mb-6">
              <span className="w-8 h-px bg-accent-bright" aria-hidden />
              02 — Nosotros
            </span>
            <h2 className="font-display font-bold tracking-tight leading-[1.02] text-4xl md:text-5xl lg:text-6xl mb-8">
              Diseñadores. Developers.{" "}
              <span className="text-accent-bright">Expertos en IA.</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-5 max-w-2xl">
              Un equipo con base en Gran Canaria que combina diseño moderno con
              tecnología de IA para dar a los negocios locales las mismas
              herramientas que usan las grandes empresas — sin los precios de
              las grandes empresas.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Si tienes un negocio en Canarias y quieres más clientes, más
              visibilidad y una web que trabaje por ti, estás en el lugar
              correcto.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-ink hover:bg-accent hover:text-white transition-colors font-semibold"
              data-cursor
            >
              Hablemos de tu proyecto
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Imagen */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <div className="av2-image relative rounded-3xl shadow-2xl shadow-indigo-500/20">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80"
                  alt="Gran Canaria — base de AI Design Canarias"
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover"
                  frameClassName="rounded-3xl aspect-[4/5]"
                  intensity={1.2}
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="av2-image-badge absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl px-5 py-3 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>🌴</span>
                <div>
                  <div className="text-xs text-slate-500">Con base en</div>
                  <div className="font-bold text-slate-900 text-sm">Gran Canaria</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats en fila */}
        <div className="av2-stats grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
          {stats.map((s, i) => (
            <div key={s.label} className="av2-stat">
              <div className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">
                <span ref={(el) => { counterRefs.current[i] = el; }}>0{s.suffix}</span>
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
