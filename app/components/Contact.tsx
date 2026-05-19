"use client";

import { useState } from "react";
import ParticleCanvas from "./ParticleCanvas";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <ParticleCanvas />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-400">
            Hablemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">
            Contacto
          </h2>
          <p className="text-indigo-200">
            Cuéntame tu proyecto y te respondo con un presupuesto adaptado a tu
            negocio. Sin compromiso.
          </p>
        </div>

        {sent ? (
          <div className="text-center p-10 rounded-2xl border border-green-400/30 bg-green-400/10">
            <span className="text-4xl mb-4 block">✅</span>
            <h3 className="text-xl font-semibold mb-2 text-white">Mensaje enviado</h3>
            <p className="text-indigo-200">
              Gracias por contactarnos. Te respondemos en menos de 24 horas.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-indigo-200 mb-2 block">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-indigo-300/50 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-indigo-200 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-indigo-300/50 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-indigo-200 mb-2 block">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                name="telefono"
                placeholder="+34 600 000 000"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-indigo-300/50 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 transition-colors"
              />
            </div>

            <div>
              <label className="text-sm text-indigo-200 mb-2 block">
                ¿Qué necesitas?
              </label>
              <textarea
                name="mensaje"
                required
                rows={5}
                placeholder="Cuéntame tu negocio y lo que necesitas — web nueva, tienda online, chatbot..."
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-indigo-300/50 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">
                Ha ocurrido un error. Inténtalo de nuevo.
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-full bg-indigo-500 hover:bg-indigo-400 disabled:opacity-50 transition-colors font-bold text-white tracking-wide shadow-lg shadow-indigo-500/25"
            >
              {loading ? "Enviando..." : "Solicitar presupuesto gratis"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
