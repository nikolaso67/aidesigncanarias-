"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../servicios/data";
import SectionTitle from "./agency/SectionTitle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ServicesV2() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (noMotion) return;

      gsap.set(".sv2-card", { y: 60, autoAlpha: 0 });
      gsap.to(".sv2-card", {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: { trigger: ".sv2-grid", start: "top 80%", once: true },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="relative py-32 px-6 bg-paper overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-12 mb-20 flex-wrap">
          <SectionTitle
            eyebrow="01 — Lo que hacemos"
            title={
              <>
                Servicios para que tu negocio{" "}
                <span className="text-accent">venda más online</span>
              </>
            }
            description="10 capacidades que combinamos según lo que necesita tu negocio. Desde una web nueva en 14 días hasta un chatbot con IA atendiendo de madrugada."
          />
        </div>

        <div className="sv2-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="sv2-card group relative flex flex-col p-8 rounded-3xl border border-ink/10 bg-white hover:bg-ink hover:border-ink hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-ink/10"
              data-cursor
            >
              {/* Icono gigante decorativo de fondo */}
              <span
                className="absolute -right-3 -top-3 text-8xl opacity-[0.05] group-hover:opacity-10 transition-opacity duration-300 select-none pointer-events-none"
                aria-hidden
              >
                {s.icon}
              </span>

              <div className="relative flex flex-col flex-1">
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="font-display font-bold text-sm tracking-[0.2em] text-accent"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-xl group-hover:bg-white/10 transition-colors duration-300"
                    aria-hidden
                  >
                    {s.icon}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-ink group-hover:text-white mb-3 leading-tight transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed mb-6 flex-1 transition-colors duration-300">
                  {s.description}
                </p>

                <div className="flex items-center justify-between gap-4 pt-5 border-t border-ink/8 group-hover:border-white/10 transition-colors duration-300">
                  <span className="text-xs font-medium text-slate-400 group-hover:text-slate-500 transition-colors duration-300">
                    {s.pricing.headline}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-accent-bright transition-colors duration-300">
                    Ver más
                    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
