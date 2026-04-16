const services = [
  {
    icon: "🌐",
    title: "Diseño web profesional",
    description:
      "Webs modernas, rápidas y adaptadas a todos los dispositivos. Diseñadas para convertir visitantes en clientes.",
  },
  {
    icon: "🤖",
    title: "Integración de IA",
    description:
      "Chatbots y asistentes virtuales con inteligencia artificial que atienden a tus clientes 24/7 sin que tengas que estar pendiente.",
  },
  {
    icon: "📈",
    title: "SEO y posicionamiento",
    description:
      "Aparece en los primeros resultados de Google cuando tus clientes buscan lo que ofreces. Más visibilidad, más ventas.",
  },
  {
    icon: "🛒",
    title: "Tiendas online",
    description:
      "Vende tus productos o servicios en internet. Gestión sencilla, pagos seguros y experiencia de compra fluida.",
  },
  {
    icon: "🎨",
    title: "Identidad visual y branding",
    description:
      "Logo, paleta de colores, tipografía y guía de estilo. Una imagen coherente que genera confianza desde el primer vistazo.",
  },
  {
    icon: "⚡",
    title: "Apps web progresivas",
    description:
      "Aplicaciones web que funcionan como apps nativas en el móvil. Rápidas, instalables y accesibles sin conexión.",
  },
  {
    icon: "🔧",
    title: "Mantenimiento web",
    description:
      "Actualizaciones, copias de seguridad, seguridad y soporte continuo. Tu web siempre en perfecto estado.",
  },
  {
    icon: "💡",
    title: "Consultoría digital",
    description:
      "Analizamos tu presencia online y te decimos exactamente qué mejorar para captar más clientes. Sin tecnicismos.",
  },
  {
    icon: "🎯",
    title: "Publicidad digital",
    description:
      "Campañas de anuncios en Google, Meta, Instagram, TikTok y cualquier red social. Llegamos a tu cliente ideal y convertimos clics en ventas.",
  },
];

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
            <div
              key={s.title}
              className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
