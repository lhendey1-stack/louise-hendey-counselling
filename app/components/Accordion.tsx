"use client";
import { useState } from "react";
export type FaqItem = { question: string; answer: string };
export function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return <div className="accordion">{items.map((item, index) => {
    const open = openIndex === index;
    return <article className={open ? "accordion-item is-open" : "accordion-item"} key={item.question}><h2><button type="button" aria-expanded={open} aria-controls={`faq-panel-${index}`} onClick={() => setOpenIndex(open ? null : index)}><span>{item.question}</span><span aria-hidden="true">{open ? "−" : "+"}</span></button></h2><div id={`faq-panel-${index}`} hidden={!open} className="accordion-panel"><p>{item.answer}</p></div></article>;
  })}</div>;
}
