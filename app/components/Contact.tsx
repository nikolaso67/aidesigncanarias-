"use client";

import { useState } from "react";

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
    <section id="contacto" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-500">
            Hablemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Contacto
          </h2>
          <p className="text-slate-600">
            Cuéntame tu proyecto y te respondo con un presupuesto adaptado a tu
            negocio. Sin compromiso.
          </p>
        </div>

        {sent ? (
          <div className="text-center p-10 rounded-2xl border border-green-500/30 bg-green-500/10">
            <span className="text-4xl mb-4 block">✅</span>
            <h3 className="text-xl font-semibold mb-2">Mensaje enviado</h3>
            <p className="text-slate-600">
              Gracias por contactarnos. Te respondemos en menos de 24 horas.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-8 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-slate-700 mb-2 block">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-slate-700 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-700 mb-2 block">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                name="telefono"
                placeholder="+34 600 000 000"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-colors"
              />
            </div>

            <div>
              <label className="text-sm text-slate-700 mb-2 block">
                ¿Qué necesitas?
              </label>
              <textarea
                name="mensaje"
                required
                rows={5}
                placeholder="Cuéntame tu negocio y lo que necesitas — web nueva, tienda online, chatbot..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">
                Ha ocurrido un error. Inténtalo de nuevo.
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition-colors font-semibold shadow-md shadow-indigo-500/20"
            >
              {loading ? "Enviando..." : "Solicitar presupuesto gratis"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
