"use client";

/**
 * "Saltar al contenido": primer elemento enfocable de cada página (WCAG 2.4.1).
 * Salta al primer <main>, que existe en todas las rutas vía sus layouts.
 */
export default function SkipLink() {
  function skip(e: React.MouseEvent<HTMLAnchorElement>) {
    const main = document.querySelector("main");
    if (!main) {
      console.warn("[SkipLink] esta página no tiene <main>");
      return;
    }
    e.preventDefault();
    main.setAttribute("tabindex", "-1");
    main.focus();
    main.scrollIntoView();
  }

  return (
    <a
      href="#main"
      onClick={skip}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[130] focus:px-5 focus:py-3 focus:rounded-full focus:bg-white focus:text-ink focus:font-semibold focus:shadow-xl"
    >
      Saltar al contenido
    </a>
  );
}
