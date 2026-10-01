import type { ReactNode } from "react";

/**
 * Iconos de servicio en SVG (sustituyen a los emojis, que cada sistema dibuja distinto).
 * Rejilla 24×24, trazo 1.75 y extremos redondeados en todos para que se vean como una familia.
 * Se colorean con `currentColor`.
 */
const PATHS: Record<string, ReactNode> = {
  "diseno-web-gran-canaria": (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M6.5 6.5h.01M9 6.5h.01" />
      <path d="M7 13h6M7 16h4" />
    </>
  ),
  "integracion-ia": (
    <>
      <path d="M11 3.5l1.9 5.1 5.1 1.9-5.1 1.9L11 17.5l-1.9-5.1L4 10.5l5.1-1.9z" />
      <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
    </>
  ),
  "seo-posicionamiento-canarias": (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  "tiendas-online": (
    <>
      <path d="M5 8h14l-1.2 12H6.2z" />
      <path d="M9 10V6.5a3 3 0 0 1 6 0V10" />
    </>
  ),
  "identidad-visual-branding": (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.5-.3-.9-.6-1.3-.3-.3-.5-.8-.5-1.2 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5C21 6.2 17 3 12 3z" />
      <path d="M7.5 11.5h.01M9.5 7.5h.01M14.5 7.5h.01" />
    </>
  ),
  "apps-web-progresivas": (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  "mantenimiento-web": (
    <>
      <path d="M20 11a8 8 0 0 0-14.6-4.5" />
      <path d="M4 3.5v4h4" />
      <path d="M4 13a8 8 0 0 0 14.6 4.5" />
      <path d="M20 20.5v-4h-4" />
    </>
  ),
  "software-a-medida": (
    <>
      <path d="M8 7l-5 5 5 5" />
      <path d="M16 7l5 5-5 5" />
      <path d="M14 4.5l-4 15" />
    </>
  ),
  "consultoria-digital": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  "publicidad-digital": (
    <>
      <path d="M3.5 10v4h3l7 5V5l-7 5z" />
      <path d="M17 9a4.5 4.5 0 0 1 0 6" />
      <path d="M19.5 6.5a8 8 0 0 1 0 11" />
    </>
  ),
};

export default function ServiceIcon({ slug, className = "w-6 h-6" }: { slug: string; className?: string }) {
  const paths = PATHS[slug];
  // Fallo ruidoso en build/prerender si se añade un servicio sin icono
  if (!paths) throw new Error(`ServiceIcon: falta el icono para el servicio "${slug}"`);
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths}
    </svg>
  );
}
