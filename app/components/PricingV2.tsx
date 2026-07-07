"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "./agency/SectionTitle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const plans = [
  {
    name: "Esencial",
    price: 299,
    monthly: 39,
    description: "Presencia digital profesional para empezar.",
    features: [
      "Hasta 5 páginas",
      "Diseño responsive móvil",
      "Formulario de contacto",
      "Google Analytics",
      "SEO básico on-page",
      "Hosting incluido",
      "Entrega en 7–14 días",
    ],
    highlighted: false,
  },
  {
    name: "Profesional",
    price: 499,
    monthly: 49,
    description: "Para crecer en Google y captar más clientes.",
    features: [
      "Hasta 10 páginas",
      "Todo lo del Esencial",
      "Blog integrado",
      "SEO local avanzado",
      "Google Business optimizado",
      "Ediciones mensuales incluidas",
      "Entrega en 7–14 días",
    ],
    highlighted: true,
  },
  {
    name: "Premium + IA",
    price: 699,
    monthly: 69,
    description: "Atender clientes 24/7 sin esfuerzo humano.",
    features: [
      "Páginas ilimitadas",
      "Todo lo del Profesional",
      "Chatbot IA personalizado 24/7",
      "Sistema de reservas o citas",
      "Informes mensuales de SEO",
      "Soporte prioritario",
      "Entrega en 7–14 días",
    ],
    highlighted: false,
  },
];

export default function PricingV2() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (noMotion) return;

      gsap.set(".prv2-card", { y: 60, autoAlpha: 0 });
      gsap.to(".prv2-card", {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".prv2-grid", start: "top 80%", once: true },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="precios"
      className="relative py-32 px-6 bg-paper overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionTitle
            eyebrow="06 — Precios"
            title={
              <>
                Transparentes.{" "}
                <span className="text-accent">Sin sorpresas.</span>
              </>
            }
            description="Pago único para lanzar tu web. Mantenimiento mensual opcional, sin permanencia. Cancelas cuando quieras."
          />
        </div>

        <div className="prv2-grid grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`prv2-card relative rounded-3xl p-8 flex flex-col gap-6 ${
                plan.highlighted
                  ? "bg-ink text-white shadow-2xl shadow-ink/25"
                  : "bg-white border border-ink/10"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 bg-accent text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  Más popular
                </span>
              )}

              <div>
                <h3 className={`font-display text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-slate-300" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className={`font-display text-5xl md:text-6xl font-bold tracking-tight ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-2xl font-bold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>€</span>
                  <span className={`ml-2 text-xs ${plan.highlighted ? "text-slate-400" : "text-slate-400"}`}>
                    pago único
                  </span>
                </div>
                <div className={`text-sm mt-1 ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                  + {plan.monthly}€/mes mantenimiento
                </div>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-accent-bright" : "text-accent"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? "text-slate-200" : "text-slate-700"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-auto text-center text-sm font-semibold py-3.5 px-6 rounded-full transition-colors ${
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-accent-bright"
                    : "bg-ink text-white hover:bg-accent"
                }`}
                data-cursor
              >
                Solicitar presupuesto
              </a>
            </div>
          ))}
        </div>

        {/* Complemento tienda online */}
        <div className="prv2-card mt-8 bg-white border border-ink/10 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-2 block">
              Complemento
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">Tienda online</h3>
            <p className="text-slate-500 text-sm">
              E-commerce completo: pasarela de pago, gestión de productos y pedidos.
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-display text-4xl font-bold tracking-tight text-slate-900">699€</div>
            <div className="text-xs text-slate-400">+ 59€/mes mantenimiento</div>
          </div>
          <a
            href="#contacto"
            className="shrink-0 text-sm font-semibold py-3.5 px-6 rounded-full bg-ink text-white hover:bg-accent transition-colors"
            data-cursor
          >
            Solicitar presupuesto
          </a>
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          Sin permanencia · Cancela el mantenimiento cuando quieras · Precios con IGIC incluido
        </p>
      </div>
    </section>
  );
}
