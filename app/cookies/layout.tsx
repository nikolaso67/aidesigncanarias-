import Navbar from "../components/NavbarV2";
import Footer from "../components/FooterV2";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
