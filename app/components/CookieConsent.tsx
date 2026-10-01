"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  OPEN_SETTINGS_EVENT,
  clearAnalyticsCookies,
  getConsentSnapshot,
  getServerConsentSnapshot,
  loadAnalytics,
  openCookieSettings,
  saveConsent,
  subscribeConsent,
  type ConsentChoice,
} from "../lib/consent";

/**
 * Banner de cookies. Aceptar y Rechazar tienen el mismo peso visual (criterio AEPD).
 * Se reabre desde el pie ("Configurar cookies") mediante OPEN_SETTINGS_EVENT.
 */
export default function CookieConsent() {
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getServerConsentSnapshot);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    if (consent === "granted") loadAnalytics();
  }, [consent]);

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  function choose(choice: ConsentChoice) {
    const revoking = consent === "granted" && choice === "denied";
    saveConsent(choice);
    setReopened(false);
    if (revoking) {
      // Los scripts ya cargados no se pueden descargar: se limpian cookies y se recarga
      clearAnalyticsCookies();
      window.location.reload();
    }
  }

  if (consent === "pending" || (consent !== "none" && !reopened)) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed z-[120] inset-x-4 bottom-4 sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-md rounded-2xl bg-ink text-white border border-white/10 shadow-2xl shadow-ink/40 p-6"
    >
      <p id="cookie-title" className="font-display font-bold text-lg mb-2">
        ¿Nos dejas medir las visitas?
      </p>
      <p id="cookie-desc" className="text-sm text-slate-300 leading-relaxed mb-5">
        Usamos Google Analytics y Microsoft Clarity para saber qué páginas funcionan y mejorar la web.
        Solo se activan si aceptas. Sin publicidad ni venta de datos.{" "}
        <Link href="/cookies" className="underline decoration-white/30 hover:text-white">
          Política de cookies
        </Link>
      </p>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="px-5 py-3 rounded-full border border-white/25 hover:border-white/60 hover:bg-white/5 active:scale-[0.98] transition font-semibold text-sm"
        >
          Rechazar
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="px-5 py-3 rounded-full bg-white text-ink hover:bg-accent hover:text-white active:scale-[0.98] transition font-semibold text-sm"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

/** Botón del pie para volver a abrir el banner. */
export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Configurar cookies
    </button>
  );
}
