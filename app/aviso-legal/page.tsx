import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | AI Design Canarias",
  description: "Aviso legal e información sobre AI Design Canarias.",
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Aviso Legal</h1>
      <p className="text-sm text-slate-400 mb-10">Última actualización: mayo de 2026</p>

      <div className="space-y-8 text-slate-600 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Datos identificativos del titular</h2>
          <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:</p>
          <ul className="mt-3 space-y-1 list-none pl-0">
            <li><strong>Denominación:</strong> AI Design Canarias</li>
            <li><strong>Actividad:</strong> Diseño web, desarrollo de software e integración de inteligencia artificial</li>
            <li><strong>Domicilio:</strong> Las Palmas de Gran Canaria, Gran Canaria, Islas Canarias, España</li>
            <li><strong>Correo electrónico:</strong> info@aidesigncanarias.com</li>
            <li><strong>Teléfono:</strong> +34 605 007 753</li>
            <li><strong>Sitio web:</strong> https://aidesigncanarias.com</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Objeto y ámbito de aplicación</h2>
          <p>El presente aviso legal regula el acceso y uso del sitio web <strong>aidesigncanarias.com</strong> (en adelante, "el Sitio"), titularidad de AI Design Canarias. El acceso al Sitio implica la aceptación plena y sin reservas de las presentes condiciones.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Propiedad intelectual e industrial</h2>
          <p>Todos los contenidos del Sitio — textos, imágenes, logotipos, diseños, código fuente y demás elementos — son propiedad de AI Design Canarias o de sus licenciantes, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.</p>
          <p className="mt-3">Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier contenido del Sitio sin autorización expresa y por escrito de AI Design Canarias.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Responsabilidad</h2>
          <p>AI Design Canarias no se responsabiliza de los daños o perjuicios que pudieran derivarse del uso del Sitio, de errores u omisiones en sus contenidos, ni de la falta de disponibilidad del mismo por causas ajenas a su voluntad.</p>
          <p className="mt-3">Los enlaces a sitios web de terceros se facilitan únicamente a título informativo. AI Design Canarias no controla ni se responsabiliza del contenido de dichos sitios.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Protección de datos personales</h2>
          <p>El tratamiento de datos personales realizado a través del Sitio se rige por nuestra <a href="/privacidad" className="text-indigo-600 hover:underline">Política de Privacidad</a>, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Cookies</h2>
          <p>El Sitio utiliza cookies propias y de terceros. Puedes obtener más información en nuestra <a href="/cookies" className="text-indigo-600 hover:underline">Política de Cookies</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Legislación aplicable y jurisdicción</h2>
          <p>El presente aviso legal se rige por la legislación española. Para la resolución de cualquier controversia derivada del uso del Sitio, las partes se someten a los Juzgados y Tribunales de Las Palmas de Gran Canaria, salvo que la ley disponga otro fuero imperativo.</p>
        </section>

      </div>
    </div>
  );
}
