import Preloader from "./components/PreloaderV2";
import Navbar from "./components/NavbarV2";
import Hero from "./components/HeroV2";
import Marquee from "./components/Marquee";
import Services from "./components/ServicesV2";
import About from "./components/AboutV2";
import Portfolio from "./components/PortfolioV2";
import Contact from "./components/ContactV2";
import Footer from "./components/FooterV2";
import Chat from "./components/Chat";
import WhatsAppButton from "./components/WhatsAppButton";
import Results from "./components/ResultsV2";
import Pricing from "./components/PricingV2";
import FAQ from "./components/FAQV2";
import Zonas from "./components/ZonasV2";
import { faqStructuredData } from "./data/faq-data";

export default function Home() {
  return (
    <>
      <Preloader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Portfolio />
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
