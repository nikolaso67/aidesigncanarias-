"use client";

import { useRef } from "react";
import Link from "next/link";
import Piece from "./Pieces";
import { DISCIPLINES, useHeroIntro, useRotation } from "./shared";

/**
 * Variantes B y C, "Índice": titular de agencia a la izquierda y, a la derecha,
 * las disciplinas como tipografía gigante que se enciende de una en una.
 * - tone="dark" + preview: fondo tinta con la pieza en miniatura de cada disciplina (B)
 * - tone="light" sin preview: blanco, solo tipografía (C, la más minimalista)
 * Cada disciplina enlaza a su servicio; hover o foco la fija y pausa la rotación.
 */
export default function HeroIndex({ tone, preview }: { tone: "dark" | "light"; preview: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { active, setActive, paused, setPaused } = useRotation(DISCIPLINES.length);
  useHeroIntro(sectionRef);

  const dark = tone === "dark";
  const current = DISCIPLINES[active];

  const hold = (i: number) => {
    setActive(i);
    setPaused(true);
  };

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${dark ? "grain bg-ink text-white" : "bg-white text-ink"}`}
    >
      {dark && (
        <div
          className="absolute top-[-20%] left-[-10%] w-[55vw] h-[55vw] max-w-[820px] max-h-[820px] rounded-full bg-accent/20 blur-3xl pointer-events-none"
          aria-hidden
        />
      )}

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-24 lg:pb-12 min-h-[100dvh] grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        <div className={preview ? "lg:col-span-5" : "lg:col-span-6"}>
          <span
            className={`ha-pill inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${
              dark ? "border-white/15 bg-white/5 text-white/80" : "border-ink/10 text-slate-700"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={`w-3.5 h-3.5 ${dark ? "text-accent-bright" : "text-accent"}`} aria-hidden>
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
            Demo gratis antes de pagar
          </span>

          <h1 className={`mt-8 font-display font-bold tracking-tight leading-[0.92] ${preview ? "text-[clamp(2.75rem,min(4.6vw,10vh),5rem)]" : "text-[clamp(3rem,min(5.4vw,11vh),5.75rem)]"}`}>
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="ha-line block">Agencia digital</span>
            </span>{" "}
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="ha-line block">
                en Gran Canaria<span className={dark ? "text-accent-bright" : "text-accent"}>.</span>
              </span>
            </span>
          </h1>

          <p className={`ha-fade mt-7 text-lg max-w-md leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>
            Webs, inteligencia artificial, SEO, marca y publicidad con un mismo equipo. Cerca y sin permanencia.
          </p>

          <div className="ha-fade mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="#contacto"
              className={`group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold transition-colors duration-300 active:scale-[0.98] ${
                dark ? "bg-white text-ink hover:bg-accent hover:text-white" : "bg-ink text-white hover:bg-accent"
              }`}
              data-cursor
            >
              Solicitar presupuesto
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
            </a>
            <a
              href="#servicios"
              className={`inline-flex items-center justify-center rounded-full border px-8 py-4 font-semibold transition-colors duration-300 active:scale-[0.98] ${
                dark ? "border-white/20 text-white/90 hover:border-white/60" : "border-ink/15 text-ink hover:border-ink/40"
              }`}
              data-cursor
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className={`ha-visual ${preview ? "lg:col-span-7 lg:flex items-center gap-8 xl:gap-10" : "lg:col-span-6"}`}>
          <div className="flex-1 min-w-0">
            <ul onMouseLeave={() => setPaused(false)}>
              {DISCIPLINES.map((dsc, i) => {
                const on = i === active;
                return (
                  <li key={dsc.id}>
                    <Link
                      href={`/servicios/${dsc.slug}`}
                      onMouseEnter={() => hold(i)}
                      onFocus={() => hold(i)}
                      onBlur={() => setPaused(false)}
                      className="group relative inline-flex items-center gap-4 py-1 md:py-1.5"
                      data-cursor
                    >
                      <span
                        className={`font-display font-bold tracking-tight leading-[1.08] whitespace-nowrap transition-[color,transform] duration-500 ${
                          preview ? "text-[clamp(1.75rem,min(3.4vw,6.5vh),3.25rem)]" : "text-[clamp(2rem,min(4.4vw,7.5vh),4.25rem)]"
                        } ${
                          on
                            ? `${dark ? "text-white" : "text-ink"} translate-x-2`
                            : dark
                              ? "text-white/20"
                              : "text-ink/15"
                        }`}
                      >
                        {dsc.name}
                      </span>
                      <span
                        className={`text-2xl md:text-3xl transition-[opacity,transform] duration-500 ${dark ? "text-accent-bright" : "text-accent"} ${
                          on ? "opacity-100 translate-x-2" : "opacity-0 -translate-x-2"
                        }`}
                        aria-hidden
                      >
                        →
                      </span>
                      {on && (
                        <span
                          key={`${active}-${paused}`}
                          data-paused={paused}
                          className={`ha-progress absolute left-2 right-0 bottom-0 h-0.5 rounded-full ${dark ? "bg-accent-bright" : "bg-accent"}`}
                          aria-hidden
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Una sola línea de detalle, siempre en el mismo sitio: la lista no salta */}
            <p
              key={current.id}
              className={`ha-detail mt-6 text-base max-w-md min-h-[3rem] ${dark ? "text-slate-400" : "text-slate-500"}`}
              aria-live="polite"
            >
              {current.line}
            </p>
          </div>

          {preview && (
            <div
              className="hidden lg:block relative shrink-0 w-[250px] h-[310px] xl:w-[300px] xl:h-[360px]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {DISCIPLINES.map((dsc, i) => {
                const on = i === active;
                return (
                  <div
                    key={dsc.id}
                    data-active={on}
                    className="ha-card pointer-events-none absolute inset-0 rounded-[1.75rem] overflow-hidden border border-white/10 shadow-[0_40px_80px_-30px_rgba(91,77,255,0.45)]"
                    style={{ opacity: on ? 1 : 0, transform: on ? "none" : "scale(0.94) translateY(12px)", zIndex: on ? 2 : 1 }}
                  >
                    <Piece id={dsc.id} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
