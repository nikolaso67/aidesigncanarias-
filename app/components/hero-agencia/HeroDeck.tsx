"use client";

import { useRef, type CSSProperties } from "react";
import Piece from "./Pieces";
import { DISCIPLINES, useHeroIntro, useRotation } from "./shared";

/**
 * Hero de la home, "Baraja" (fondo blanco): titular de agencia a la izquierda y, a la
 * derecha, una baraja con una pieza real por disciplina (web, IA, SEO, marca,
 * tienda, publicidad). La palabra de "Hacemos tu ___" y la carta de delante van
 * sincronizadas; hover o foco pausa la rotación.
 */

const N = DISCIPLINES.length;

/** Posición de cada carta según su distancia a la activa (0 = delante). */
function cardStyle(depth: number): CSSProperties {
  if (depth === 0) return { transform: "translate3d(0,0,0) rotate(0deg) scale(1)", opacity: 1, zIndex: 10 };
  if (depth === 1) return { transform: "translate3d(6%,-6%,0) rotate(4deg) scale(0.92)", opacity: 1, zIndex: 9 };
  if (depth === 2) return { transform: "translate3d(-6%,-10%,0) rotate(-5deg) scale(0.85)", opacity: 0.85, zIndex: 8 };
  // La que acaba de salir cae hacia delante y se desvanece
  if (depth === N - 1) return { transform: "translate3d(0,16%,0) rotate(-3deg) scale(1.03)", opacity: 0, zIndex: 11 };
  return { transform: "translate3d(0,-12%,0) scale(0.8)", opacity: 0, zIndex: 7 };
}

export default function HeroDeck() {
  const sectionRef = useRef<HTMLElement>(null);
  const { active, setActive, choose, paused, setPaused } = useRotation(N);
  useHeroIntro(sectionRef);

  const pause = { onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false) };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white text-ink">
      {/* Un único lavado de color detrás de la baraja; el resto, blanco limpio */}
      <div
        className="absolute right-[-15%] top-[5%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-accent/[0.09] blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-24 lg:pb-12 min-h-[100dvh] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="ha-pill inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-sm font-medium text-slate-700">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-accent" aria-hidden>
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
            Demo gratis antes de pagar
          </span>

          <h1 className="mt-8 font-display font-bold tracking-tight leading-[0.92] text-[clamp(2.75rem,min(5.6vw,11vh),6.25rem)]">
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="ha-line block">Agencia digital</span>
            </span>{" "}
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="ha-line block">
                en Gran Canaria<span className="text-accent">.</span>
              </span>
            </span>
          </h1>

          <p className="ha-fade mt-7 font-display font-semibold tracking-tight text-3xl md:text-4xl xl:text-5xl leading-[1.1]">
            <span className="sr-only">
              Hacemos tu web, tu asistente con IA, tu posicionamiento, tu marca, tu tienda online y tu publicidad.
            </span>
            <span aria-hidden className="flex flex-wrap items-baseline gap-x-[0.3em]">
              <span>Hacemos tu</span>
              <span className="inline-grid overflow-hidden pb-[0.12em] -mb-[0.12em]">
                {DISCIPLINES.map((dsc, i) => {
                  const offset = (i - active + N) % N;
                  const y = offset === 0 ? "0%" : offset === N - 1 ? "-70%" : "70%";
                  return (
                    <span
                      key={dsc.id}
                      className="ha-slot-word [grid-area:1/1] text-accent whitespace-nowrap"
                      style={{ transform: `translateY(${y})`, opacity: offset === 0 ? 1 : 0 }}
                    >
                      {dsc.slot}
                    </span>
                  );
                })}
              </span>
            </span>
          </p>

          <p className="ha-fade mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Diseño web, inteligencia artificial, SEO, marca y publicidad con un mismo equipo. Cerca y sin permanencia.
          </p>

          <div className="ha-fade mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white px-8 py-4 font-semibold transition-colors duration-300 hover:bg-accent active:scale-[0.98]"
              data-cursor
            >
              Solicitar presupuesto
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-8 py-4 font-semibold text-ink transition-colors duration-300 hover:border-ink/40 active:scale-[0.98]"
              data-cursor
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Baraja */}
        <div className="ha-visual lg:col-span-5 flex flex-col items-center" {...pause}>
          {/* Pestañas de la baraja: hover trae esa carta delante (la rotación sigue al salir);
              clic o toque la deja fija. El clic hace falta: en móvil y con teclado no hay hover.
              Van encima y no debajo: abajo a la derecha está fijo el botón de WhatsApp */}
          <div className="mb-12 lg:mb-14 flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-[440px]">
            {DISCIPLINES.map((dsc, i) => (
              <button
                key={dsc.id}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(i)}
                className={`relative pb-1.5 text-sm font-medium transition-colors duration-300 ${i === active ? "text-ink" : "text-slate-500 hover:text-slate-800"}`}
                aria-pressed={i === active}
                data-cursor
              >
                {dsc.name}
                {i === active && (
                  <span
                    key={`${active}-${paused}`}
                    data-paused={paused}
                    className="ha-progress absolute left-0 right-0 bottom-0 h-0.5 rounded-full bg-accent"
                    aria-hidden
                  />
                )}
              </button>
            ))}
          </div>
          <div className="relative w-full max-w-[min(300px,78vw)] lg:max-w-[min(420px,52vh)] aspect-square">
            {DISCIPLINES.map((dsc, i) => {
              const depth = (i - active + N) % N;
              return (
                // Decorativas: sin clics. Las ocultas siguen ahí con opacidad 0 y,
                // si recibieran eventos, robarían los clics de lo que tapan.
                <div
                  key={dsc.id}
                  data-active={depth === 0}
                  className="ha-card pointer-events-none absolute inset-0 rounded-[1.75rem] overflow-hidden border border-ink/10 shadow-[0_40px_80px_-30px_rgba(42,35,96,0.45)]"
                  style={cardStyle(depth)}
                >
                  <Piece id={dsc.id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
