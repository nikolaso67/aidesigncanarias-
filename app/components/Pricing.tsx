"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const plans = [
  {
    name: "Esencial",
    price: 299,
    monthly: 39,
    description: "Para negocios que necesitan presencia digital profesional.",
    features: [
      "Hasta 5 páginas",
      "Diseño responsive (móvil)",
      "Formulario de contacto",
      "Google Analytics",
      "SEO básico on-page",
      "Hosting incluido",
      "Entrega en 7–14 días",
    ],
    cta: "Solicitar presupuesto",
    highlighted: false,
    badge: null,
  },
  {
    name: "Profesional",
    price: 499,
    monthly: 49,
    description: "Para negocios que quieren crecer en Google y captar más clientes.",
    features: [
      "Hasta 10 páginas",
      "Todo lo del plan Esencial",
      "Blog integrado",
      "SEO local avanzado",
      "Google Business optimizado",
      "Ediciones mensuales incluidas",
      "Entrega en 7–14 días",
    ],
    cta: "Solicitar presupuesto",
    highlighted: true,
    badge: "Más popular",
  },
  {
    name: "Premium + IA",
    price: 699,
    monthly: 69,
    description: "Para negocios que quieren atender clientes las 24h sin esfuerzo.",
    features: [
      "Páginas ilimitadas",
      "Todo lo del plan Profesional",
      "Chatbot IA personalizado 24/7",
      "Sistema de reservas o citas",
      "Informes mensuales de SEO",
      "Soporte prioritario",
      "Entrega en 7–14 días",
    ],
    cta: "Solicitar presupuesto",
    highlighted: false,
    badge: null,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const inView = (selector: string) => {
      const el = sectionRef.current?.querySelector(selector);
      return el ? el.getBoundingClientRect().top < window.innerHeight * 0.9 : false;
    };

    if (!inView(".pricing-header")) {
      gsap.set(".pricing-header", { y: 40, autoAlpha: 0 });
      gsap.to(".pricing-header", {
        y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".pricing-header", start: "top 85%", once: true },
      });
    }

    if (!inView(".pricing-grid")) {
      gsap.set(".pricing-card", { y: 60, autoAlpha: 0, scale: 0.97 });
      gsap.to(".pricing-card", {
        y: 0, autoAlpha: 1, scale: 1, duration: 0.65, ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".pricing-grid", start: "top 85%", once: true },
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="precios" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="pricing-header text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-500">
            Precios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900">
            Transparentes y sin sorpresas
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Pago único para lanzar tu web. Mantenimiento mensual opcional, sin permanencia, cancela cuando quieras.
          </p>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative rounded-2xl p-8 flex flex-col gap-6 ${
                plan.highlighted
                  ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-500/30 scale-[1.02]"
                  : "bg-white border border-slate-100 shadow-sm"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-indigo-600 text-xs font-bold px-4 py-1 rounded-full shadow border border-indigo-100">
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-indigo-200" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div>
                <div className="flex items-end gap-1">
                  <span className={`text-5xl font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                    {plan.price}€
                  </span>
                  <span className={`mb-2 text-sm ${plan.highlighted ? "text-indigo-200" : "text-slate-400"}`}>
                    pago único
                  </span>
                </div>
                <div className={`text-sm mt-1 ${plan.highlighted ? "text-indigo-200" : "text-slate-500"}`}>
                  + {plan.monthly}€/mes mantenimiento
                </div>
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-indigo-200" : "text-indigo-500"}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? "text-indigo-100" : "text-slate-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-auto text-center text-sm font-bold py-3 px-6 rounded-full transition-colors ${
                  plan.highlighted
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-500"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Tienda online */}
        <div className="mt-8 bg-white border border-slate-100 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-indigo-500">Complemento</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">Tienda online</h3>
            <p className="text-slate-500 text-sm mt-1">
              E-commerce completo con pasarela de pago, gestión de productos y pedidos.
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-3xl font-extrabold text-slate-900">699€</div>
            <div className="text-sm text-slate-400">+ 59€/mes mantenimiento</div>
          </div>
          <a
            href="#contacto"
            className="shrink-0 text-sm font-bold py-3 px-6 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
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
