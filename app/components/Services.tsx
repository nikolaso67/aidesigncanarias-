"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../servicios/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.set(".services-header", { y: 50, autoAlpha: 0 });
    gsap.set(".service-card", { y: 60, autoAlpha: 0 });

    gsap.to(".services-header", {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".services-header", start: "top 85%", once: true },
    });

    gsap.to(".service-card", {
      y: 0,
      autoAlpha: 1,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: { trigger: ".services-grid", start: "top 85%", once: true },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="servicios" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="services-header text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-500">
            Lo que hacemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Servicios
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Todo lo que necesita tu negocio para tener una presencia digital
            sólida y atraer más clientes.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="service-card p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
