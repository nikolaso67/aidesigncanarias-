import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services, getService } from "../data";

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
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://aidesigncanarias.com/servicios/${slug}` },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "AI Design Canarias",
      url: "https://aidesigncanarias.com",
      telephone: "+34605007753",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Palmas de Gran Canaria",
        addressRegion: "Canary Islands",
        addressCountry: "ES",
      },
    },
    areaServed: "Gran Canaria",
    url: `https://aidesigncanarias.com/servicios/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-sky-100">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-4xl mb-6 block">{service.icon}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-slate-900">
            {service.h1}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10">
            {service.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contacto"
              className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-white shadow-lg shadow-indigo-500/25 text-center"
            >
              Solicitar presupuesto gratis
            </a>
            <a
              href={`https://wa.me/34605007753?text=${encodeURIComponent("Hola, me gustaría información sobre " + service.title + ".")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-slate-300 hover:border-green-400 hover:bg-green-50 transition-colors font-semibold text-slate-700 text-center"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Qué incluye
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Por qué te interesa
          </h2>
          <ul className="space-y-4 text-left">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </span>
                <span className="text-slate-700 text-lg">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-indigo-600">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Hablamos de tu proyecto?
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

      {/* Back link */}
      <div className="py-8 px-6 text-center bg-white">
        <Link
          href="/#servicios"
          className="text-sm text-indigo-600 hover:underline"
        >
          ← Ver todos los servicios
        </Link>
      </div>
    </>
  );
}
