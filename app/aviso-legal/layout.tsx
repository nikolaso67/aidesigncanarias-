import Navbar from "../components/NavbarV2";
import Footer from "../components/FooterV2";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {/* Franja tinta tras el navbar (logo claro) */}
      <div className="h-20 bg-ink" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
