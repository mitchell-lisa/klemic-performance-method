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
import HomeHero from "@/components/HomeHero";

export default function HomePage() {
  return (
    <>
      {/* The hero is the site's front door — global chrome stays out of it */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@media (min-width:640px){header{display:none!important}main{padding-top:0!important}}",
        }}
      />

      <HomeHero />

      <StatStrip items={stats} />

      {/* ============ THE METHOD — type poster with a sprinter crossing it ============ */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p aria-hidden="true" className="display-ghost text-[clamp(3rem,9vw,7.5rem)]">
              The Method
            </p>
          </Reveal>

          <div className="relative mt-10">
            {/* sprinter crossing the list, off the right edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 z-10 hidden h-[460px] w-[460px] -translate-y-1/2 lg:block"
              style={{ filter: "drop-shadow(-18px 14px 0 rgba(47,167,217,0.8))" }}
            >
              <Image
                src={images.cutoutNasir}
                alt=""
                fill
                sizes="460px"
                className="object-contain"
              />
            </div>

            <div className="relative z-0 max-w-3xl">
              {pillars.map((pillar, i) => (
                <Link
                  key={pillar.number}
                  href="/method"
                  className="group block py-5"
                  style={{ paddingLeft: `${i * 34}px` }}
                >
                  <span className="folio text-sky-deep">{pillar.number}</span>
                  <span className="display block text-3xl transition-colors group-hover:text-sky-deep sm:text-5xl lg:text-6xl">
                    {pillar.name}
                  </span>
                  <span className="mt-1 block max-w-md text-sm text-mist">{pillar.short}</span>
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-mist">
            Every athlete is tested, profiled, and trained against the same four pillars
            of speed — refined over 20+ years with proprietary resistances.
          </p>
          <Link
            href="/method"
            className="font-display mt-5 inline-flex items-center gap-2 text-xl uppercase text-ink hover:text-sky-deep"
          >
            Read the method <ArrowIcon />
          </Link>
        </div>
      </section>

      <Ticker />

      {/* ============ TRAINING — ragged typographic index ============ */}
      <Section>
        <Reveal>
          <h2 className="display max-w-3xl text-5xl sm:text-7xl">
            Ways to train<span className="text-sky">.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-16 gap-y-0 lg:grid-cols-[1.5fr_1fr]">
          <div className="border-t-2 border-ink">
            {programs.map((program, i) => (
              <article
                key={program.id}
                className="grid gap-3 border-b border-ink/25 py-8 sm:grid-cols-[1fr_auto] sm:items-start"
                style={{ paddingLeft: `${(i % 3) * 18}px` }}
              >
                <div>
                  <p className="folio text-sky-deep">
                    0{i + 1} — {program.audience}
                  </p>
                  <h3 className="display mt-2 text-2xl sm:text-4xl">{program.name}</h3>
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
                      className="inline-flex min-h-10 items-center gap-2 font-cond text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mist hover:text-sky-deep"
                    >
                      Learn More <ArrowIcon />
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <aside className="plate-ink mt-10 self-start border-2 border-ink bg-panel p-8 lg:sticky lg:top-8 lg:mt-0">
            <p className="kicker">Not sure where to start?</p>
            <p className="display mt-3 text-3xl">Talk to a coach.</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Call or email and we&rsquo;ll point you to the right program for your
              athlete.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a href={site.phoneHref} className="display text-2xl text-sky-deep hover:text-ink">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="text-sm text-ink/80 hover:text-sky-deep">
                {site.email}
              </a>
            </div>
          </aside>
        </div>
      </Section>

      {/* ============ FACILITY — full-bleed photo ============ */}
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
              <p className="font-cond text-xs font-semibold uppercase tracking-[0.28em] text-sky">
                The facility · {site.address.label}
              </p>
              <h2 className="display mt-3 text-4xl text-paper sm:text-6xl lg:text-7xl">
                7,200 sq ft
                <br />
                built for speed<span className="text-sky">.</span>
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

      {/* ============ COACHES ============ */}
      <Section>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display max-w-3xl text-5xl sm:text-7xl">
              The coaches<span className="text-sky">.</span>
            </h2>
            <Link
              href="/coaches"
              className="inline-flex items-center gap-2 pb-2 font-cond text-sm font-semibold uppercase tracking-[0.16em] text-sky-deep hover:text-ink"
            >
              Meet them all <ArrowIcon />
            </Link>
          </div>
        </Reveal>
        <p className="mt-4 max-w-xl text-sm text-mist">
          35+ years of combined experience. 500+ NCAA athletes. Founded by a former NFL
          receiver.
        </p>
        <div className="mt-12">
          <CoachesPreview />
        </div>
      </Section>

      {/* ============ ATHLETE INDEX ============ */}
      <section className="border-y-2 border-ink bg-panel">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <h2 className="display max-w-4xl text-5xl sm:text-7xl">
              In their words<span className="text-sky">.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-mist">
              Pros, doctors, and 10,000+ athletes have run through this system. Tap one.
            </p>
          </Reveal>
          <div className="mt-12">
            <TestimonialSpread />
          </div>
          <div className="mt-10">
            <Link
              href="/alumni"
              className="inline-flex items-center gap-2 font-cond text-sm font-semibold uppercase tracking-[0.16em] text-sky-deep hover:text-ink"
            >
              See our notable alumni <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SIGN UP ============ */}
      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="display text-5xl sm:text-7xl">
              Three ways in<span className="text-sky">.</span>
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
