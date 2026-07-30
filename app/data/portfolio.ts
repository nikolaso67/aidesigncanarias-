export interface CaseStudyBlock {
  title: string;
  description: string;
}

/**
 * Contenido de la página /proyectos/[slug].
 *
 * REGLAS DE CONTENIDO (mismas que las landings de sector):
 * - Son proyectos demo propios. Nunca presentarlos como clientes de pago.
 * - Cero métricas inventadas (visitas, conversiones, ventas): no hay datos
 *   reales que medir. Se habla de decisiones de diseño y de capacidades.
 * - Todo lo que se afirma aquí tiene que ser comprobable abriendo la web viva.
 */
export interface CaseStudy {
  /** Sector en corto para el eyebrow, ej. "Peluquería y estética" */
  sectorLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Punto de partida: qué problema tiene un negocio de este sector */
  planteamiento: string[];
  /** Decisiones de diseño y desarrollo, verificables en la web publicada */
  decisiones: CaseStudyBlock[];
  /** Qué se lleva un negocio con una web así (capacidades, nunca resultados medidos) */
  capacidades: string[];
  stack: string[];
  /** Slug de la landing de sector relacionada en app/[sector]/data.ts */
  sectorSlug?: string;
}

export interface PortfolioProject {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  /** Slugs de app/servicios/data.ts a los que este proyecto sirve de ejemplo real */
  serviceSlugs: string[];
  caseStudy: CaseStudy;
}

