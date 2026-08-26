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
                      ? "border border-ink shadow-[6px_6px_0_rgba(47,167,217,0.95)]"
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
                </span>
                {/* Contact-sheet caption */}
                <span className="mt-3 block text-[0.8rem] leading-snug">
                  <span className="font-display uppercase tracking-wide">{t.name}</span>
                  <span className="text-mist"> — {t.credential}.</span>
                  <span
                    className={`mt-1 block font-cond text-[0.66rem] font-semibold uppercase tracking-[0.18em] ${
                      isOpen ? "text-sky-deep" : "text-mist/80"
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
            <blockquote className="max-w-4xl text-xl font-medium leading-snug sm:text-2xl lg:text-[1.7rem]">
              <span aria-hidden="true" className="text-sky">
                &ldquo;
              </span>
              {open.quote}
              <span aria-hidden="true" className="text-sky">
                &rdquo;
              </span>
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="display text-xl text-sky-deep">{open.name}</span>
              <span className="folio">{open.credential}</span>
            </figcaption>
          </figure>
        ) : (
          <p className="mt-10 text-sm text-mist">
            ↑ Select an athlete from the sheet to read their words.
          </p>
        )}
      </div>
    </div>
  );
}
