import type { Metadata } from "next";
import Link from "next/link";
import ParallaxImage from "../components/agency/ParallaxImage";
import { portfolioProjects } from "../data/portfolio";

const BASE = "https://aidesigncanarias.com";
const URL = `${BASE}/proyectos`;

const META_TITLE = "Proyectos: webs publicadas que puedes visitar";
const META_DESCRIPTION =
  "Nuestros proyectos demo: webs para peluquería, gimnasio, restaurante, gastrobar y ferretería en Gran Canaria. Publicadas, navegables y explicadas por dentro.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: { "es-ES": URL, "x-default": URL },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: URL,
    siteName: "AI Design Canarias",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

export default function ProyectosPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: META_TITLE,
      description: META_DESCRIPTION,
      url: URL,
      hasPart: portfolioProjects.map((p) => ({
        "@type": "WebSite",
        name: p.name,
        url: `${BASE}/proyectos/${p.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
        { "@type": "ListItem", position: 2, name: "Proyectos", item: URL },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="grain relative pt-32 pb-20 px-6 overflow-hidden bg-ink text-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <nav className="text-xs text-slate-400 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-accent-bright transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-slate-300">Proyectos</span>
          </nav>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent-bright mb-6">
            <span className="w-8 h-px bg-accent-bright" aria-hidden />
            Proyectos
          </span>
          <h1 className="font-display font-bold tracking-tight leading-[1.05] text-4xl md:text-5xl mb-6 text-white">
            Webs que puedes abrir ahora mismo
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Cada proyecto está publicado y navegable. Son demos propias, no
            trabajos de clientes: las montamos para enseñar cómo trabajamos cada
            sector sin pedirte que te fíes de un mockup.
          </p>
        </div>
      </section>

      {/* Listado */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioProjects.map((p) => (
            <article key={p.slug} className="flex flex-col">
              <Link href={`/proyectos/${p.slug}`} className="group" data-cursor>
                <div className="relative rounded-2xl shadow-lg shadow-slate-200/80 border border-slate-200">
                  <ParallaxImage
                    src={p.image}
                    alt={`${p.name} — web creada por AI Design Canarias`}
                    sizes="(max-width: 767px) 100vw, 500px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    frameClassName="aspect-[16/10] rounded-2xl bg-slate-100"
                    intensity={0.5}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <span className="inline-block text-xs font-medium tracking-widest uppercase text-white/70 mb-1.5">
                        {p.category}
                      </span>
                      <h2 className="font-display font-bold text-white text-xl leading-tight">
                        {p.name}
                      </h2>
                    </div>
                    <span
                      className="grid place-items-center w-10 h-10 rounded-full bg-white text-slate-900 transition-transform duration-300 group-hover:scale-110 shrink-0"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>

              <p className="mt-5 text-slate-600 leading-relaxed">
                {p.caseStudy.intro}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <Link
                  href={`/proyectos/${p.slug}`}
                  className="font-semibold text-accent hover:underline"
                >
                  Ver el proyecto por dentro
                </Link>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-ink transition-colors"
                >
                  Abrir la web en vivo ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="grain relative py-20 px-6 bg-ink overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-4">
            ¿Quieres ver la tuya antes de pagar?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Te montamos una demo de tu negocio, gratis. Si no te convence, no
            pagas y aquí no ha pasado nada.
          </p>
          <Link
            href="/#contacto"
            className="inline-block px-10 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-bright transition-colors shadow-lg shadow-accent/25"
          >
            Pedir mi demo gratis
          </Link>
        </div>
      </section>
    </>
  );
}
