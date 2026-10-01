import "./demos.css";

const d = (s: number) => ({ animationDelay: `${s}s` });

/** Diseño web: una página que se monta bloque a bloque dentro de un navegador. */
export function DemoWebBuild() {
  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden" aria-hidden>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="ml-3 h-5 flex-1 max-w-[16rem] rounded-full bg-white/[0.06] px-3 text-[10px] leading-5 text-white/40 font-mono">
          tunegocio.es
        </span>
      </div>
      <div className="p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="wb-el block h-4 w-24 rounded-full bg-white/80" style={d(0.1)} />
          <span className="flex gap-2">
            {[0.2, 0.3, 0.4].map((t) => (
              <span key={t} className="wb-el block h-2.5 w-10 rounded-full bg-white/25" style={d(t)} />
            ))}
          </span>
        </div>
        <div
          className="wb-el rounded-xl p-5 sm:p-6 bg-[radial-gradient(circle_at_85%_15%,#5b4dff_0%,#2a2360_45%,#15142a_100%)]"
          style={d(0.55)}
        >
          <span className="wb-el block h-5 sm:h-6 w-3/4 rounded-md bg-white" style={d(0.8)} />
          <span className="wb-el block h-5 sm:h-6 w-1/2 rounded-md bg-white mt-2" style={d(0.9)} />
          <span className="wb-el block h-2.5 w-2/3 rounded-full bg-white/40 mt-4" style={d(1.05)} />
          <span className="wb-el inline-block h-8 w-28 rounded-full bg-white mt-5" style={d(1.2)} />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1.4, 1.55, 1.7].map((t, i) => (
            <div key={t} className="wb-el rounded-lg bg-white/[0.06] p-3" style={d(t)}>
              <span
                className={`block h-12 rounded-md ${["bg-[#ff9d5c]/70", "bg-[#3dd68c]/60", "bg-[#38bdf8]/60"][i]}`}
              />
              <span className="block h-2 w-3/4 rounded-full bg-white/30 mt-2.5" />
            </div>
          ))}
        </div>
      </div>
      <span className="wb-pop absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-white text-ink text-xs font-semibold px-3 py-1.5 shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Online en 7 días
      </span>
    </div>
  );
}

/** Integración de IA: el asistente contesta una reserva de madrugada. */
export function DemoChat() {
  return (
    <div className="relative w-full rounded-2xl bg-white/10 border border-white/15 p-4 sm:p-5 flex flex-col gap-3 min-h-[15rem]" aria-hidden>
      <div className="flex items-center gap-3 pb-3 border-b border-white/15">
        <span className="w-8 h-8 rounded-xl bg-white/20 grid place-items-center text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M11 3.5l1.9 5.1 5.1 1.9-5.1 1.9L11 17.5l-1.9-5.1L4 10.5l5.1-1.9z" />
          </svg>
        </span>
        <span className="text-sm font-semibold text-white">Asistente · 03:07</span>
        <span className="ml-auto flex items-center gap-1.5 text-[11px] text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" /> en línea
        </span>
      </div>
      <div className="ch-user self-end max-w-[85%] rounded-2xl rounded-br-md bg-white text-ink text-sm px-4 py-2.5">
        ¿Tenéis mesa para 4 mañana a las 21:00?
      </div>
      <div className="relative min-h-[3.25rem]">
        <div className="ch-typing absolute left-0 top-0 inline-flex gap-1.5 rounded-2xl rounded-bl-md bg-white/15 px-4 py-3.5">
          {[0, 0.15, 0.3].map((t) => (
            <span key={t} className="ch-dot w-1.5 h-1.5 rounded-full bg-white" style={d(t)} />
          ))}
        </div>
        <div className="ch-ai absolute left-0 top-0 max-w-[90%] rounded-2xl rounded-bl-md bg-ink/40 text-white text-sm px-4 py-2.5">
          Sí, te la reservo a las 21:00. Te llega la confirmación por WhatsApp.
        </div>
      </div>
      <span className="ch-chip self-start mt-1 inline-flex items-center gap-2 rounded-full bg-emerald-400 text-ink text-xs font-semibold px-3 py-1.5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
        Reserva confirmada mientras dormías
      </span>
    </div>
  );
}

/** SEO: la curva de visitas sube y la posición en Google rueda de 14 a 1. */
export function DemoSeo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const muted = tone === "dark" ? "text-slate-400" : "text-slate-500";
  return (
    <div className="relative w-full" aria-hidden>
      <div className="flex items-end justify-between gap-4 mb-3">
        <div>
          <div className={`text-[11px] uppercase tracking-[0.18em] ${muted}`}>«diseño web gran canaria»</div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className={`text-sm ${muted}`}>Posición</span>
            <span className="font-display font-bold text-5xl leading-none text-accent">
              #
              <span className="inline-block h-[1em] overflow-hidden align-top">
                <span className="seo-roll block">
                  {["14", "9", "5", "3", "1"].map((n) => (
                    <span key={n} className="block h-[1em] leading-none tabular-nums">{n}</span>
                  ))}
                </span>
              </span>
            </span>
          </div>
        </div>
        <span className="seo-badge rounded-full bg-emerald-500/15 text-emerald-600 text-xs font-semibold px-3 py-1.5">
          Subiendo en Google
        </span>
      </div>
      <svg viewBox="0 0 400 120" className="w-full h-auto">
        <defs>
          <linearGradient id="seo-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#5b4dff" stopOpacity="0.28" />
            <stop offset="1" stopColor="#5b4dff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[30, 60, 90].map((y) => (
          <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="currentColor" className={tone === "dark" ? "text-white/10" : "text-ink/10"} strokeWidth="1" />
        ))}
        <path className="seo-area" d="M0 108 C60 104 90 100 140 92 S230 70 270 52 S350 18 400 10 L400 120 L0 120Z" fill="url(#seo-fill)" />
        <path
          className="seo-line"
          pathLength={1}
          d="M0 108 C60 104 90 100 140 92 S230 70 270 52 S350 18 400 10"
          fill="none"
          stroke="#5b4dff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <div className={`mt-1 text-[10px] uppercase tracking-[0.18em] ${muted}`}>Ejemplo ilustrativo</div>
    </div>
  );
}
