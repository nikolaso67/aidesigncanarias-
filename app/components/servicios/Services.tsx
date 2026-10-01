"use client";

import Link from "next/link";
import { services, type Service } from "../../servicios/data";
import SectionTitle from "../agency/SectionTitle";
import ServiceIcon from "../ServiceIcon";
import { DemoChat, DemoSeo, DemoWebBuild } from "./Demos";

/**
 * Sección Servicios de la home:
 * - Bento con los 3 servicios que más venden, cada uno con una mini demo en vivo.
 * - Índice editorial con el resto: filas a todo el ancho que se rellenan de tinta al hover.
 */

/** Los protagonistas del bento, en este orden. */
const CORE_SLUGS = ["diseno-web-gran-canaria", "integracion-ia", "seo-posicionamiento-canarias"] as const;

const [web, ia, seo] = CORE_SLUGS.map((slug) => {
  const s = services.find((x) => x.slug === slug);
  // Fallo ruidoso en build si se renombra un servicio protagonista
  if (!s) throw new Error(`Services: no existe el servicio "${slug}"`);
  return s;
});
const otherServices = services.filter((s) => !(CORE_SLUGS as readonly string[]).includes(s.slug));

const num = (i: number) => String(i + 1).padStart(2, "0");
const href = (s: Service) => `/servicios/${s.slug}`;

function ArrowLink({ to, children, tone }: { to: string; children: React.ReactNode; tone: "light" | "dark" }) {
  return (
    <Link
      href={to}
      className={`group/link inline-flex items-center gap-2 text-sm font-semibold ${tone === "dark" ? "text-white" : "text-ink"}`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden>→</span>
    </Link>
  );
}

function CardText({ s, i, tone }: { s: Service; i: number; tone: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-col gap-3">
      <span className={`font-mono text-sm ${dark ? "text-accent-bright" : "text-accent"}`}>{num(i)}</span>
      <h3 className={`font-display font-bold tracking-tight leading-[0.95] text-3xl md:text-4xl text-balance ${dark ? "text-white" : "text-ink"}`}>
        {s.title}
      </h3>
      <p className={`leading-relaxed max-w-md ${dark ? "text-white/70" : "text-slate-600"}`}>{s.description}</p>
      <div className="flex items-center gap-5 pt-2">
        <span className={`text-sm font-medium tabular-nums ${dark ? "text-white/60" : "text-slate-500"}`}>{s.pricing.headline}</span>
        <ArrowLink to={href(s)} tone={tone}>Ver servicio</ArrowLink>
      </div>
    </div>
  );
}

const card = "relative rounded-[2rem] overflow-hidden p-7 md:p-9 transition-transform duration-500 hover:-translate-y-1";

function CoreBento() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
      <article className={`${card} grain lg:col-span-4 bg-ink text-white flex flex-col gap-8`}>
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl pointer-events-none" aria-hidden />
        <div className="relative"><CardText s={web} i={0} tone="dark" /></div>
        <div className="relative mt-auto"><DemoWebBuild /></div>
      </article>

      <article className={`${card} lg:col-span-2 bg-accent text-white flex flex-col gap-8`}>
        <div className="relative"><CardText s={ia} i={1} tone="dark" /></div>
        <div className="relative mt-auto"><DemoChat /></div>
      </article>

      <article className={`${card} lg:col-span-6 bg-white border border-ink/10 grid lg:grid-cols-2 gap-10 items-center`}>
        <CardText s={seo} i={2} tone="light" />
        <DemoSeo />
      </article>
    </div>
  );
}

function IndexList({ items, startAt }: { items: Service[]; startAt: number }) {
  return (
    <ul className="border-t border-ink/15">
      {items.map((s, i) => (
        <li key={s.slug} className="border-b border-ink/15">
          <Link
            href={href(s)}
            className="group relative grid grid-cols-[auto_1fr_auto] md:grid-cols-[3rem_minmax(0,1.25fr)_minmax(0,1fr)_7rem_3rem] items-center gap-x-5 md:gap-x-8 py-5 md:py-7 px-2 md:px-6 overflow-hidden"
            data-cursor
          >
            {/* Relleno de tinta que sube al hacer hover */}
            <span
              className="absolute inset-0 bg-ink origin-bottom scale-y-0 group-hover:scale-y-100 group-focus-visible:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
              aria-hidden
            />
            <span className="relative font-mono text-sm text-accent group-hover:text-accent-bright transition-colors duration-500">
              {num(startAt + i)}
            </span>
            <span className="relative flex items-center gap-4 min-w-0">
              <span className="font-display font-bold tracking-tight text-ink group-hover:text-white text-2xl md:text-3xl lg:text-4xl leading-none transition-[color,transform] duration-500 group-hover:translate-x-2">
                {s.title}
              </span>
              <ServiceIcon
                slug={s.slug}
                className="hidden md:block w-9 h-9 shrink-0 text-accent-bright opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition duration-500"
              />
            </span>
            <span className="relative hidden md:block text-sm leading-relaxed text-slate-500 group-hover:text-slate-300 transition-colors duration-500">
              {s.description}
            </span>
            <span className="relative hidden md:block text-sm font-medium text-slate-500 group-hover:text-white text-right transition-colors duration-500 tabular-nums">
              {s.pricing.headline}
            </span>
            <span
              className="relative grid place-items-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-ink/15 text-ink group-hover:bg-white group-hover:border-white transition-all duration-500 group-hover:-rotate-45"
              aria-hidden
            >
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="relative py-32 px-6 bg-paper overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <SectionTitle
            eyebrow="01 — Lo que hacemos"
            title={
              <>
                Servicios para que tu negocio <span className="text-accent">venda más online</span>
              </>
            }
            description="Diseño, inteligencia artificial y posicionamiento: lo que hace que una web traiga clientes y no solo visitas."
          />
        </div>

        <CoreBento />

        <div className="mt-24 md:mt-28">
          <div className="flex items-end justify-between gap-6 mb-8">
            <h3 className="font-display font-bold tracking-tight text-3xl md:text-5xl text-ink">Y además</h3>
            <span className="text-sm text-slate-500 max-w-xs text-right hidden sm:block">
              Lo que combinamos con tu web según lo que necesita tu negocio.
            </span>
          </div>
          <IndexList items={otherServices} startAt={CORE_SLUGS.length} />
        </div>
      </div>
    </section>
  );
}
