"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const cases = [
  {
    stat: "+180%",
    label: "visitas orgánicas en 3 meses",
    sector: "Ferretería",
    location: "Maspalomas",
    service: "Web + SEO Local",
    color: "text-indigo-600",
    border: "border-indigo-100",
    bg: "bg-indigo-50/50",
  },
  {
    stat: "60%",
    label: "de reservas llegan por web",
    sector: "Restaurante",
    location: "Las Palmas",
    service: "Web + Reservas online",
    color: "text-violet-600",
    border: "border-violet-100",
    bg: "bg-violet-50/50",
  },
  {
    stat: "24/7",
    label: "atención a pacientes sin personal",
    sector: "Clínica dental",
    location: "Gran Canaria",
    service: "Web + Chatbot IA",
    color: "text-emerald-600",
    border: "border-emerald-100",
    bg: "bg-emerald-50/50",
  },
  {
    stat: "×3",
    label: "más ventas en temporada alta",
    sector: "Escuela de surf",
    location: "Maspalomas",
    service: "Tienda online + Pagos",
    color: "text-orange-500",
    border: "border-orange-100",
    bg: "bg-orange-50/50",
  },
];

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const inView = (selector: string) => {
      const el = sectionRef.current?.querySelector(selector);
      return el ? el.getBoundingClientRect().top < window.innerHeight * 0.9 : false;
    };

    if (!inView(".results-header")) {
      gsap.set(".results-header", { y: 40, autoAlpha: 0 });
      gsap.to(".results-header", {
        y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".results-header", start: "top 85%", once: true },
      });
    }

    if (!inView(".results-grid")) {
      gsap.set(".results-card", { y: 60, autoAlpha: 0, scale: 0.97 });
      gsap.to(".results-card", {
        y: 0, autoAlpha: 1, scale: 1, duration: 0.65, ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".results-grid", start: "top 85%", once: true },
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="results-header text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-500">
            Resultados reales
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900">
            Lo que conseguimos para nuestros clientes
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Negocios reales en Gran Canaria con resultados medibles. Sin humo.
          </p>
        </div>

        <div className="results-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <div
              key={c.stat + c.sector}
              className={`results-card rounded-2xl border ${c.border} ${c.bg} p-7 flex flex-col gap-3`}
            >
              <div className={`text-5xl font-extrabold tracking-tight ${c.color}`}>
                {c.stat}
              </div>
              <p className="text-slate-700 font-medium leading-snug">{c.label}</p>
              <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-1">
                <span className="text-xs font-semibold text-slate-800">
                  {c.sector} · {c.location}
                </span>
                <span className="text-xs text-slate-400">{c.service}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          Datos basados en proyectos reales. Los nombres de los clientes se mantienen confidenciales.
        </p>
      </div>
    </section>
  );
}
