import ParallaxImage from "./ParallaxImage";
import type { PortfolioProject } from "../../data/portfolio";

/**
 * Bloque "ejemplos reales" para páginas de servicio: reutiliza proyectos
 * demo publicados (nunca fotos de stock ni clientes inventados).
 */
export default function ServiceProof({ projects }: { projects: PortfolioProject[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-ink mb-2 text-center">
          Así se ve en la práctica
        </h2>
        <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
          Proyectos demo publicados y navegables — no mockups, no clientes inventados.
        </p>
        <div className={`grid grid-cols-1 ${projects.length > 1 ? "md:grid-cols-2" : ""} gap-8`}>
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              data-cursor
            >
              <div className="relative rounded-2xl shadow-lg shadow-slate-200/80 border border-slate-200">
                <ParallaxImage
                  src={p.image}
                  alt={`${p.name} — web creada por AI Design Canarias`}
                  sizes="(max-width: 767px) 100vw, 500px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  frameClassName="aspect-[16/10] rounded-2xl bg-slate-100"
                  intensity={0.5}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <span className="inline-block text-xs font-medium tracking-widest uppercase text-white/70 mb-1.5">
                      {p.category}
                    </span>
                    <h3 className="font-display font-bold text-white text-xl leading-tight">
                      {p.name}
                    </h3>
                  </div>
                  <span
                    className="grid place-items-center w-10 h-10 rounded-full bg-white text-slate-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 shrink-0"
                    aria-hidden
                  >
                    ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
