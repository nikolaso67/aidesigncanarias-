"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  { value: "30+", label: "Proyectos entregados" },
  { value: "100%", label: "Clientes satisfechos" },
  { value: "7–14", label: "Días de entrega" },
  { value: "24/7", label: "Soporte con IA" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Set initial states
    gsap.set(".about-image", { clipPath: "inset(100% 0% 0% 0%)", autoAlpha: 0 });
    gsap.set(".about-location-badge", { scale: 0.6, autoAlpha: 0 });
    gsap.set(".about-label, .about-heading, .about-p, .about-cta", { y: 40, autoAlpha: 0 });
    gsap.set(".stat-card", { scale: 0.65, autoAlpha: 0 });

    // Image wipe up
    ScrollTrigger.create({
      trigger: ".about-image",
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(".about-image", { clipPath: "inset(0% 0% 0% 0%)", autoAlpha: 1, duration: 1, ease: "power3.inOut" });
        gsap.to(".about-location-badge", { scale: 1, autoAlpha: 1, duration: 0.5, ease: "back.out(1.7)", delay: 0.7 });
      },
    });

    // Text stagger
    ScrollTrigger.create({
      trigger: ".about-heading",
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(".about-label, .about-heading, .about-p, .about-cta", {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        });
      },
    });

    // Stats bounce
    gsap.to(".stat-card", {
      scale: 1,
      autoAlpha: 1,
      duration: 0.55,
      ease: "back.out(1.7)",
      stagger: 0.1,
      scrollTrigger: { trigger: ".stats-grid", start: "top 88%", once: true },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="sobre-nosotros" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <div className="about-image relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200 aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80"
              alt="Gran Canaria"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent pointer-events-none" />
          </div>
          <div className="about-location-badge absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3 border border-slate-100">
            <span className="text-2xl">🌴</span>
            <div>
              <div className="text-xs text-slate-500">Con base en</div>
              <div className="font-bold text-slate-900 text-sm">Gran Canaria</div>
            </div>
          </div>
        </div>

        {/* Text + Stats */}
        <div className="order-1 lg:order-2">
          <span className="about-label text-xs font-medium tracking-widest uppercase text-indigo-500">
            Quiénes somos
          </span>
          <h2 className="about-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
            Somos AI Design, un equipo de profesionales
          </h2>
          <p className="about-p text-slate-600 leading-relaxed mb-4">
            Diseñadores, desarrolladores, especialistas en inteligencia
            artificial y expertos en publicidad digital con sede en Gran
            Canaria, unidos por un mismo objetivo: hacer crecer los negocios
            locales en el entorno digital.
          </p>
          <p className="about-p text-slate-600 leading-relaxed mb-4">
            Combinamos diseño moderno con tecnología de IA para dar a los
            negocios de las Islas Canarias las mismas herramientas que usan las
            grandes empresas — sin los precios de las grandes empresas.
          </p>
          <p className="about-p text-slate-600 leading-relaxed mb-8">
            Si tienes un negocio en el sur de Gran Canaria y quieres más
            clientes, más visibilidad y una web que trabaje por ti, estás en el
            lugar correcto.
          </p>
          <a
            href="#contacto"
            className="about-cta inline-block px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-sm text-white"
          >
            Hablemos de tu proyecto
          </a>

          <div className="stats-grid grid grid-cols-2 gap-4 mt-10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="stat-card p-5 rounded-2xl border border-slate-100 bg-slate-50 shadow-sm text-center"
              >
                <div className="text-3xl font-bold text-indigo-600 mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
