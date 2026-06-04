import RevealOnScroll from "./RevealOnScroll";

interface Props {
  /** Pill/eyebrow encima del título (opcional) */
  eyebrow?: string;
  /** Título principal — texto plano. Si incluyes <span data-gradient> dentro, ese span recibe gradient brand */
  title: React.ReactNode;
  /** Subtítulo o descripción debajo (opcional) */
  description?: React.ReactNode;
  /** Alineación. Default "left" */
  align?: "left" | "center";
  /** id para anchor links */
  id?: string;
}

/**
 * Cabecera de sección reutilizable. Tipografía gigante, eyebrow opcional, descripción opcional.
 * Anima en scroll automáticamente.
 */
export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <RevealOnScroll className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <span
          id={id}
          className={`inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-indigo-700 mb-5 px-3 py-1 border border-indigo-200 bg-white/70 backdrop-blur rounded-full`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-extrabold tracking-tighter leading-[0.98] text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
