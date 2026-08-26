"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/site";

/**
 * Magazine-spread testimonials: a grid of partially cropped cutout
 * portraits (faces peeking over the frame, caps-spread style).
 * Clicking a portrait "pops" the athlete out of the frame and expands
 * the full quote beneath the grid.
 */
export default function TestimonialSpread() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const open = openIndex === null ? null : testimonials[openIndex];

  return (
    <div>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
        {testimonials.map((t, i) => {
          const isOpen = openIndex === i;
          return (
            <li key={t.name}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls="testimonial-quote"
                className="group block w-full text-left"
              >
                {/* Portrait window — subject cropped by the frame until opened */}
                <span
                  className={`halftone relative block aspect-[5/6] w-full overflow-hidden border-b-4 bg-white transition-colors ${
                    isOpen ? "border-sky" : "border-ink/20 group-hover:border-sky/60"
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
                          : "origin-top scale-[1.6] object-contain object-top group-hover:scale-[1.5]"
                      }`}
                    />
                  ) : null}
                </span>
                {/* Caps-spread caption */}
                <span className="mt-3 block text-[0.8rem] leading-snug">
                  <span className="font-display uppercase tracking-wide">{t.name}</span>
                  <span className="text-mist"> — {t.credential}.</span>
                  <span
                    className={`mt-1 block font-cond text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${
                      isOpen ? "text-sky-deep" : "text-mist/70"
                    }`}
                  >
                    {isOpen ? "▲ Close" : "▼ Read their words"}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Expanded quote */}
      <div id="testimonial-quote" role="region" aria-live="polite">
        {open ? (
          <figure className="mt-10 border-y-2 border-ink py-8 sm:py-10">
            <blockquote className="max-w-4xl font-display text-xl leading-[1.25] sm:text-2xl lg:text-[1.7rem]">
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
        ) : null}
      </div>
    </div>
  );
}
