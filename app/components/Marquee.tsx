"use client";

const ITEMS = [
  "La Taberna El Tablero",
  "Cabana by Efi",
  "Corona Roja",
  "Diseño web",
  "Integración de IA",
  "SEO local",
  "E-commerce",
  "Branding",
  "Demo gratis antes de pagar",
];

/** Marquee horizontal infinito, full-width. CSS-driven, sin JS por frame. */
export default function Marquee() {
  // duplicamos la lista para que el loop sea visualmente continuo
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden
      className="relative w-full overflow-hidden border-y border-white/10 bg-ink py-6"
    >
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-12 text-white/50 font-display font-semibold uppercase tracking-widest text-sm md:text-base"
          >
            {label}
            <span className="text-accent" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
