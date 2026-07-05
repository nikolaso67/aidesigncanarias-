import RevealOnScroll from "./RevealOnScroll";

interface Props {
  /** Pill/eyebrow encima del título (opcional) */
  eyebrow?: string;
  /** Título principal — texto plano. Marca palabras clave con <span className="text-accent"> */
  title: React.ReactNode;
  /** Subtítulo o descripción debajo (opcional) */
  description?: React.ReactNode;
  /** Alineación. Default "left" */
  align?: "left" | "center";
  /** Tono de la sección donde vive. Default "light" */
  tone?: "light" | "dark";
  /** id para anchor links */
  id?: string;
}

/**
 * Cabecera de sección reutilizable. Tipografía display gigante, eyebrow opcional, descripción opcional.
 * Anima en scroll automáticamente.
 */
export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  id,
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const titleCls = tone === "dark" ? "text-white" : "text-ink";
  const descCls = tone === "dark" ? "text-slate-400" : "text-slate-600";
  return (
    <RevealOnScroll className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <span
          id={id}
          className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-6"
        >
          <span className="w-8 h-px bg-accent" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display font-bold tracking-tight leading-[1.02] text-4xl md:text-5xl lg:text-6xl ${titleCls} mb-5`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl ${descCls} leading-relaxed`}>
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
