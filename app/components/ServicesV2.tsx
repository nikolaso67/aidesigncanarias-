"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../servicios/data";
import SectionTitle from "./agency/SectionTitle";
import Parallax from "./agency/Parallax";

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
      className="relative py-32 px-6 bg-white overflow-hidden"
    >
      {/* Background sutil con parallax */}
      <Parallax speed={0.4} className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-0">
        <span />
      </Parallax>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-12 mb-20 flex-wrap">
          <SectionTitle
            eyebrow="01 — Lo que hacemos"
            title={
              <>
                Servicios para que tu negocio{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500">
                  venda más online
                </span>
              </>
            }
            description="9 capacidades que combinamos según lo que necesita tu negocio. Desde una web nueva en 14 días hasta un chatbot con IA atendiendo de madrugada."
          />
        </div>

        <div className="sv2-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="sv2-card group relative p-8 rounded-3xl border border-slate-200 bg-white hover:border-slate-900 hover:bg-slate-50 transition-all duration-300 overflow-hidden"
              data-cursor
            >
              {/* Glow indigo al hover */}
              <span className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative">
                <span className="block text-5xl mb-6" aria-hidden>
                  {s.icon}
                </span>
                <h3 className="font-bold text-2xl text-slate-900 mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
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
