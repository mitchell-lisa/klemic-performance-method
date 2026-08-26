import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { coaches, coachingStats, images, privateStaff, site } from "@/lib/site";
import { ArrowIcon, Cta, Kicker, Section } from "@/components/ui";
import { FinalCta, StatStrip } from "@/components/sections";

export const metadata: Metadata = {
  title: "Meet the Coaches — Dave Klemic, Josh Holsopple & Cruz Lewis",
  description:
    "Full biographies of the KPM coaching staff — founder David Klemic (Kansas City Chiefs), Director of Sports Performance Josh Holsopple, and Head Coach Cruz Lewis. 35+ years of experience, 500+ NCAA athletes trained.",
  alternates: { canonical: "/coaches" },
};

const [dave, josh, cruz] = coaches;

function Chips({ chips }: { chips: readonly string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-x-2.5 gap-y-2">
      {chips.map((chip) => (
        <li
          key={chip}
          className="border border-ink/40 px-2.5 py-1 font-cond text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-ink/80"
        >
          {chip}
        </li>
      ))}
    </ul>
  );
}

export default function CoachesPage() {
  return (
    <>
      <Section className="pb-10 sm:pb-14">
        <Kicker>The Staff</Kicker>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
          Meet the <span className="text-sky">coaches</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
          KPM athletes are coached by people who&rsquo;ve competed, tested, and refined
          this system for more than two decades.
        </p>
      </Section>

      <StatStrip items={coachingStats} />

      {/* ============ DAVE — the founder, long-form ============ */}
      <section id="dave" className="scroll-mt-20 overflow-hidden border-b-2 border-ink" aria-labelledby="dave-h">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            {/* Portrait column with the ghost word behind it */}
            <div className="relative">
              <p
                aria-hidden="true"
                className="display-ghost pointer-events-none absolute -left-4 -top-10 z-0 text-[4.5rem] sm:-top-12 sm:text-[9rem]"
              >
                Founder
              </p>
              <div className="relative z-10 aspect-[4/5] w-full max-w-md overflow-hidden border-2 border-ink">
                <Image
                  src={dave.image}
                  alt="David Klemic, founder of Klemic Performance Method"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="folio mt-3">David Klemic — on the floor, Somers Point</p>
              <Chips chips={dave.chips} />
            </div>

            {/* The story — set like an article */}
            <div>
              <p className="kicker">{dave.title}</p>
              <h2 id="dave-h" className="display mt-3 text-5xl sm:text-7xl">
                David Klemic
              </h2>
              <p className="mt-6 text-xl font-medium leading-relaxed text-ink/95">
                Mainland Regional → Northeastern → the Kansas City Chiefs → the fastest
                man on the roster.
              </p>
              <div className="mt-6 max-w-2xl space-y-5 text-[0.95rem] leading-[1.75] text-ink/85">
                {dave.fullBio.map((para) => (
                  <p key={para.slice(0, 32)}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ JOSH — records board ============ */}
      <section id="josh" className="scroll-mt-20 border-b-2 border-ink bg-panel" aria-labelledby="josh-h">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 [&>*]:min-w-0 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 lg:order-1">
            <p className="kicker">{josh.title}</p>
            <h2 id="josh-h" className="display mt-3 text-5xl sm:text-7xl">
              Josh Holsopple
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[0.95rem] leading-[1.75] text-ink/85">
              {josh.fullBio.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>
            <Chips chips={josh.chips} />

            {/* The facility records he holds — set like a scoreboard */}
            <dl className="mt-10 grid max-w-xl grid-cols-3 border-2 border-ink bg-paper">
              {[
                { value: "44.8″", label: "Vertical leap — facility record" },
                { value: "1.50", label: "10-yard dash" },
                { value: "10′11″", label: "Broad jump" },
              ].map((stat, i) => (
                <div key={stat.label} className={`min-w-0 p-4 ${i > 0 ? "border-l border-ink/30" : ""}`}>
                  <dd className="display text-3xl text-sky-deep">{stat.value}</dd>
                  <dt className="folio mt-1">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
          <div className="order-1 self-start lg:order-2 lg:pt-10">
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden border-2 border-ink lg:rotate-[1deg]">
              <Image
                src={josh.image}
                alt="Josh Holsopple, Director of Sports Performance"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
            <p className="folio mt-3">Josh Holsopple — highest EFX &amp; IDS ever tested at KPM</p>
          </div>
        </div>
      </section>

      {/* ============ CRUZ — the athlete-coach ============ */}
      <section id="cruz" className="scroll-mt-20 border-b-2 border-ink" aria-labelledby="cruz-h">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-[auto_1fr]">
            <div className="relative w-full max-w-xs lg:max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -left-6 bottom-0 hidden h-40 w-40 lg:block"
                style={{ filter: "drop-shadow(-8px 8px 0 rgba(163,183,39,0.75))" }}
              >
                <Image src={images.cutoutCruzHead} alt="" fill sizes="160px" className="object-contain" />
              </div>
              <div className="relative aspect-[3/4] w-full overflow-hidden border-2 border-ink lg:-rotate-1">
                <Image
                  src={cruz.image}
                  alt="Cruz Lewis, Head Coach and Individual Performance Coordinator"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div>
              <p className="kicker">{cruz.title}</p>
              <h2 id="cruz-h" className="display mt-3 text-5xl sm:text-7xl">
                Cruz Lewis
              </h2>
              <p className="mt-5 text-lg font-medium text-ink/95">
                37″ vertical. 24 mph top speed. Every private program at KPM runs through
                his pen.
              </p>
              <div className="mt-5 max-w-2xl space-y-5 text-[0.95rem] leading-[1.75] text-ink/85">
                {cruz.fullBio.map((para) => (
                  <p key={para.slice(0, 32)}>{para}</p>
                ))}
              </div>
              <Chips chips={cruz.chips} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRIVATE STAFF ============ */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>Private training staff</Kicker>
            <h2 className="display mt-3 text-4xl sm:text-5xl">One-on-one coaching</h2>
          </div>
          <Link
            href="/training#private"
            className="inline-flex items-center gap-2 font-cond text-sm font-semibold uppercase tracking-[0.16em] text-sky-deep hover:text-ink"
          >
            See the private program <ArrowIcon />
          </Link>
        </div>
        <ul className="mt-8 grid gap-6 border-t-2 border-ink pt-8 sm:grid-cols-3">
          {privateStaff.map((coach) => (
            <li key={coach.name} className="border-l-2 border-sky pl-4">
              <p className="display text-xl">{coach.name}</p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-mist">{coach.title}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <Cta href={site.privatePhoneHref} external>
            Call {site.privatePhone}
          </Cta>
          <Cta href={`mailto:${site.email}`} external variant="outline">
            Email Us
          </Cta>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
