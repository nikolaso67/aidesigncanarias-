"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "./agency/SectionTitle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Compromisos medibles — cosas que garantizamos en cada proyecto.
 * Nada de casos de éxito inventados: solo promesas que podemos firmar.
 */
const commitments = [
  {
    stat: "90",
    suffix: "+",
    prefix: "",
    label: "de puntuación en Google PageSpeed como objetivo en cada entrega",
    detail: "Rendimiento",
  },
  {
    stat: "14",
    suffix: " días",
    prefix: "",
    label: "máximo desde que empezamos hasta que tu web está online",
    detail: "Entrega",
  },
  {
    stat: "24",
    suffix: "h",
    prefix: "",
    label: "para responderte con presupuesto cerrado, sin letra pequeña",
    detail: "Respuesta",
  },
  {
    stat: "0",
    suffix: "€",
    prefix: "",
    label: "de coste de salida: sin permanencia y tu web es tuya",
    detail: "Libertad",
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

      commitments.forEach((c, i) => {
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
      className="grain relative py-32 px-6 bg-ink text-white overflow-hidden"
    >
      <div className="absolute top-0 left-1/3 w-[600px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionTitle
            eyebrow="04 — Compromisos"
            tone="dark"
            title={
              <>
                Lo que firmamos{" "}
                <span className="text-accent-bright">contigo</span>
              </>
            }
            description="Sin métricas infladas ni casos inventados. Esto es lo que te garantizamos por escrito en cada proyecto — y lo puedes comprobar."
          />
        </div>

        <div className="rv2-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10">
          {commitments.map((c, i) => (
            <div key={i} className="rv2-card p-8 lg:p-10 flex flex-col gap-3">
              <div className="font-display font-bold tracking-tight text-accent-bright text-6xl md:text-7xl leading-none">
                <span ref={(el) => { counterRefs.current[i] = el; }}>{c.prefix}0{c.suffix}</span>
              </div>
              <p className="text-slate-300 font-medium text-sm leading-snug">
                {c.label}
              </p>
              <div className="mt-auto pt-6">
                <span className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em]">
                  {c.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
