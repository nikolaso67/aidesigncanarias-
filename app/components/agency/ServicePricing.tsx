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
        <div className="rounded-3xl bg-white border border-ink/10 p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8 text-center sm:text-left">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-2 block">
              Precio
            </span>
            <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink mb-1">
              {pricing.price}
            </div>
            <p className="text-sm text-slate-500">{pricing.note}</p>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-auto">
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
        <p className="text-center text-xs text-slate-400 mt-6">
          <Link href="/#precios" className="hover:text-accent transition-colors">
            Ver todos los planes y precios →
          </Link>
        </p>
      </div>
    </section>
  );
}
