export interface Service {
  slug: string;
  icon: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  features: { title: string; description: string }[];
  benefits: string[];
  description: string;
}

export const services: Service[] = [
  {
    slug: "diseno-web-gran-canaria",
    icon: "🌐",
    title: "Diseño web profesional",
    h1: "Diseño web profesional en Gran Canaria",
    metaTitle: "Diseño web profesional en Gran Canaria | AI Design Canarias",
    metaDescription:
      "Diseño web profesional en Gran Canaria. Webs modernas, rápidas y optimizadas para Google. Entrega en 7–14 días, sin permanencia. Presupuesto gratis.",
    intro:
      "Creamos páginas web profesionales para negocios en Gran Canaria y Las Palmas de Gran Canaria. Rápidas, modernas, adaptadas a todos los dispositivos y optimizadas desde el primer día para aparecer en Google. Entrega garantizada en 7 a 14 días.",
    features: [
      { title: "Diseño a medida", description: "Cada web es única, adaptada a tu negocio y tu imagen de marca." },
      { title: "Optimizada para Google", description: "SEO técnico incluido desde el inicio: velocidad, estructura y metadatos correctos." },
      { title: "100% responsive", description: "Tu web se ve perfecta en móvil, tablet y escritorio." },
      { title: "Entrega en 7–14 días", description: "Sin esperas de meses. Tienes tu web funcionando en dos semanas." },
      { title: "Sin permanencia", description: "No te atamos con contratos. Si no estás satisfecho, no hay penalización." },
      { title: "Soporte en español", description: "Atención directa, en español, por WhatsApp o email." },
    ],
    benefits: [
      "Más clientes que te encuentran en Google",
      "Imagen profesional que genera confianza",
      "Tu negocio disponible las 24 horas",
      "Velocidad de carga óptima en móvil",
    ],
    description: "Webs modernas, rápidas y adaptadas a todos los dispositivos. Diseñadas para convertir visitantes en clientes.",
  },
  {
    slug: "integracion-ia",
    icon: "🤖",
    title: "Integración de IA",
    h1: "Integración de IA y chatbots para negocios en Canarias",
    metaTitle: "Integración de IA y chatbots para negocios en Canarias | AI Design Canarias",
    metaDescription:
      "Chatbots e inteligencia artificial para negocios en Gran Canaria. Atiende a tus clientes 24/7 sin estar pendiente. Presupuesto gratis en 24h.",
    intro:
      "Integramos inteligencia artificial en tu negocio para que puedas atender a tus clientes a cualquier hora del día, responder preguntas frecuentes, captar leads y automatizar tareas repetitivas — sin que tengas que estar pendiente del teléfono.",
    features: [
      { title: "Chatbot personalizado", description: "Entrenado con la información de tu negocio, productos y servicios." },
      { title: "Disponible 24/7", description: "Responde a tus clientes a las 3 de la mañana si hace falta." },
      { title: "Integrado en tu web", description: "Encaja perfectamente con el diseño de tu página." },
      { title: "Captura de leads", description: "Recoge emails y teléfonos de clientes interesados automáticamente." },
      { title: "Sin conocimientos técnicos", description: "Tú gestionas las respuestas desde un panel sencillo." },
      { title: "Compatible con WhatsApp", description: "El mismo chatbot puede funcionar también en tu WhatsApp Business." },
    ],
    benefits: [
      "No pierdes ningún cliente fuera de horario",
      "Reduces tiempo de atención al cliente",
      "Más leads capturados automáticamente",
      "Diferenciación clara frente a competidores",
    ],
    description: "Chatbots y asistentes virtuales con inteligencia artificial que atienden a tus clientes 24/7 sin que tengas que estar pendiente.",
  },
  {
    slug: "seo-posicionamiento-canarias",
    icon: "📈",
    title: "SEO y posicionamiento",
    h1: "SEO y posicionamiento web en Gran Canaria",
    metaTitle: "SEO y posicionamiento web en Gran Canaria | AI Design Canarias",
    metaDescription:
      "SEO local en Gran Canaria y Las Palmas. Aparece en los primeros resultados de Google cuando tus clientes buscan lo que ofreces. Resultados reales.",
    intro:
      "Te posicionamos en Google para que los clientes de Gran Canaria y Las Palmas te encuentren cuando buscan exactamente lo que ofreces. SEO técnico, contenido y SEO local — sin humo, con métricas reales.",
    features: [
      { title: "SEO técnico", description: "Velocidad, estructura, metadatos y datos estructurados correctos desde el primer día." },
      { title: "SEO local", description: "Apareces en Google Maps y búsquedas locales de Gran Canaria." },
      { title: "Palabras clave estratégicas", description: "Investigamos qué buscan tus clientes y lo trasladamos a tu web." },
      { title: "Google Business Profile", description: "Configuración y optimización de tu perfil de empresa en Google." },
      { title: "Informes mensuales", description: "Sabes exactamente en qué posición estás y cómo evoluciona." },
      { title: "Sin humo", description: "No prometemos resultados mágicos. Te decimos lo que es real y lo que lleva tiempo." },
    ],
    benefits: [
      "Más visitas orgánicas sin pagar por anuncios",
      "Clientes que llegan buscando exactamente lo que ofreces",
      "Visibilidad sostenida a largo plazo",
      "Aparición en Google Maps para búsquedas locales",
    ],
    description: "Aparece en los primeros resultados de Google cuando tus clientes buscan lo que ofreces. Más visibilidad, más ventas.",
  },
  {
    slug: "tiendas-online",
    icon: "🛒",
    title: "Tiendas online",
    h1: "Tiendas online en Gran Canaria — vende por internet",
    metaTitle: "Tiendas online en Gran Canaria | AI Design Canarias",
    metaDescription:
      "Creamos tiendas online para negocios en Gran Canaria. Gestión sencilla, pagos seguros y entregadas en 7–14 días. Presupuesto gratis.",
    intro:
      "Montamos tu tienda online en Gran Canaria para que puedas vender tus productos o servicios las 24 horas del día, a clientes de las Islas Canarias y de toda España. Gestión sencilla, pagos seguros y lista en 7 a 14 días.",
    features: [
      { title: "Diseño a medida", description: "Tu tienda con tu imagen, no una plantilla genérica." },
      { title: "Pagos seguros", description: "Tarjeta, Bizum, PayPal y transferencia integrados desde el primer día." },
      { title: "Gestión sencilla", description: "Añades productos, gestionas pedidos y ves tus ventas desde un panel simple." },
      { title: "Optimizada para móvil", description: "El 70% de las compras online se hacen desde el móvil." },
      { title: "SEO incluido", description: "Cada producto está optimizado para aparecer en Google." },
      { title: "Integración con envíos", description: "Conectamos con Correos, MRW, DHL y otros servicios de mensajería." },
    ],
    benefits: [
      "Vendes mientras duermes",
      "Llega a clientes en toda España y Canarias",
      "Sin comisiones por venta",
      "Control total de tu catálogo y stock",
    ],
    description: "Vende tus productos o servicios en internet. Gestión sencilla, pagos seguros y experiencia de compra fluida.",
  },
  {
    slug: "identidad-visual-branding",
    icon: "🎨",
    title: "Identidad visual y branding",
    h1: "Identidad visual y branding para negocios en Gran Canaria",
    metaTitle: "Identidad visual y branding en Gran Canaria | AI Design Canarias",
    metaDescription:
      "Diseño de logo, identidad visual y branding para negocios en Gran Canaria. Imagen coherente que genera confianza. Presupuesto gratis.",
    intro:
      "Diseñamos la identidad visual de tu negocio en Gran Canaria: logo, paleta de colores, tipografía y guía de estilo. Una imagen coherente y profesional que tus clientes reconocen y en la que confían desde el primer vistazo.",
    features: [
      { title: "Diseño de logo", description: "Original, adaptable a cualquier formato y tamaño." },
      { title: "Paleta de colores", description: "Colores que comunican los valores de tu marca." },
      { title: "Tipografía corporativa", description: "Fuentes que refuerzan tu personalidad de marca." },
      { title: "Guía de estilo", description: "Un documento con todas las normas de uso de tu identidad." },
      { title: "Aplicaciones digitales", description: "Tu imagen lista para web, redes sociales y WhatsApp Business." },
      { title: "Archivos en todos los formatos", description: "SVG, PNG, PDF — todo listo para imprimir y usar online." },
    ],
    benefits: [
      "Imagen profesional que genera confianza",
      "Coherencia en todos tus canales",
      "Diferenciación clara de competidores",
      "Base sólida para cualquier material de marketing",
    ],
    description: "Logo, paleta de colores, tipografía y guía de estilo. Una imagen coherente que genera confianza desde el primer vistazo.",
  },
  {
    slug: "apps-web-progresivas",
    icon: "⚡",
    title: "Apps web progresivas",
    h1: "Apps web progresivas (PWA) para negocios en Canarias",
    metaTitle: "Apps web progresivas para negocios en Canarias | AI Design Canarias",
    metaDescription:
      "Desarrollamos apps web progresivas (PWA) para negocios en Gran Canaria. Funcionan como apps nativas sin necesidad de App Store. Presupuesto gratis.",
    intro:
      "Desarrollamos aplicaciones web progresivas (PWA) que funcionan como apps nativas en el móvil de tus clientes — sin necesidad de pasar por el App Store o Google Play. Instalables, rápidas y disponibles sin conexión.",
    features: [
      { title: "Instalable en el móvil", description: "Tus clientes la añaden a su pantalla de inicio como cualquier app." },
      { title: "Funciona sin conexión", description: "Partes clave accesibles aunque no haya internet." },
      { title: "Sin App Store", description: "No dependes de Apple ni Google para publicar actualizaciones." },
      { title: "Notificaciones push", description: "Avisa a tus clientes de novedades, ofertas o recordatorios." },
      { title: "Velocidad nativa", description: "Carga instantánea, sin esperas." },
      { title: "Un solo desarrollo", description: "Funciona en iOS, Android y escritorio desde el mismo código." },
    ],
    benefits: [
      "Experiencia de app sin coste de desarrollo nativo",
      "Mayor retención de clientes",
      "Actualizaciones inmediatas sin pasar por tiendas",
      "Notificaciones directas a tus clientes",
    ],
    description: "Aplicaciones web que funcionan como apps nativas en el móvil. Rápidas, instalables y accesibles sin conexión.",
  },
  {
    slug: "mantenimiento-web",
    icon: "🔧",
    title: "Mantenimiento web",
    h1: "Mantenimiento web en Gran Canaria — tu web siempre activa",
    metaTitle: "Mantenimiento web en Gran Canaria | AI Design Canarias",
    metaDescription:
      "Mantenimiento web para negocios en Gran Canaria. Actualizaciones, seguridad, copias de seguridad y soporte continuo. Sin sorpresas.",
    intro:
      "Mantenemos tu web en perfecto estado para que nunca tengas que preocuparte de actualizaciones, fallos de seguridad o caídas. Soporte continuo en español, con tiempo de respuesta garantizado.",
    features: [
      { title: "Actualizaciones regulares", description: "Mantenemos tu web al día con las últimas versiones y parches de seguridad." },
      { title: "Copias de seguridad diarias", description: "Tu web respaldada cada día. Si algo falla, lo restauramos en minutos." },
      { title: "Monitorización 24/7", description: "Sabemos si tu web cae antes de que lo sepa un cliente." },
      { title: "Soporte en español", description: "Respuesta garantizada en menos de 24 horas hábiles." },
      { title: "Cambios y mejoras", description: "Pequeñas modificaciones de contenido incluidas en el plan." },
      { title: "Informe mensual", description: "Resumen del estado de tu web, visitas y cualquier incidencia." },
    ],
    benefits: [
      "Tu web siempre online y segura",
      "Tiempo de respuesta garantizado",
      "Sin sorpresas ni costes imprevistos",
      "Tranquilidad para centrarte en tu negocio",
    ],
    description: "Actualizaciones, copias de seguridad, seguridad y soporte continuo. Tu web siempre en perfecto estado.",
  },
  {
    slug: "consultoria-digital",
    icon: "💡",
    title: "Consultoría digital",
    h1: "Consultoría digital para negocios en Gran Canaria",
    metaTitle: "Consultoría digital para negocios en Gran Canaria | AI Design Canarias",
    metaDescription:
      "Consultoría digital en Gran Canaria. Analizamos tu presencia online y te decimos exactamente qué mejorar para captar más clientes. Sin tecnicismos.",
    intro:
      "Analizamos tu presencia digital en Gran Canaria — web, redes sociales, Google Business, competencia — y te entregamos un plan concreto de qué mejorar para captar más clientes. Sin tecnicismos, con pasos claros y priorizados.",
    features: [
      { title: "Auditoría completa", description: "Revisamos tu web, SEO, redes sociales y presencia local en Google." },
      { title: "Análisis de competencia", description: "Qué hacen bien tus competidores y cómo superarlos." },
      { title: "Plan de acción priorizado", description: "Qué hacer primero, qué después y qué ignorar." },
      { title: "Sin tecnicismos", description: "Te explicamos todo en lenguaje claro, no en jerga digital." },
      { title: "Sesión de trabajo", description: "Sesión de 1-2 horas para revisar los resultados y responder dudas." },
      { title: "Seguimiento", description: "Una revisión a los 30 días para ver cómo van las mejoras." },
    ],
    benefits: [
      "Sabes exactamente qué mejorar y en qué orden",
      "Evitas invertir en lo que no funciona",
      "Visión externa y objetiva de tu negocio online",
      "Plan realista adaptado a tu presupuesto",
    ],
    description: "Analizamos tu presencia online y te decimos exactamente qué mejorar para captar más clientes. Sin tecnicismos.",
  },
  {
    slug: "publicidad-digital",
    icon: "🎯",
    title: "Publicidad digital",
    h1: "Publicidad digital en Gran Canaria — Google, Meta e Instagram",
    metaTitle: "Publicidad digital en Gran Canaria — Google y Meta Ads | AI Design Canarias",
    metaDescription:
      "Campañas de publicidad digital en Gran Canaria. Google Ads, Meta Ads, Instagram y TikTok. Llegamos a tu cliente ideal y convertimos clics en ventas.",
    intro:
      "Gestionamos campañas de publicidad digital para negocios en Gran Canaria en Google, Meta, Instagram y TikTok. Llegamos exactamente al cliente que quieres, en el momento en que está buscando lo que ofreces.",
    features: [
      { title: "Google Ads", description: "Aparece el primero cuando alguien busca tu servicio en Google." },
      { title: "Meta e Instagram Ads", description: "Campañas de captación y retargeting en Facebook e Instagram." },
      { title: "TikTok Ads", description: "Llega a audiencias jóvenes con contenido que engancha." },
      { title: "Segmentación local", description: "Mostramos tus anuncios solo en Gran Canaria o donde tú quieras." },
      { title: "Creación de creatividades", description: "Diseñamos los anuncios que mejor convierten para tu negocio." },
      { title: "Informe mensual", description: "Gastos, clics, conversiones y ROI de cada campaña." },
    ],
    benefits: [
      "Resultados desde el primer día de campaña",
      "Control total del presupuesto",
      "Solo pagas por clics o conversiones reales",
      "Alcance ultra-segmentado en Gran Canaria",
    ],
    description: "Campañas de anuncios en Google, Meta, Instagram y TikTok. Llegamos a tu cliente ideal y convertimos clics en ventas.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
