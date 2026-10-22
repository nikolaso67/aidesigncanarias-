import type { CSSProperties } from "react";
import type { DisciplineId } from "./shared";
import "./hero-agencia.css";

/**
 * Una pieza de trabajo en miniatura por disciplina. Son componentes reales a
 * escala, no capturas: cada una rellena la tarjeta que la contiene y lleva su
 * propio fondo. Los elementos `.pc-in` entran escalonados cuando la tarjeta
 * padre pasa a `data-active="true"` (ver hero-agencia.css).
 */

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

function Web() {
  return (
    <div className="h-full bg-ink text-white p-4 flex flex-col gap-3">
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="w-2 h-2 rounded-full bg-white/20" />
        ))}
        <span className="ml-2 h-5 flex-1 max-w-[11rem] rounded-full bg-white/[0.07] px-3 text-[10px] leading-5 text-white/45 font-mono">
          tunegocio.es
        </span>
      </div>
      <div
        className="pc-in flex-1 rounded-xl p-4 flex flex-col justify-end bg-[radial-gradient(circle_at_85%_15%,#5b4dff_0%,#2a2360_45%,#15142a_100%)]"
        style={d(0.05)}
      >
        <span className="pc-in block h-4 w-3/4 rounded bg-white" style={d(0.2)} />
        <span className="pc-in block h-4 w-1/2 rounded bg-white mt-1.5" style={d(0.28)} />
        <span className="pc-in mt-3 inline-flex self-start rounded-full bg-white text-ink text-[11px] font-semibold px-3 py-1.5" style={d(0.4)}>
          Pide tu cita
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["bg-[#ff9d5c]/70", "bg-[#3dd68c]/60", "bg-[#38bdf8]/60"].map((c, i) => (
          <span key={c} className={`pc-in block h-10 rounded-lg ${c}`} style={d(0.5 + i * 0.08)} />
        ))}
      </div>
    </div>
  );
}

