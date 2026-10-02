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

  const jsonLd: Record<string, unknown>[] = [
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
        // No existe /zonas como página: la miga va directa de Inicio a la zona
        { "@type": "ListItem", position: 2, name: zona.nombre, item: `${BASE}/zonas/${slug}` },
      ],
    },
  ];
  if (zona.faq?.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: zona.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  const serviciosDestacados = [
    { href: "/servicios/diseno-web-gran-canaria", label: "Diseño web profesional" },
    { href: "/servicios/seo-posicionamiento-canarias", label: "SEO y posicionamiento" },
    { href: "/servicios/integracion-ia", label: "Chatbot con IA" },
    { href: "/servicios/tiendas-online", label: "Tiendas online" },
    { href: "/servicios/publicidad-digital", label: "Publicidad digital" },
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
            <span className="text-slate-300">{zona.nombre}</span>
          </nav>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent-bright mb-6">
            <span className="w-8 h-px bg-accent-bright" aria-hidden />
            Agencia digital en {zona.nombreCorto}
          </span>
          <h1 className="font-display font-bold tracking-tight leading-[1.05] text-4xl md:text-5xl mb-6 text-white">
            Diseño web profesional en{" "}
            <span className="text-accent-bright">{zona.nombre}</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10">{zona.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contacto"
              className="px-8 py-4 rounded-full bg-accent hover:bg-accent-bright transition-colors font-semibold text-white shadow-lg shadow-accent/25 text-center"
            >
              Solicitar presupuesto gratis
            </Link>
            <a
              href={`https://wa.me/34605007753?text=${encodeURIComponent(`Hola, soy un negocio en ${zona.nombre} y me gustaría información sobre diseño web.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-colors font-semibold text-white/90 text-center"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      {/* Por qué en esta zona */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-6 text-center">
            Diseño web para negocios en {zona.nombre}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8 text-center">
            {zona.nombre} es {zona.descripcionLocal}. Trabajamos con negocios de la zona para que su presencia online esté a la altura de lo que ofrecen: webs rápidas, bien posicionadas en Google y con una IA que atiende a sus clientes 24/7.
          </p>
          <div className="bg-white border border-ink/10 rounded-2xl p-6">
            <p className="text-sm font-semibold text-accent mb-3">Sectores con los que trabajamos en {zona.nombreCorto}:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {zona.negociosTipo.map((tipo) => (
                <li key={tipo} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {zona.contexto && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-ink mb-8">{zona.contexto.titulo}</h2>
            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              {zona.contexto.parrafos.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <p className="mt-8 text-slate-600">
              ¿Quieres saber cuánto costaría la tuya?{" "}
              <Link href="/servicios/diseno-web-gran-canaria" className="text-accent font-semibold hover:underline">
                Mira qué incluye cada plan y su precio
              </Link>
              .
            </p>
          </div>
        </section>
      )}

      {/* Servicios */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-12 text-center">
            Nuestros servicios en {zona.nombreCorto}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviciosDestacados.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="p-5 rounded-2xl border border-ink/10 bg-white hover:border-ink transition-all group"
              >
                <span className="text-slate-800 font-semibold text-sm group-hover:text-accent transition-colors">
                  {s.label}
                </span>
                <span className="block text-xs text-accent mt-1">Ver más →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — compromisos verificables, sin cifras infladas */}
      <section className="py-16 px-6 bg-paper">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { valor: "7–14", unidad: " días", label: "Tiempo de entrega" },
            { valor: "24h", unidad: "", label: "Respuesta con presupuesto" },
            { valor: "24/7", unidad: "", label: "IA integrada" },
            { valor: "100%", unidad: "", label: "Sin permanencia" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-bold text-accent">
                {stat.valor}<span className="text-lg">{stat.unidad}</span>
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {zona.faq && zona.faq.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-ink mb-10">
              Preguntas frecuentes sobre diseño web en {zona.nombreCorto}
            </h2>
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {zona.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none font-semibold text-ink text-lg">
                    {f.q}
                    <span className="mt-1 text-accent transition-transform group-open:rotate-45" aria-hidden>+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Referencia local */}
      <section className="py-12 px-6 bg-white">
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
      <section className="grain relative py-20 px-6 bg-ink overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-4">
            ¿Tienes un negocio en {zona.nombre}?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Presupuesto gratis y sin compromiso. Respuesta en menos de 24h.
          </p>
          <Link
            href="/#contacto"
            className="inline-block px-10 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-bright transition-colors shadow-lg shadow-accent/25"
          >
            Solicitar presupuesto gratis
          </Link>
        </div>
      </section>
    </>
  );
}
