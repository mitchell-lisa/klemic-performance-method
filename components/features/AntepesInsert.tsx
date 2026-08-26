import Image from "next/image";
import type { CSSProperties } from "react";
import { antepes, videos } from "@/lib/site";
import KpmVideo from "@/components/KpmVideo";
import Reveal from "@/components/Reveal";

/**
 * ANTEPES MUSCLE RUNNERS — a promotional insert composed like a printed
 * advertisement inside the publication: the mark set large and unplated,
 * the claim in full-height display type, the discount code set like a
 * coupon, and Dave's real presentation film running beside it.
 *
 * The shoe runs as a stride sequence in its own band beneath the ad, so it
 * never crosses the headline or the film — three frames of the same shoe,
 * each drifting on its own offset.
 */

/** Three frames of the stride — smallest and faintest at the back. */
const flight = [
  { width: "w-[23%]", rot: "-7deg", delay: "0s", reveal: 0, opacity: "opacity-45" },
  { width: "w-[29%]", rot: "-12deg", delay: "0.8s", reveal: 110, opacity: "opacity-80" },
  { width: "w-[36%]", rot: "-16deg", delay: "1.6s", reveal: 220, opacity: "opacity-100" },
] as const;

function ShoeFlight({ sizes }: { sizes: string }) {
  return (
    <div className="flex items-end justify-between gap-3 sm:gap-5">
      {flight.map((s, i) => (
        <Reveal key={i} delay={s.reveal} className={`${s.width} ${s.opacity}`}>
          <div
            className="shoe-drift relative aspect-[7/5] w-full"
            style={
              {
                "--shoe-rot": s.rot,
                "--shoe-delay": s.delay,
                filter: "drop-shadow(-14px 16px 0 rgba(20,19,9,0.85))",
              } as CSSProperties
            }
          >
            <Image
              src={antepes.image}
              alt={
                i === flight.length - 1
                  ? "Antepes Muscle Runner sprint shoe — lateral view, blue"
                  : ""
              }
              aria-hidden={i === flight.length - 1 ? undefined : true}
              fill
              sizes={sizes}
              className="object-contain"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Coupon({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`inline-flex items-stretch border-2 border-ink bg-paper ${
        compact ? "flex" : ""
      }`}
    >
      <div
        className={`border-r-2 border-dashed border-ink ${compact ? "px-4 py-3" : "px-6 py-4"}`}
      >
        <p className="folio text-sky-deep">Code</p>
        <p className={`display tracking-wide ${compact ? "text-2xl" : "text-4xl"}`}>
          {antepes.code}
        </p>
      </div>
      <div className={`flex flex-col justify-center ${compact ? "px-4 py-3" : "px-6 py-4"}`}>
        <p className={`display ${compact ? "text-lg" : "text-2xl"}`}>{antepes.discount}</p>
        <a
          href={antepes.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-1 font-cond font-semibold uppercase tracking-[0.18em] text-sky-deep underline decoration-2 underline-offset-4 hover:text-ink ${
            compact ? "text-[0.66rem]" : "text-[0.72rem]"
          }`}
        >
          {compact ? "Shop at antepes.com ↗" : "Shop the Muscle Runner at antepes.com ↗"}
        </a>
      </div>
    </div>
  );
}

export default function AntepesInsert() {
  return (
    <section
      id="antepes"
      aria-label="Antepes Muscle Runners partner offer"
      className="scroll-mt-20 relative overflow-hidden border-b-2 border-ink bg-sky"
    >
      {/* ---------- Desktop ---------- */}
      <div className="relative mx-auto hidden w-full max-w-[1400px] px-8 pb-16 pt-16 lg:block">
        {/* Masthead — the mark unplated and set large */}
        <div className="flex items-end justify-between gap-8 border-b-2 border-ink/25 pb-6">
          <Image
            src={antepes.logo}
            alt="Antepes"
            width={1200}
            height={608}
            sizes="420px"
            className="h-20 w-auto xl:h-24"
          />
          <p className="font-cond text-xs font-semibold uppercase tracking-[0.28em] text-ink/70">
            KPM partner offer
          </p>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-10">
          {/* Ad panel — type owns this column outright */}
          <div className="col-span-8">
            <h2 className="display text-[6.2rem] leading-[0.9] text-ink">
              World&rsquo;s best
              <br />
              sprint shoe<span className="text-paper">.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-ink/85">
              The Antepes Muscle Runner — the sprint shoe on Dave&rsquo;s feet and on
              the KPM floor. Their claim, our code.
            </p>
            <div className="mt-10">
              <Coupon />
            </div>

            {/* The stride — its own band, clear of both the type and the film */}
            <div className="mt-12">
              <ShoeFlight sizes="(max-width: 1400px) 26vw, 360px" />
            </div>
          </div>

          {/* Dave's real presentation film — vertical, like a phone held up */}
          <figure className="col-span-4 justify-self-end">
            <KpmVideo
              src={videos.antepesTalk.src}
              poster={videos.antepesTalk.poster}
              mode="feature"
              label="Watch: Dave on the Muscle Runner"
              className="aspect-[9/16] w-full max-w-[320px] border-2 border-ink shadow-[10px_10px_0_rgba(20,19,9,0.9)]"
              posterSizes="320px"
            />
            <figcaption className="mt-3 max-w-[320px] text-xs leading-snug text-ink/75">
              From the facility floor — Dave presenting the Muscle Runner in front of the
              KPM testing board.
            </figcaption>
          </figure>
        </div>
      </div>

      {/* ---------- Mobile ---------- */}
      <div className="px-5 pb-14 pt-12 lg:hidden">
        <Image
          src={antepes.logo}
          alt="Antepes"
          width={1200}
          height={608}
          sizes="260px"
          className="h-12 w-auto"
        />
        <p className="mt-4 font-cond text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-ink/70">
          KPM partner offer
        </p>
        <h2 className="display mt-3 text-5xl leading-[0.9] text-ink">
          World&rsquo;s best
          <br />
          sprint shoe<span className="text-paper">.</span>
        </h2>

        <div className="mt-6">
          <ShoeFlight sizes="34vw" />
        </div>

        <p className="mt-6 text-sm font-medium leading-relaxed text-ink/85">
          The Antepes Muscle Runner — the sprint shoe on Dave&rsquo;s feet and on the
          KPM floor. Their claim, our code.
        </p>

        <div className="mt-8">
          <Coupon compact />
        </div>

        <figure className="mt-8">
          <KpmVideo
            src={videos.antepesTalk.src}
            poster={videos.antepesTalk.poster}
            mode="feature"
            label="Watch: Dave on the Muscle Runner"
            className="mx-auto aspect-[9/16] w-full max-w-[280px] border-2 border-ink shadow-[8px_8px_0_rgba(20,19,9,0.9)]"
            posterSizes="280px"
          />
          <figcaption className="mx-auto mt-3 max-w-[280px] text-xs leading-snug text-ink/75">
            From the facility floor — Dave presenting the Muscle Runner.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
