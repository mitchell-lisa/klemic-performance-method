import Image from "next/image";
import { navyFeature } from "@/lib/site";

/**
 * NAVY SPRINT FOOTBALL.
 * A dark, photographic spread — two consultation photographs pinned at
 * different scales and angles over an ink field, the crest sitting small
 * and proud, and the cheer running enormous underneath. Deliberately a
 * completely different rhythm from the Papale feature.
 */
export default function NavySprint() {
  return (
    <section
      id="navy"
      aria-label="Navy Sprint Football feature"
      className="relative overflow-hidden border-b-2 border-ink bg-ink text-paper"
    >
      {/* ---------- Desktop ---------- */}
      <div className="relative mx-auto hidden w-full max-w-[1400px] px-8 pb-16 pt-20 lg:block">
        <div className="grid grid-cols-12 gap-6">
          {/* Photographs — overlapping, tilted, different sizes */}
          <div className="relative col-span-7 h-[560px]">
            <div className="absolute left-0 top-0 z-10 w-[62%] rotate-[-1.6deg] border border-paper/20 bg-paper p-2 shadow-[14px_14px_0_rgba(47,167,217,0.55)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={navyFeature.photos[0]}
                  alt="Dave Klemic consulting with the Navy sprint football program at the Naval Academy"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 z-20 w-[52%] rotate-[1.8deg] border border-paper/20 bg-paper p-2 shadow-[-12px_12px_0_rgba(163,183,39,0.5)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={navyFeature.photos[1]}
                  alt="On the field with Navy sprint football"
                  fill
                  sizes="34vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* The words */}
          <div className="col-span-5 flex flex-col justify-between pl-6">
            <div>
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0">
                  <Image
                    src={navyFeature.crest}
                    alt="United States Navy crest"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <p className="kicker !text-sky">Dispatch · Annapolis, MD</p>
              </div>
              <h2 className="display mt-8 text-6xl leading-[0.92]">
                Navy sprint football<span className="text-sky">.</span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-paper/80">
                “{navyFeature.caption}”
              </p>
            </div>
            <p className="display mt-10 text-3xl text-grass">{navyFeature.cheer}</p>
          </div>
        </div>

        {/* The cheer again — enormous, ghosted, running under everything */}
        <p
          aria-hidden="true"
          className="display pointer-events-none mt-6 whitespace-nowrap text-[7.5rem] leading-none text-paper/[0.07]"
        >
          Go Navy, Beat Army — Go Navy, Beat Army
        </p>
      </div>

      {/* ---------- Mobile ---------- */}
      <div className="px-5 pb-12 pt-12 lg:hidden">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 shrink-0">
            <Image
              src={navyFeature.crest}
              alt="United States Navy crest"
              fill
              sizes="56px"
              className="object-contain"
            />
          </div>
          <p className="kicker !text-sky">Dispatch · Annapolis, MD</p>
        </div>
        <h2 className="display mt-5 text-5xl leading-[0.92]">
          Navy sprint football<span className="text-sky">.</span>
        </h2>
        <div className="mt-6 -rotate-1 border border-paper/20 bg-paper p-1.5 shadow-[8px_8px_0_rgba(47,167,217,0.55)]">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={navyFeature.photos[0]}
              alt="Dave Klemic consulting with the Navy sprint football program at the Naval Academy"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="ml-8 mt-4 rotate-1 border border-paper/20 bg-paper p-1.5 shadow-[-8px_8px_0_rgba(163,183,39,0.5)]">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={navyFeature.photos[1]}
              alt="On the field with Navy sprint football"
              fill
              sizes="90vw"
              className="object-cover"
            />
          </div>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-paper/80">
          “{navyFeature.caption}”
        </p>
        <p className="display mt-5 text-2xl text-grass">{navyFeature.cheer}</p>
      </div>
    </section>
  );
}
