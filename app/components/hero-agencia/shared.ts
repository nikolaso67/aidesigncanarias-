"use client";

import { useEffect, useState, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

/** Las disciplinas que enseña el hero: lo que hace de nosotros una agencia y no "solo webs". */
export type DisciplineId = "web" | "ia" | "seo" | "brand" | "shop" | "ads";

export interface Discipline {
  id: DisciplineId;
  /** Slug en app/servicios/data.ts; el hero enlaza a /servicios/<slug> */
  slug: string;
  name: string;
  /** Completa la frase "Hacemos tu ___" */
  slot: string;
  line: string;
}

export const DISCIPLINES: readonly Discipline[] = [
  { id: "web", slug: "diseno-web-gran-canaria", name: "Diseño web", slot: "web", line: "Webs rápidas, a medida, que convierten visitas en clientes." },
  { id: "ia", slug: "integracion-ia", name: "Asistentes con IA", slot: "asistente con IA", line: "Responde y reserva por ti, también a las tres de la mañana." },
  { id: "seo", slug: "seo-posicionamiento-canarias", name: "SEO local", slot: "posicionamiento", line: "Que te encuentren en Google cuando buscan lo que haces." },
  { id: "brand", slug: "identidad-visual-branding", name: "Branding", slot: "marca", line: "Logo, colores y tipografía para que se te reconozca." },
  { id: "shop", slug: "tiendas-online", name: "Tiendas online", slot: "tienda online", line: "Vende a cualquier hora, con Bizum, tarjeta y envíos." },
  { id: "ads", slug: "publicidad-digital", name: "Publicidad digital", slot: "publicidad", line: "Campañas en Google y redes que llegan a quien te busca." },
];

export const ROTATE_MS = 2800;

/**
 * Índice activo que avanza solo cada `ms`. Se pausa con `setPaused(true)`
 * (hover/foco), se detiene del todo con `choose(i)` (el usuario eligió una) y
 * no avanza nunca con prefers-reduced-motion.
 */
export function useRotation(count: number, ms = ROTATE_MS) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);

  const choose = (i: number) => {
    setActive(i);
    setStopped(true);
  };

  useEffect(() => {
    if (paused || stopped) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setActive((i) => (i + 1) % count), ms);
    return () => window.clearTimeout(t);
  }, [active, paused, stopped, count, ms]);

  return { active, setActive, choose, paused: paused || stopped, setPaused };
}

/**
 * Entrada del hero, mismo patrón que HeroVideo: si el JS llega tarde no
 * re-ocultamos texto ya pintado (protege el LCP).
 */
export function useHeroIntro(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (performance.now() > 1500) return;

      gsap.set(".ha-pill", { autoAlpha: 0, y: -12 });
      gsap.set(".ha-line", { yPercent: 115 });
      gsap.set(".ha-fade", { autoAlpha: 0, y: 18 });
      gsap.set(".ha-visual", { autoAlpha: 0, y: 40 });

      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .to(".ha-pill", { autoAlpha: 1, y: 0, duration: 0.6 })
        .to(".ha-line", { yPercent: 0, duration: 1, stagger: 0.08 }, "-=0.3")
        .to(".ha-fade", { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, "-=0.6")
        .to(".ha-visual", { autoAlpha: 1, y: 0, duration: 1.1 }, "-=0.9");
    },
    { scope },
  );
}
