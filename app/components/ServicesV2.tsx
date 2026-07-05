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
            description="9 capacidades que combinamos según lo que necesita tu negocio. Desde una web nueva en 14 días hasta un chatbot con IA atendiendo de madrugada."
          />
        </div>

        <div className="sv2-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="sv2-card group relative p-8 rounded-3xl border border-ink/10 bg-white hover:bg-ink hover:border-ink transition-colors duration-300 overflow-hidden"
              data-cursor
            >
              <div className="relative">
                <span
                  className="block font-display font-bold text-sm tracking-[0.2em] text-accent mb-8"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-bold text-2xl text-ink group-hover:text-white mb-3 leading-tight transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed mb-6 transition-colors duration-300">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-accent-bright transition-colors duration-300">
                  Ver más
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
