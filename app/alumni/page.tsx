import type { Metadata } from "next";
import Image from "next/image";
import { alumniGallery, images, testimonials } from "@/lib/site";
import { Kicker, Section, SectionHeading } from "@/components/ui";
import { FinalCta, TestimonialCard } from "@/components/sections";

export const metadata: Metadata = {
  title: "Noteable Alumni — The KPM Archive",
  description:
    "The KPM alumni archive — NFL, NHL, Olympic and NCAA athletes who trained at Klemic Performance Method in Somers Point, including Dennis Sidenberg, James Bradberry, Destin Lasco and Damari Simeon.",
  alternates: { canonical: "/alumni" },
};

export default function AlumniPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Section className="pb-10 sm:pb-14">
          <Kicker>The archive</Kicker>
          <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
            Noteable <span className="text-sky">alumni</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            More than 10,000 athletes have trained at KPM — including 500+ NCAA
            athletes, 200+ Division I athletes, and 50+ professionals. These are the
            ones on the wall.
          </p>
        </Section>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-[6%] z-10 hidden h-[420px] w-[180px] lg:block"
          style={{ filter: "drop-shadow(-14px 10px 0 rgba(47,167,217,0.8))" }}
        >
          <Image
            src={images.cutoutHunterJump}
            alt=""
            fill
            sizes="180px"
            className="object-contain object-bottom"
          />
        </div>
      </section>

      <section aria-label="Alumni archive" className="border-t-2 border-ink">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
          <div className="columns-2 gap-4 sm:columns-3 sm:gap-6 lg:columns-4">
            {alumniGallery.map((a, i) => (
              <figure key={a.src} className="mb-6 break-inside-avoid sm:mb-8">
                <div className="relative w-full overflow-hidden border-2 border-ink bg-white">
                  <Image
                    src={a.src}
                    alt={a.credential ? `${a.name} — ${a.credential}` : a.name}
                    width={a.w}
                    height={a.h}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="h-auto w-full"
                    loading={i < 6 ? "eager" : "lazy"}
                  />
                </div>
                <figcaption className="mt-2.5">
                  <span className="display block text-base leading-tight sm:text-lg">
                    {a.name}
                  </span>
                  {a.credential ? (
                    <span className="mt-0.5 block font-cond text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-sky-deep">
                      {a.credential}
                    </span>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-6 max-w-xl border-t-2 border-ink pt-5 text-sm text-mist">
            Every athlete above trained at Klemic Performance Method. Photography and
            credentials as published by KPM.
          </p>
        </div>
      </section>

      <section aria-label="2025 wrap-up" className="border-t-2 border-ink bg-panel">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_320px]">
          <div className="order-2 lg:order-1">
            <p className="kicker">2025 wrap-up</p>
            <p className="display mt-3 max-w-xl text-4xl leading-[1.02] sm:text-5xl">
              Damari Simeon<span className="text-grass">.</span>
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-mist">
              One of the year-end athlete slides KPM published for its 2025 class —
              kept here exactly as it ran.
            </p>
          </div>
          <figure className="order-1 w-full max-w-[320px] rotate-[1.2deg] border-2 border-ink bg-white p-2 shadow-[-10px_10px_0_rgba(163,183,39,0.7)] justify-self-center lg:order-2 lg:justify-self-end">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={images.damariWrapUp}
                alt="Damari Simeon — KPM 2025 wrap-up slide"
                fill
                sizes="320px"
                className="object-cover object-top"
              />
            </div>
          </figure>
        </div>
      </section>

      <Section className="border-t-2 border-ink">
        <SectionHeading kicker="In their words" title="What athletes, parents & pros say" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} featured={i === 0} />
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
