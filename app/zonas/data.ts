export interface Zona {
  slug: string;
  nombre: string;
  nombreCorto: string;
  descripcionLocal: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  negociosTipo: string[];
  referencia: string;
  /** Párrafos con contexto real del municipio (opcional). Solo hechos comprobables. */
  contexto?: { titulo: string; parrafos: string[] };
  /** Preguntas frecuentes de la zona (opcional). Se publican también como FAQPage JSON-LD. */
  faq?: { q: string; a: string }[];
}

export const zonas: Zona[] = [
  {
    slug: "las-palmas-de-gran-canaria",
    nombre: "Las Palmas de Gran Canaria",
    nombreCorto: "Las Palmas",
    descripcionLocal: "la capital de Gran Canaria, con más de 370.000 habitantes y el mayor tejido empresarial de las islas",
    intro: "Diseño web profesional para negocios en Las Palmas de Gran Canaria. Webs rápidas, con SEO local y chatbot con IA — entrega en 7 a 14 días.",
    metaTitle: "Diseño web en Las Palmas de Gran Canaria",
    metaDescription: "Agencia de diseño web en Las Palmas de Gran Canaria. Webs profesionales con SEO local, tiendas online y chatbot con IA. Presupuesto gratis en 24h.",
    negociosTipo: ["restaurantes y bares", "clínicas y consultas médicas", "tiendas y comercios", "inmobiliarias", "academias y centros de formación"],
    referencia: "Vegueta, Triana, Mesa y López",
  },
  {
    slug: "maspalomas",
    nombre: "Maspalomas y Playa del Inglés",
    nombreCorto: "Maspalomas",
    descripcionLocal: "la zona turística más activa del sur de Gran Canaria, con millones de visitantes al año y una alta demanda de servicios locales",
    intro: "Diseño web profesional para negocios en Maspalomas y Playa del Inglés. Webs en español e inglés, con SEO turístico y reservas online.",
    metaTitle: "Diseño web en Maspalomas y Playa del Inglés",
    metaDescription: "Agencia de diseño web en Maspalomas. Webs para negocios turísticos, restaurantes y tiendas en el sur de Gran Canaria. Presupuesto gratis.",
    negociosTipo: ["hoteles y apartamentos", "restaurantes y chiringuitos", "actividades y excursiones", "tiendas de souvenirs y moda", "spas y centros de bienestar"],
    referencia: "Faro de Maspalomas, CC Yumbo, Playa del Inglés",
  },
  {
    slug: "telde",
    nombre: "Telde",
    nombreCorto: "Telde",
    descripcionLocal: "el segundo municipio más poblado de Gran Canaria, con un importante sector industrial y comercial en crecimiento",
    intro: "Diseño web profesional para empresas y negocios en Telde, Gran Canaria. Webs con SEO local para aparecer en Google cuando tus clientes te buscan.",
    metaTitle: "Diseño web en Telde, Gran Canaria",
    metaDescription: "Agencia de diseño web en Telde. Webs profesionales con SEO local para empresas y negocios del segundo municipio más grande de Gran Canaria.",
    negociosTipo: ["talleres mecánicos y automoción", "empresas de construcción", "comercios locales", "clínicas y consultas", "academias y centros educativos"],
    referencia: "San Gregorio, San Juan, Jinámar, Melenara o los polígonos de Salinetas y El Goro",
    contexto: {
      titulo: "Qué necesita la web de un negocio en Telde",
      parrafos: [
        "Telde no es un único mercado. La zona comercial de San Gregorio, los cascos históricos de San Juan y San Francisco, barrios como Jinámar o Las Remudas, la costa de Melenara, Salinetas y La Garita y los polígonos industriales de Salinetas y El Goro tienen clientes distintos que buscan en Google de forma distinta.",
        "Un comercio o una clínica de San Gregorio compite por búsquedas cercanas del tipo «fisioterapeuta en Telde» o «tienda de … cerca de mí». Ahí pesan sobre todo la ficha de Google Business Profile, las reseñas y una web rápida en el móvil que diga claramente en qué barrio estás y cómo llegar.",
        "Una empresa de los polígonos vende sobre todo a otras empresas: necesita una web que explique bien sus servicios, enseñe trabajos reales y permita pedir presupuesto sin llamar. Y un restaurante de la costa necesita lo contrario: carta actualizada, horario, reservas y fotos que abran el apetito.",
        "Por eso no hacemos la misma web para todos. Primero vemos qué buscan tus clientes y desde dónde, y después diseñamos para eso.",
      ],
    },
    faq: [
      {
        q: "¿Cuánto cuesta una página web para un negocio en Telde?",
        a: "La web Esencial cuesta 249 €, la Profesional 350 € y la Premium con IA 420 €, en pago único. El mantenimiento es opcional, desde 39 € al mes y sin permanencia. Te damos el presupuesto cerrado en menos de 24 horas.",
      },
      {
        q: "¿Tengo que desplazarme o tenéis que venir a mi negocio?",
        a: "No hace falta. Todo el proceso se hace por WhatsApp, llamada o videollamada: nos cuentas tu negocio, te enseñamos una primera versión de la web y solo pagas si te convence.",
      },
      {
        q: "¿Cuánto tardaré en aparecer en Google cuando busquen mi negocio en Telde?",
        a: "Depende de la competencia de tu sector. Con la ficha de Google Business Profile verificada y una web bien optimizada, las búsquedas por el nombre del negocio suelen funcionar en pocas semanas. Las búsquedas genéricas como «restaurante en Telde» llevan más tiempo. Nadie puede garantizar una posición concreta en Google, y desconfía de quien lo haga.",
      },
      {
        q: "Ya tengo web pero no me trae clientes. ¿Podéis revisarla?",
        a: "Sí. Te hacemos una revisión exprés gratuita: velocidad, cómo se ve en el móvil, si Google la entiende bien y qué cambiaríamos primero. Si se puede mejorar sin rehacerla, te lo decimos.",
      },
    ],
  },
  {
    slug: "santa-lucia-de-tirajana",
    nombre: "Santa Lucía de Tirajana",
    nombreCorto: "Santa Lucía",
    descripcionLocal: "uno de los municipios del sur de Gran Canaria con mayor crecimiento comercial y residencial en los últimos años",
    intro: "Diseño web para negocios en Santa Lucía de Tirajana. Webs profesionales con SEO local, gestión de redes sociales y chatbot con IA.",
    metaTitle: "Diseño web en Santa Lucía de Tirajana",
    metaDescription: "Agencia de diseño web en Santa Lucía de Tirajana. Webs con SEO local para negocios del sur de Gran Canaria. Presupuesto gratis en 24h.",
    negociosTipo: ["comercios y supermercados", "restaurantes y cafeterías", "clínicas y farmacias", "servicios del hogar", "academias y clases particulares"],
    referencia: "El Tablero, Vecindario, Doctoral",
  },
  {
    slug: "mogan",
    nombre: "Mogán",
    nombreCorto: "Mogán",
    descripcionLocal: "el municipio turístico del suroeste de Gran Canaria, conocido por Puerto de Mogán y sus playas",
    intro: "Diseño web para negocios turísticos y locales en Mogán. Webs bilingües, reservas online y SEO para captar clientes en Puerto de Mogán y Arguineguín.",
    metaTitle: "Diseño web en Mogán, Gran Canaria",
    metaDescription: "Agencia de diseño web en Mogán y Puerto de Mogán. Webs para negocios turísticos con reservas online y SEO local. Presupuesto gratis.",
    negociosTipo: ["restaurantes y terrazas", "actividades acuáticas y náuticas", "apartamentos y alojamientos", "tiendas y artesanía", "agencias de excursiones"],
    referencia: "Puerto de Mogán, Arguineguín, Playa de Amadores",
    contexto: {
      titulo: "Qué necesita la web de un negocio en Mogán",
      parrafos: [
        "En Mogán una parte grande de los clientes no vive aquí. Busca desde el móvil, muchas veces en inglés o en otro idioma, desde el hotel en Puerto Rico, Amadores o Taurito, o antes incluso de llegar a la isla. Si tu web solo está en español o tarda en cargar con los datos del móvil, ese cliente se va al siguiente resultado.",
        "Por eso las webs que hacemos para negocios turísticos de Mogán son bilingües desde el principio, enseñan precios y horarios sin rodeos y dejan reservar o escribir por WhatsApp en dos toques. Un restaurante del Puerto necesita su carta y su terraza a la vista; una empresa de excursiones, el calendario de salidas y el punto de encuentro con mapa.",
        "Arguineguín es otra historia: más vecinos y residentes de larga estancia, que buscan servicios del día a día (peluquería, fisioterapia, talleres, clases). Ahí pesa más la ficha de Google Business Profile, las reseñas y que la web diga claramente dónde estás.",
      ],
    },
    faq: [
      {
        q: "¿Hacéis webs en inglés y otros idiomas para negocios de Mogán?",
        a: "Sí. Las webs para negocios turísticos las hacemos en español e inglés como base, y podemos añadir más idiomas según tus clientes.",
      },
      {
        q: "¿Cuánto cuesta una página web para un negocio en Mogán?",
        a: "La web Esencial cuesta 249 €, la Profesional 350 € y la Premium con IA 420 €, en pago único. El plan Premium incluye chatbot con IA que responde a tus clientes a cualquier hora, también en inglés. Mantenimiento opcional desde 39 € al mes, sin permanencia.",
      },
      {
        q: "¿Puedo recibir reservas directamente en la web?",
        a: "Sí. Podemos poner un sistema de reservas o citas en la propia web, o un botón directo a WhatsApp, para que no dependas solo de plataformas que se quedan una comisión.",
      },
      {
        q: "¿Tengo que ir a Las Palmas para reunirnos?",
        a: "No. Todo se hace por WhatsApp, llamada o videollamada. Te enseñamos una primera versión de tu web funcionando y solo pagas si te convence.",
      },
    ],
  },
  {
    slug: "arucas",
    nombre: "Arucas",
    nombreCorto: "Arucas",
    descripcionLocal: "municipio del norte de Gran Canaria conocido por su catedral, su ron y un sector agrícola y comercial consolidado",
    intro: "Diseño web para negocios y empresas en Arucas, Gran Canaria. Webs profesionales con SEO local para destacar en el norte de la isla.",
    metaTitle: "Diseño web en Arucas, Gran Canaria",
    metaDescription: "Agencia de diseño web en Arucas. Webs profesionales para negocios del norte de Gran Canaria con SEO local. Presupuesto gratis en 24h.",
    negociosTipo: ["bodegas y productos locales", "restaurantes y tapas", "comercios y tiendas", "empresas agrícolas", "servicios profesionales"],
    referencia: "Catedral de Arucas, Destilerías Arehucas, casco histórico",
    contexto: {
      titulo: "Qué necesita la web de un negocio en Arucas",
      parrafos: [
        "Arucas está a un paso de Las Palmas de Gran Canaria, y eso juega en las dos direcciones: muchos vecinos trabajan y compran en la capital, y cuando buscan un servicio en Google les aparecen negocios de Las Palmas antes que los de su propio municipio. Para no perder a esos clientes, tu web y tu ficha de Google tienen que dejar claro que estás en Arucas y en qué zona.",
        "El municipio tampoco es uno solo. El casco histórico y la zona de la iglesia de San Juan Bautista reciben visitantes y excursiones; la costa de Bañaderos, El Puertillo y San Andrés tiene su propia vida de bares y restaurantes; y barrios como Cardones, Trasmontaña o Santidad viven más del comercio de cercanía.",
        "Un restaurante del casco necesita fotos, carta y horario visibles para quien pasa por allí de visita. Un taller o una academia de Cardones necesita aparecer cuando alguien busca «cerca de mí» y poder recibir mensajes sin llamar. Diseñamos según quién es tu cliente y desde dónde te busca.",
      ],
    },
    faq: [
      {
        q: "¿Cuánto cuesta una página web para un negocio en Arucas?",
        a: "La web Esencial cuesta 249 €, la Profesional 350 € y la Premium con IA 420 €, en pago único. El mantenimiento es opcional, desde 39 € al mes y sin permanencia.",
      },
      {
        q: "¿Cómo hago para salir en Google antes que los negocios de Las Palmas?",
        a: "Lo que más pesa es tener la ficha de Google Business Profile verificada con tu dirección de Arucas, reseñas de clientes reales y una web que mencione tu municipio y tu zona. Nadie puede garantizar una posición concreta, pero para búsquedas de cercanía un negocio local bien configurado tiene ventaja.",
      },
      {
        q: "¿Tengo que desplazarme para hacer la web?",
        a: "No. Todo el proceso se hace por WhatsApp, llamada o videollamada. Te enseñamos una primera versión funcionando y solo pagas si te convence.",
      },
      {
        q: "Ya tengo web pero no me trae clientes. ¿Podéis revisarla?",
        a: "Sí. Te hacemos una revisión exprés gratuita: velocidad, cómo se ve en el móvil, si Google la entiende bien y qué cambiaríamos primero.",
      },
    ],
  },
];

export function getZona(slug: string): Zona | undefined {
  return zonas.find((z) => z.slug === slug);
}