/**
 * Proyectos demo reales (publicados y navegables), no clientes de pago.
 * Se muestran así de forma honesta en toda la web — nunca como testimonios.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "alma-hair-studio",
    name: "ALMA Hair Studio",
    category: "Peluquería · Web con 3D + cita online",
    description:
      "Web para peluquería con hero 3D interactivo, carta de servicios con precios y reserva de cita online en 30 segundos. Entra y pide hora: está viva.",
    tags: ["3D interactivo", "Cita online", "Next.js"],
    image: "/portfolio/alma.jpg",
    url: "https://alma-hair-studio.vercel.app",
    serviceSlugs: ["diseno-web-gran-canaria", "software-a-medida", "identidad-visual-branding"],
    caseStudy: {
      sectorLabel: "Peluquería y estética",
      metaTitle: "ALMA Hair Studio: web para peluquería con cita online",
      metaDescription:
        "Proyecto demo de web para peluquería en Gran Canaria: hero 3D interactivo, servicios con precio y reserva de cita online. Publicada y navegable.",
      h1: "ALMA Hair Studio: una web de peluquería que coge citas sola",
      intro:
        "Una peluquería se juega el cliente en el momento exacto en que decide pedir hora. ALMA Hair Studio es nuestro proyecto demo para ese momento: entras, ves los servicios con su precio y pides cita sin llamar ni esperar a que alguien conteste el Instagram.",
      planteamiento: [
        "La mayoría de salones de Las Palmas gestionan las citas entre llamadas, mensajes directos y una libreta en el mostrador. Funciona hasta que dos clientas escriben a la vez un sábado por la tarde, o hasta que alguien decide pedir hora a las once de la noche y no tiene dónde hacerlo.",
        "ALMA es un proyecto propio: no hay cliente detrás. Lo montamos para poder enseñar, con una web real y navegable, cómo resolvemos ese problema concreto — porque una demo que se puede tocar convence bastante más que un mockup en una presentación.",
      ],
      decisiones: [
        {
          title: "Hero 3D que reacciona al puntero",
          description:
            "La portada monta una escena 3D en tiempo real con React Three Fiber; no es un vídeo en bucle. Un salón compite por imagen, y esto lo separa de la web de plantilla que tiene el de la esquina.",
        },
        {
          title: "Servicios con precio y duración visibles",
          description:
            "Cada servicio lleva su precio y su tiempo, sin «consultar». Filtra a quien no encaja y evita la conversación incómoda del final.",
        },
        {
          title: "Reserva con los campos mínimos",
          description:
            "El flujo de cita pide servicio, día y datos de contacto. Nada más. Cada campo extra en un formulario es gente que lo abandona a medias.",
        },
        {
          title: "Galería como prueba de trabajo",
          description:
            "Los trabajos son la carta de presentación real del salón, así que la galería tiene sección propia con imágenes optimizadas en vez de un carrusel lento.",
        },
        {
          title: "Manifiesto de marca",
          description:
            "Un bloque de texto con la voz del salón. En estética el tono de la web forma parte de lo que se vende: no es relleno.",
        },
      ],
      capacidades: [
        "Pedir cita a cualquier hora, también con el salón cerrado",
        "Precios claros antes de que suene el teléfono",
        "Una web que se parece al salón, no a una plantilla",
        "Base lista para SEO local y para enlazar desde Instagram",
      ],
      stack: ["Next.js 16", "React Three Fiber", "GSAP", "Tailwind CSS", "Vercel"],
      sectorSlug: "web-para-peluquerias-gran-canaria",
    },
  },
  {
    slug: "forja-training",
    name: "Forja Training",
    category: "Gimnasio · Web con vídeo + reservas",
    description:
      "Web para gimnasio en Las Palmas con hero de vídeo a pantalla completa, clases, planes y reserva de clase online. Diseño oscuro y potente que transmite la energía del box. Entra y navégala: está publicada.",
    tags: ["Vídeo hero", "Reservas", "Next.js"],
    image: "/portfolio/forja.webp",
    url: "https://forja-training-zeta.vercel.app",
    serviceSlugs: ["diseno-web-gran-canaria", "identidad-visual-branding", "seo-posicionamiento-canarias"],
    caseStudy: {
      sectorLabel: "Gimnasio y box",
      metaTitle: "Forja Training: web para gimnasio con reserva de clase",
      metaDescription:
        "Proyecto demo de web para gimnasio en Las Palmas: hero de vídeo a pantalla completa, clases, planes y prueba gratis online. Publicada y navegable.",
      h1: "Forja Training: la web de un box que se siente antes de leerse",
      intro:
        "Un gimnasio se vende por sensación: cómo suena, cómo se ve, qué energía transmite. Forja Training es nuestro proyecto demo para gimnasios y boxes — vídeo a pantalla completa, clases, planes y una clase de prueba que se reserva desde el móvil.",
      planteamiento: [
        "El horario de clases de la mayoría de boxes vive en un story de Instagram que caduca en 24 horas, y las altas se hacen en el mostrador. Quien se decide un domingo por la noche, que es cuando la gente decide ponerse en forma, no tiene dónde apuntarse.",
        "Forja es un proyecto propio, sin cliente detrás. Lo montamos para enseñar cómo se ve una web de gimnasio que transmite intensidad y que además recoge pruebas gratis mientras el box está cerrado.",
      ],
      decisiones: [
        {
          title: "Vídeo a pantalla completa como portada",
          description:
            "Lo primero que ve el visitante es gente entrenando, no un párrafo. El vídeo va comprimido y con imagen de póster para que en móvil no se pague la energía con segundos de carga.",
        },
        {
          title: "Horario de clases con URL propia",
          description:
            "Las clases tienen su sección y su ancla (#clases), así el enlace del perfil de Instagram lleva directo al horario en vez de a la portada.",
        },
        {
          title: "Planes con precio y sin letra pequeña",
          description:
            "Tres planes comparables de un vistazo. En un sector donde las cadenas low-cost compiten por precio, esconderlo solo sirve para perder al que ya venía convencido.",
        },
        {
          title: "La prueba gratis es el botón principal",
          description:
            "El formulario reserva una clase de prueba, que es la conversión real del negocio. El alta se cierra después, en el box y en persona.",
        },
        {
          title: "Oscuro, condensado, de alto contraste",
          description:
            "Tipografía en mayúsculas y paleta oscura. La estética es parte del producto: nadie se apunta a un box que parece la web de una clínica dental.",
        },
      ],
      capacidades: [
        "Reservar clase de prueba fuera del horario del box",
        "Horario y planes actualizados en un sitio que no caduca a las 24 horas",
        "Imagen de marca a la altura de lo que se cobra por la cuota",
        "Estructura preparada para SEO local de «gimnasio en Las Palmas»",
      ],
      stack: ["Next.js 16", "GSAP", "Tailwind CSS", "Vercel"],
      sectorSlug: "web-para-gimnasios-gran-canaria",
    },
  },
  {
    slug: "taberna-el-tablero",
    name: "La Taberna El Tablero",
    category: "Restaurante · Web + SEO local",
    description:
      "Web para taberna en El Tablero con menú digital, reservas, ubicación clara y SEO local. Entra y navégala: está publicada y funcionando.",
    tags: ["Next.js", "SEO Local", "Menú digital"],
    image: "/portfolio/taberna.webp",
    url: "https://taberna-el-tablero.vercel.app",
    serviceSlugs: ["diseno-web-gran-canaria", "seo-posicionamiento-canarias"],
    caseStudy: {
      sectorLabel: "Restaurante",
      metaTitle: "La Taberna El Tablero: web de restaurante con carta digital",
      metaDescription:
        "Proyecto demo de web para restaurante en Gran Canaria: carta digital legible en móvil, reservas, ubicación y SEO local. Publicada y navegable.",
      h1: "La Taberna El Tablero: carta digital, reservas y SEO local",
      intro:
        "Cuando alguien busca dónde comer cerca, decide en el móvil y en menos de un minuto. La Taberna El Tablero es nuestro proyecto demo de restaurante canario: carta que se lee sin hacer zoom, reserva sin llamar y ubicación a un toque.",
      planteamiento: [
        "El punto de partida es el de casi cualquier restaurante de la isla: la carta es un PDF escaneado que obliga a hacer zoom, las reservas entran por teléfono justo en plena hora punta, y el turista que busca «dónde comer» en Maspalomas o El Tablero nunca llega a ver el sitio.",
        "Es un proyecto propio, no un encargo. Sirve para enseñar cómo tratamos los tres frentes a la vez —carta, reservas y búsqueda local— en una web que se puede abrir y tocar ahora mismo.",
      ],
      decisiones: [
        {
          title: "Carta digital en HTML, no un PDF",
          description:
            "El menú está maquetado por secciones y se lee en vertical en el móvil. Un PDF no se indexa igual, no se adapta a la pantalla y añade una descarga entre el hambre y la mesa.",
        },
        {
          title: "Reservar sin descolgar el teléfono",
          description:
            "Formulario de reserva directo en la página. La reserva llega escrita, sin ruido de cocina de por medio y sin depender de que alguien pueda contestar.",
        },
        {
          title: "Ubicación y horario por delante",
          description:
            "Sección propia con la dirección, el mapa y las horas. En hostelería son las dos preguntas que más se repiten, y responderlas rápido evita la llamada.",
        },
        {
          title: "Fotografía y ambiente como argumento",
          description:
            "La portada y el bloque «nosotros» venden el ambiente de taberna canaria. La gente no elige por la lista de platos: elige por cómo se imagina la mesa.",
        },
        {
          title: "Estructura pensada para búsqueda local",
          description:
            "Títulos, metadatos y contenido escritos alrededor de la zona real del negocio, para tener algo que posicionar en «restaurante en El Tablero» en vez de un texto genérico.",
        },
      ],
      capacidades: [
        "Carta que se actualiza sin rehacer un PDF",
        "Reservas que entran por escrito y a cualquier hora",
        "Ubicación y horario visibles sin buscar",
        "Contenido con el que competir en las búsquedas de la zona",
      ],
      stack: ["Next.js", "Tailwind CSS", "Vercel"],
      sectorSlug: "web-para-restaurantes-gran-canaria",
    },
  },
  {
    slug: "cabana-by-efi",
    name: "Cabana by Efi",
    category: "Gastrobar · Web de autor",
    description:
      "Web de autor para gastrobar con identidad visual cuidada, galería de platos y reservas. Una web que vende experiencia, no solo comida.",
    tags: ["Diseño", "Identidad", "Mobile-first"],
    image: "/portfolio/cabana.webp",
    url: "https://cabana-by-efi.vercel.app",
    serviceSlugs: ["diseno-web-gran-canaria", "identidad-visual-branding"],
    caseStudy: {
      sectorLabel: "Gastrobar",
      metaTitle: "Cabana by Efi: web de autor para un gastrobar",
      metaDescription:
        "Proyecto demo de web para gastrobar: identidad visual propia, carta, reservas y datos estructurados para Google. Publicada y navegable.",
      h1: "Cabana by Efi: una web de autor para un gastrobar",
      intro:
        "Un gastrobar no compite por precio, compite por experiencia. Cabana by Efi es nuestro proyecto demo para ese caso: una web con identidad propia, donde la carta y la reserva están, pero lo que primero se transmite es el sitio.",
      planteamiento: [
        "Cuando el negocio vive de la experiencia, la web genérica de restaurante trabaja en contra: iguala hacia abajo. El planteamiento aquí fue el opuesto al de una carta funcional — cuánta personalidad se puede meter sin que la reserva se pierda por el camino.",
        "Como los demás, es un proyecto propio. Nos sirve para enseñar el lado de diseño e identidad del trabajo, no solo el lado técnico.",
      ],
      decisiones: [
        {
          title: "Identidad antes que plantilla",
          description:
            "Tipografía, paleta y ritmo visual construidos para este sitio concreto. Es la diferencia entre parecer un local con criterio y parecer uno más del portal de reservas.",
        },
        {
          title: "Carta tratada como contenido, no como anexo",
          description:
            "La carta se presenta dentro del diseño de la web, con su propio aire. Nada de abrir un archivo aparte que rompe la experiencia a mitad.",
        },
        {
          title: "Reserva y horario siempre a mano",
          description:
            "Reservas y horario tienen bloques propios y accesibles desde la navegación. La estética no puede costarle al visitante encontrar cómo sentarse a la mesa.",
        },
        {
          title: "Datos estructurados para Google",
          description:
            "La web incluye marcado schema.org en el layout, que es lo que permite a Google entender que hay un negocio con dirección y horarios detrás de un diseño así de libre.",
        },
        {
          title: "Diseñada desde el móvil",
          description:
            "El sitio se compone primero para pantalla pequeña, que es donde se mira una web de hostelería, y se abre después hacia el escritorio.",
        },
      ],
      capacidades: [
        "Una imagen digital al nivel del local",
        "Carta y reservas dentro de la misma experiencia",
        "Datos de negocio legibles por Google desde el primer día",
        "Diseño propio, sin cara de plantilla reutilizada",
      ],
      stack: ["Next.js", "Tailwind CSS", "Schema.org", "Vercel"],
      sectorSlug: "web-para-restaurantes-gran-canaria",
    },
  },
  {
    slug: "ferreteria-corona-roja",
    name: "Ferretería Corona Roja",
    category: "Comercio · Web + catálogo",
    description:
      "Web para ferretería en Playa del Inglés con catálogo de productos, ubicación visible y diseño que respeta la identidad histórica del negocio.",
    tags: ["Catálogo", "SEO Local", "Branding"],
    image: "/portfolio/corona.webp",
    url: "https://coronaroja.vercel.app",
    serviceSlugs: ["diseno-web-gran-canaria", "seo-posicionamiento-canarias", "identidad-visual-branding"],
    caseStudy: {
      sectorLabel: "Comercio local",
      metaTitle: "Ferretería Corona Roja: web para un comercio de toda la vida",
      metaDescription:
        "Proyecto demo de web para ferretería en Playa del Inglés: catálogo, zona de servicio, horario y contacto en una sola página estática y muy rápida.",
      h1: "Ferretería Corona Roja: el comercio de barrio, en Google",
      intro:
        "No todos los negocios necesitan una web grande. Corona Roja es nuestro proyecto demo para el comercio de toda la vida: una sola página, muy rápida, que responde qué venden, a qué zona sirven, cuándo abren y cómo llegar.",
      planteamiento: [
        "Un comercio así no vive de la web: vive del mostrador. Pero el cliente que busca «ferretería en Playa del Inglés» a las nueve de la mañana desde el móvil sí decide con lo que encuentre en Google. Si no hay nada, va a la siguiente.",
        "El planteamiento fue deliberadamente austero: la web más pequeña que resuelve el problema, sin panel de administración ni funciones que nadie va a usar.",
      ],
      decisiones: [
        {
          title: "Una sola página estática, sin framework",
          description:
            "HTML y CSS, sin capas de más. Carga casi instantánea, nada que actualizar cada mes y coste de mantenimiento mínimo. Meterle un framework a esto habría sido cobrar por complejidad que el negocio no necesita.",
        },
        {
          title: "Catálogo por familias, no inventario completo",
          description:
            "El bloque «todo para su proyecto» agrupa las familias de producto. Un comercio con miles de referencias no necesita listarlas: necesita que sepas que tiene lo tuyo.",
        },
        {
          title: "Zona de servicio explícita",
          description:
            "Una sección dice qué zona turística cubren. Es contenido útil para el cliente y, a la vez, exactamente lo que Google necesita leer para el «cerca de mí».",
        },
        {
          title: "Horario y contacto como protagonistas",
          description:
            "«¿Cuándo puede visitarnos?» y «¿Necesita algo?» son secciones enteras. En comercio local esas dos son casi todas las visitas.",
        },
        {
          title: "El tono del negocio, respetado",
          description:
            "La web habla de usted, como en el mostrador. Modernizar un comercio histórico no es borrar su carácter y ponerle la estética de una startup.",
        },
      ],
      capacidades: [
        "Aparecer en las búsquedas de ferretería de la zona",
        "Horario y teléfono sin tener que llamar para preguntarlos",
        "Una web que no envejece ni exige mantenimiento mensual",
        "Imagen cuidada sin traicionar la identidad del negocio",
      ],
      stack: ["HTML", "CSS", "Vercel"],
    },
  },
  {
    slug: "risco-tienda-online",
    name: "RISCO",
    category: "Moda · Tienda online",
    description:
      "Tienda online de ropa con catálogo filtrable, tallas y colores, carrito que no se pierde al recargar y checkout completo. Entra y llena el carrito: funciona.",
    tags: ["Carrito real", "Checkout", "Filtros"],
    image: "/portfolio/risco.webp",
    url: "https://risco-delta.vercel.app",
    serviceSlugs: ["tiendas-online", "diseno-web-gran-canaria", "identidad-visual-branding"],
    caseStudy: {
      sectorLabel: "Moda y tienda online",
      metaTitle: "RISCO: tienda online de ropa con carrito y checkout",
      metaDescription:
        "Proyecto demo de tienda online de ropa: catálogo con filtros, tallas y colores, carrito persistente y checkout en tres pasos. Publicada y navegable.",
      h1: "RISCO: una tienda de ropa que se puede usar, no mirar",
      intro:
        "RISCO es una marca inventada por nosotros para poder enseñar una tienda online de verdad. Las prendas no existen y el pago está simulado, pero todo lo demás funciona: filtras el catálogo, eliges talla y color, llenas el carrito y llegas al final del checkout.",
      planteamiento: [
        "Casi todo el que empieza a vender ropa lo hace por mensajes directos: el cliente pregunta el precio, pregunta si queda su talla, y hay que contestar uno a uno. Funciona con veinte pedidos al mes y se cae solo cuando llegan doscientos, porque nadie puede atender el Instagram a las once de la noche.",
        "Una tienda de ropa además tiene un problema que otros negocios no tienen: el mismo modelo existe en varias tallas y varios colores, y cada combinación puede estar agotada por separado. Si eso no está bien resuelto, se venden cosas que no hay.",
        "RISCO es un proyecto propio, sin cliente detrás. Lo montamos para poder enseñar una tienda que se toca, en lugar de prometer una en una reunión.",
      ],
      decisiones: [
        {
          title: "Un carrito de verdad, no un formulario de pedido",
          description:
            "Suma, resta, recalcula y sobrevive a cerrar la pestaña. Enseña cuánto falta para el envío gratis y lo aplica solo al pasar del importe. Muchas «tiendas» baratas son en realidad un formulario de contacto disfrazado.",
        },
        {
          title: "Talla y color como variantes separadas",
          description:
            "Cada combinación de talla y color es una unidad distinta, y las tallas agotadas salen tachadas y no se pueden añadir. Es la forma en que una tienda real controla el stock, y es lo que evita vender lo que no queda.",
        },
        {
          title: "Filtros que responden al instante",
          description:
            "Categoría, talla y precio filtran sin recargar la página, y cuando no queda nada lo dice en lugar de dejar la rejilla vacía. En catálogo de moda, cada recarga esperando es gente que se va.",
        },
        {
          title: "Checkout en tres pasos y el pago señalado como simulado",
          description:
            "Contacto, envío y pago, con validación en cada paso. Los campos de tarjeta están desactivados a propósito y avisados: es una demo y nadie debe escribir ahí datos reales. La pasarela real (Stripe, Redsys o el checkout de Shopify) entra en ese hueco.",
        },
        {
          title: "Hecha para el móvil, que es donde se compra ropa",
          description:
            "Los botones de talla, los filtros y el carrito tienen el tamaño mínimo que pide un dedo, y los campos usan letra de 16 px para que Safari no haga zoom al tocarlos. Está medido a 320, 375, 390 y 430 px de ancho.",
        },
      ],
      capacidades: [
        "Vender sin ir contestando precios y tallas por mensaje privado",
        "Que el cliente vea qué está agotado antes de pedirlo",
        "Envío gratis a partir de un importe, aplicado automáticamente",
        "Una base preparada para enchufar pasarela de pago o Shopify sin rehacer la tienda",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    },
  },
];

export function getProjectsForService(slug: string): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.serviceSlugs.includes(slug));
}

export function getProject(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}
