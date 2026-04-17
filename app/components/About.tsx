import Image from "next/image";

const stats = [
  { value: "30+", label: "Proyectos entregados" },
  { value: "100%", label: "Clientes satisfechos" },
  { value: "7–14", label: "Días de entrega" },
  { value: "24/7", label: "Soporte con IA" },
];

export default function About() {
  return (
    <section id="sobre-nosotros" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200 aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80"
              alt="Gran Canaria"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent pointer-events-none" />
          </div>
          {/* Floating location badge */}
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3 border border-slate-100">
            <span className="text-2xl">🌴</span>
            <div>
              <div className="text-xs text-slate-500">Con base en</div>
              <div className="font-bold text-slate-900 text-sm">Gran Canaria</div>
            </div>
          </div>
        </div>

        {/* Text + Stats */}
        <div className="order-1 lg:order-2">
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-500">
            Quiénes somos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Somos AI Design, un equipo de profesionales
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Diseñadores, desarrolladores, especialistas en inteligencia
            artificial y expertos en publicidad digital con sede en Gran
            Canaria, unidos por un mismo objetivo: hacer crecer los negocios
            locales en el entorno digital.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Combinamos diseño moderno con tecnología de IA para dar a los
            negocios de las Islas Canarias las mismas herramientas que usan las
            grandes empresas — sin los precios de las grandes empresas.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Si tienes un negocio en el sur de Gran Canaria y quieres más
            clientes, más visibilidad y una web que trabaje por ti, estás en el
            lugar correcto.
          </p>
          <a
            href="#contacto"
            className="inline-block px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-sm text-white"
          >
            Hablemos de tu proyecto
          </a>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-5 rounded-2xl border border-slate-100 bg-slate-50 shadow-sm text-center"
              >
                <div className="text-3xl font-bold text-indigo-600 mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
