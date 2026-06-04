"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#sobre-nosotros" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Precios", href: "#precios" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "#contacto" },
];

export default function NavbarV2() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center shrink-0" data-cursor>
          <Image
            src="/logo.svg"
            alt="AI Design Canarias"
            width={200}
            height={44}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur border border-slate-200/70 rounded-full px-2 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white px-4 py-2 rounded-full transition-all"
              data-cursor
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors font-semibold"
            data-cursor
          >
            Solicitar presupuesto
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-slate-900"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          aria-expanded={open}
          data-cursor
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-medium text-slate-700 hover:text-slate-900 py-3"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-3 text-sm font-semibold py-3 px-5 rounded-full bg-slate-900 text-white text-center"
            onClick={() => setOpen(false)}
          >
            Solicitar presupuesto →
          </a>
        </div>
      )}
    </header>
  );
}
