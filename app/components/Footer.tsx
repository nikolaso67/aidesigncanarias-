export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <span>
          © {new Date().getFullYear()} AI Design Canarias — Todos los derechos
          reservados
        </span>
        <span>Gran Canaria, Islas Canarias</span>
      </div>
    </footer>
  );
}
