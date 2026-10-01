import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/NavbarV2";
import Footer from "./components/FooterV2";
import HeroSwarm from "./components/HeroSwarm";

export const metadata: Metadata = {
  title: "Página no encontrada | AI Design Canarias",
  robots: { index: false, follow: true },
};

const shortcuts = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Precios", href: "/#precios" },
  { label: "Blog", href: "/blog" },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="grain relative min-h-[100dvh] flex items-center overflow-hidden bg-ink text-white px-6 pt-32 pb-24">
        <HeroSwarm className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/20 to-ink/90 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent-bright mb-8">
            <span className="w-8 h-px bg-accent-bright" aria-hidden />
            Error 404
            <span className="w-8 h-px bg-accent-bright" aria-hidden />
          </span>
          <h1 className="font-display font-bold tracking-tight leading-[0.95] text-5xl md:text-7xl mb-6 text-balance">
            Esta página no existe <span className="text-accent-bright">o se ha mudado.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-10">
            Puede que el enlace esté mal escrito o que hayamos reorganizado la web. Lo que buscabas
            seguramente está en alguna de estas secciones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="px-8 py-4 rounded-full bg-white text-ink hover:bg-accent hover:text-white active:scale-[0.98] transition font-semibold"
            >
              Volver al inicio
            </Link>
            <Link
              href="/#contacto"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 active:scale-[0.98] transition font-semibold"
            >
              Contactar
            </Link>
          </div>

          <nav aria-label="Secciones principales" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            {shortcuts.map((s) => (
              <Link key={s.href} href={s.href} className="hover:text-white transition-colors">
                {s.label} →
              </Link>
            ))}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
