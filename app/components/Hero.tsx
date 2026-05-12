"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Set initial states
      gsap.set(".hero-badge", { opacity: 0, y: -16 });
      gsap.set(".hero-title", { opacity: 0, y: 40 });
      gsap.set(".hero-subtitle", { opacity: 0, y: 24 });
      gsap.set(".hero-buttons", { opacity: 0, y: 20 });
      gsap.set(".hero-trust", { opacity: 0, y: 12 });
      gsap.set(".hero-image", { opacity: 0, x: 60 });
      gsap.set(".hero-float-badge", { opacity: 0, y: 20, scale: 0.85 });
      gsap.set(".hero-blob-1", { scale: 0.85 });
      gsap.set(".hero-blob-2", { scale: 0.8 });

      tl.to(".hero-badge", { opacity: 1, y: 0, duration: 0.6 })
        .to(".hero-title", { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
        .to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(".hero-buttons", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to(".hero-trust", { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
        .to(".hero-image", { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.8")
        .to(".hero-float-badge", { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.5)" }, "-=0.3")
        .to(".hero-blob-1", { scale: 1, duration: 1.2, ease: "power2.out" }, 0)
        .to(".hero-blob-2", { scale: 1, duration: 1.4, ease: "power2.out" }, 0.1);

      // Subtle floating loop for blobs
      gsap.to(".hero-blob-1", {
        y: -20,
        x: 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
      gsap.to(".hero-blob-2", {
        y: 15,
        x: -8,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });

      // Subtle hover float for the image
      gsap.to(".hero-image", {
        y: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-sky-100" />
      <div className="hero-blob-1 absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="hero-blob-2 absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        {/* Text */}
        <div>
          <span className="hero-badge inline-block text-xs font-medium tracking-widest uppercase text-indigo-600 mb-6 px-3 py-1 border border-indigo-200 bg-indigo-50 rounded-full">
            Agencia digital en Gran Canaria
          </span>

          <h1 className="hero-title text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Diseño web profesional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">
              en Gran Canaria
            </span>{" "}
            — con IA que atiende mientras duermes
          </h1>

          <p className="hero-subtitle text-xl text-slate-600 mb-10 leading-relaxed">
            Webs profesionales para negocios en Gran Canaria. Sin permanencia,
            con soporte en español y una IA integrada que responde a tus
            clientes 24/7.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-white shadow-lg shadow-indigo-500/25 text-center"
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

        {/* Image */}
        <div className="hero-image relative hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/60 aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80"
              alt="Diseño web profesional para negocios en Las Palmas de Gran Canaria"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-transparent" />
          </div>
          {/* Floating badge */}
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
