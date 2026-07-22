export interface PortfolioProject {
  name: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  /** Slugs de app/servicios/data.ts a los que este proyecto sirve de ejemplo real */
  serviceSlugs: string[];
}

/**
 * Proyectos demo reales (publicados y navegables), no clientes de pago.
 * Se muestran así de forma honesta en toda la web — nunca como testimonios.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    name: "ALMA Hair Studio",
    category: "Peluquería · Web con 3D + cita online",
    description:
      "Web para peluquería con hero 3D interactivo, carta de servicios con precios y reserva de cita online en 30 segundos. Entra y pide hora: está viva.",
    tags: ["3D interactivo", "Cita online", "Next.js"],
    image: "/portfolio/alma.jpg",
    url: "https://alma-hair-studio.vercel.app",
    serviceSlugs: ["diseno-web-gran-canaria", "software-a-medida", "identidad-visual-branding"],
  },
  {
    name: "Forja Training",
    category: "Fitness · Plataforma para coaches y deportistas",
    description:
      "Plataforma web para gimnasios y entrenadores: planes personalizados, seguimiento en tiempo real y récords automáticos. Diseño oscuro premium con registro y panel. Entra y navégala: está publicada.",
    tags: ["Diseño de producto", "Dashboard", "Next.js"],
    image: "/portfolio/forja.webp",
    url: "https://forja-training.vercel.app",
    serviceSlugs: ["diseno-web-gran-canaria", "software-a-medida", "apps-web-progresivas"],
  },
  {
    name: "La Taberna El Tablero",
    category: "Restaurante · Web + SEO local",
    description:
      "Web para taberna en El Tablero con menú digital, reservas, ubicación clara y SEO local. Entra y navégala: está publicada y funcionando.",
    tags: ["Next.js", "SEO Local", "Menú digital"],
    image: "/portfolio/taberna.webp",
    url: "https://taberna-el-tablero.vercel.app",
    serviceSlugs: ["diseno-web-gran-canaria", "seo-posicionamiento-canarias"],
  },
  {
    name: "Cabana by Efi",
    category: "Gastrobar · Web de autor",
    description:
      "Web de autor para gastrobar con identidad visual cuidada, galería de platos y reservas. Una web que vende experiencia, no solo comida.",
    tags: ["Diseño", "Identidad", "Mobile-first"],
    image: "/portfolio/cabana.webp",
    url: "https://cabana-by-efi.vercel.app",
    serviceSlugs: ["diseno-web-gran-canaria", "identidad-visual-branding"],
  },
  {
    name: "Ferretería Corona Roja",
    category: "Comercio · Web + catálogo",
    description:
      "Web para ferretería en Playa del Inglés con catálogo de productos, ubicación visible y diseño que respeta la identidad histórica del negocio.",
    tags: ["Catálogo", "SEO Local", "Branding"],
    image: "/portfolio/corona.webp",
    url: "https://coronaroja.vercel.app",
    serviceSlugs: ["diseno-web-gran-canaria", "seo-posicionamiento-canarias", "identidad-visual-branding"],
  },
];

export function getProjectsForService(slug: string): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.serviceSlugs.includes(slug));
}
