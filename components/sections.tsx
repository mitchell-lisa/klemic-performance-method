import Image from "next/image";
import Link from "next/link";
import {
  antepes,
  coaches,
  partners,
  signupPaths,
  site,
  type Program,
  type Testimonial,
} from "@/lib/site";
import { ArrowIcon, Cta } from "@/components/ui";

export function StatStrip({
  items,
  className = "",
}: {
  items: readonly { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div className={`border-y border-line ${className}`}>
      <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <div
            key={s.label}
            className={`px-5 py-8 sm:px-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${
              i >= 2 ? "border-t border-line lg:border-t-0" : ""
            } ${i >= 1 ? "lg:border-l lg:border-line" : ""}`}
          >
            <dd className="display text-4xl text-gold sm:text-5xl lg:text-6xl">{s.value}</dd>
            <dt className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-mist">
              {s.label}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="flex flex-col border border-line bg-panel p-7 transition-colors hover:border-white/30 sm:p-8">
      <p className="kicker">{program.audience}</p>
      <h3 className="display mt-3 text-2xl sm:text-3xl">{program.name}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-mist">{program.summary}</p>
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Cta href={program.cta.href} external={program.cta.external} className="min-h-11 px-5 text-xs">
          {program.cta.label}
        </Cta>
        {program.secondaryCta ? (
          <Link
            href={program.secondaryCta.href}
            className="inline-flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.16em] text-white/80 hover:text-gold"
          >
            {program.secondaryCta.label} <ArrowIcon />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export function TestimonialCard({
  t,
  featured = false,
}: {
  t: Testimonial;
  featured?: boolean;
}) {
  return (
    <figure
      className={`border border-line bg-panel p-7 sm:p-9 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <svg
        aria-hidden="true"
        width="32"
        height="24"
        viewBox="0 0 32 24"
        className="text-gold"
        fill="currentColor"
      >
        <path d="M0 24V13.7C0 5.9 4.6 1.2 12.6 0l1.6 3.8c-4.4 1.2-6.6 3.4-6.9 6.8H13V24H0Zm19 0V13.7C19 5.9 23.6 1.2 31.6 0l1.6 3.8c-4.4 1.2-6.6 3.4-6.9 6.8H32V24H19Z" transform="scale(0.97)" />
      </svg>
      <blockquote
        className={`mt-5 leading-relaxed text-white/90 ${
          featured ? "text-lg sm:text-xl" : "text-[0.95rem]"
        }`}
      >
        {t.quote}
      </blockquote>
      <figcaption className="mt-6">
        <p className="display text-lg text-gold">{t.name}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mist">{t.credential}</p>
      </figcaption>
    </figure>
  );
}

export function CoachesPreview() {
  return (
    <div className="grid gap-px border border-line bg-line sm:grid-cols-3">
      {coaches.map((coach) => (
        <Link
          key={coach.name}
          href="/coaches"
          className="group relative block aspect-[4/5] overflow-hidden bg-panel"
        >
          <Image
            src={coach.image}
            alt={`${coach.name}, ${coach.title}`}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover object-top grayscale transition duration-300 group-hover:grayscale-0"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-14">
            <p className="display text-xl">{coach.name}</p>
            <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-gold">
              {coach.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function PartnerBar() {
  return (
    <div className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <p className="kicker text-center">Partners &amp; Affiliations</p>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((p) => {
            const img = (
              <span className="flex h-24 items-center justify-center bg-white p-4">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={140}
                  height={64}
                  className="h-14 w-auto object-contain"
                />
              </span>
            );
            return (
              <li key={p.name}>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={p.name}
                    className="block transition-opacity hover:opacity-80"
                  >
                    {img}
                  </a>
                ) : (
                  img
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-center text-sm text-mist">
          <a
            href={antepes.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gold/60 underline-offset-4 hover:text-gold"
          >
            {antepes.label}
          </a>
        </p>
      </div>
    </div>
  );
}

export function SignupPathways({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-px border border-line bg-line lg:grid-cols-3">
      {signupPaths.map((path) => (
        <div key={path.name} className="flex flex-col bg-panel p-7 sm:p-8">
          <h3 className="display text-2xl">{path.name}</h3>
          {!compact && (
            <p className="mt-3 text-sm leading-relaxed text-mist">{path.description}</p>
          )}
          <div className="mt-6 flex flex-1 flex-col justify-end gap-3">
            {path.steps.map((step) => (
              <a
                key={step.label}
                href={step.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-12 items-center justify-between gap-3 border border-white/25 px-4 font-display text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-gold hover:text-gold"
              >
                {step.label}
                <ArrowIcon />
              </a>
            ))}
          </div>
          {!compact && path.note ? (
            <p className="mt-4 text-xs leading-relaxed text-mist/80">{path.note}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function Ticker() {
  const items = [
    "Move Like a Champ",
    "Est. 2002",
    "Somers Point, NJ",
    "10,000+ Athletes Trained",
    "Evidence-Based Training",
  ];
  const row = [...items, ...items];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-line py-4">
      <div className="ticker-track">
        {row.map((item, i) => (
          <span
            key={i}
            className="display mx-6 flex items-center gap-12 whitespace-nowrap text-2xl text-white/70 sm:text-3xl"
          >
            {item}
            <span className="h-2 w-2 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-panel">
      <span
        aria-hidden="true"
        className="display-ghost pointer-events-none absolute -bottom-6 right-0 text-[clamp(6rem,20vw,16rem)]"
      >
        Champ
      </span>
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="kicker">Ready when you are</p>
        <h2 className="display mt-4 text-[clamp(3rem,9vw,7.5rem)]">
          Move like
          <br />a champ<span className="text-gold">.</span>
        </h2>
        <p className="mt-6 max-w-xl text-mist">
          Start with a Full Panel Gait Analysis at our Somers Point facility, or call us
          and we&rsquo;ll point you to the right program.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Cta href="/signup">Start Training</Cta>
          <Cta href={site.phoneHref} variant="outline" external>
            Call {site.phone}
          </Cta>
        </div>
      </div>
    </section>
  );
}
