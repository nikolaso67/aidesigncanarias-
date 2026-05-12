import Link from "next/link";

const zonas = [
  { slug: "las-palmas-de-gran-canaria", nombre: "Las Palmas de Gran Canaria", emoji: "🏙️" },
  { slug: "maspalomas", nombre: "Maspalomas y Playa del Inglés", emoji: "🏖️" },
  { slug: "telde", nombre: "Telde", emoji: "🏭" },
  { slug: "santa-lucia-de-tirajana", nombre: "Santa Lucía de Tirajana", emoji: "🌿" },
  { slug: "mogan", nombre: "Mogán y Puerto de Mogán", emoji: "⛵" },
  { slug: "arucas", nombre: "Arucas", emoji: "🍹" },
];

export default function Zonas() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-500">
            Cobertura local
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-slate-900">
            Diseño web en toda Gran Canaria
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Trabajamos con negocios de todo el archipiélago, con especial presencia en los principales municipios de Gran Canaria.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {zonas.map((z) => (
            <Link
              key={z.slug}
              href={`/zonas/${z.slug}`}
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/40 transition-all group"
            >
              <span className="text-xl">{z.emoji}</span>
              <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">
                {z.nombre}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
