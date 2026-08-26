import Image from "next/image";
import { antepes, videos } from "@/lib/site";
import KpmVideo from "@/components/KpmVideo";

/**
 * ANTEPES MUSCLE RUNNERS — a promotional insert composed like a printed
 * advertisement inside the publication: product floating over huge type,
 * the discount code set like a coupon, and Dave's real presentation film
 * running beside it. Its own composition, unrelated to any other section.
 */
export default function AntepesInsert() {
  return (
    <section
      id="antepes"
      aria-label="Antepes Muscle Runners partner offer"
      className="relative overflow-hidden border-b-2 border-ink bg-sky"
    >
      {/* ---------- Desktop ---------- */}
      <div className="relative mx-auto hidden w-full max-w-[1400px] gap-8 px-8 pb-20 pt-16 lg:grid lg:grid-cols-12">
        {/* Ad panel */}
        <div className="relative col-span-8">
          <div className="flex items-center gap-4">
            <span className="relative block h-10 w-24 bg-paper px-2 py-1">
              <Image src={antepes.logo} alt="Antepes" fill sizes="96px" className="object-contain p-1" />
            </span>
            <p className="font-cond text-xs font-semibold uppercase tracking-[0.28em] text-ink/70">
              KPM partner offer
            </p>
          </div>

          {/* The claim, enormous, with the shoe flying through it */}
          <div className="relative mt-6">
            <h2 className="display text-[6.2rem] leading-[0.9] text-ink">
              World&rsquo;s best
              <br />
              sprint shoe<span className="text-paper">.</span>
            </h2>
            <div
              className="pointer-events-none absolute -right-6 -top-16 h-[380px] w-[560px] rotate-[-14deg]"
              style={{ filter: "drop-shadow(-20px 22px 0 rgba(20,19,9,0.9))" }}
            >
              <Image
                src={antepes.image}
                alt="Antepes Muscle Runner sprint shoe — lateral view, blue"
                fill
                sizes="560px"
                className="object-contain"
              />
            </div>
            <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-ink/85">
              The Antepes Muscle Runner — the sprint shoe on Dave&rsquo;s feet and on
              the KPM floor. Their claim, our code.
            </p>
          </div>

          {/* Coupon plate */}
          <div className="mt-10 inline-flex items-stretch border-2 border-ink bg-paper">
            <div className="border-r-2 border-dashed border-ink px-6 py-4">
              <p className="folio text-sky-deep">Code</p>
              <p className="display text-4xl tracking-wide">{antepes.code}</p>
            </div>
            <div className="flex flex-col justify-center px-6 py-4">
              <p className="display text-2xl">{antepes.discount}</p>
              <a
                href={antepes.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 font-cond text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-sky-deep underline decoration-2 underline-offset-4 hover:text-ink"
              >
                Shop the Muscle Runner at antepes.com ↗
              </a>
            </div>
          </div>
        </div>

        {/* Dave's real presentation film — vertical, like a phone held up */}
        <figure className="col-span-4 self-end">
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

      {/* ---------- Mobile ---------- */}
      <div className="px-5 pb-14 pt-12 lg:hidden">
        <p className="font-cond text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-ink/70">
          KPM partner offer
        </p>
        <h2 className="display mt-4 text-5xl leading-[0.9] text-ink">
          World&rsquo;s best
          <br />
          sprint shoe<span className="text-paper">.</span>
        </h2>
        <div
          className="relative mx-auto mt-4 aspect-[16/10] w-full rotate-[-8deg]"
          style={{ filter: "drop-shadow(-12px 12px 0 rgba(20,19,9,0.9))" }}
        >
          <Image
            src={antepes.image}
            alt="Antepes Muscle Runner sprint shoe — lateral view, blue"
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <div className="mt-8 flex items-stretch border-2 border-ink bg-paper">
          <div className="border-r-2 border-dashed border-ink px-4 py-3">
            <p className="folio text-sky-deep">Code</p>
            <p className="display text-2xl tracking-wide">{antepes.code}</p>
          </div>
          <div className="flex flex-col justify-center px-4 py-3">
            <p className="display text-lg">{antepes.discount}</p>
            <a
              href={antepes.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 font-cond text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-sky-deep underline decoration-2 underline-offset-4"
            >
              Shop at antepes.com ↗
            </a>
          </div>
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
