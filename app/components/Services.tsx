import Link from "next/link";
import { services } from "../servicios/data";

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-500">
            Lo que hacemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Servicios
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Todo lo que necesita tu negocio para tener una presencia digital
            sólida y atraer más clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
