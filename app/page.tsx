import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import WhatsAppButton from "./components/WhatsAppButton";
import Results from "./components/Results";
import FAQ from "./components/FAQ";
import Zonas from "./components/Zonas";
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
        <Services />
        <About />
        <Portfolio />
        <Results />
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
