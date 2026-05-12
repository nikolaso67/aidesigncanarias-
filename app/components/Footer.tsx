import Link from "next/link";

const zonas = [
  { slug: "las-palmas-de-gran-canaria", nombre: "Las Palmas de Gran Canaria" },
  { slug: "maspalomas", nombre: "Maspalomas" },
  { slug: "telde", nombre: "Telde" },
  { slug: "santa-lucia-de-tirajana", nombre: "Santa Lucía de Tirajana" },
  { slug: "mogan", nombre: "Mogán" },
  { slug: "arucas", nombre: "Arucas" },
];

const servicios = [
  { href: "/servicios/diseno-web-gran-canaria", label: "Diseño web" },
  { href: "/servicios/seo-posicionamiento-canarias", label: "SEO y posicionamiento" },
  { href: "/servicios/integracion-ia", label: "Chatbot con IA" },
  { href: "/servicios/tiendas-online", label: "Tiendas online" },
  { href: "/servicios/gestion-redes-sociales", label: "Redes sociales" },
  { href: "/servicios/identidad-visual-branding", label: "Branding" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-bold text-slate-900 mb-2">AI Design Canarias</div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Agencia de diseño web e inteligencia artificial en Gran Canaria. Webs profesionales, SEO y chatbot con IA.
            </p>
            <a
              href="tel:+34605007753"
              className="text-sm text-indigo-600 hover:underline"
            >
              605 007 753
            </a>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              {servicios.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zonas */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Zonas que atendemos
            </h3>
            <ul className="space-y-2">
              {zonas.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/zonas/${z.slug}`}
                    className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    {z.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} AI Design Canarias — Gran Canaria, Islas Canarias</span>
          <div className="flex items-center gap-5">
            <Link href="/aviso-legal" className="hover:text-indigo-600 transition-colors">Aviso legal</Link>
            <Link href="/privacidad" className="hover:text-indigo-600 transition-colors">Privacidad</Link>
            <Link href="/cookies" className="hover:text-indigo-600 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
