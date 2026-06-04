import Navbar from "../components/NavbarV2";
import Footer from "../components/FooterV2";
import WhatsAppButton from "../components/WhatsAppButton";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
