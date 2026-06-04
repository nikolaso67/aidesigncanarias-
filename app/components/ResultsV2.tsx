"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "./agency/SectionTitle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const cases = [
  {
    stat: "180",
    suffix: "%",
    prefix: "+",
    label: "visitas orgánicas en 3 meses",
    sector: "Ferretería",
    location: "Maspalomas",
    service: "Web + SEO Local",
  },
  {
    stat: "60",
    suffix: "%",
    prefix: "",
    label: "de reservas llegan por web",
    sector: "Restaurante",
    location: "Las Palmas",
    service: "Web + Reservas online",
  },
  {
    stat: "24",
    suffix: "/7",
    prefix: "",
    label: "atención a pacientes sin personal",
    sector: "Clínica dental",
    location: "Gran Canaria",
    service: "Web + Chatbot IA",
  },
  {
    stat: "3",
    suffix: "×",
    prefix: "",
    label: "más ventas en temporada alta",
    sector: "Escuela de surf",
    location: "Maspalomas",
    service: "Tienda online + Pagos",
  },
];

export default function ResultsV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (noMotion) return;

      gsap.set(".rv2-card", { y: 60, autoAlpha: 0 });
      gsap.to(".rv2-card", {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".rv2-grid", start: "top 80%", once: true },
      });

      cases.forEach((c, i) => {
        const el = counterRefs.current[i];
        if (!el) return;
        const target = parseInt(c.stat, 10);
        const obj = { val: 0 };
        ScrollTrigger.create({
          trigger: ".rv2-grid",
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = c.prefix + Math.round(obj.val) + c.suffix;
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
      className="relative py-32 px-6 bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionTitle
            eyebrow="04 — Resultados"
            title={
              <>
                Datos que{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500">
                  se pueden medir
                </span>
              </>
            }
            description="Negocios reales con resultados reales. Sin humo, sin promesas mágicas, sin frases vacías."
          />
        </div>

        <div className="rv2-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-y border-slate-200">
          {cases.map((c, i) => (
            <div key={i} className="rv2-card p-8 lg:p-10 flex flex-col gap-3">
              <div className="font-extrabold tracking-tighter text-slate-900 text-6xl md:text-7xl leading-none">
                <span ref={(el) => { counterRefs.current[i] = el; }}>{c.prefix}0{c.suffix}</span>
              </div>
              <p className="text-slate-700 font-medium text-sm leading-snug">
                {c.label}
              </p>
              <div className="mt-auto pt-6 flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  {c.sector} · {c.location}
                </span>
                <span className="text-xs text-slate-500">{c.service}</span>
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
