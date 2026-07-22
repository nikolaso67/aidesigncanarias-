import Link from "next/link";

const sectores = [
  { slug: "web-para-restaurantes-gran-canaria", nombre: "Restaurantes" },
  { slug: "web-para-peluquerias-gran-canaria", nombre: "Peluquerías" },
  { slug: "web-para-gimnasios-gran-canaria", nombre: "Gimnasios" },
  { slug: "web-para-fisioterapeutas-gran-canaria", nombre: "Fisioterapia" },
];

const zonas = [
  { slug: "las-palmas-de-gran-canaria", nombre: "Las Palmas" },
  { slug: "maspalomas", nombre: "Maspalomas" },
  { slug: "telde", nombre: "Telde" },
  { slug: "santa-lucia-de-tirajana", nombre: "Santa Lucía" },
  { slug: "mogan", nombre: "Mogán" },
  { slug: "arucas", nombre: "Arucas" },
];

const servicios = [
  { href: "/servicios/diseno-web-gran-canaria", label: "Diseño web" },
  { href: "/servicios/seo-posicionamiento-canarias", label: "SEO" },
  { href: "/servicios/integracion-ia", label: "Chatbot IA" },
  { href: "/servicios/tiendas-online", label: "Tiendas online" },
  { href: "/servicios/identidad-visual-branding", label: "Branding" },
  { href: "/servicios/publicidad-digital", label: "Ads" },
];

export default function FooterV2() {
  return (
    <footer className="grain relative bg-ink text-white overflow-hidden border-t border-white/10">
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Gigante claim */}
        <div className="mb-20">
          <h3 className="font-display font-bold tracking-tight leading-[0.95] text-5xl md:text-7xl lg:text-8xl">
            ¿Listo para{" "}
            <span className="text-accent-bright">empezar</span>
            ?
          </h3>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-ink hover:bg-accent hover:text-white transition-colors font-semibold"
              data-cursor
            >
              Solicitar presupuesto
              <span aria-hidden>→</span>
            </a>
            <a
              href="tel:+34605007753"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 hover:border-white/50 transition-colors font-semibold"
              data-cursor
            >
              605 007 753
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-white mb-3">AI Design Canarias</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Agencia de diseño web e IA en Gran Canaria. Webs profesionales,
              SEO local y chatbots con IA.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {servicios.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                    data-cursor
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectores */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Sectores
            </h4>
            <ul className="space-y-2.5">
              {sectores.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                    data-cursor
                  >
                    {s.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zonas */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Zonas
            </h4>
            <ul className="space-y-2.5">
              {zonas.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/zonas/${z.slug}`}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                    data-cursor
                  >
                    {z.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Contacto
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:info@aidesigncanarias.com" className="text-sm text-slate-300 hover:text-white transition-colors" data-cursor>
                  info@aidesigncanarias.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/34605007753" className="text-sm text-slate-300 hover:text-white transition-colors" data-cursor>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="tel:+34605007753" className="text-sm text-slate-300 hover:text-white transition-colors" data-cursor>
                  605 007 753
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} AI Design Canarias — Gran Canaria, Islas Canarias</span>
          <div className="flex items-center gap-5">
            <Link href="/aviso-legal" className="hover:text-white transition-colors" data-cursor>Aviso legal</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors" data-cursor>Privacidad</Link>
            <Link href="/cookies" className="hover:text-white transition-colors" data-cursor>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
