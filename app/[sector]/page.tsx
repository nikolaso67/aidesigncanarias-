import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sectores, getSector } from "./data";

// Solo los slugs definidos en data.ts — cualquier otra ruta raíz da 404
export const dynamicParams = false;

export function generateStaticParams() {
  return sectores.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector: slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  const url = `https://aidesigncanarias.com/${slug}`;
  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    alternates: {
      canonical: url,
      languages: { "es-ES": url, "x-default": url },
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      siteName: "AI Design Canarias",
      title: sector.metaTitle,
      description: sector.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: sector.metaTitle,
      description: sector.metaDescription,
    },
  };
}

const pasos = [
  {
    n: "01",
    titulo: "Hablamos",
    descripcion: "Cuéntanos tu negocio por WhatsApp o formulario. Con 15 minutos basta.",
  },
  {
    n: "02",
    titulo: "Demo gratis",
    descripcion: "Ves tu web funcionando antes de pagar nada. Real, no mockups.",
  },
  {
    n: "03",
    titulo: "Solo pagas si te gusta",
    descripcion: "La terminamos y lanzamos en 7–14 días. Sin permanencia, la web es tuya.",
  },
];

export default async function SectorPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector: slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const BASE = "https://aidesigncanarias.com";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Diseño web para ${sector.nombre.toLowerCase()}`,
      description: sector.metaDescription,
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
      areaServed: [
        { "@type": "City", name: "Las Palmas de Gran Canaria" },
        { "@type": "Island", name: "Gran Canaria" },
        { "@type": "AdministrativeArea", name: "Islas Canarias" },
      ],
      url: `${BASE}/${slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: sector.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
        { "@type": "ListItem", position: 2, name: sector.nombre, item: `${BASE}/${slug}` },
      ],
    },
  ];

  const whatsappHref = `https://wa.me/34605007753?text=${encodeURIComponent(sector.whatsappMsg)}`;

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
            <span className="text-slate-300">{sector.nombre}</span>
          </nav>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent-bright mb-6">
            <span className="w-8 h-px bg-accent-bright" aria-hidden />
            {sector.nombre}
          </span>
          <h1 className="font-display font-bold tracking-tight leading-[1.05] text-4xl md:text-5xl mb-6 text-white">
            {sector.h1}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10">
            {sector.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contacto"
              className="px-8 py-4 rounded-full bg-accent hover:bg-accent-bright transition-colors font-semibold text-white shadow-lg shadow-accent/25 text-center"
            >
              Quiero mi demo gratis
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-colors font-semibold text-white/90 text-center"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      {/* Pains */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-12 text-center">
            ¿Te suena?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sector.pains.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl border border-ink/10 bg-white"
              >
                <h3 className="font-semibold text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4 text-center">
            Qué incluiría tu web
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Pensada para cómo funciona tu negocio, no una plantilla genérica.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sector.features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-ink/10 bg-paper hover:border-ink transition-all"
              >
                <h3 className="font-semibold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo real (si existe para el sector) */}
      {sector.demo && (
        <section className="grain relative py-20 px-6 bg-ink overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[500px] h-[350px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent-bright mb-6">
                <span className="w-8 h-px bg-accent-bright" aria-hidden />
                Proyecto demo
              </span>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Míralo funcionando: {sector.demo.nombre}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">{sector.demo.descripcion}</p>
              <a
                href={sector.demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-ink hover:bg-accent hover:text-white transition-colors font-semibold"
              >
                Abrir la demo
                <span aria-hidden>→</span>
              </a>
            </div>
            <a
              href={sector.demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-accent/20 block"
            >
              <Image
                src={sector.demo.imagen}
                alt={`${sector.demo.nombre} — proyecto demo de AI Design Canarias`}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </a>
          </div>
        </section>
      )}

      {/* Proceso sin riesgo */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4 text-center">
            Primero lo ves, luego lo pagas
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Nuestro proceso elimina el riesgo de tu lado: si la demo no te convence, no pagas nada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pasos.map((paso) => (
              <div key={paso.n} className="p-6 rounded-2xl bg-white border border-ink/10">
                <div className="text-accent font-bold text-sm mb-3">{paso.n}</div>
                <h3 className="font-semibold text-ink mb-2">{paso.titulo}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{paso.descripcion}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/#precios" className="text-sm text-accent hover:underline">
              Ver precios completos →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-12 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {sector.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-ink/10 bg-paper px-6 py-5"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-ink">
                  {f.q}
                  <span className="text-accent transition-transform group-open:rotate-45 text-xl leading-none" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="grain relative py-20 px-6 bg-ink overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-4">
            ¿Vemos cómo quedaría la tuya?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Demo gratis antes de pagar. Respuesta en menos de 24h y sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contacto"
              className="px-10 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-bright transition-colors shadow-lg shadow-accent/25"
            >
              Quiero mi demo gratis
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-colors font-semibold text-white/90"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