function Ia() {
  return (
    <div className="h-full bg-accent text-white p-4 flex flex-col gap-2.5">
      <div className="flex items-center gap-2 pb-2.5 border-b border-white/15">
        <span className="w-7 h-7 rounded-lg bg-white/20 grid place-items-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M11 3.5l1.9 5.1 5.1 1.9-5.1 1.9L11 17.5l-1.9-5.1L4 10.5l5.1-1.9z" />
          </svg>
        </span>
        <span className="text-xs font-semibold">Asistente de tu negocio</span>
        <span className="ml-auto text-[10px] text-white/70">03:07</span>
      </div>
      <div className="pc-in self-end max-w-[85%] rounded-2xl rounded-br-md bg-white text-ink text-xs px-3 py-2" style={d(0.1)}>
        ¿Abrís el domingo?
      </div>
      <div className="pc-in self-start max-w-[90%] rounded-2xl rounded-bl-md bg-ink/40 text-xs px-3 py-2" style={d(0.55)}>
        Sí, de 10:00 a 14:00. ¿Te reservo a las 11:00?
      </div>
      <div className="pc-in self-end max-w-[85%] rounded-2xl rounded-br-md bg-white text-ink text-xs px-3 py-2" style={d(0.95)}>
        Perfecto, gracias
      </div>
      <span className="pc-in mt-auto self-start inline-flex items-center gap-1.5 rounded-full bg-emerald-400 text-ink text-[11px] font-semibold px-3 py-1.5" style={d(1.3)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
        Reserva hecha mientras dormías
      </span>
    </div>
  );
}

function Seo() {
  return (
    <div className="h-full bg-white text-ink p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2 rounded-full border border-ink/10 px-3 py-2 text-xs text-slate-600">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="w-3.5 h-3.5 text-slate-400">
          <circle cx="11" cy="11" r="6.5" />
          <path d="M20 20l-4-4" />
        </svg>
        peluquería en Las Palmas
      </div>
      <div className="pc-in rounded-xl border-2 border-accent/70 bg-accent/[0.04] p-3" style={d(0.15)}>
        <div className="text-[10px] text-slate-500">tunegocio.es</div>
        <div className="text-sm font-semibold text-accent leading-tight mt-0.5">Tu negocio · Peluquería en Las Palmas</div>
        <div className="flex items-center gap-2 mt-1.5 text-[11px]">
          <span className="text-amber-500 tracking-tight" aria-hidden>★★★★★</span>
          <span className="text-emerald-600 font-medium">Abierto ahora</span>
        </div>
      </div>
      {[0.3, 0.4].map((t) => (
        <div key={t} className="pc-in rounded-xl border border-ink/10 p-3 opacity-60" style={d(t)}>
          <span className="block h-2 w-16 rounded-full bg-ink/10" />
          <span className="block h-2.5 w-3/4 rounded-full bg-ink/15 mt-2" />
        </div>
      ))}
      <span className="mt-auto text-[9px] uppercase tracking-[0.18em] text-slate-400">Ejemplo ilustrativo</span>
    </div>
  );
}

function Brand() {
  return (
    <div className="h-full bg-paper text-ink p-5 grid grid-cols-2 grid-rows-[1fr_auto] gap-3">
      <div className="pc-in rounded-2xl bg-ink grid place-items-center" style={d(0.05)}>
        <span className="font-display font-bold text-5xl text-paper leading-none">t.</span>
      </div>
      <div className="pc-in rounded-2xl bg-white p-3 flex flex-col justify-between" style={d(0.2)}>
        <span className="font-display font-bold text-4xl leading-none">Aa</span>
        <span className="text-[10px] text-slate-500 leading-tight">Tipografía y tono de voz</span>
      </div>
      <div className="col-span-2 grid grid-cols-4 gap-2">
        {["bg-ink", "bg-accent", "bg-[#ff9d5c]", "bg-white border border-ink/10"].map((c, i) => (
          <span key={c} className={`pc-in block h-10 rounded-xl ${c}`} style={d(0.35 + i * 0.08)} />
        ))}
      </div>
    </div>
  );
}

function Shop() {
  return (
    <div className="relative h-full bg-white text-ink p-4 flex flex-col gap-3">
      <div className="pc-in flex-1 rounded-xl bg-[linear-gradient(135deg,#ffe2cc_0%,#ff9d5c_100%)] grid place-items-center" style={d(0.05)}>
        <span className="w-14 h-20 rounded-[1.25rem] bg-white/70 shadow-[0_16px_30px_-12px_rgba(120,50,0,0.45)]" />
      </div>
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="text-xs font-semibold">Aceite de aguacate</div>
          <div className="text-[11px] text-slate-500">Hecho en Gran Canaria</div>
        </div>
        <span className="text-sm font-semibold tabular-nums">12,90 €</span>
      </div>
      <span className="pc-in rounded-full bg-ink text-white text-[11px] font-semibold text-center py-2" style={d(0.3)}>
        Añadir al carrito
      </span>
      <span
        className="pc-in absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white text-ink text-[11px] font-semibold px-3 py-1.5 shadow-lg shadow-ink/10"
        style={d(0.9)}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Pedido recibido
      </span>
    </div>
  );
}

function Ads() {
  return (
    <div className="h-full bg-ink-soft text-white p-4 flex flex-col">
      <div className="pc-in rounded-xl bg-white text-ink overflow-hidden flex-1 flex flex-col" style={d(0.05)}>
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="w-6 h-6 rounded-full bg-accent" />
          <div className="leading-tight">
            <div className="text-[11px] font-semibold">Tu negocio</div>
            <div className="text-[9px] text-slate-500">Patrocinado</div>
          </div>
        </div>
        <div className="flex-1 min-h-16 bg-[radial-gradient(circle_at_30%_30%,#38bdf8_0%,#5b4dff_55%,#2a2360_100%)]" />
        <div className="flex items-center justify-between px-3 py-2">
          <span className="text-[11px] font-medium">Menú del día en Arucas</span>
          <span className="rounded-md bg-ink text-white text-[10px] font-semibold px-2 py-1">Reservar</span>
        </div>
      </div>
      <span className="pc-in mt-3 self-start inline-flex items-center gap-1.5 rounded-full bg-white/10 text-[11px] font-medium px-3 py-1.5" style={d(0.5)}>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Campaña activa en Google e Instagram
      </span>
    </div>
  );
}

const PIECES: Record<DisciplineId, () => React.JSX.Element> = { web: Web, ia: Ia, seo: Seo, brand: Brand, shop: Shop, ads: Ads };

export default function Piece({ id }: { id: DisciplineId }) {
  const Comp = PIECES[id];
  return (
    <div className="h-full" aria-hidden>
      <Comp />
    </div>
  );
}
