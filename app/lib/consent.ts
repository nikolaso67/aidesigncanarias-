/**
 * Consentimiento de cookies de analítica (Google Analytics 4 + Microsoft Clarity).
 *
 * Modo estricto: no se carga NINGÚN script de analítica hasta que el visitante
 * acepta. La decisión se guarda en localStorage; si se revoca, se borran las
 * cookies de analítica y se recarga la página para descargar los scripts.
 */

export const GA_ID = "G-M5DNQL035H";
export const CLARITY_ID = "wmeor4nkaw";

export type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "aidc-consent-v1";
export const OPEN_SETTINGS_EVENT = "aidc:open-cookie-settings";
const CHANGE_EVENT = "aidc:consent-change";

export function readConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { choice?: unknown };
    return parsed.choice === "granted" || parsed.choice === "denied" ? parsed.choice : null;
  } catch (err) {
    // Almacenamiento bloqueado (modo privado, ajustes del navegador): se vuelve a preguntar
    console.warn("[consent] no se pudo leer la decisión guardada", err);
    return null;
  }
}

export function saveConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, at: new Date().toISOString() }));
  } catch (err) {
    console.warn("[consent] no se pudo guardar la decisión; se aplica solo a esta visita", err);
    sessionChoice = choice;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

// Respaldo en memoria si localStorage está bloqueado
let sessionChoice: ConsentChoice | null = null;

/* --- Store para useSyncExternalStore: "none" = sin decidir, "pending" = en servidor --- */
export type ConsentSnapshot = ConsentChoice | "none" | "pending";

export function subscribeConsent(onChange: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange); // cambios desde otra pestaña
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function getConsentSnapshot(): ConsentSnapshot {
  return readConsent() ?? sessionChoice ?? "none";
}

export function getServerConsentSnapshot(): ConsentSnapshot {
  return "pending";
}

let analyticsLoaded = false;

function injectScript(src: string): void {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  s.onerror = () => console.warn(`[consent] no cargó ${src}`);
  document.head.appendChild(s);
}

/** Carga GA4 y Clarity. Solo se llama con consentimiento concedido. */
export function loadAnalytics(): void {
  if (analyticsLoaded) return;
  analyticsLoaded = true;

  const w = window as unknown as {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity: ((...args: unknown[]) => void) & { q?: unknown[] };
  };

  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // gtag exige el objeto arguments, no un array
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID);
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);

  w.clarity =
    w.clarity ||
    Object.assign((...args: unknown[]) => {
      (w.clarity.q = w.clarity.q || []).push(args);
    }, {});
  injectScript(`https://www.clarity.ms/tag/${CLARITY_ID}`);
}

/** Borra las cookies propias de GA4 y Clarity del dominio actual. */
export function clearAnalyticsCookies(): void {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => n === "_ga" || n.startsWith("_ga_") || n === "_clck" || n === "_clsk");

  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
