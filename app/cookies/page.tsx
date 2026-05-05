import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | AI Design Canarias",
  description: "Información sobre el uso de cookies en aidesigncanarias.com.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Política de Cookies</h1>
      <p className="text-sm text-slate-400 mb-10">Última actualización: mayo de 2026</p>

      <div className="space-y-8 text-slate-600 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">1. ¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo cuando los visitas. Se utilizan para que el sitio funcione correctamente, para recordar tus preferencias y para obtener información estadística sobre el uso del sitio.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Cookies que utilizamos</h2>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Cookie</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Tipo</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Finalidad</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 font-mono text-xs">_ga</td>
                  <td className="p-3 border border-slate-200">Analítica</td>
                  <td className="p-3 border border-slate-200">Google Analytics — distingue usuarios únicos</td>
                  <td className="p-3 border border-slate-200">2 años</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-mono text-xs">_ga_*</td>
                  <td className="p-3 border border-slate-200">Analítica</td>
                  <td className="p-3 border border-slate-200">Google Analytics — mantiene el estado de la sesión</td>
                  <td className="p-3 border border-slate-200">2 años</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">No utilizamos cookies de publicidad ni de redes sociales. No cedemos datos de cookies a terceros con fines comerciales.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Base jurídica</h2>
          <p>Las cookies de analítica se instalan bajo tu consentimiento, que puedes revocar en cualquier momento. Las cookies estrictamente necesarias para el funcionamiento del sitio no requieren consentimiento.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Cómo gestionar o eliminar las cookies</h2>
          <p>Puedes configurar tu navegador para rechazar o eliminar cookies en cualquier momento. Ten en cuenta que esto puede afectar al funcionamiento del sitio. Instrucciones por navegador:</p>
          <ul className="mt-3 space-y-1 list-disc pl-5">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Microsoft Edge</a></li>
          </ul>
          <p className="mt-3">También puedes optar por la exclusión de Google Analytics en: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">tools.google.com/dlpage/gaoptout</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Más información</h2>
          <p>Para cualquier consulta sobre el uso de cookies, contacta con nosotros en <a href="mailto:info@aidesigncanarias.com" className="text-indigo-600 hover:underline">info@aidesigncanarias.com</a>. Consulta también nuestra <a href="/privacidad" className="text-indigo-600 hover:underline">Política de Privacidad</a>.</p>
        </section>

      </div>
    </div>
  );
}
