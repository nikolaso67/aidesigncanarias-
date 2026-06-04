"use client";

const ITEMS = [
  "Webs entregadas",
  "La Taberna El Tablero",
  "Cabana by Efi",
  "Corona Roja",
  "+30 proyectos",
  "Integración de IA",
  "SEO local",
  "E-commerce",
  "Branding",
  "Apps web",
];

/** Marquee horizontal infinito, full-width. CSS-driven, sin JS por frame. */
export default function Marquee() {
  // duplicamos la lista para que el loop sea visualmente continuo
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden
      className="relative w-full overflow-hidden border-y border-slate-200/70 bg-white/40 backdrop-blur-sm py-5"
    >
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-12 text-slate-700/80 text-sm md:text-base font-medium tracking-wide"
          >
            {label}
            <span className="text-indigo-400" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
