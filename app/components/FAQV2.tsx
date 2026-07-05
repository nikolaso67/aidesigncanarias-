"use client";

import { useState } from "react";
import { faqs } from "../data/faq-data";
import SectionTitle from "./agency/SectionTitle";

export default function FAQV2() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <SectionTitle
              eyebrow="06 — FAQ"
              title={
                <>
                  Lo que suelen{" "}
                  <span className="text-accent">preguntar</span>
                </>
              }
              description={
                <>
                  Si tu duda no está aquí, escríbenos por{" "}
                  <a href="https://wa.me/34605007753" className="text-accent hover:text-accent-bright underline-offset-4 underline">
                    WhatsApp
                  </a>{" "}
                  y respondemos al momento.
                </>
              }
            />
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                      data-cursor
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-lg text-slate-900 group-hover:text-accent transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 grid place-items-center w-9 h-9 rounded-full bg-slate-100 text-slate-900 text-lg leading-none transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-300 ease-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-12 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
