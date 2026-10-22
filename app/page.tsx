import Preloader from "./components/PreloaderV2";
import Navbar from "./components/NavbarV2";
// Hero de agencia con fondo blanco (el anterior, HeroVideo, queda en el repo como alternativa)
import Hero from "./components/hero-agencia/HeroDeck";
import Marquee from "./components/Marquee";
import Services from "./components/servicios/Services";
import About from "./components/AboutV2";
import Portfolio from "./components/PortfolioV2";
import Proceso from "./components/ProcesoV2";
import Contact from "./components/ContactV2";
import Footer from "./components/FooterV2";
import Chat from "./components/Chat";
import WhatsAppButton from "./components/WhatsAppButton";
import Results from "./components/ResultsV2";
import Pricing from "./components/PricingV2";
import FAQ from "./components/FAQV2";
import Zonas from "./components/ZonasV2";
import { faqStructuredData } from "./data/faq-data";
import type { Metadata } from "next";

const SITE_URL = "https://aidesigncanarias.com";

// La canónica vive aquí y no en el layout raíz: los metadatos se fusionan de
// forma superficial, así que en el layout la heredaba cualquier página sin
// `alternates` propio (p. ej. /blog) y le decía a Google que era la home.
export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
    languages: { "es-ES": SITE_URL, "x-default": SITE_URL },
  },
};

export default function Home() {
  return (
    <>
      <Preloader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Navbar heroTone="light" />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Portfolio />
        <Proceso />
        <Results />
        <Pricing />
        <FAQ />
        <Zonas />
        <Contact />
      </main>
      <Footer />
      <Chat />
      <WhatsAppButton />
    </>
  );
}
