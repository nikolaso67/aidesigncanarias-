import Navbar from "../components/NavbarV2";
import Footer from "../components/FooterV2";
import Chat from "../components/Chat";
import WhatsAppButton from "../components/WhatsAppButton";

export default function SectorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Chat />
      <WhatsAppButton />
    </>
  );
}
