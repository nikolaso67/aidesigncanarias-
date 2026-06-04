"use client";

import { useState } from "react";
import ParticleCanvas from "./ParticleCanvas";
import Parallax from "./agency/Parallax";

const SERVICIOS = [
  "Diseño web",
  "Tienda online",
  "SEO local",
  "Chatbot IA",
  "Redes sociales",
  "Software a medida",
];

export default function ContactV2() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [servicios, setServicios] = useState<string[]>([]);

  function toggleServicio(s: string) {
    setServicios((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  }

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
      servicios: servicios.length > 0 ? servicios.join(", ") : "No especificado",
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
    <section id="contacto" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <Parallax speed={0.4} className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none">
        <span />
      </Parallax>
      <Parallax speed={-0.5} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-3xl pointer-events-none">
        <span />
      </Parallax>
      <ParticleCanvas />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-indigo-300 mb-6 px-3 py-1 border border-indigo-400/30 bg-indigo-500/10 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            08 — Contacto
          </span>
          <h2 className="font-extrabold tracking-tighter leading-[0.98] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Cuéntanos tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400">
              proyecto.
            </span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Te respondemos con un presupuesto adaptado a tu negocio en menos de
            24h. Sin compromiso.
          </p>
        </div>

        {sent ? (
          <div className="p-12 rounded-3xl border border-emerald-400/30 bg-emerald-400/5 backdrop-blur text-center">
            <span className="text-5xl mb-4 block" aria-hidden>
              ✅
            </span>
            <h3 className="text-2xl font-bold mb-3 text-white">Mensaje enviado</h3>
            <p className="text-slate-300">
              Gracias por contactarnos. Te respondemos en menos de 24 horas.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl"
          >
            <div>
              <label className="text-sm font-medium text-slate-200 mb-3 block">
                ¿Qué necesitas?{" "}
                <span className="text-slate-400 font-normal">
                  (selecciona uno o varios)
                </span>
              </label>
              <div className="flex flex-wrap gap-2">
                {SERVICIOS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleServicio(s)}
                    data-cursor
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                      servicios.includes(s)
                        ? "bg-white text-slate-900 border-white shadow-lg shadow-white/10"
                        : "bg-white/5 border-white/15 text-slate-300 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Nombre" name="nombre" placeholder="Tu nombre" required />
              <Field label="Email" name="email" type="email" placeholder="tu@email.com" required />
            </div>

            <Field
              label="Teléfono (opcional)"
              name="telefono"
              type="tel"
              placeholder="+34 600 000 000"
            />

            <div>
              <label className="text-sm font-medium text-slate-200 mb-2 block">
                Cuéntanos más
              </label>
              <textarea
                name="mensaje"
                required
                rows={4}
                placeholder="Cuéntanos tu negocio, dónde estás y qué quieres conseguir..."
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center" role="alert">
                Ha ocurrido un error. Inténtalo de nuevo.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              data-cursor
              className="mt-2 px-8 py-4 rounded-full bg-white text-slate-900 hover:bg-indigo-100 disabled:opacity-60 disabled:cursor-not-allowed transition-colors font-bold tracking-wide shadow-2xl"
            >
              {loading ? "Enviando..." : "Solicitar presupuesto gratis →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-200 mb-2 block">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors"
      />
    </div>
  );
}
