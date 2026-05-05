export const faqs = [
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
