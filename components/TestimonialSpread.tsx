"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/site";

/**
 * Editorial athlete index — a contact sheet of cutout portraits.
 * Initially you see the athletes with minimal information; selecting one
 * pops it forward, recedes the others, and reveals the full testimonial
 * as a serif pull-quote beneath the sheet.
 */
export default function TestimonialSpread() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = openIndex === null ? null : testimonials[openIndex];
  const anyOpen = openIndex !== null;

  return (
    <div>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
        {testimonials.map((t, i) => {
          const isOpen = openIndex === i;
          const receded = anyOpen && !isOpen;
          return (
            <li key={t.name} className={isOpen ? "relative z-10" : ""}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls="testimonial-quote"
                className={`group block w-full text-left transition-all duration-300 ${
                  receded ? "opacity-40 saturate-0" : ""
                } ${isOpen ? "-translate-y-2 sm:scale-[1.06]" : "hover:-translate-y-1"}`}
              >
                {/* Portrait sheet cell — figure cropped by the frame until opened */}
                <span
                  className={`halftone relative block aspect-[5/6] w-full overflow-hidden bg-white transition-shadow ${
                    isOpen
                      ? "border border-ink shadow-[6px_6px_0_rgba(194,42,28,0.9)]"
                      : "border border-ink/40"
                  }`}
                >
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={`${t.name} portrait`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className={`transition-all duration-300 ${
                        isOpen
                          ? "scale-100 object-contain object-bottom"
                          : "origin-top scale-[1.6] object-contain object-top"
                      }`}
                    />
                  ) : null}
                  <span className="folio absolute left-2 top-2 bg-paper/90 px-1.5 py-0.5">
                    Fig. 0{i + 1}
                  </span>
                </span>
                {/* Contact-sheet caption */}
                <span className="mt-3 block text-[0.8rem] leading-snug">
                  <span className="font-display uppercase tracking-wide">{t.name}</span>
                  <span className="text-mist"> — {t.credential}.</span>
                  <span
                    className={`annotation mt-1 block text-[0.85rem] ${
                      isOpen ? "text-red" : ""
                    }`}
                  >
                    {isOpen ? "close ↑" : "read their words →"}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Expanded quote — serif pull-quote between heavy rules */}
      <div id="testimonial-quote" role="region" aria-live="polite">
        {open ? (
          <figure className="mt-12 border-y-2 border-ink py-8 sm:py-12">
            <blockquote className="serifhead max-w-4xl text-2xl leading-[1.12] sm:text-3xl lg:text-4xl">
              <span aria-hidden="true" className="text-red">
                &ldquo;
              </span>
              {open.quote}
              <span aria-hidden="true" className="text-red">
                &rdquo;
              </span>
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="display text-xl text-red">{open.name}</span>
              <span className="folio">{open.credential}</span>
            </figcaption>
          </figure>
        ) : (
          <p className="annotation mt-10">
            ↑ Select an athlete from the sheet to read their words.
          </p>
        )}
      </div>
    </div>
  );
}
