import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <span>
          © {new Date().getFullYear()} AI Design Canarias — Gran Canaria, Islas Canarias
        </span>
        <div className="flex items-center gap-5">
          <Link href="/aviso-legal" className="hover:text-indigo-600 transition-colors">
            Aviso legal
          </Link>
          <Link href="/privacidad" className="hover:text-indigo-600 transition-colors">
            Privacidad
          </Link>
          <Link href="/cookies" className="hover:text-indigo-600 transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
