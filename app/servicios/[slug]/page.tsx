import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services, getService } from "../data";
import { getProjectsForService } from "../../data/portfolio";
import ServiceProof from "../../components/agency/ServiceProof";
import ServicePricing from "../../components/agency/ServicePricing";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const url = `https://aidesigncanarias.com/servicios/${slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: url,
      languages: { "es-ES": url, "x-default": url },
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      siteName: "AI Design Canarias",
      title: service.metaTitle,
      description: service.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const BASE = "https://aidesigncanarias.com";
  const relatedProjects = getProjectsForService(slug);
  const hasProof = slug === "integracion-ia" || relatedProjects.length > 0;
  const whatsappHref = `https://wa.me/34605007753?text=${encodeURIComponent(
    "Hola, me gustaría información sobre " + service.title + ".",
  )}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.metaDescription,
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
      url: `${BASE}/servicios/${slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
        { "@type": "ListItem", position: 2, name: "Servicios", item: `${BASE}/#servicios` },
        { "@type": "ListItem", position: 3, name: service.title, item: `${BASE}/servicios/${slug}` },
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
            <Link href="/#servicios" className="hover:text-accent-bright transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-slate-300">{service.title}</span>
          </nav>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent-bright mb-6">
            <span className="w-8 h-px bg-accent-bright" aria-hidden />
            Servicio
          </span>
          <h1 className="font-display font-bold tracking-tight leading-[1.05] text-4xl md:text-5xl mb-6 text-white">
            {service.h1}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-6">
            {service.intro}
          </p>
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
            <span className="font-display font-bold text-accent-bright">{service.pricing.headline}</span>
            <span className="text-slate-400">· {service.pricing.note}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contacto"
              className="px-8 py-4 rounded-full bg-accent hover:bg-accent-bright transition-colors font-semibold text-white shadow-lg shadow-accent/25 text-center"
            >
              Solicitar presupuesto gratis
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

      {/* Features */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-12 text-center">
            Qué incluye
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-ink/10 bg-white hover:border-ink transition-all"
              >
                <h3 className="font-semibold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {slug === "integracion-ia" ? (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-ink mb-4">
              No hace falta una demo. Está aquí abajo.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              El botón violeta de la esquina inferior derecha de{" "}
              <strong className="text-ink">esta misma página</strong> es un
              chatbot real con IA, funcionando ahora mismo. Escríbele algo —
              así de rápido y natural se sentiría en tu web.
            </p>
            <div className="inline-flex items-center gap-2 text-accent font-semibold">
              <span>Pruébalo tú mismo</span>
              <span aria-hidden className="animate-bounce">↘</span>
            </div>
          </div>
        </section>
      ) : (
        <ServiceProof projects={relatedProjects} />
      )}

      {/* Benefits */}
      <section className={`py-20 px-6 ${hasProof ? "bg-paper" : "bg-white"}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-ink mb-12">
            Por qué te interesa
          </h2>
          <ul className="space-y-4 text-left">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </span>
                <span className="text-slate-700 text-lg">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServicePricing
        pricing={service.pricing}
        whatsappHref={whatsappHref}
        bgClassName={hasProof ? "bg-white" : "bg-paper"}
      />

      {/* CTA */}
      <section className="grain relative py-20 px-6 bg-ink overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-4">
            ¿Hablamos de tu proyecto?
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

      {/* Back link */}
      <div className="py-8 px-6 text-center bg-white">
        <Link
          href="/#servicios"
          className="text-sm text-accent hover:underline"
        >
          ← Ver todos los servicios
        </Link>
      </div>
    </>
  );
}
