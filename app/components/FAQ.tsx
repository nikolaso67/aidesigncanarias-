"use client";
import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto tarda en estar lista mi web?",
    answer:
      "Entre 7 y 14 días laborables desde que nos das el visto bueno al diseño. No hacemos esperar meses — tenemos el proceso optimizado para entregar rápido sin sacrificar calidad.",
  },
  {
    question: "¿Necesito saber de tecnología para gestionar mi web?",
    answer:
      "No. Te entregamos todo configurado y te enseñamos a hacer los cambios básicos (textos, fotos, productos) desde un panel sencillo. Si prefieres que lo gestionemos nosotros, tenemos plan de mantenimiento mensual.",
  },
  {
    question: "¿Qué pasa si no estoy satisfecho con el resultado?",
    answer:
      "Sin permanencia y sin penalización. Trabajamos con revisiones incluidas en el proceso para que el resultado sea exactamente lo que buscas. Si al final no estás satisfecho, no te atamos.",
  },
  {
    question: "¿La IA integrada en mi web habla con mis clientes de verdad?",
    answer:
      "Sí. El chatbot se entrena con la información de tu negocio — servicios, precios, horarios, preguntas frecuentes — y responde a tus clientes 24/7 de forma coherente con tu marca. También puede capturar leads y derivar a WhatsApp cuando hace falta.",
  },
  {
    question: "¿Ofrecéis soporte después de la entrega?",
    answer:
      "Sí. Puedes contratar nuestro plan de mantenimiento mensual, que incluye actualizaciones, copias de seguridad diarias, monitorización 24/7 y soporte en español con respuesta garantizada en menos de 24 horas hábiles.",
  },
  {
    question: "¿Trabajáis solo en Gran Canaria o también en otras islas?",
    answer:
      "Trabajamos con negocios de toda España de forma 100% remota, aunque estamos basados en Las Palmas de Gran Canaria. La mayoría de nuestros clientes son de Gran Canaria y el resto de Canarias, pero no es un requisito.",
  },
];

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-indigo-500">
            Preguntas frecuentes
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-4 text-slate-900">
            Lo que suelen preguntar
          </h2>
          <p className="text-slate-500">
            Si tienes alguna duda que no está aquí, escríbenos por WhatsApp.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-5 flex items-start justify-between gap-4 group"
              >
                <span className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {faq.question}
                </span>
                <span className="shrink-0 mt-0.5 text-indigo-500 text-xl leading-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-slate-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
