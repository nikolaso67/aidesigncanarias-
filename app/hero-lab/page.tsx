import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/NavbarV2";
import HeroVideo from "../components/HeroVideo";
import HeroDeck from "../components/hero-agencia/HeroDeck";
import HeroIndex from "../components/hero-agencia/HeroIndex";
import Marquee from "../components/Marquee";
import Services from "../components/servicios/Services";

/**
 * PRUEBA: banco para comparar heroes con lo que viene justo detrás (cinta +
 * Servicios). No está en el sitemap y no se indexa. Borrar al elegir variante.
 */
export const metadata: Metadata = {
  title: "Hero lab",
  robots: { index: false, follow: false },
};

const VARIANTS = {
  a: { label: "A · Baraja (blanco)", tone: "light" },
  b: { label: "B · Índice (tinta)", tone: "dark" },
  c: { label: "C · Índice (blanco)", tone: "light" },
  actual: { label: "Actual", tone: "dark" },
} as const;

type VariantKey = keyof typeof VARIANTS;

function isVariant(v: unknown): v is VariantKey {
  return typeof v === "string" && v in VARIANTS;
}

export default async function HeroLab({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { v } = await searchParams;
  const key: VariantKey = isVariant(v) ? v : "a";

  return (
    <>
      <Navbar heroTone={VARIANTS[key].tone} />
      <main>
        {key === "a" && <HeroDeck />}
        {key === "b" && <HeroIndex tone="dark" preview />}
        {key === "c" && <HeroIndex tone="light" preview={false} />}
        {key === "actual" && <HeroVideo />}
        <Marquee />
        <Services />
      </main>

      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[120] flex gap-1 rounded-full bg-ink/90 backdrop-blur p-1 shadow-xl">
        {(Object.keys(VARIANTS) as VariantKey[]).map((k) => (
          <Link
            key={k}
            href={`/hero-lab?v=${k}`}
            className={`rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap ${k === key ? "bg-white text-ink" : "text-white/70 hover:text-white"}`}
          >
            {VARIANTS[k].label}
          </Link>
        ))}
      </nav>
    </>
  );
}
