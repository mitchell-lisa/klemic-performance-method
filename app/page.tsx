import Image from "next/image";
import Link from "next/link";
import { images, pillars, programs, site, stats } from "@/lib/site";
import { ArrowIcon, Cta, Section } from "@/components/ui";
import {
  CoachesPreview,
  FinalCta,
  PartnerBar,
  SignupPathways,
  StatStrip,
  Ticker,
} from "@/components/sections";
import Reveal from "@/components/Reveal";
import TestimonialSpread from "@/components/TestimonialSpread";

/** Cover lines — red serif lead-ins, JOCK style. Each links into the issue. */
const coverLines = [
  { lead: "The Method:", rest: "the four pillars of speed", href: "/method" },
  { lead: "Training:", rest: "five ways to train at KPM", href: "/training" },
  { lead: "The Coaches:", rest: "35+ years, 500+ NCAA athletes", href: "/coaches" },
  { lead: "Notable Alumni:", rest: "from Young Guns to the pros", href: "/alumni" },
  { lead: "Sign Up:", rest: "start with a gait analysis", href: "/signup" },
];

function FolioBar({ page, label }: { page: string; label: string }) {
  return (
    <div className="mb-10 flex items-baseline justify-between border-b-2 border-ink pb-2">
      <p className="folio">KPM · Move Like a Champ</p>
      <p className="folio">
        {label} · <span className="text-red">p. {page}</span>
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ==================== THE COVER ==================== */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="mx-auto w-full max-w-6xl px-5 pt-6 sm:px-8">
          {/* Issue bar */}
          <div className="flex items-baseline justify-between border-b border-ink/40 pb-2">
            <p className="folio">Vol. 24 · Est. 2002</p>
            <p className="folio hidden sm:block">Speed &amp; Athletic Performance</p>
            <p className="folio text-red">Somers Point, NJ</p>
          </div>

          {/* Masthead */}
          <div className="relative mt-4 flex items-start justify-between">
            <h1 className="display text-[clamp(4.2rem,17vw,14rem)] leading-[0.85] tracking-[-0.03em]">
              KPM
            </h1>
            <Image
              src={images.logo}
              alt="Klemic Performance Method logo"
              width={112}
              height={112}
              priority
              className="mt-3 h-14 w-auto object-contain sm:h-20 lg:h-24"
            />
          </div>
          <div className="-mt-1 flex flex-wrap items-baseline justify-between gap-2 border-t border-ink/40 pt-2">
            <p className="folio sm:text-[0.72rem]">
              Klemic Performance Method — the evidence-based speed &amp; athletic
              performance training system
            </p>
            <p className="folio hidden text-red sm:block">10,000+ athletes trained</p>
          </div>

          {/* Cover body */}
          <div className="relative mt-6 grid min-h-[500px] grid-cols-1 sm:mt-10 sm:grid-cols-[1fr_1.1fr]">
            <ul className="relative z-20 max-w-xs space-y-4 sm:space-y-5">
              {coverLines.map((line) => (
                <li key={line.href}>
                  <Link href={line.href} className="group block">
                    <span className="serifhead text-2xl text-red group-hover:text-ink sm:text-[1.7rem]">
                      {line.lead}
                    </span>{" "}
                    <span className="text-sm font-medium leading-snug text-ink/85 group-hover:text-red sm:text-base">
                      {line.rest}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-5">
                <div className="flex flex-wrap gap-3">
                  <Cta href="/signup">Start Training</Cta>
                  <Cta href="/method" variant="outline">
                    The Method
                  </Cta>
                </div>
              </li>
            </ul>

            {/* Dave Klemic — cover star */}
            <div className="relative z-10 mt-6 h-[400px] sm:mt-0 sm:h-auto">
              <span
                aria-hidden="true"
                className="display-ghost absolute right-0 top-4 text-right text-[clamp(4rem,10vw,8.5rem)]"
              >
                Move like
                <br />a champ.
              </span>
              <Image
                src={images.cutoutDave}
                alt="Dave Klemic, founder of Klemic Performance Method"
                fill
                priority
                sizes="(max-width: 640px) 90vw, 45vw"
                className="object-contain object-bottom"
              />
              <p className="annotation absolute bottom-24 left-0 hidden max-w-[10rem] lg:block">
                Dave Klemic, photographed on the facility floor — see the profile, p. 05 →
              </p>
              <p className="folio absolute bottom-0 right-0 bg-ink px-3 py-1.5 text-paper">
                Dave Klemic · Founder · Former NFL Receiver
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatStrip items={stats} className="border-t-0" />

      {/* ==================== p.02 — THE METHOD (manifesto) ==================== */}
      <Section>
        <FolioBar page="02" label="The Method" />
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <h2 className="serifhead text-5xl sm:text-7xl lg:text-[5.5rem]">
              Speed isn&rsquo;t a gift.
              <br />
              It&rsquo;s a <span className="text-red">system</span>.
            </h2>
            <div className="self-end">
              <p className="max-w-xs text-sm leading-relaxed text-mist">
                Every athlete is tested, profiled, and trained against the same four
                pillars of speed — refined over 20+ years with proprietary resistances.
              </p>
              <p className="annotation mt-3">— the manifesto, in four parts ↓</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 border-t-2 border-ink">
          {pillars.map((pillar) => (
            <Link
              key={pillar.number}
              href="/method"
              className="group relative grid items-baseline gap-2 border-b border-ink/30 py-6 transition-colors hover:bg-panel sm:grid-cols-[5.5rem_1fr_auto] sm:gap-6 sm:py-8"
            >
              <span className="display-ghost text-4xl sm:text-6xl">{pillar.number}</span>
              <span>
                <span className="display block text-2xl transition-colors group-hover:text-red sm:text-3xl lg:text-4xl">
                  {pillar.name}
                </span>
                <span className="mt-2 block max-w-xl text-sm text-mist">{pillar.short}</span>
              </span>
              <span className="hidden text-mist transition-all group-hover:translate-x-1 group-hover:text-red sm:block">
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/method"
            className="inline-flex items-center gap-2 font-cond text-sm font-semibold uppercase tracking-[0.16em] text-red hover:text-ink"
          >
            Read the full method <ArrowIcon />
          </Link>
        </div>
      </Section>

      <Ticker />

      {/* ==================== p.03 — TRAINING (departments) ==================== */}
      <Section>
        <FolioBar page="03" label="Departments" />
        <Reveal>
          <h2 className="serifhead max-w-3xl text-5xl sm:text-7xl">
            Ways to train at KPM<span className="text-red">.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-16 gap-y-0 lg:grid-cols-[1.5fr_1fr]">
          <div className="border-t-2 border-ink">
            {programs.map((program, i) => (
              <article
                key={program.id}
                className="grid gap-3 border-b border-ink/30 py-8 sm:grid-cols-[1fr_auto] sm:items-start"
              >
                <div>
                  <p className="folio text-red">
                    Dept. 0{i + 1} — {program.audience}
                  </p>
                  <h3 className="serifhead mt-2 text-3xl sm:text-4xl">{program.name}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist">
                    {program.summary}
                  </p>
                </div>
                <div className="flex flex-row gap-4 sm:flex-col sm:items-end sm:gap-3 sm:pt-1">
                  <Cta
                    href={program.cta.href}
                    external={program.cta.external}
                    className="min-h-10 px-4 text-[0.68rem]"
                  >
                    {program.cta.label}
                  </Cta>
                  {program.secondaryCta ? (
                    <Link
                      href={program.secondaryCta.href}
                      className="inline-flex min-h-10 items-center gap-2 font-cond text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mist hover:text-red"
                    >
                      Learn More <ArrowIcon />
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-10 self-start border-2 border-ink bg-panel p-8 shadow-[6px_6px_0_rgba(23,19,11,0.85)] lg:sticky lg:top-24 lg:mt-0">
            <p className="kicker">Not sure where to start?</p>
            <p className="serifhead mt-3 text-3xl">Talk to a coach.</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Call or email and we&rsquo;ll point you to the right program for your
              athlete.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a href={site.phoneHref} className="display text-2xl text-red hover:text-ink">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="text-sm text-ink/80 hover:text-red">
                {site.email}
              </a>
            </div>
          </aside>
        </div>
      </Section>

      {/* ==================== p.04 — FACILITY (photo spread) ==================== */}
      <section className="relative border-y-2 border-ink">
        <div className="relative aspect-[16/10] min-h-[420px] w-full overflow-hidden sm:aspect-[21/9]">
          <Image
            src={images.facilityNight}
            alt="The Klemic Performance Method facility in Somers Point, NJ at night"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14">
              <p className="folio text-paper/80">
                Fig. 04 — The Facility · {site.address.label}
              </p>
              <h2 className="display mt-3 text-4xl text-paper sm:text-6xl lg:text-7xl">
                7,200 sq ft
                <br />
                built for speed<span className="text-red">.</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-2xl leading-relaxed text-mist">
            Sessions are capped at 30 athletes so every rep gets coached. Testing runs on
            the Trazer system, and specific track work can be done offsite.
          </p>
          <div className="flex flex-wrap gap-4">
            <Cta href={site.mapsUrl} external variant="outline">
              Get Directions
            </Cta>
            <Cta href="/signup">Sign Up</Cta>
          </div>
        </div>
      </section>

      {/* ==================== p.05 — COACHES ==================== */}
      <Section>
        <FolioBar page="05" label="The Coaches" />
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="serifhead max-w-3xl text-5xl sm:text-7xl">
              Coached by people who&rsquo;ve been there<span className="text-red">.</span>
            </h2>
            <Link
              href="/coaches"
              className="inline-flex items-center gap-2 pb-2 font-cond text-sm font-semibold uppercase tracking-[0.16em] text-red hover:text-ink"
            >
              Meet the coaches <ArrowIcon />
            </Link>
          </div>
        </Reveal>
        <p className="annotation mt-4 max-w-xl">
          35+ years of combined experience · 500+ NCAA athletes · founded by a former NFL
          receiver
        </p>
        <div className="mt-12">
          <CoachesPreview />
        </div>
      </Section>

      {/* ==================== p.06 — ATHLETE INDEX ==================== */}
      <section className="border-y-2 border-ink bg-panel">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <FolioBar page="06" label="In Their Words" />
          <Reveal>
            <h2 className="serifhead max-w-4xl text-5xl sm:text-7xl">
              Trusted by pros, doctors &amp; 10,000+ athletes<span className="text-red">.</span>
            </h2>
          </Reveal>
          <div className="mt-12">
            <TestimonialSpread />
          </div>
          <div className="mt-10">
            <Link
              href="/alumni"
              className="inline-flex items-center gap-2 font-cond text-sm font-semibold uppercase tracking-[0.16em] text-red hover:text-ink"
            >
              See our notable alumni <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== p.07 — SIGN UP ==================== */}
      <Section>
        <FolioBar page="07" label="Sign Up" />
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="serifhead text-5xl sm:text-7xl">
              Three ways in. One standard<span className="text-red">.</span>
            </h2>
            <p className="mt-5 text-mist">
              New athletes, veterans, and Young Guns each have a clear path — and every
              path starts with objective testing.
            </p>
          </div>
        </Reveal>
        <div className="mt-12">
          <SignupPathways compact />
        </div>
      </Section>

      <PartnerBar />
      <FinalCta />
    </>
  );
}
