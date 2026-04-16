const projects = [
  {
    name: "Ferretería El Sur",
    category: "Diseño web + SEO",
    description:
      "Web profesional con catálogo de productos y posicionamiento local para ferretería en Maspalomas. Aumentó visitas orgánicas un 180% en 3 meses.",
    tags: ["Next.js", "SEO Local", "Catálogo"],
    color: "from-indigo-50 to-indigo-100 border border-indigo-200",
  },
  {
    name: "Restaurante Las Dunas",
    category: "Web + Reservas online",
    description:
      "Rediseño completo con sistema de reservas integrado y carta digital. El restaurante pasó a recibir el 60% de sus reservas por web.",
    tags: ["Diseño", "Reservas", "Mobile-first"],
    color: "from-violet-50 to-violet-100 border border-violet-200",
  },
  {
    name: "Clínica Dental Tamarán",
    category: "Web + Chatbot IA",
    description:
      "Web corporativa con asistente virtual que responde dudas de pacientes, agenda citas y filtra leads fuera de horario.",
    tags: ["IA", "Chatbot", "Citas online"],
    color: "from-emerald-50 to-emerald-100 border border-emerald-200",
  },
  {
    name: "Surf School Maspalomas",
    category: "Tienda online + Reservas",
    description:
      "E-commerce para venta de cursos y alquiler de material de surf. Integración con pasarela de pago y gestión de disponibilidad.",
    tags: ["E-commerce", "Pagos", "Reservas"],
    color: "from-orange-50 to-orange-100 border border-orange-200",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-500">
            Trabajos recientes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Portfolio
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Proyectos reales para negocios del sur de Gran Canaria y las Islas
            Canarias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className={`p-8 rounded-2xl bg-gradient-to-br ${p.color} hover:shadow-md transition-all`}
            >
              <span className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-3 block">
                {p.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{p.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/80 text-slate-600 border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#contacto" className="mt-4 inline-flex items-center text-xs font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                Ver más <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
