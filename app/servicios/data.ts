export interface PriceLine {
  label: string;
  price: string;
  note?: string;
}

export interface ServicePricing {
  /** Titular grande: "Desde 299€" | "199€/mes" | "Desde 990€" */
  headline: string;
  /** Subtítulo corto bajo el titular */
  note: string;
  /** Desglose opcional cuando el servicio tiene varias modalidades de precio */
  breakdown?: PriceLine[];
}

export interface Service {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  features: { title: string; description: string }[];
  benefits: string[];
  description: string;
  pricing: ServicePricing;
  /** Texto largo opcional (guía) que se muestra tras "Qué incluye". */
  guide?: { heading: string; paragraphs: string[] }[];
  /** Preguntas frecuentes opcionales; también se publican como FAQPage JSON-LD. */
  faq?: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "diseno-web-gran-canaria",
    title: "Diseño web profesional",
    // Esta página va a por la intención "precio" y deja «diseño web gran canaria»
    // a la home: antes las dos tenían el mismo H1 y competían entre sí.
    h1: "Cuánto cuesta una página web en Gran Canaria",
    metaTitle: "Precio de una página web en Gran Canaria: desde 249 €",
    metaDescription:
      "Cuánto cuesta una página web en Gran Canaria: Esencial 249 €, Profesional 350 € y Premium con IA 420 €. Qué incluye cada plan, plazos y mantenimiento sin permanencia.",
    intro:
      "Precios cerrados y publicados: una web profesional para tu negocio desde 249 €, en pago único y entregada en 7 a 14 días. Aquí tienes qué incluye cada plan, qué cuesta mantenerla y qué no vas a pagar.",
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
    pricing: {
      headline: "Desde 249€",
      note: "Web Esencial + 39€/mes de mantenimiento",
      breakdown: [
        { label: "Web Esencial", price: "249€", note: "+ 39€/mes mantenimiento" },
        { label: "Web Profesional", price: "350€", note: "+ 49€/mes mantenimiento" },
        { label: "Web Premium + IA", price: "420€", note: "+ 60€/mes mantenimiento" },
      ],
    },
    guide: [
      {
        heading: "Los tres planes, explicados",
        paragraphs: [
          "Web Esencial, 249 €. Hasta 5 páginas, diseño adaptado al móvil, formulario de contacto, Google Analytics, SEO básico y hosting incluido. Es el plan para un negocio que necesita una presencia profesional y clara: un taller, una cafetería, un profesional autónomo.",
          "Web Profesional, 350 €. Hasta 10 páginas, blog, SEO local avanzado y tu ficha de Google Business optimizada. Es el plan para competir en Google en tu zona, cuando tus clientes buscan «tu servicio + tu municipio».",
          "Web Premium + IA, 420 €. Páginas ilimitadas, chatbot con IA que atiende las 24 horas, sistema de reservas o citas e informes mensuales de SEO. Es el plan para negocios que reciben consultas y reservas a cualquier hora: restaurantes, clínicas, peluquerías, gimnasios.",
        ],
      },
      {
        heading: "Qué cuesta mantenerla cada mes",
        paragraphs: [
          "El mantenimiento es opcional y sin permanencia: 39 €, 49 € o 60 € al mes según el plan. Incluye actualizaciones, copias de seguridad, vigilancia de que la web esté siempre en línea y soporte en español. Los cambios que no entran en el plan se cobran a 39 € la hora, y siempre te decimos el coste antes de hacerlos.",
          "Si en algún momento quieres dejarlo, lo dejas. No hay contrato de permanencia ni coste de salida, y la web es tuya.",
        ],
      },
      {
        heading: "¿Por qué algunas webs cuestan mucho más?",
        paragraphs: [
          "Una web cuesta más cuando necesita trabajo a medida: integraciones con programas de facturación o de gestión, áreas privadas para clientes, catálogos de cientos de productos o funciones que no existen de serie. Para esos casos hacemos software a medida, desde 990 € y con presupuesto cerrado tras hablar contigo.",
          "Para la mayoría de negocios locales no hace falta nada de eso. Lo que necesitan es una web rápida, que se vea bien en el móvil, que Google entienda y que convierta visitas en llamadas, mensajes o reservas. Eso es lo que cubren los tres planes.",
        ],
      },
      {
        heading: "Primero la ves, luego la pagas",
        paragraphs: [
          "Antes de pagar nada te enseñamos una primera versión de tu web funcionando. Si te convence, la terminamos y la publicamos en 7 a 14 días desde que das el visto bueno al diseño. Si no te convence, no pagas.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta una página web para un negocio en Gran Canaria?",
        a: "Con nosotros, entre 249 € y 420 € en pago único según el plan: Esencial 249 €, Profesional 350 € y Premium con IA 420 €. Una tienda online cuesta 500 €. El mantenimiento mensual es opcional, desde 39 €.",
      },
      {
        q: "¿Es obligatorio pagar el mantenimiento mensual?",
        a: "No. Es opcional y sin permanencia. Si lo contratas, nos ocupamos de actualizaciones, copias de seguridad y soporte; si no, la web sigue siendo tuya igualmente.",
      },
      {
        q: "¿Cuánto se tarda en tener la web publicada?",
        a: "Entre 7 y 14 días laborables desde que das el visto bueno al diseño.",
      },
      {
        q: "¿Puedo ver la web antes de pagar?",
        a: "Sí. Te enseñamos una primera versión funcionando antes de cobrarte nada. Si no te convence, no pagas.",
      },
      {
        q: "¿Y si lo que necesito es una tienda online?",
        a: "La tienda online cuesta 500 € más 50 € al mes de mantenimiento, con pasarela de pago, gestión de productos y pedidos.",
      },
    ],
  },
  {
    slug: "integracion-ia",
    title: "Integración de IA",
    h1: "Integración de IA y chatbots para negocios en Canarias",
    metaTitle: "Integración de IA y chatbots para negocios en Canarias",
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
    pricing: {
      headline: "Desde 299€",
      note: "Instalación sobre tu web actual",
      breakdown: [
        { label: "Instalación del chatbot", price: "299€", note: "Sobre una web existente" },
        { label: "Incluido en Web Premium + IA", price: "420€", note: "Si contratas la web con nosotros" },
        { label: "Mantenimiento", price: "39€/mes", note: "Web nuestra · 59€/mes si es web externa" },
      ],
    },
  },
  {
    slug: "seo-posicionamiento-canarias",
    title: "SEO y posicionamiento",
    h1: "SEO y posicionamiento web en Gran Canaria",
    metaTitle: "SEO y posicionamiento web en Gran Canaria",
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
    pricing: {
      headline: "149€/mes",
      note: "SEO local · sin permanencia",
      breakdown: [
        { label: "SEO local", price: "149€/mes", note: "On-page, Google Business, informe mensual" },
        { label: "Combo redes + SEO", price: "249€/mes", note: "Ahorras 69€/mes frente a contratarlo por separado" },
      ],
    },
  },
  {
    slug: "tiendas-online",
    title: "Tiendas online",
    h1: "Tiendas online en Gran Canaria: vende por internet desde las islas",
    metaTitle: "Tienda online en Gran Canaria: 500 €, lista en 7–14 días",
    metaDescription:
      "Creamos tu tienda online en Gran Canaria por 500 €: pagos con tarjeta y Bizum, envíos, IGIC bien configurado y gestión sencilla. La ves funcionando antes de pagar.",
    intro:
      "Montamos tu tienda online en Gran Canaria para que puedas vender tus productos o servicios las 24 horas del día, a clientes de las Islas Canarias y de toda España. Gestión sencilla, pagos seguros y lista en 7 a 14 días.",
    features: [
      { title: "Diseño a medida", description: "Tu tienda con tu imagen, no una plantilla genérica." },
      { title: "Pagos seguros", description: "Tarjeta, Bizum, PayPal y transferencia integrados desde el primer día." },
      { title: "Gestión sencilla", description: "Añades productos, gestionas pedidos y ves tus ventas desde un panel simple." },
      { title: "Optimizada para móvil", description: "Pensada primero para el móvil, que es desde donde compra la mayoría de tus clientes." },
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
    pricing: { headline: "500€", note: "+ 50€/mes de mantenimiento" },
    guide: [
      {
        heading: "Vender online desde Canarias tiene sus propias reglas",
        paragraphs: [
          "En Canarias no se aplica el IVA sino el IGIC, y una tienda configurada para la Península cobra mal los impuestos desde el primer pedido. Dejamos los precios, el impuesto y las facturas preparados para vender desde las islas.",
          "Los envíos también cambian. Dentro de Canarias puedes repartir tú mismo o usar mensajería; los paquetes que salen hacia la Península pasan por aduana, y eso afecta al plazo y al coste que ve el cliente. Configuramos las zonas de envío por separado (tu municipio, resto de la isla, otras islas, Península) para que cada cliente vea el precio real antes de pagar.",
        ],
      },
      {
        heading: "Qué incluyen los 500 €",
        paragraphs: [
          "Diseño con tu imagen, catálogo de productos con fotos, variantes (tallas, colores, formatos) y stock, carrito y pago con tarjeta, Bizum o PayPal, avisos de pedido por email y un panel para que gestiones productos y pedidos sin depender de nadie.",
          "También la parte que no se ve: la tienda carga rápido en el móvil, cada producto tiene su título y descripción para Google, y las páginas legales de compra (envíos, devoluciones, condiciones) quedan en su sitio.",
          "El mantenimiento son 50 € al mes, sin permanencia: actualizaciones, copias de seguridad, vigilancia de que la tienda esté siempre en línea y soporte en español.",
        ],
      },
      {
        heading: "Para qué negocios tiene sentido",
        paragraphs: [
          "Para comercios que ya venden en tienda física y quieren vender también fuera de horario o a clientes de otras islas: una frutería que prepara pedidos para recoger, una tienda de ropa, una ferretería con productos de recambio, un artesano que vende por Instagram y quiere dejar de cobrar por transferencia.",
          "Si solo quieres enseñar tus productos y que te escriban por WhatsApp, quizá no necesitas una tienda: una web con catálogo es más barata. Te lo decimos antes de empezar.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta una tienda online en Gran Canaria?",
        a: "Con nosotros, 500 € en pago único más 50 € al mes de mantenimiento, sin permanencia. Incluye diseño, catálogo, pagos con tarjeta, Bizum y PayPal, zonas de envío y panel de gestión.",
      },
      {
        q: "¿Os quedáis una comisión por cada venta?",
        a: "No. El dinero de cada venta es tuyo. El único coste por venta es la comisión que cobra el medio de pago (el banco, Bizum o PayPal), que es la misma que pagarías con cualquier otra tienda.",
      },
      {
        q: "¿Se puede vender a la Península desde Canarias?",
        a: "Sí. La tienda separa las zonas de envío y los impuestos para que los pedidos a la Península se cobren bien. Ten en cuenta que esos paquetes pasan por aduana, lo que alarga el plazo y suele encarecer el envío; lo dejamos indicado para que el cliente lo sepa antes de comprar.",
      },
      {
        q: "¿Podré añadir productos yo solo?",
        a: "Sí. Te dejamos un panel sencillo para subir productos, cambiar precios, gestionar el stock y ver los pedidos, y te enseñamos a usarlo.",
      },
      {
        q: "¿Cuánto se tarda en tenerla funcionando?",
        a: "Entre 7 y 14 días desde que das el visto bueno al diseño, siempre que tengamos las fotos y los datos de los productos. Antes de pagar te enseñamos una primera versión funcionando.",
      },
    ],
  },
  {
    slug: "identidad-visual-branding",
    title: "Identidad visual y branding",
    h1: "Identidad visual y branding para negocios en Gran Canaria",
    metaTitle: "Diseño de logo y branding en Gran Canaria desde 149 €",
    metaDescription:
      "Diseño de logo e identidad visual para negocios de Gran Canaria: logo desde 149 € o pack completo con paleta, tipografías, tarjeta y plantillas para redes por 349 €.",
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
    pricing: {
      headline: "Desde 149€",
      note: "Branding starter",
      breakdown: [
        { label: "Branding starter", price: "149€", note: "Logo + variantes básicas" },
        { label: "Pack identidad completo", price: "349€", note: "Logo + paleta + tipografías + tarjeta + plantillas RRSS" },
      ],
    },
    guide: [
      {
        heading: "Cuándo merece la pena hacer (o rehacer) tu imagen",
        paragraphs: [
          "Cuando abres un negocio y no quieres empezar con un logo hecho deprisa. Cuando tu logo actual se ve borroso en Instagram, no cabe en un rótulo o no se lee en pequeño. O cuando cada cosa que publicas tiene colores y letras distintas y el negocio no se reconoce de un sitio a otro.",
          "No hace falta una gran marca para tener una imagen cuidada. Una frutería, un taller o una peluquería de barrio se recuerdan mejor si su logo, su fachada, su WhatsApp y sus redes dicen lo mismo.",
        ],
      },
      {
        heading: "Los dos packs",
        paragraphs: [
          "Branding starter, 149 €: el logo y sus variantes básicas para que funcione en la web, en las redes y en impresión. Suficiente para empezar con buen pie.",
          "Pack identidad completo, 349 €: el logo con sus variantes, la paleta de colores, las tipografías, el diseño de tu tarjeta de visita y plantillas para tus publicaciones en redes, para que todo lo que publiques tenga la misma cara sin tener que diseñarlo cada vez.",
        ],
      },
      {
        heading: "Cómo trabajamos",
        paragraphs: [
          "Empezamos con una conversación sobre tu negocio: a quién vendes, qué te diferencia, qué marcas te gustan y cuáles no. Con eso preparamos propuestas, las ajustamos contigo y cerramos el diseño final.",
          "Te entregamos los archivos en SVG, PNG y PDF, listos para la web, las redes, la imprenta o el rotulista.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta diseñar un logo para mi negocio en Gran Canaria?",
        a: "El logo con sus variantes básicas cuesta 149 €. El pack de identidad completo, con paleta, tipografías, tarjeta de visita y plantillas para redes, cuesta 349 €.",
      },
      {
        q: "¿En qué formatos me entregáis el logo?",
        a: "En SVG (vectorial, para imprenta y rótulos), PNG con fondo transparente (para web y redes) y PDF.",
      },
      {
        q: "Ya tengo logo, ¿podéis mejorarlo en vez de hacer uno nuevo?",
        a: "Sí. Muchas veces basta con redibujarlo en vectorial, ajustar colores y crear versiones que funcionen en pequeño, sin perder lo que tus clientes ya reconocen.",
      },
      {
        q: "¿Podéis hacer también la web con la nueva imagen?",
        a: "Sí. Si haces la identidad y la web con nosotros, la web sale directamente con tus colores, tipografías y logo nuevos.",
      },
    ],
  },
  {
    slug: "apps-web-progresivas",
    title: "Apps web progresivas",
    h1: "Apps web progresivas (PWA) para negocios en Canarias",
    metaTitle: "App para tu negocio sin App Store (PWA) en Canarias",
    metaDescription:
      "Una app para tu negocio que se instala desde la web, sin App Store ni Google Play: reservas, pedidos, fidelización y avisos. Apps web progresivas desde 990 € en Gran Canaria.",
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
    pricing: { headline: "Desde 990€", note: "Presupuesto cerrado tras briefing" },
    guide: [
      {
        heading: "Qué es una app web progresiva, sin tecnicismos",
        paragraphs: [
          "Es una web que se comporta como una app. Tu cliente entra desde el navegador, pulsa «Añadir a pantalla de inicio» y a partir de ahí la abre con su icono, a pantalla completa, como cualquier otra app del móvil. Funciona en iPhone y en Android.",
          "La diferencia con una app de las tiendas es que no hay que publicarla en el App Store ni en Google Play, ni esperar a que la aprueben, ni pedir al cliente que se la descargue desde allí. Y cada cambio que hacemos le llega al momento, sin actualizaciones.",
        ],
      },
      {
        heading: "Para qué la usan los negocios locales",
        paragraphs: [
          "Una tarjeta de fidelización digital para una cafetería o una peluquería. Reservas y citas para una clínica o un centro deportivo. Pedidos para recoger en una panadería o un restaurante. Un área privada donde tus clientes ven sus citas, sus bonos o sus facturas.",
          "Con las notificaciones puedes avisar de una oferta, recordar una cita o decir que el pedido está listo, sin depender de que vean tu publicación en redes.",
        ],
      },
      {
        heading: "Cuándo no la necesitas",
        paragraphs: [
          "Si lo único que quieres es que te encuentren y te escriban, una web bien hecha es suficiente y mucho más barata. Una app web tiene sentido cuando tus clientes vuelven a menudo y hacen algo dentro: reservar, pedir, acumular puntos, consultar su cuenta.",
          "Si necesitas funciones muy concretas del teléfono o estar sí o sí en las tiendas de apps, te lo diremos y valoraremos contigo otra opción.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta una app para mi negocio?",
        a: "Una app web progresiva parte de 990 €. El precio final depende de lo que tenga que hacer (reservas, pedidos, área de clientes…) y te lo damos cerrado después de hablar contigo.",
      },
      {
        q: "¿Funciona en iPhone?",
        a: "Sí. Se instala desde Safari con «Añadir a pantalla de inicio» y funciona en iPhone y en Android. Las notificaciones también funcionan en iPhone con versiones recientes de iOS.",
      },
      {
        q: "¿Mis clientes tienen que descargarla de una tienda de apps?",
        a: "No. La instalan directamente desde tu web en dos toques, sin pasar por el App Store ni por Google Play.",
      },
      {
        q: "¿Qué diferencia hay con una app nativa?",
        a: "Una app nativa se programa por separado para iPhone y Android y se publica en las tiendas, lo que la hace bastante más cara y lenta de actualizar. Una app web progresiva es un solo desarrollo que funciona en los dos sistemas y se actualiza al instante.",
      },
    ],
  },
  {
    slug: "mantenimiento-web",
    title: "Mantenimiento web",
    h1: "Mantenimiento web en Gran Canaria: tu web siempre activa",
    metaTitle: "Mantenimiento web en Gran Canaria desde 39 €/mes",
    metaDescription:
      "Mantenimiento web en Gran Canaria desde 39 €/mes, sin permanencia: actualizaciones, copias de seguridad, vigilancia 24/7 y soporte en español. También para webs que no hicimos nosotros.",
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
    pricing: {
      headline: "Desde 39€/mes",
      note: "Según el plan de tu web",
      breakdown: [
        { label: "Web Esencial", price: "39€/mes" },
        { label: "Web Profesional", price: "49€/mes" },
        { label: "Web Premium + IA", price: "60€/mes" },
        { label: "Web externa (no nuestra)", price: "49€/mes" },
        { label: "Pack Todo en uno", price: "349€/mes", note: "Mantenimiento + redes + SEO, todo resuelto" },
      ],
    },
    guide: [
      {
        heading: "Qué pasa cuando nadie mantiene una web",
        paragraphs: [
          "Una web sin mantenimiento no se rompe el primer día. Se va quedando atrás: los plugins y las librerías dejan de actualizarse, aparecen fallos de seguridad conocidos, un formulario deja de enviar correos sin que nadie se entere, y un día la web no carga y te lo dice un cliente.",
          "El mantenimiento sirve para que eso no pase, y para que, si pasa algo, haya una copia reciente y alguien que lo arregle ese mismo día.",
        ],
      },
      {
        heading: "Qué hacemos cada mes",
        paragraphs: [
          "Actualizamos lo que haga falta, guardamos copias de seguridad diarias y vigilamos que la web esté en línea a todas horas. Si se cae, nos enteramos nosotros antes que tus clientes.",
          "Los cambios pequeños de contenido van incluidos: un horario nuevo, un precio, una foto, un texto. Los cambios grandes que no entran en el plan se cobran a 39 € la hora, y siempre te decimos el coste antes de hacerlos.",
          "Cada mes te mandamos un resumen corto: cómo está la web, cuántas visitas ha tenido y si ha habido alguna incidencia.",
        ],
      },
      {
        heading: "Precio según tu web",
        paragraphs: [
          "Si la web la hicimos nosotros, el mantenimiento cuesta 39 €, 49 € o 60 € al mes según el plan (Esencial, Profesional o Premium con IA). Una tienda online, 50 € al mes.",
          "Si tu web la hizo otra persona o agencia, también podemos mantenerla, por 49 € al mes. Antes de empezar la revisamos y te decimos en qué estado está y si hay algo que convenga arreglar primero.",
          "Ningún plan tiene permanencia. Si lo dejas, la web sigue siendo tuya y te damos todos los accesos.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta el mantenimiento de una página web en Gran Canaria?",
        a: "Desde 39 € al mes. Para webs hechas por nosotros: 39 €, 49 € o 60 € según el plan; tiendas online, 50 €; webs hechas por otros, 49 €. Sin permanencia.",
      },
      {
        q: "¿Mantenéis webs que no habéis hecho vosotros?",
        a: "Sí, por 49 € al mes. Primero la revisamos y te decimos en qué estado está antes de que pagues nada.",
      },
      {
        q: "¿Qué cambios entran en el mantenimiento?",
        a: "Los cambios pequeños de contenido: horarios, precios, fotos, textos. Las páginas nuevas o los cambios de diseño se presupuestan aparte, a 39 € la hora, con el coste cerrado antes de empezar.",
      },
      {
        q: "¿Qué pasa si quiero dejar de pagar el mantenimiento?",
        a: "Lo dejas cuando quieras, sin penalización. La web es tuya y te entregamos todos los accesos.",
      },
      {
        q: "¿En cuánto tiempo respondéis si hay un problema?",
        a: "En menos de 24 horas hábiles, por WhatsApp o email y en español. Si la web se cae, la vigilancia nos avisa y nos ponemos con ello sin esperar a que nos escribas.",
      },
    ],
  },
  {
    slug: "software-a-medida",
    title: "Software a medida",
    h1: "Software a medida para negocios en Gran Canaria",
    metaTitle: "Software a medida para negocios en Gran Canaria",
    metaDescription:
      "Desarrollamos software a medida para negocios en Gran Canaria. Gestión de facturas, reservas, pedidos, inventario y más. Sin pagar licencias eternas. Presupuesto gratis.",
    intro:
      "Desarrollamos herramientas digitales hechas exactamente para tu negocio: sistemas de facturación, gestión de reservas, control de pedidos, inventario, paneles de administración y cualquier proceso que ahora haces a mano o con hojas de Excel. Software propio, sin licencias mensuales de por vida.",
    features: [
      { title: "Gestión de facturas", description: "Crea, envía y registra facturas en segundos. Olvídate del papeleo y los errores manuales." },
      { title: "Sistemas de reservas", description: "Tus clientes reservan online y tú gestionas todo desde un panel claro y sencillo." },
      { title: "Control de pedidos", description: "Seguimiento en tiempo real de cada pedido, desde que entra hasta que sale." },
      { title: "Gestión de inventario", description: "Stock actualizado automáticamente. Alertas cuando un producto se agota." },
      { title: "Panel de administración", description: "Controla tu negocio desde cualquier dispositivo, en cualquier momento." },
      { title: "Integraciones a medida", description: "Conectamos tu software con WhatsApp, email, TPV, contabilidad u otras herramientas que ya usas." },
    ],
    benefits: [
      "Ahorra horas cada semana en tareas administrativas",
      "Sin errores humanos en facturación o stock",
      "Software que crece con tu negocio",
      "Sin pagar licencias mensuales a terceros",
    ],
    description: "Herramientas digitales hechas para tu negocio: facturación, reservas, pedidos, inventario y más. Sin licencias eternas.",
    pricing: { headline: "Desde 990€", note: "Presupuesto cerrado tras briefing · solo cerramos proyectos que compensen" },
  },
  {
    slug: "consultoria-digital",
    title: "Consultoría digital",
    h1: "Consultoría digital para negocios en Gran Canaria",
    metaTitle: "Auditoría y consultoría digital en Gran Canaria: 149 €",
    metaDescription:
      "Auditoría de tu web, tu ficha de Google y tus redes por 149 €, con un plan de acción priorizado y sin tecnicismos. Consultoría para negocios de Gran Canaria.",
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
    pricing: {
      headline: "149€",
      note: "Auditoría completa + plan de acción",
      breakdown: [
        { label: "Auditoría + plan de acción", price: "149€" },
        { label: "Sesión de consultoría", price: "79€", note: "90 minutos" },
        { label: "Consultoría por horas", price: "59€/h" },
      ],
    },
    guide: [
      {
        heading: "Para quién es",
        paragraphs: [
          "Para el negocio que ya tiene web, redes y ficha de Google, pero no sabe si le sirven de algo. O que ha pagado campañas y no ha visto clientes. O que va a invertir en una web nueva y quiere saber antes qué le hace falta de verdad.",
          "No vendemos la auditoría como paso previo obligatorio para venderte otra cosa. Si lo que necesitas se arregla con tres cambios que puedes hacer tú, te lo decimos así.",
        ],
      },
      {
        heading: "Qué revisamos",
        paragraphs: [
          "Tu web: cuánto tarda en cargar en el móvil, si se entiende en cinco segundos qué ofreces y dónde estás, si es fácil llamarte o escribirte y si Google la puede leer bien.",
          "Tu ficha de Google Business Profile: categorías, fotos, horario, reseñas y respuestas. En búsquedas como «peluquería en Telde» o «taller cerca de mí» suele pesar más que la propia web.",
          "Tus redes y tu competencia: qué hacen los negocios que salen por delante de ti en tu zona, y qué puedes copiar o hacer mejor.",
        ],
      },
      {
        heading: "Qué te llevas",
        paragraphs: [
          "Un plan corto y ordenado: qué hacer primero, qué después y qué puedes ignorar. Cada punto explicado sin jerga y con una idea de cuánto cuesta (en tiempo o en dinero) y cuánto puede aportar.",
          "Lo repasamos juntos en una sesión para que no te quede ninguna duda, y a los 30 días revisamos cómo van los cambios.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta una auditoría digital para mi negocio?",
        a: "149 € la auditoría completa con plan de acción. Si solo quieres resolver dudas concretas, una sesión de 90 minutos cuesta 79 €, y la consultoría por horas, 59 € la hora.",
      },
      {
        q: "¿Tengo que contratar después la web o el SEO con vosotros?",
        a: "No. El plan es tuyo y puedes aplicarlo tú, con otra agencia o con nosotros. Si algo se puede hacer sin pagar a nadie, te lo decimos.",
      },
      {
        q: "No sé nada de marketing digital. ¿Lo voy a entender?",
        a: "Sí. Está pensado para dueños de negocio, no para técnicos. Explicamos cada punto con ejemplos de tu propia web y de tu competencia.",
      },
      {
        q: "¿Hace falta reunirse en persona?",
        a: "No. La auditoría la hacemos nosotros y la sesión de repaso puede ser por videollamada o llamada.",
      },
    ],
  },
  {
    slug: "publicidad-digital",
    title: "Publicidad digital",
    h1: "Publicidad digital en Gran Canaria: Google, Meta e Instagram",
    metaTitle: "Publicidad en Google y Meta Ads en Gran Canaria: 199 €/mes",
    metaDescription:
      "Gestión de campañas en Google Ads, Facebook e Instagram para negocios de Gran Canaria por 199 €/mes, sin permanencia. Anuncios segmentados por municipio y resultados medidos en clientes, no en likes.",
    intro:
      "Gestionamos campañas de publicidad digital para negocios en Gran Canaria en Google, Meta, Instagram y TikTok. Llegamos exactamente al cliente que quieres, en el momento en que está buscando lo que ofreces.",
    features: [
      { title: "Google Ads", description: "Aparece arriba cuando alguien busca tu servicio en Google." },
      { title: "Meta e Instagram Ads", description: "Campañas de captación y retargeting en Facebook e Instagram." },
      { title: "TikTok Ads", description: "Llega a audiencias jóvenes con contenido que engancha." },
      { title: "Segmentación local", description: "Mostramos tus anuncios solo en Gran Canaria o donde tú quieras." },
      { title: "Creación de creatividades", description: "Diseñamos los anuncios que mejor convierten para tu negocio." },
      { title: "Informe mensual", description: "Gastos, clics, conversiones y ROI de cada campaña." },
    ],
    benefits: [
      "Visibilidad desde el primer día de campaña",
      "Control total del presupuesto",
      "Cada euro medido en llamadas, mensajes o reservas",
      "Anuncios solo para la zona de Gran Canaria que te interesa",
    ],
    description: "Campañas de anuncios en Google, Meta, Instagram y TikTok. Llegamos a tu cliente ideal y convertimos clics en ventas.",
    pricing: {
      headline: "199€/mes",
      note: "Gestión · inversión en anuncios aparte",
      breakdown: [
        { label: "Gestión de campañas", price: "199€/mes", note: "Google Ads / Meta Ads" },
        { label: "Inversión publicitaria", price: "Aparte", note: "La paga el cliente directo a la plataforma · mínimo recomendado 150€/mes" },
      ],
    },
    guide: [
      {
        heading: "Google o Instagram: depende de cómo te buscan",
        paragraphs: [
          "Google Ads sirve cuando el cliente ya sabe lo que quiere y lo busca: «fontanero urgente Las Palmas», «taller de chapa en Telde». Pagas por aparecer arriba justo en ese momento.",
          "Facebook e Instagram sirven cuando el cliente todavía no te busca, pero encaja con lo que ofreces: un restaurante nuevo, una clínica estética, una academia. Ahí el anuncio tiene que entrar por los ojos, y lo que medimos son los mensajes y las reservas que genera.",
          "Muchos negocios locales no necesitan los dos. Te recomendamos uno según tu caso y empezamos por ahí.",
        ],
      },
      {
        heading: "Segmentar bien en una isla",
        paragraphs: [
          "En Gran Canaria no tiene sentido enseñar el anuncio de una peluquería de Vecindario a alguien de Gáldar. Limitamos los anuncios al municipio o al radio que de verdad atiendes, y si trabajas con turismo separamos al residente del visitante, porque buscan cosas distintas y en idiomas distintos.",
          "Para la mayoría de negocios locales el objetivo que mejor funciona es que te escriban por WhatsApp, con un mensaje ya preparado. Así cada euro se convierte en una conversación que puedes contar.",
        ],
      },
      {
        heading: "Cuánto cuesta y qué esperar",
        paragraphs: [
          "La gestión cuesta 199 € al mes, sin permanencia. El dinero de los anuncios va aparte y lo pagas tú directamente a Google o a Meta, con tu tarjeta: nunca pasa por nosotros. Recomendamos empezar con al menos 150 € al mes de inversión.",
          "Las primeras semanas las plataformas están aprendiendo a quién enseñar el anuncio, así que los resultados mejoran con el tiempo. Nadie puede garantizarte un número de clientes, pero sí que vas a saber exactamente cuánto te cuesta cada uno.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta hacer publicidad en Google o Instagram en Gran Canaria?",
        a: "Nuestra gestión cuesta 199 € al mes, sin permanencia. Aparte está la inversión en anuncios, que pagas tú directamente a la plataforma; recomendamos un mínimo de 150 € al mes para empezar.",
      },
      {
        q: "¿El dinero de los anuncios pasa por vosotros?",
        a: "No. La cuenta publicitaria es tuya y pagas a Google o a Meta con tu propia tarjeta. Nosotros solo cobramos la gestión.",
      },
      {
        q: "¿Cuándo voy a ver resultados?",
        a: "Los anuncios se ven desde el primer día, pero las campañas suelen necesitar unas semanas de aprendizaje para afinar a quién se muestran. Cada mes te mandamos un informe con lo gastado y los clics, mensajes o llamadas conseguidos.",
      },
      {
        q: "¿Hacéis también los anuncios (imágenes y vídeos)?",
        a: "Sí. Diseñamos las creatividades para cada campaña, adaptadas a tu negocio y al formato de cada plataforma.",
      },
      {
        q: "¿Qué es mejor, el botón «Promocionar» de Instagram o una campaña?",
        a: "El botón funciona, pero da poco control. Desde el Administrador de anuncios se puede elegir el objetivo (por ejemplo, mensajes a WhatsApp), comparar anuncios y medir lo que importa, por el mismo dinero.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
