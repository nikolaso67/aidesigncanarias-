"use client";
import { useState } from "react";
import { faqs } from "../data/faq-data";

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
