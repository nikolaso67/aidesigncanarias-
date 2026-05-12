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
}

export const zonas: Zona[] = [
  {
    slug: "las-palmas-de-gran-canaria",
    nombre: "Las Palmas de Gran Canaria",
    nombreCorto: "Las Palmas",
    descripcionLocal: "la capital de Gran Canaria, con más de 370.000 habitantes y el mayor tejido empresarial de las islas",
    intro: "Diseño web profesional para negocios en Las Palmas de Gran Canaria. Webs rápidas, con SEO local y chatbot con IA — entrega en 7 a 14 días.",
    metaTitle: "Diseño web en Las Palmas de Gran Canaria | AI Design Canarias",
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
    metaTitle: "Diseño web en Maspalomas y Playa del Inglés | AI Design Canarias",
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
    metaTitle: "Diseño web en Telde, Gran Canaria | AI Design Canarias",
    metaDescription: "Agencia de diseño web en Telde. Webs profesionales con SEO local para empresas y negocios del segundo municipio más grande de Gran Canaria.",
    negociosTipo: ["talleres mecánicos y automoción", "empresas de construcción", "comercios locales", "clínicas y consultas", "academias y centros educativos"],
    referencia: "Polígono Industrial de Arinaga, Telde centro",
  },
  {
    slug: "santa-lucia-de-tirajana",
    nombre: "Santa Lucía de Tirajana",
    nombreCorto: "Santa Lucía",
    descripcionLocal: "uno de los municipios del sur de Gran Canaria con mayor crecimiento comercial y residencial en los últimos años",
    intro: "Diseño web para negocios en Santa Lucía de Tirajana. Webs profesionales con SEO local, gestión de redes sociales y chatbot con IA.",
    metaTitle: "Diseño web en Santa Lucía de Tirajana | AI Design Canarias",
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
    metaTitle: "Diseño web en Mogán, Gran Canaria | AI Design Canarias",
    metaDescription: "Agencia de diseño web en Mogán y Puerto de Mogán. Webs para negocios turísticos con reservas online y SEO local. Presupuesto gratis.",
    negociosTipo: ["restaurantes y terrazas", "actividades acuáticas y náuticas", "apartamentos y alojamientos", "tiendas y artesanía", "agencias de excursiones"],
    referencia: "Puerto de Mogán, Arguineguín, Playa de Amadores",
  },
  {
    slug: "arucas",
    nombre: "Arucas",
    nombreCorto: "Arucas",
    descripcionLocal: "municipio del norte de Gran Canaria conocido por su catedral, su ron y un sector agrícola y comercial consolidado",
    intro: "Diseño web para negocios y empresas en Arucas, Gran Canaria. Webs profesionales con SEO local para destacar en el norte de la isla.",
    metaTitle: "Diseño web en Arucas, Gran Canaria | AI Design Canarias",
    metaDescription: "Agencia de diseño web en Arucas. Webs profesionales para negocios del norte de Gran Canaria con SEO local. Presupuesto gratis en 24h.",
    negociosTipo: ["bodegas y productos locales", "restaurantes y tapas", "comercios y tiendas", "empresas agrícolas", "servicios profesionales"],
    referencia: "Catedral de Arucas, Destilerías Arehucas, casco histórico",
  },
];

export function getZona(slug: string): Zona | undefined {
  return zonas.find((z) => z.slug === slug);
}
