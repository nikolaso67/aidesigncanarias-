import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ParallaxImage from "../../components/agency/ParallaxImage";
import { portfolioProjects, getProject } from "../../data/portfolio";
import { getService } from "../../servicios/data";
import { getSector } from "../../[sector]/data";

const BASE = "https://aidesigncanarias.com";

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const { caseStudy } = project;
  const url = `${BASE}/proyectos/${slug}`;
  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    alternates: {
      canonical: url,
      languages: { "es-ES": url, "x-default": url },
    },
    openGraph: {
      type: "article",
      locale: "es_ES",
      url,
      siteName: "AI Design Canarias",
      title: caseStudy.metaTitle,
      description: caseStudy.metaDescription,
      images: [{ url: project.image, alt: `${project.name} — web creada por AI Design Canarias` }],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.metaTitle,
      description: caseStudy.metaDescription,
      images: [project.image],
    },
  };
}

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const url = `${BASE}/proyectos/${slug}`;
  const relatedServices = project.serviceSlugs
    .map((s) => getService(s))
    .filter((s) => s !== undefined);
  const sector = caseStudy.sectorSlug ? getSector(caseStudy.sectorSlug) : undefined;
  const otherProjects = portfolioProjects.filter((p) => p.slug !== slug).slice(0, 3);
  const whatsappHref = `https://wa.me/34605007753?text=${encodeURIComponent(
    `Hola, he visto el proyecto ${project.name} en vuestra web y me gustaría algo parecido para mi negocio.`,
  )}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.name,
      headline: caseStudy.h1,
      description: caseStudy.metaDescription,
      url,
      image: `${BASE}${project.image}`,
      keywords: project.tags.join(", "),
      about: caseStudy.sectorLabel,
      creator: {
        "@type": "LocalBusiness",
        "@id": `${BASE}/#business`,
        name: "AI Design Canarias",
        url: BASE,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
        { "@type": "ListItem", position: 2, name: "Proyectos", item: `${BASE}/proyectos` },
        { "@type": "ListItem", position: 3, name: project.name, item: url },
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
            <Link href="/proyectos" className="hover:text-accent-bright transition-colors">Proyectos</Link>
            <span>/</span>
            <span className="text-slate-300">{project.name}</span>
          </nav>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent-bright mb-6">
            <span className="w-8 h-px bg-accent-bright" aria-hidden />
            Proyecto · {caseStudy.sectorLabel}
          </span>
          <h1 className="font-display font-bold tracking-tight leading-[1.05] text-4xl md:text-5xl mb-6 text-white">
            {caseStudy.h1}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-6">
            {caseStudy.intro}
          </p>
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
            <span className="w-2 h-2 rounded-full bg-accent-bright" aria-hidden />
            Proyecto demo propio · publicado y navegable
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-accent hover:bg-accent-bright transition-colors font-semibold text-white shadow-lg shadow-accent/25 text-center"
            >
              Abrir la web en vivo ↗
            </a>
            <Link
              href="/#contacto"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-colors font-semibold text-white/90 text-center"
            >
              Quiero una así
            </Link>
          </div>
        </div>
      </section>

      {/* Captura */}
      <section className="py-16 px-6 bg-paper">
        <div className="max-w-5xl mx-auto">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            data-cursor
          >
            <div className="relative rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-200">
              <ParallaxImage
                src={project.image}
                alt={`${project.name} — web creada por AI Design Canarias`}
                sizes="(max-width: 767px) 100vw, 1000px"
                priority
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                frameClassName="aspect-[16/10] rounded-3xl bg-slate-100"
                intensity={0.4}
              />
            </div>
          </a>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-white text-slate-700 border border-slate-200 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Planteamiento */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-8 text-center">
            El punto de partida
          </h2>
          <div className="space-y-5">
            {caseStudy.planteamiento.map((p) => (
              <p key={p.slice(0, 40)} className="text-lg text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Decisiones */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-2 text-center">
            Qué se hizo y por qué
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
            Todo lo de abajo se puede comprobar abriendo la web. Si algo no está
            ahí, no lo contamos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caseStudy.decisiones.map((d) => (
              <div
                key={d.title}
                className="p-6 rounded-2xl border border-ink/10 bg-white hover:border-ink transition-all"
              >
                <h3 className="font-semibold text-ink mb-2">{d.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacidades + stack */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-12 text-center">
            Qué se lleva un negocio con una web así
          </h2>
          <ul className="space-y-4 text-left mb-16">
            {caseStudy.capacidades.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </span>
                <span className="text-slate-700 text-lg">{c}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 mb-5">
              Cómo está hecha
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {caseStudy.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-4 py-2 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios relacionados */}
      {relatedServices.length > 0 && (
        <section className="py-20 px-6 bg-paper">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-ink mb-2 text-center">
              Los servicios que hay detrás
            </h2>
            <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
              Este proyecto usa estos servicios. Los mismos que aplicaríamos a tu
              negocio.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="group p-6 rounded-2xl border border-ink/10 bg-white hover:border-ink transition-all"
                >
                  <span className="text-2xl" aria-hidden>{s.icon}</span>
                  <h3 className="font-semibold text-ink mt-3 mb-2 group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    {s.description}
                  </p>
                  <span className="text-sm font-semibold text-accent">
                    Ver servicio →
                  </span>
                </Link>
              ))}
            </div>

            {sector && (
              <p className="text-center text-slate-500 mt-10">
                ¿Tienes un negocio del sector?{" "}
                <Link
                  href={`/${sector.slug}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {sector.h1}
                </Link>
              </p>
            )}
          </div>
        </section>
      )}

      {/* Otros proyectos */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-12 text-center">
            Otros proyectos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/proyectos/${p.slug}`}
                className="group"
                data-cursor
              >
                <div className="relative rounded-2xl shadow-lg shadow-slate-200/80 border border-slate-200">
                  <ParallaxImage
                    src={p.image}
                    alt={`${p.name} — web creada por AI Design Canarias`}
                    sizes="(max-width: 639px) 100vw, 320px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    frameClassName="aspect-[16/10] rounded-2xl bg-slate-100"
                    intensity={0.3}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-white text-lg leading-tight">
                    {p.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain relative py-20 px-6 bg-ink overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-4">
            ¿Hacemos la tuya?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Te montamos una demo de tu negocio antes de que pagues nada. Si no te
            convence, no pagas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contacto"
              className="px-10 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent-bright transition-colors shadow-lg shadow-accent/25"
            >
              Pedir mi demo gratis
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

      {/* Back link */}
      <div className="py-8 px-6 text-center bg-white">
        <Link href="/proyectos" className="text-sm text-accent hover:underline">
          ← Ver todos los proyectos
        </Link>
      </div>
    </>
  );
}
