"use client";

import { useState } from "react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg tracking-tight">
          AI Design <span className="text-indigo-600">Canarias</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium"
          >
            Solicitar presupuesto
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-600 p-2 touch-manipulation"
          style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          type="button"
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
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium text-center"
            onClick={() => setOpen(false)}
          >
            Solicitar presupuesto
          </a>
        </div>
      )}
    </header>
  );
}
