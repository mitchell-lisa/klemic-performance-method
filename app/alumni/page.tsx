import type { Metadata } from "next";
import Image from "next/image";
import { alumniGallery, images, testimonials } from "@/lib/site";
import { Kicker, Section, SectionHeading } from "@/components/ui";
import { FinalCta, TestimonialCard } from "@/components/sections";

export const metadata: Metadata = {
  title: "Noteable Alumni — The KPM Archive",
  description:
    "The KPM alumni archive — 25+ frames of athletes from two decades of training in Somers Point, including Damari Simeon and Patriot League Player of the Year C.J. Egrie.",
  alternates: { canonical: "/alumni" },
};

/**
 * The archive layout: a 6-column field where every frame gets its own size,
 * offset, and occasional tilt — dense passages, then air. Patterns repeat
 * every 9 frames but read as hand-placed.
 */
const FRAME_STYLES = [
  "col-span-3 sm:col-span-2 aspect-[3/4]",
  "col-span-3 sm:col-span-1 aspect-[3/4] sm:mt-10 sm:rotate-[0.8deg]",
  "col-span-2 sm:col-span-1 aspect-square sm:mt-4",
  "col-span-4 sm:col-span-2 aspect-[4/3] sm:-rotate-[0.6deg]",
  "col-span-3 sm:col-span-1 aspect-[3/4] sm:mt-12",
  "col-span-3 sm:col-span-2 aspect-square sm:mt-6 sm:rotate-[0.5deg]",
  "col-span-2 sm:col-span-1 aspect-[3/4]",
  "col-span-4 sm:col-span-2 aspect-[4/3] sm:mt-8",
  "col-span-3 sm:col-span-1 aspect-square sm:-rotate-[0.8deg]",
] as const;

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
            athletes, 200+ Division I athletes, and 50+ professionals. These are some of
            the frames on the wall.
          </p>
        </Section>
        {/* Hunter mid-jump, breaking out of the header */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-[8%] z-10 hidden h-[440px] w-[190px] lg:block"
          style={{ filter: "drop-shadow(-14px 10px 0 rgba(47,167,217,0.8))" }}
        >
          <Image src={images.cutoutHunterJump} alt="" fill sizes="190px" className="object-contain object-bottom" />
        </div>
      </section>

      {/* ============ THE ARCHIVE FIELD ============ */}
      <section aria-label="Alumni photo archive" className="border-t-2 border-ink">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
          <div className="grid grid-cols-6 items-start gap-3 sm:gap-4">
            {alumniGallery.slice(0, 9).map((img, i) => (
              <figure key={img.src} className={FRAME_STYLES[i % 9]}>
                <div className="relative h-full w-full overflow-hidden border border-ink/50 bg-white">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover grayscale transition duration-300 hover:grayscale-0"
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                </div>
              </figure>
            ))}
          </div>

          {/* Interruption: C.J. Egrie's award, presented like a kept clipping */}
          <div className="mt-16 grid items-center gap-8 border-y-2 border-ink py-12 lg:grid-cols-[auto_1fr]">
            <figure className="w-full max-w-[340px] rotate-[-1deg] border-2 border-ink bg-white p-2 shadow-[10px_10px_0_rgba(47,167,217,0.95)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={images.cjMvpSlide}
                  alt="C.J. Egrie — Patriot League Player of the Year"
                  fill
                  sizes="340px"
                  className="object-cover object-top"
                />
              </div>
            </figure>
            <div>
              <p className="kicker">From the archive</p>
              <p className="display mt-3 max-w-xl text-4xl leading-[1.02] sm:text-5xl">
                C.J. Egrie — Patriot League Player of the Year<span className="text-sky">.</span>
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-mist">
                A Young Guns athlete who stayed for ten years. &ldquo;I would not have
                any of the records I own or the scholarships I earned without Dave and
                Josh by my side.&rdquo;
              </p>
            </div>
          </div>

          {/* Second passage of the field — denser */}
          <div className="mt-16 grid grid-cols-6 items-start gap-3 sm:gap-4">
            {alumniGallery.slice(9, 18).map((img, i) => (
              <figure key={img.src} className={FRAME_STYLES[(i + 4) % 9]}>
                <div className="relative h-full w-full overflow-hidden border border-ink/50 bg-white">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover grayscale transition duration-300 hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              </figure>
            ))}
          </div>

          {/* Interruption: Damari Simeon's 2025 wrap-up — reversed composition */}
          <div className="mt-16 grid items-center gap-8 border-y-2 border-ink py-12 lg:grid-cols-[1fr_auto]">
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
            <figure className="order-1 w-full max-w-[340px] rotate-[1.2deg] border-2 border-ink bg-white p-2 shadow-[-10px_10px_0_rgba(163,183,39,0.7)] lg:order-2">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={images.damariWrapUp}
                  alt="Damari Simeon — KPM 2025 wrap-up slide"
                  fill
                  sizes="340px"
                  className="object-cover object-top"
                />
              </div>
            </figure>
          </div>

          {/* Final passage */}
          <div className="mt-16 grid grid-cols-6 items-start gap-3 sm:gap-4">
            {alumniGallery.slice(18).map((img, i) => (
              <figure key={img.src} className={FRAME_STYLES[(i + 7) % 9]}>
                <div className="relative h-full w-full overflow-hidden border border-ink/50 bg-white">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover grayscale transition duration-300 hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              </figure>
            ))}
          </div>

          <p className="mt-10 max-w-md text-sm text-mist">
            Every frame above is KPM&rsquo;s own photography from the current archive.
          </p>
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
