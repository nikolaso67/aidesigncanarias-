"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { scrambleText } from "../utils/scramble";
import ParticleCanvas from "./ParticleCanvas";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(".hero-badge", { y: -20, autoAlpha: 0 });
    gsap.set(".hero-subtitle", { y: 30, autoAlpha: 0 });
    gsap.set(".hero-buttons", { y: 20, autoAlpha: 0 });
    gsap.set(".hero-trust", { autoAlpha: 0, x: -10 });
    gsap.set(".hero-image", { x: 60, autoAlpha: 0 });
    gsap.set(".hero-float-badge", { y: 20, autoAlpha: 0, scale: 0.85 });

    // Each line starts scattered at a random position
    gsap.set(".hero-line", {
      x: () => (Math.random() - 0.5) * 520,
      y: () => (Math.random() - 0.5) * 340,
      rotation: () => (Math.random() - 0.5) * 18,
      autoAlpha: 0,
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(".hero-badge", { y: 0, autoAlpha: 1, duration: 0.5 })
      .to(".hero-line", {
        x: 0, y: 0, rotation: 0, autoAlpha: 1,
        duration: 1.0,
        stagger: 0.12,
        ease: "power3.out",
      }, "-=0.2")
      .to(".hero-subtitle", { y: 0, autoAlpha: 1, duration: 0.6 }, "-=0.5")
      .to(".hero-buttons", { y: 0, autoAlpha: 1, duration: 0.5 }, "-=0.35")
      .to(".hero-trust", { autoAlpha: 1, x: 0, duration: 0.4, stagger: 0.12 }, "-=0.25")
      .to(".hero-image", { x: 0, autoAlpha: 1, duration: 0.9, ease: "power2.out" }, 0.3)
      .to(".hero-float-badge", { y: 0, autoAlpha: 1, scale: 1, duration: 0.55, ease: "back.out(1.7)" }, "-=0.25");

    // Scramble starts simultaneously with each line's flight
    const lineData: [React.RefObject<HTMLDivElement | null>, string, number, boolean][] = [
      [line1Ref, "Diseño web profesional", 0.3, false],
      [line2Ref, "en Gran Canaria", 0.42, true],
      [line3Ref, "— con IA que atiende", 0.54, false],
      [line4Ref, "mientras duermes", 0.66, false],
    ];
    lineData.forEach(([ref, text, delay, useSpan]) => {
      gsap.delayedCall(delay, () => {
        const el = useSpan
          ? (ref.current?.querySelector("span") as HTMLElement | null)
          : ref.current;
        if (el) scrambleText(el, text, 1.5);
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-sky-100" />
      <ParticleCanvas />
      <div className="hero-blob-1 absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-400/15 rounded-full blur-2xl pointer-events-none" style={{ willChange: "transform" }} />
      <div className="hero-blob-2 absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-300/15 rounded-full blur-2xl pointer-events-none" style={{ willChange: "transform" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        <div>
          <span className="hero-badge inline-block text-xs font-medium tracking-widest uppercase text-indigo-600 mb-6 px-3 py-1 border border-indigo-200 bg-indigo-50 rounded-full">
            Agencia digital en Gran Canaria
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            <div ref={line1Ref} className="hero-line">Diseño web profesional</div>
            <div ref={line2Ref} className="hero-line">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">
                en Gran Canaria
              </span>
            </div>
            <div ref={line3Ref} className="hero-line">— con IA que atiende</div>
            <div ref={line4Ref} className="hero-line">mientras duermes</div>
          </h1>

          <p className="hero-subtitle text-xl text-slate-600 mb-10 leading-relaxed">
            Webs profesionales para negocios en Gran Canaria. Sin permanencia,
            con soporte en español y una IA integrada que responde a tus
            clientes 24/7.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-bold text-white tracking-wide shadow-lg shadow-indigo-500/25 text-center"
            >
              Solicitar presupuesto gratis
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 rounded-full border border-slate-300 hover:border-indigo-400 hover:bg-indigo-50 transition-colors font-semibold text-slate-700 text-center"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-6 text-sm text-slate-500">
            <div className="hero-trust flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Entrega en 7–14 días
            </div>
            <div className="hero-trust flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Soporte en español
            </div>
            <div className="hero-trust flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Sin permanencia
            </div>
          </div>
        </div>

        <div className="hero-image relative hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/60 aspect-[4/3]" style={{ willChange: "transform", transform: "translateZ(0)" }}>
            <Image
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80"
              alt="Diseño web profesional para negocios en Las Palmas de Gran Canaria"
              fill
              sizes="(max-width: 1023px) 0vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-transparent" />
          </div>
          <div className="hero-float-badge absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3 border border-slate-100">
            <span className="text-2xl">🚀</span>
            <div>
              <div className="text-xs text-slate-500">Tiempo de entrega</div>
              <div className="font-bold text-slate-900 text-sm">7–14 días</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
