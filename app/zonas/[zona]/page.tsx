import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { zonas, getZona } from "../data";

export function generateStaticParams() {
  return zonas.map((z) => ({ zona: z.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ zona: string }>;
}): Promise<Metadata> {
  const { zona: slug } = await params;
  const zona = getZona(slug);
  if (!zona) return {};
  const url = `https://aidesigncanarias.com/zonas/${slug}`;
  return {
    title: zona.metaTitle,
    description: zona.metaDescription,
    alternates: { canonical: url, languages: { "es-ES": url, "x-default": url } },
    openGraph: { type: "website", locale: "es_ES", url, siteName: "AI Design Canarias", title: zona.metaTitle, description: zona.metaDescription },
    twitter: { card: "summary_large_image", title: zona.metaTitle, description: zona.metaDescription },
  };
}

export default async function ZonaPage({
  params,
}: {
  params: Promise<{ zona: string }>;
}) {
  const { zona: slug } = await params;
  const zona = getZona(slug);
  if (!zona) notFound();

  const BASE = "https://aidesigncanarias.com";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Diseño web en ${zona.nombre}`,
      description: zona.metaDescription,
      provider: {
        "@type": "LocalBusiness",
        "@id": `${BASE}/#business`,
        name: "AI Design Canarias",
        url: BASE,
        telephone: "+34605007753",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Las Palmas de Gran Canaria",
          addressRegion: "Gran Canaria",
          addressCountry: "ES",
        },
      },
      areaServed: { "@type": "City", name: zona.nombre },
      url: `${BASE}/zonas/${slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
        { "@type": "ListItem", position: 2, name: "Zonas", item: `${BASE}/zonas` },
        { "@type": "ListItem", position: 3, name: zona.nombre, item: `${BASE}/zonas/${slug}` },
      ],
    },
  ];

  const serviciosDestacados = [
    { href: "/servicios/diseno-web-gran-canaria", label: "Diseño web profesional" },
    { href: "/servicios/seo-posicionamiento-canarias", label: "SEO y posicionamiento" },
    { href: "/servicios/integracion-ia", label: "Chatbot con IA" },
    { href: "/servicios/tiendas-online", label: "Tiendas online" },
    { href: "/servicios/gestion-redes-sociales", label: "Redes sociales" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-sky-100">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <nav className="text-xs text-slate-400 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-slate-600">{zona.nombre}</span>
          </nav>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-indigo-600 mb-6 px-3 py-1 border border-indigo-200 bg-indigo-50 rounded-full">
            Agencia digital en {zona.nombreCorto}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-slate-900">
            Diseño web profesional en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">
              {zona.nombre}
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10">{zona.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contacto"
              className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-white shadow-lg shadow-indigo-500/25 text-center"
            >
              Solicitar presupuesto gratis
            </a>
            <a
              href={`https://wa.me/34605007753?text=${encodeURIComponent(`Hola, soy un negocio en ${zona.nombre} y me gustaría información sobre diseño web.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-slate-300 hover:border-green-400 hover:bg-green-50 transition-colors font-semibold text-slate-700 text-center"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      {/* Por qué en esta zona */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Diseño web para negocios en {zona.nombre}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8 text-center">
            {zona.nombre} es {zona.descripcionLocal}. Trabajamos con negocios de la zona para que su presencia online esté a la altura de lo que ofrecen: webs rápidas, bien posicionadas en Google y con una IA que atiende a sus clientes 24/7.
          </p>
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
            <p className="text-sm font-semibold text-indigo-700 mb-3">Sectores con los que trabajamos en {zona.nombreCorto}:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {zona.negociosTipo.map((tipo) => (
                <li key={tipo} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Nuestros servicios en {zona.nombreCorto}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviciosDestacados.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group"
              >
                <span className="text-slate-800 font-semibold text-sm group-hover:text-indigo-600 transition-colors">
                  {s.label}
                </span>
                <span className="block text-xs text-indigo-500 mt-1">Ver más →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { valor: "7–14", unidad: "días", label: "Tiempo de entrega" },
            { valor: "30+", unidad: "", label: "Proyectos entregados" },
            { valor: "24/7", unidad: "", label: "IA integrada" },
            { valor: "100%", unidad: "", label: "Sin permanencia" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-indigo-600">
                {stat.valor}<span className="text-lg">{stat.unidad}</span>
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Referencia local */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            Trabajamos con negocios de toda Gran Canaria de forma 100% remota.{" "}
            {zona.referencia && (
              <>Si tu negocio está en <strong className="text-slate-700">{zona.referencia}</strong>, estamos a una llamada o WhatsApp de distancia.</>
            )}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-indigo-600">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes un negocio en {zona.nombre}?
          </h2>
          <p className="text-indigo-200 mb-8 text-lg">
            Presupuesto gratis y sin compromiso. Respuesta en menos de 24h.
          </p>
          <a
            href="/#contacto"
            className="inline-block px-10 py-4 rounded-full bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Solicitar presupuesto gratis
          </a>
        </div>
      </section>
    </>
  );
}
