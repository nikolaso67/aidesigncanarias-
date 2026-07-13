/**
 * Landings verticales por sector — /web-para-<sector>-gran-canaria
 *
 * REGLAS DE CONTENIDO:
 * - Cada sector tiene copy propio de verdad (pains, features, FAQs).
 *   Nada de plantilla con find-replace: Google penaliza doorway pages.
 * - Cero clientes/testimonios inventados. Las demos del portfolio se
 *   presentan como "proyecto/demo", nunca como trabajo de cliente.
 */

export interface SectorPain {
  title: string;
  description: string;
}

export interface SectorFeature {
  title: string;
  description: string;
}

export interface SectorFaq {
  q: string;
  a: string;
}

export interface SectorDemo {
  nombre: string;
  url: string;
  imagen: string;
  descripcion: string;
}

export interface Sector {
  slug: string;
  /** Nombre corto del sector, ej. "Restaurantes" */
  nombre: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  pains: SectorPain[];
  features: SectorFeature[];
  demo?: SectorDemo;
  faqs: SectorFaq[];
  /** Mensaje precargado del botón de WhatsApp */
  whatsappMsg: string;
}

export const sectores: Sector[] = [
  {
    slug: "web-para-restaurantes-gran-canaria",
    nombre: "Restaurantes",
    metaTitle: "Páginas web para restaurantes en Gran Canaria",
    metaDescription:
      "Web para tu restaurante en Gran Canaria con carta digital, reservas online y SEO local para salir en Google y Maps. Demo gratis antes de pagar. Desde 299€.",
    h1: "Páginas web para restaurantes en Gran Canaria",
    intro:
      "Cuando alguien busca dónde comer en tu zona, o apareces tú o aparece el de enfrente. Hacemos webs para restaurantes con carta digital, reservas online y SEO local — y te enseñamos una demo funcionando antes de que pagues nada.",
    pains: [
      {
        title: "Tu carta es un PDF que nadie puede leer",
        description:
          "El 70% de tus clientes miran la carta desde el móvil antes de decidir. Un PDF escaneado con letra diminuta es una mesa que se va a otro sitio.",
      },
      {
        title: "Las reservas entran por teléfono en plena hora punta",
        description:
          "El teléfono suena mientras emplatas. Si nadie contesta, esa reserva se pierde. Una web con reservas online trabaja mientras tú cocinas.",
      },
      {
        title: "Los turistas no te encuentran",
        description:
          "Gran Canaria recibe millones de visitantes que buscan \"restaurante cerca de mí\" en Google y Maps. Sin web optimizada y ficha de Google cuidada, para ellos no existes.",
      },
    ],
    features: [
      {
        title: "Carta digital que editas tú",
        description:
          "Cambias platos y precios desde el móvil, sin llamarnos. Legible, con fotos y organizada por secciones.",
      },
      {
        title: "Reservas online o por WhatsApp",
        description:
          "El cliente reserva desde la web a cualquier hora. Tú recibes el aviso y confirmas con un toque.",
      },
      {
        title: "SEO local: Google y Maps",
        description:
          "Optimizamos tu web y tu ficha de Google Business para las búsquedas de tu zona: \"donde comer en...\", \"restaurante en...\".",
      },
      {
        title: "Fotos que abren el apetito",
        description:
          "La estructura y el diseño ponen tus platos en primer plano. Una foto buena vende más que tres párrafos.",
      },
      {
        title: "Reseñas integradas",
        description:
          "Tus valoraciones de Google visibles en la web, y flujo para pedir reseña al cliente contento.",
      },
      {
        title: "IA que responde por ti",
        description:
          "Horarios, alérgenos, si hay terraza, si admitís perros... el chat con IA contesta las preguntas de siempre mientras trabajas.",
      },
    ],
    demo: {
      nombre: "La Taberna El Tablero",
      url: "https://taberna-el-tablero.vercel.app",
      imagen: "/portfolio/taberna.webp",
      descripcion:
        "Nuestro proyecto demo de restaurante canario: carta digital, reservas y SEO local. Ábrelo y tócalo — así se sentiría la web de tu restaurante.",
    },
    faqs: [
      {
        q: "¿Cuánto cuesta una página web para un restaurante?",
        a: "Desde 299€ con carta digital, formulario de reservas y SEO básico incluidos. Si quieres chatbot con IA o sistema de reservas avanzado, el plan Premium sale por 699€. Sin permanencia y el mantenimiento desde 39€/mes.",
      },
      {
        q: "¿Puedo cambiar la carta y los precios yo mismo?",
        a: "Sí. Te dejamos la carta editable y te enseñamos a actualizarla desde el móvil en 5 minutos. Sin depender de nadie ni pagar por cada cambio.",
      },
      {
        q: "¿Funciona con TheFork, CoverManager o las reservas de Google?",
        a: "Sí. Si ya usas un sistema de reservas, lo integramos en la web. Si no usas ninguno, montamos reservas por formulario o WhatsApp sin coste extra de plataforma.",
      },
      {
        q: "¿La web puede estar en varios idiomas para los turistas?",
        a: "Sí, podemos añadir inglés y alemán — clave en zonas turísticas como Maspalomas, Playa del Inglés o Puerto de Mogán. Se presupuesta según el contenido.",
      },
      {
        q: "¿Cuánto tarda en estar lista?",
        a: "Entre 7 y 14 días desde que nos das el contenido (carta, fotos, horarios). Primero te enseñamos una demo gratis: si no te gusta, no pagas y aquí no ha pasado nada.",
      },
    ],
    whatsappMsg: "Hola, tengo un restaurante y me gustaría información sobre una página web.",
  },
  {
    slug: "web-para-peluquerias-gran-canaria",
    nombre: "Peluquerías y estética",
    metaTitle: "Páginas web para peluquerías en Gran Canaria",
    metaDescription:
      "Web para tu peluquería, barbería o centro de estética en Gran Canaria con cita online 24/7 y galería de trabajos. Menos teléfono, menos huecos vacíos. Desde 299€.",
    h1: "Páginas web para peluquerías y centros de estética en Gran Canaria",
    intro:
      "Deja de coger citas con el secador en una mano y el teléfono en la otra. Hacemos webs para peluquerías, barberías y centros de estética con reserva de cita online — y ves una demo gratis antes de pagar nada.",
    pains: [
      {
        title: "Las citas te llegan por teléfono y por DM a la vez",
        description:
          "Instagram, WhatsApp, llamadas... y tú con las tijeras en la mano. Cada mensaje sin responder a tiempo es una clienta que prueba en otro salón.",
      },
      {
        title: "Los huecos vacíos no avisan",
        description:
          "Una cancelación de última hora deja un sillón parado. Con cita online, los huecos libres quedan visibles y cualquiera puede ocuparlos, incluso un domingo por la noche.",
      },
      {
        title: "Solo tienes Instagram",
        description:
          "Instagram enseña tu trabajo, pero no sale en Google cuando alguien busca \"peluquería cerca de mí\". Sin web, esa búsqueda se la lleva la competencia.",
      },
    ],
    features: [
      {
        title: "Cita online 24/7",
        description:
          "Tus clientas reservan hora desde el móvil a cualquier hora, viendo solo los huecos realmente libres.",
      },
      {
        title: "Recordatorios automáticos",
        description:
          "Aviso antes de la cita para reducir los plantones. Menos no-shows, más sillones ocupados.",
      },
      {
        title: "Galería de trabajos",
        description:
          "Tus cortes, coloraciones y tratamientos en una galería que carga rápido y se ve perfecta en móvil.",
      },
      {
        title: "Servicios y precios claros",
        description:
          "Lista de servicios con precios y duración. La clienta llega sabiendo qué quiere y cuánto cuesta.",
      },
      {
        title: "Conectada con tu Instagram",
        description:
          "Tu feed integrado en la web: el escaparate que ya alimentas cada día, trabajando también en Google.",
      },
      {
        title: "IA que responde por ti",
        description:
          "\"¿Cuánto cuesta un balayage?\", \"¿tenéis hueco el sábado?\" — el chat con IA contesta mientras tú atiendes.",
      },
    ],
    demo: {
      nombre: "ALMA Hair Studio",
      url: "https://alma-hair-studio.vercel.app",
      imagen: "/portfolio/alma.jpg",
      descripcion:
        "Nuestro proyecto demo de peluquería: hero 3D, carta de servicios con precios y reserva de cita online en 30 segundos. Ábrelo y pide hora de mentira — así se sentiría la web de tu salón.",
    },
    faqs: [
      {
        q: "¿Cuánto cuesta una web para una peluquería o barbería?",
        a: "Desde 299€ con galería, servicios con precios y formulario de cita. Con sistema de citas avanzado y chatbot IA, el plan Premium sale por 699€. Sin permanencia y mantenimiento desde 39€/mes.",
      },
      {
        q: "¿La reserva de citas funciona con la agenda que ya uso?",
        a: "Si ya usas Booksy, Treatwell o similar, integramos su botón de reserva en tu web. Si no usas ninguna, montamos la reserva por formulario o WhatsApp, sin cuota de plataforma.",
      },
      {
        q: "Ya tengo Instagram con seguidores, ¿para qué necesito web?",
        a: "Instagram no aparece en Google cuando alguien busca \"peluquería en Telde\" o \"barbería cerca de mí\". La web captura esas búsquedas y convierte tu Instagram en citas: escaparate en redes, caja en Google.",
      },
      {
        q: "¿Sirve también para centros de uñas, cejas o estética?",
        a: "Sí — el mismo enfoque funciona para manicura, pestañas, cejas, láser o estética general: galería de resultados, precios claros y cita online.",
      },
      {
        q: "¿Cuánto tarda y qué necesitáis de mí?",
        a: "Entre 7 y 14 días. Solo necesitamos fotos de tus trabajos, la lista de servicios con precios y tus horarios. Antes de pagar nada, te enseñamos una demo gratis de tu web funcionando.",
      },
    ],
    whatsappMsg: "Hola, tengo una peluquería/centro de estética y me gustaría información sobre una página web.",
  },
  {
    slug: "web-para-gimnasios-gran-canaria",
    nombre: "Gimnasios y entrenadores",
    metaTitle: "Páginas web para gimnasios en Gran Canaria",
    metaDescription:
      "Web para tu gimnasio, box de CrossFit o estudio de pilates en Gran Canaria: horarios de clases, altas online y SEO local. Demo gratis antes de pagar. Desde 299€.",
    h1: "Páginas web para gimnasios, boxes y estudios en Gran Canaria",
    intro:
      "Tu gimnasio cambia vidas, pero si tus horarios viven en una foto de Instagram, estás perdiendo altas. Hacemos webs para gimnasios, boxes de CrossFit, estudios de pilates y entrenadores personales — con demo gratis antes de pagar.",
    pains: [
      {
        title: "Tus horarios viven en un story caducado",
        description:
          "El que quiere apuntarse a tu clase de las 19:00 no debería bucear en Instagram para saber si hay hueco. Cada fricción es un interesado que se enfría.",
      },
      {
        title: "Las altas solo se hacen en mostrador",
        description:
          "La decisión de apuntarse al gimnasio se toma un domingo por la noche mirando el móvil. Si en ese momento no puedes capturar el alta o al menos el contacto, el lunes ya se le pasó.",
      },
      {
        title: "Las cadenas low-cost te comen en Google",
        description:
          "No puedes competir en precio con las grandes cadenas, pero sí en cercanía, comunidad y resultados. Eso hay que contarlo donde la gente busca: en Google.",
      },
    ],
    features: [
      {
        title: "Horario de clases siempre al día",
        description:
          "Parrilla de clases que actualizas tú en un minuto. Spinning, HIIT, pilates, open box — cada clase con su hora y su nivel.",
      },
      {
        title: "Altas y prueba gratis online",
        description:
          "Formulario de alta o de clase de prueba que llega directo a tu WhatsApp o email. Capturas al interesado en caliente.",
      },
      {
        title: "Tarifas sin letra pequeña",
        description:
          "Cuotas, bonos y matrícula presentados con claridad. La transparencia convierte más que el \"consultar precio\".",
      },
      {
        title: "Tu equipo y tu comunidad",
        description:
          "Perfiles de entrenadores con sus especialidades y fotos reales del ambiente. Es lo que las cadenas no pueden copiar.",
      },
      {
        title: "SEO local para tu zona",
        description:
          "\"Gimnasio en Vecindario\", \"crossfit Las Palmas\", \"pilates cerca de mí\" — optimizamos web y ficha de Google para tu barrio.",
      },
      {
        title: "IA que responde por ti",
        description:
          "Precios, horarios, si hay ducha, cómo reservar clase... el chat con IA responde a las 23:00, que es cuando la gente decide cambiar de vida.",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta una web para un gimnasio o un box?",
        a: "Desde 299€ con horarios, tarifas y formulario de alta. Con reserva de clases avanzada y chatbot IA, el plan Premium sale por 699€. Sin permanencia — sabemos lo que se odian las permanencias en este sector.",
      },
      {
        q: "¿Puedo actualizar los horarios de clases yo mismo?",
        a: "Sí, la parrilla de clases queda editable y la cambias tú en un minuto desde el móvil. Sin pagar por cada cambio ni esperar a nadie.",
      },
      {
        q: "¿Sirve para un entrenador personal o un estudio pequeño?",
        a: "Sí. Para entrenadores personales y estudios de pilates o yoga el enfoque es aún más directo: tu método, resultados, precios y un botón para reservar la primera sesión.",
      },
      {
        q: "¿Se puede integrar con mi software de gestión (Trainingym, Wodbuster...)?",
        a: "Si usas software de gestión con reservas, enlazamos o integramos su acceso desde la web para que socios y nuevos interesados lleguen al sitio correcto. Lo vemos en la demo gratis.",
      },
      {
        q: "¿Cuánto tarda en estar lista?",
        a: "Entre 7 y 14 días desde que tenemos fotos, horarios y tarifas. Primero te enseñamos una demo gratis funcionando: si no te convence, no pagas.",
      },
    ],
    whatsappMsg: "Hola, tengo un gimnasio/estudio y me gustaría información sobre una página web.",
  },
  {
    slug: "web-para-fisioterapeutas-gran-canaria",
    nombre: "Fisioterapia y clínicas",
    metaTitle: "Páginas web para fisioterapeutas y clínicas en Gran Canaria",
    metaDescription:
      "Web para tu clínica de fisioterapia en Gran Canaria: cita online, servicios explicados con claridad y SEO local para \"fisio cerca de mí\". Demo gratis. Desde 299€.",
    h1: "Páginas web para fisioterapeutas y clínicas en Gran Canaria",
    intro:
      "Tus pacientes llegan por recomendación, pero antes de llamar te buscan en Google. Si no encuentran nada — o encuentran algo viejo — la recomendación se enfría. Hacemos webs para fisios, clínicas y consultas privadas, con demo gratis antes de pagar.",
    pains: [
      {
        title: "El teléfono suena mientras estás en camilla",
        description:
          "No puedes contestar con las manos ocupadas en un tratamiento. La cita online deja que el paciente reserve solo, y tú solo confirmas entre sesión y sesión.",
      },
      {
        title: "Te recomiendan, pero no te encuentran",
        description:
          "\"Ve a mi fisio, es buenísimo\" — y esa persona te busca en Google y no apareces, o aparece tu competencia con mejor ficha. La confianza ganada se pierde en la búsqueda.",
      },
      {
        title: "Tu trabajo vale más de lo que aparenta online",
        description:
          "Años de formación, técnicas especializadas... y de cara a internet, solo un número de teléfono. Una web seria transmite la profesionalidad que ya tienes.",
      },
    ],
    features: [
      {
        title: "Cita online sin llamadas",
        description:
          "El paciente elige hueco y reserva desde el móvil. Tú recibes el aviso y confirmas cuando puedas — sin interrumpir sesiones.",
      },
      {
        title: "Tus tratamientos, explicados",
        description:
          "Fisioterapia deportiva, suelo pélvico, punción seca, readaptación... cada técnica explicada en lenguaje que el paciente entiende.",
      },
      {
        title: "Confianza a primera vista",
        description:
          "Número de colegiado, formación, fotos reales de la clínica. Todo lo que hace que un paciente nuevo llegue tranquilo.",
      },
      {
        title: "SEO local: \"fisio cerca de mí\"",
        description:
          "Optimizamos tu web y tu ficha de Google Business para las búsquedas de tu zona y tus especialidades.",
      },
      {
        title: "Recordatorios de cita",
        description:
          "Aviso automático antes de cada sesión. Menos huecos perdidos por olvidos, agenda más estable.",
      },
      {
        title: "IA que filtra las consultas de siempre",
        description:
          "Precios, si tratáis tu lesión, horarios, cómo llegar... el chat con IA responde lo repetitivo y te deja el teléfono libre para lo clínico.",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta una web para una clínica de fisioterapia?",
        a: "Desde 299€ con tus tratamientos, formulario de cita y SEO básico. Con cita online avanzada y chatbot IA, el plan Premium sale por 699€. Sin permanencia y mantenimiento desde 39€/mes.",
      },
      {
        q: "¿Sirve también para podólogos, osteópatas o psicólogos?",
        a: "Sí. El mismo enfoque funciona para cualquier consulta sanitaria privada: transmitir confianza, explicar los tratamientos y facilitar la cita. Adaptamos el contenido a tu especialidad.",
      },
      {
        q: "¿La cita online se integra con mi agenda actual?",
        a: "Si usas software de clínica con reservas (Doctoralia, etc.), integramos su acceso en la web. Si llevas la agenda a mano, montamos citas por formulario o WhatsApp y tú confirmas cada una.",
      },
      {
        q: "¿Qué hay del contenido sanitario y la normativa?",
        a: "El contenido se redacta contigo y lo validas tú como profesional: nada de promesas de curación ni claims que comprometan tu colegiación. Además la web cumple RGPD (aviso legal, privacidad y cookies incluidos).",
      },
      {
        q: "¿Cuánto tarda en estar lista?",
        a: "Entre 7 y 14 días desde que tenemos tus servicios, fotos y horarios. Antes de pagar nada te enseñamos una demo gratis de tu web funcionando.",
      },
    ],
    whatsappMsg: "Hola, tengo una clínica/consulta y me gustaría información sobre una página web.",
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectores.find((s) => s.slug === slug);
}
