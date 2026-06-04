"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "./agency/SectionTitle";
import ParallaxImage from "./agency/ParallaxImage";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    name: "La Taberna El Tablero",
    category: "Restaurante · Web + SEO local",
    description:
      "Web profesional para taberna familiar en El Tablero con menú digital, ubicación clara y SEO local. Recibe reservas todos los días desde Google.",
    tags: ["Next.js", "SEO Local", "Menú digital"],
    image: "/portfolio/taberna.webp",
    url: "https://taberna-el-tablero.vercel.app",
  },
  {
    name: "Cabana by Efi",
    category: "Gastrobar · Web de autor",
    description:
      "Rediseño completo para gastrobar de autor con identidad visual cuidada, galería de platos y reservas. Una web que vende experiencia, no solo comida.",
    tags: ["Diseño", "Identidad", "Mobile-first"],
    image: "/portfolio/cabana.webp",
    url: "https://cabana-by-efi.vercel.app",
  },
  {
    name: "Ferretería Corona Roja",
    category: "Comercio · Web + catálogo",
    description:
      "Web para ferretería en Playa del Inglés con catálogo de productos, ubicación visible y diseño que respeta la identidad histórica del negocio.",
    tags: ["Catálogo", "SEO Local", "Branding"],
    image: "/portfolio/corona.webp",
    url: "https://coronaroja.vercel.app",
  },
];

export default function PortfolioV2() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (noMotion) return;

      gsap.set(".pv2-card", { y: 80, autoAlpha: 0 });
      gsap.to(".pv2-card", {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".pv2-grid", start: "top 80%", once: true },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative py-32 px-6 bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionTitle
            eyebrow="03 — Portfolio"
            title={
              <>
                Trabajos hechos para{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500">
                  negocios reales
                </span>
              </>
            }
            description="Webs en producción, no mockups. Cada una entregada en 7–14 días, con SEO local y diseño hecho a medida del negocio."
          />
        </div>

        <div className="pv2-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`pv2-card group relative ${i === 0 ? "md:col-span-2" : ""}`}
              data-cursor
            >
              <div className="relative rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-200">
                <ParallaxImage
                  src={p.image}
                  alt={`${p.name} — web creada por AI Design Canarias`}
                  sizes={i === 0 ? "(max-width: 767px) 100vw, 1200px" : "(max-width: 767px) 100vw, 600px"}
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  frameClassName="aspect-[16/10] rounded-3xl bg-slate-100"
                  intensity={0.7}
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <span className="inline-block text-xs font-medium tracking-widest uppercase text-white/70 mb-2">
                      {p.category}
                    </span>
                    <h3 className="font-bold text-white text-2xl md:text-3xl leading-tight">
                      {p.name}
                    </h3>
                  </div>
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-white text-slate-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 shrink-0" aria-hidden>
                    ↗
                  </span>
                </div>
              </div>

              <div className="mt-6 px-2">
                <p className="text-slate-600 leading-relaxed mb-4 max-w-2xl">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
