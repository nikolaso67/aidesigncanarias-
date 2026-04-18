import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-sky-100" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        {/* Text */}
        <div>
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-indigo-600 mb-6 px-3 py-1 border border-indigo-200 bg-indigo-50 rounded-full">
            Agencia digital en Gran Canaria
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Diseño web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">
              inteligente
            </span>{" "}
            para tu negocio
          </h1>

          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Creamos webs rápidas, modernas y optimizadas para Google. Integramos
            inteligencia artificial para que tu negocio trabaje solo, incluso
            fuera de horario.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-white shadow-lg shadow-indigo-500/25 text-center"
            >
              Solicitar presupuesto gratis
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 rounded-full border border-slate-300 hover:border-indigo-400 hover:bg-indigo-50 transition-colors font-semibold text-slate-700 text-center"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Entrega en 7–14 días
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Soporte en español
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Sin permanencia
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/60 aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80"
              alt="Diseño web profesional"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3 border border-slate-100">
            <span className="text-2xl">🚀</span>
            <div>
              <div className="text-xs text-slate-500">Tiempo de entrega</div>
              <div className="font-bold text-slate-900 text-sm">7–14 días</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
