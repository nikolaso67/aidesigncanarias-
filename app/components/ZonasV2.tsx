import Link from "next/link";
import SectionTitle from "./agency/SectionTitle";
import RevealOnScroll from "./agency/RevealOnScroll";

const zonas = [
  { slug: "las-palmas-de-gran-canaria", nombre: "Las Palmas de Gran Canaria", emoji: "🏙️" },
  { slug: "maspalomas", nombre: "Maspalomas y Playa del Inglés", emoji: "🏖️" },
  { slug: "telde", nombre: "Telde", emoji: "🏭" },
  { slug: "santa-lucia-de-tirajana", nombre: "Santa Lucía de Tirajana", emoji: "🌿" },
  { slug: "mogan", nombre: "Mogán y Puerto de Mogán", emoji: "⛵" },
  { slug: "arucas", nombre: "Arucas", emoji: "🍹" },
];

export default function ZonasV2() {
  return (
    <section className="relative py-32 px-6 bg-paper overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-16">
          <SectionTitle
            eyebrow="07 — Cobertura"
            title={
              <>
                Diseño web en{" "}
                <span className="text-accent">toda Gran Canaria</span>
              </>
            }
            description="Trabajamos con negocios de todo el archipiélago. Especial presencia en los municipios principales — pero llegamos a cualquier rincón."
          />
        </div>

        <RevealOnScroll
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          stagger={0.06}
        >
          {zonas.map((z, i) => (
            <Link
              key={z.slug}
              href={`/zonas/${z.slug}`}
              className="group flex items-center justify-between gap-4 p-6 rounded-2xl border border-ink/10 bg-white hover:border-ink hover:bg-ink hover:text-white transition-all duration-300"
              data-cursor
            >
              <div className="flex items-center gap-4">
                <span
                  className="font-display font-bold text-sm tracking-[0.2em] text-accent"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-slate-900 group-hover:text-white transition-colors">
                  {z.nombre}
                </span>
              </div>
              <span className="text-slate-400 group-hover:text-accent-bright transition-all group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </Link>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
