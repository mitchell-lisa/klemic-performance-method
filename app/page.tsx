import Image from "next/image";
import Link from "next/link";
import {
  images,
  pillars,
  programs,
  site,
  stats,
  testimonials,
} from "@/lib/site";
import { ArrowIcon, Cta, Kicker, Section } from "@/components/ui";
import {
  CoachesPreview,
  FinalCta,
  PartnerBar,
  SignupPathways,
  StatStrip,
  TestimonialCard,
  Ticker,
} from "@/components/sections";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      {/* ============ HERO — type as imagery, cutout athlete overlap ============ */}
      <section className="relative overflow-hidden">
        {/* ghost watermark */}
        <span
          aria-hidden="true"
          className="display-ghost pointer-events-none absolute -right-8 top-6 text-[clamp(8rem,26vw,22rem)]"
        >
          KPM
        </span>

        <div className="relative mx-auto grid w-full max-w-6xl px-5 pb-0 pt-16 sm:px-8 sm:pt-24">
          <Kicker>Speed &amp; Athletic Performance · Somers Point, NJ</Kicker>
          <h1 className="display relative z-10 mt-5 text-[clamp(3.8rem,14vw,11.5rem)]">
            Move
            <br />
            like a<br />
            champ<span className="text-gold">.</span>
          </h1>

          {/* cutout athlete — anchored to the bottom edge, overlapping the headline */}
          <div
            className="pointer-events-none absolute bottom-0 right-[-6%] z-20 h-[54vw] max-h-[560px] min-h-[280px] w-[60vw] max-w-[520px] sm:right-0"
            aria-hidden="true"
          >
            <Image
              src={images.cutoutNasir}
              alt=""
              fill
              priority
              sizes="(max-width: 640px) 60vw, 520px"
              className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            />
          </div>

          <div className="relative z-30 mb-14 mt-8 max-w-md sm:mb-20">
            <p className="text-base leading-relaxed text-white/85 sm:text-lg">
              Evidence-based speed and athletic performance training. Since 2002, more
              than 10,000 athletes — from Young Guns to college and the pros — have built
              their speed at KPM.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta href="/signup">Start Training</Cta>
              <Cta href="/method" variant="outline">
                Explore the Method
              </Cta>
            </div>
          </div>
        </div>
      </section>

      <StatStrip items={stats} />

      {/* ============ THE METHOD — editorial index rows ============ */}
      <Section className="relative overflow-hidden">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Kicker>The Method</Kicker>
              <h2 className="display mt-4 text-5xl sm:text-6xl lg:text-7xl">
                Four pillars.
                <br />
                One system.
              </h2>
            </div>
            <p className="max-w-xs pb-2 text-sm leading-relaxed text-mist">
              Every athlete is tested, profiled, and trained against the same four pillars
              of speed — refined over 20+ years with proprietary resistances.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-line">
          {pillars.map((pillar) => (
            <Link
              key={pillar.number}
              href="/method"
              className="group relative grid items-baseline gap-2 border-b border-line py-7 transition-colors hover:bg-panel sm:grid-cols-[5.5rem_1fr_auto] sm:gap-6 sm:py-9"
            >
              <span className="display-ghost text-4xl transition-colors sm:text-6xl">
                {pillar.number}
              </span>
              <span>
                <span className="display block text-3xl transition-colors group-hover:text-gold sm:text-4xl lg:text-5xl">
                  {pillar.name}
                </span>
                <span className="mt-2 block max-w-xl text-sm text-mist">{pillar.short}</span>
              </span>
              <span className="hidden text-mist transition-all group-hover:translate-x-1 group-hover:text-gold sm:block">
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Ticker />

      {/* ============ TRAINING — editorial program index ============ */}
      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <Kicker>Training</Kicker>
            <h2 className="display mt-4 text-5xl sm:text-6xl lg:text-7xl">
              Ways to train
              <br />
              at KPM<span className="text-gold">.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-0 lg:grid-cols-[1.5fr_1fr]">
          <div className="border-t border-line">
            {programs.map((program) => (
              <article
                key={program.id}
                className="grid gap-3 border-b border-line py-8 sm:grid-cols-[1fr_auto] sm:items-start"
              >
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">
                    {program.audience}
                  </p>
                  <h3 className="display mt-2 text-3xl sm:text-4xl">{program.name}</h3>
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
                      className="inline-flex min-h-10 items-center gap-2 font-display text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/70 hover:text-gold"
                    >
                      Learn More <ArrowIcon />
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-10 self-start border border-gold/40 bg-panel p-8 lg:sticky lg:top-24 lg:mt-0">
            <p className="kicker">Not sure where to start?</p>
            <p className="display mt-3 text-3xl">Talk to a coach.</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Call or email and we&rsquo;ll point you to the right program for your
              athlete.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={site.phoneHref}
                className="display text-2xl text-gold hover:text-gold-bright"
              >
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="text-sm text-white/80 hover:text-gold">
                {site.email}
              </a>
            </div>
          </aside>
        </div>
      </Section>

      {/* ============ FACILITY — full-bleed image with overlapping type ============ */}
      <section className="relative">
        <div className="relative aspect-[16/10] min-h-[420px] w-full overflow-hidden sm:aspect-[21/9]">
          <Image
            src={images.facilityNight}
            alt="The Klemic Performance Method facility in Somers Point, NJ at night"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14">
              <Kicker>The Facility · {site.address.label}</Kicker>
              <h2 className="display mt-3 text-4xl sm:text-6xl lg:text-7xl">
                7,200 sq ft
                <br />
                built for speed<span className="text-gold">.</span>
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
      <Section className="border-t border-line">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Kicker>Coaches</Kicker>
              <h2 className="display mt-4 text-5xl sm:text-6xl">
                Coached by people
                <br />
                who&rsquo;ve been there<span className="text-gold">.</span>
              </h2>
            </div>
            <Link
              href="/coaches"
              className="inline-flex items-center gap-2 pb-2 font-display text-sm font-medium uppercase tracking-[0.16em] text-gold hover:text-gold-bright"
            >
              Meet the coaches <ArrowIcon />
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

      {/* ============ PROOF — poster quote with Papale cutout ============ */}
      <section className="relative overflow-hidden border-t border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <Kicker>Results</Kicker>
            <h2 className="display mt-4 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
              Trusted by pros, doctors &amp; 10,000+ athletes<span className="text-gold">.</span>
            </h2>
          </Reveal>

          <div className="relative mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <figure className="relative z-10">
              <blockquote className="font-display text-2xl font-medium leading-[1.2] sm:text-3xl lg:text-[2.5rem]">
                <span aria-hidden="true" className="text-gold">
                  &ldquo;
                </span>
                {testimonials[0].quote}
                <span aria-hidden="true" className="text-gold">
                  &rdquo;
                </span>
              </blockquote>
              <figcaption className="mt-8">
                <p className="display text-2xl text-gold">{testimonials[0].name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-mist">
                  {testimonials[0].credential}
                </p>
              </figcaption>
            </figure>
            <div className="relative min-h-[320px]" aria-hidden="true">
              <Image
                src={images.cutoutPapale}
                alt=""
                fill
                sizes="(max-width: 1024px) 60vw, 420px"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {testimonials.slice(1, 3).map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/alumni"
              className="inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-[0.16em] text-gold hover:text-gold-bright"
            >
              See our notable alumni <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SIGN UP ============ */}
      <Section className="border-t border-line">
        <Reveal>
          <div className="max-w-3xl">
            <Kicker>Sign Up</Kicker>
            <h2 className="display mt-4 text-5xl sm:text-6xl lg:text-7xl">
              Three ways in.
              <br />
              One standard<span className="text-gold">.</span>
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
