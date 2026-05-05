import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | AI Design Canarias",
  description: "Política de privacidad de AI Design Canarias. Información sobre el tratamiento de tus datos personales.",
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Política de Privacidad</h1>
      <p className="text-sm text-slate-400 mb-10">Última actualización: mayo de 2026</p>

      <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Responsable del tratamiento</h2>
          <p>El responsable del tratamiento de los datos personales recogidos a través de este sitio web es:</p>
          <ul className="mt-3 space-y-1 list-none pl-0">
            <li><strong>Titular:</strong> AI Design Canarias</li>
            <li><strong>Correo electrónico:</strong> info@aidesigncanarias.com</li>
            <li><strong>Teléfono:</strong> +34 605 007 753</li>
            <li><strong>Domicilio:</strong> Las Palmas de Gran Canaria, Gran Canaria, Islas Canarias</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Datos que recogemos</h2>
          <p>Recogemos los siguientes datos personales a través del formulario de contacto:</p>
          <ul className="mt-3 space-y-1 list-disc pl-5">
            <li>Nombre</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono (opcional)</li>
            <li>Mensaje o consulta enviada</li>
          </ul>
          <p className="mt-3">Adicionalmente, a través de cookies y herramientas de analítica (Google Analytics 4) recogemos datos de navegación de forma anonimizada. Consulta nuestra <a href="/cookies" className="text-indigo-600 hover:underline">Política de Cookies</a> para más información.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Finalidad del tratamiento</h2>
          <p>Tratamos tus datos personales para las siguientes finalidades:</p>
          <ul className="mt-3 space-y-1 list-disc pl-5">
            <li>Responder a tu consulta o solicitud de presupuesto.</li>
            <li>Mantener comunicación comercial si nos has dado tu consentimiento.</li>
            <li>Analizar el uso del sitio web para mejorar nuestros servicios (datos anonimizados).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Base jurídica</h2>
          <p>El tratamiento de tus datos se basa en:</p>
          <ul className="mt-3 space-y-1 list-disc pl-5">
            <li><strong>Ejecución de un precontrato</strong> — cuando solicitas un presupuesto o información sobre nuestros servicios.</li>
            <li><strong>Consentimiento</strong> — cuando aceptas el uso de cookies o te suscribes a comunicaciones comerciales.</li>
            <li><strong>Interés legítimo</strong> — para el análisis anonimizado del tráfico web.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Conservación de los datos</h2>
          <p>Los datos del formulario de contacto se conservan durante el tiempo necesario para atender tu consulta y, en su caso, durante la vigencia de la relación comercial. Una vez finalizada la relación, los datos se bloquearán durante los plazos legalmente exigidos antes de su eliminación definitiva.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Destinatarios</h2>
          <p>No cedemos tus datos a terceros salvo obligación legal. Utilizamos los siguientes proveedores de servicios que actúan como encargados del tratamiento bajo las garantías adecuadas:</p>
          <ul className="mt-3 space-y-1 list-disc pl-5">
            <li><strong>Resend</strong> — envío de correos electrónicos (EE.UU., bajo Cláusulas Contractuales Tipo).</li>
            <li><strong>Google Analytics</strong> — analítica web anonimizada (EE.UU., bajo Cláusulas Contractuales Tipo).</li>
            <li><strong>Vercel</strong> — alojamiento del sitio web (EE.UU., bajo Cláusulas Contractuales Tipo).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Tus derechos</h2>
          <p>Tienes derecho a acceder, rectificar y suprimir tus datos, así como a oponerte a su tratamiento, solicitar su limitación o portabilidad. Para ejercer estos derechos, contacta con nosotros en <a href="mailto:info@aidesigncanarias.com" className="text-indigo-600 hover:underline">info@aidesigncanarias.com</a>.</p>
          <p className="mt-3">Si consideras que el tratamiento no es conforme a la normativa, tienes derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (aepd.es).</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Cambios en esta política</h2>
          <p>Nos reservamos el derecho de actualizar esta política. La fecha de la última actualización aparece al inicio del documento. Te recomendamos revisarla periódicamente.</p>
        </section>

      </div>
    </div>
  );
}
