import Link from "next/link";
import type { ServicePricing as ServicePricingData } from "../../servicios/data";

export default function ServicePricing({
  pricing,
  whatsappHref,
  bgClassName = "bg-white",
}: {
  pricing: ServicePricingData;
  whatsappHref: string;
  bgClassName?: string;
}) {
  return (
    <section className={`py-20 px-6 ${bgClassName}`}>
      <div className="max-w-2xl mx-auto">
        <div className="rounded-3xl bg-white border border-ink/10 p-8 md:p-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8 text-center sm:text-left">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-2 block">
                Precio
              </span>
              <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink mb-1">
                {pricing.headline}
              </div>
              <p className="text-sm text-slate-500">{pricing.note}</p>
            </div>
            <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
              <Link
                href="/#contacto"
                className="px-7 py-3.5 rounded-full bg-accent hover:bg-accent-bright transition-colors font-semibold text-white text-center whitespace-nowrap"
              >
                Solicitar presupuesto
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline text-center"
              >
                Preguntar por WhatsApp
              </a>
            </div>
          </div>

          {pricing.breakdown && pricing.breakdown.length > 0 && (
            <div className="mt-8 pt-6 border-t border-ink/10 space-y-3">
              {pricing.breakdown.map((line) => (
                <div
                  key={line.label}
                  className="flex items-baseline justify-between gap-4 text-sm"
                >
                  <span className="text-slate-600">
                    {line.label}
                    {line.note && <span className="text-slate-400"> · {line.note}</span>}
                  </span>
                  <span className="font-semibold text-ink whitespace-nowrap">{line.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <p className="text-center text-xs text-slate-400 mt-6">
          Precios de lanzamiento · sin permanencia ·{" "}
          <Link href="/#precios" className="hover:text-accent transition-colors">
            ver todos los planes →
          </Link>
        </p>
      </div>
    </section>
  );
}
