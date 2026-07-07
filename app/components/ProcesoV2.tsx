import SectionTitle from "./agency/SectionTitle";
import RevealOnScroll from "./agency/RevealOnScroll";

/**
 * Cómo trabajamos — el proceso sin riesgo es nuestro mejor argumento honesto:
 * hablamos → demo gratis → solo pagas si te gusta.
 */
const pasos = [
  {
    titulo: "Hablamos",
    descripcion:
      "Cuéntanos tu negocio por WhatsApp o por el formulario. Sin reuniones eternas: con 15 minutos nos basta para entender qué necesitas.",
    detalle: "WhatsApp o formulario · respuesta en 24h",
  },
  {
    titulo: "Demo gratis",
    descripcion:
      "Te enseñamos una primera versión de tu web funcionando antes de que pagues nada. La ves con tus propios ojos, no en promesas ni mockups.",
    detalle: "Sin coste · sin compromiso",
  },
  {
    titulo: "Solo pagas si te gusta",
    descripcion:
      "Si te convence, la terminamos y la lanzamos en 7–14 días. Sin permanencia, sin coste de salida, y la web es tuya.",
    detalle: "Entrega 7–14 días · sin permanencia",
  },
];

export default function ProcesoV2() {
  return (
    <section id="como-trabajamos" className="relative py-32 px-6 bg-paper overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionTitle
            eyebrow="04 — Cómo trabajamos"
            title={
              <>
                Primero lo ves,{" "}
                <span className="text-accent">luego lo pagas</span>
              </>
            }
            description="Sin señales por adelantado ni contratos raros. Nuestro proceso elimina el riesgo de tu lado: si la demo no te convence, no pagas nada y aquí no ha pasado nada."
          />
        </div>

        <RevealOnScroll
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          stagger={0.12}
        >
          {pasos.map((paso, i) => (
            <div
              key={paso.titulo}
              className="relative p-8 rounded-3xl border border-ink/10 bg-white flex flex-col gap-4"
            >
              <span className="font-display font-bold text-6xl md:text-7xl leading-none text-accent/15" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-bold text-2xl text-ink leading-tight">
                {paso.titulo}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {paso.descripcion}
              </p>
              <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {paso.detalle}
              </span>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
