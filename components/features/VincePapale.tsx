import Image from "next/image";
import { images, testimonials } from "@/lib/site";

const vince = testimonials.find((t) => t.name === "Vince Papale")!;

/**
 * THE VINCE PAPALE FEATURE.
 * A name big enough to leave the page, the man standing on top of it,
 * and his own words doing the talking. Composition is bespoke — nothing
 * here is reused elsewhere.
 */
export default function VincePapale() {
  return (
    <section
      id="vince-papale"
      aria-label="Vince Papale feature"
      className="relative overflow-hidden border-y-2 border-ink bg-paper"
    >
      {/* ---------- Desktop composition ---------- */}
      <div className="relative mx-auto hidden w-full max-w-[1400px] px-8 pb-24 pt-20 lg:block">
        {/* Oversized surname running off the right edge, behind the figure */}
        <p
          aria-hidden="true"
          className="display pointer-events-none absolute -right-16 top-[150px] z-0 whitespace-nowrap text-[19rem] leading-none text-sky/25"
        >
          Papale
        </p>

        <div className="relative z-10 grid grid-cols-12 gap-8">
          {/* Left: the story */}
          <div className="col-span-6">
            <p className="kicker">From the archive</p>
            <h2 className="display mt-4 text-8xl leading-[0.88]">
              Vince
              <br />
              Papale<span className="text-sky">.</span>
            </h2>
            <p className="mt-4 max-w-md font-cond text-sm font-semibold uppercase tracking-[0.2em] text-sky-deep">
              Former Philadelphia Eagle · 1976–1978 · the movie “Invincible”
            </p>

            <blockquote className="mt-10 max-w-xl text-[1.45rem] font-medium leading-[1.35] text-ink/95">
              <span
                aria-hidden="true"
                className="display float-left mr-3 mt-1 text-6xl leading-[0.7] text-sky"
              >
                “
              </span>
              {vince.quote}
            </blockquote>

            <p className="mt-8 max-w-md border-t-2 border-ink pt-5 text-sm leading-relaxed text-mist">
              The Eagle whose story became “Invincible” drove his son down from Cherry
              Hill to train with Dave Klemic. Speed. Strength. Agility. And, more than
              anything, confidence.
            </p>
          </div>

          {/* Right: the figure, standing on the baseline, cropped by the page edge */}
          <div className="relative col-span-6">
            <div
              className="absolute -bottom-24 -right-10 h-[720px] w-[720px]"
              style={{ filter: "drop-shadow(-26px 20px 0 rgba(47,167,217,0.85))" }}
            >
              <Image
                src={images.cutoutPapale}
                alt="Vince Papale"
                fill
                sizes="720px"
                className="object-contain object-bottom"
              />
            </div>
            {/* A caption pinned to the photograph, not to the layout */}
            <p className="absolute bottom-2 right-6 z-10 max-w-[220px] border-l-2 border-grass bg-paper/90 py-1 pl-3 text-[0.7rem] leading-snug text-mist">
              Vince Papale — as featured on the KPM wall of athletes.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Mobile composition ---------- */}
      <div className="relative px-5 pb-14 pt-14 lg:hidden">
        <p className="kicker">From the archive</p>
        <h2 className="display mt-3 text-6xl leading-[0.88]">
          Vince
          <br />
          Papale<span className="text-sky">.</span>
        </h2>
        <p className="mt-3 font-cond text-xs font-semibold uppercase tracking-[0.18em] text-sky-deep">
          Former Philadelphia Eagle · 1976–1978 · “Invincible”
        </p>
        <div
          className="relative mx-auto mt-6 aspect-square w-full max-w-sm"
          style={{ filter: "drop-shadow(-14px 10px 0 rgba(47,167,217,0.85))" }}
        >
          <Image
            src={images.cutoutPapale}
            alt="Vince Papale"
            fill
            sizes="24rem"
            className="object-contain"
          />
        </div>
        <blockquote className="mt-8 text-lg font-medium leading-relaxed text-ink/95">
          <span aria-hidden="true" className="text-sky">
            “
          </span>
          {vince.quote}
          <span aria-hidden="true" className="text-sky">
            ”
          </span>
        </blockquote>
        <p className="mt-6 border-t-2 border-ink pt-4 text-sm leading-relaxed text-mist">
          The Eagle whose story became “Invincible” drove his son down from Cherry Hill
          to train with Dave Klemic. Speed. Strength. Agility. And, more than anything,
          confidence.
        </p>
      </div>
    </section>
  );
}
