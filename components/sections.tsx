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
    <div className={`border-b-2 border-ink bg-panel ${className}`}>
      <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <div
            key={s.label}
            className={`px-5 py-7 sm:px-8 ${i % 2 === 1 ? "border-l border-ink/30" : ""} ${
              i >= 2 ? "border-t border-ink/30 lg:border-t-0" : ""
            } ${i >= 1 ? "lg:border-l lg:border-ink/30" : ""}`}
          >
            <dd className="display text-3xl text-sky-deep sm:text-4xl lg:text-5xl">
              {s.value}
            </dd>
            <dt className="folio mt-2">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="flex flex-col border-2 border-ink bg-panel p-7 sm:p-8">
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
            className="inline-flex items-center gap-2 font-cond text-xs font-semibold uppercase tracking-[0.16em] text-mist hover:text-sky-deep"
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
      className={`border-2 border-ink bg-panel p-7 sm:p-9 ${featured ? "lg:col-span-2" : ""}`}
    >
      <svg
        aria-hidden="true"
        width="32"
        height="24"
        viewBox="0 0 32 24"
        className="text-sky"
        fill="currentColor"
      >
        <path d="M0 24V13.7C0 5.9 4.6 1.2 12.6 0l1.6 3.8c-4.4 1.2-6.6 3.4-6.9 6.8H13V24H0Zm19 0V13.7C19 5.9 23.6 1.2 31.6 0l1.6 3.8c-4.4 1.2-6.6 3.4-6.9 6.8H32V24H19Z" transform="scale(0.97)" />
      </svg>
      <blockquote
        className={`mt-5 leading-relaxed text-ink/85 ${
          featured ? "text-lg sm:text-xl" : "text-[0.95rem]"
        }`}
      >
        {t.quote}
      </blockquote>
      <figcaption className="mt-6">
        <p className="display text-lg text-sky-deep">{t.name}</p>
        <p className="folio mt-1">{t.credential}</p>
      </figcaption>
    </figure>
  );
}

/** Coaches as Nike-style trading cards: bordered frame, sidebar text, caption bar. */
export function CoachesPreview() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {coaches.map((coach, i) => (
        <Link
          key={coach.name}
          href="/coaches"
          className="group relative block border-2 border-ink bg-white p-3 pb-0 transition-transform hover:-translate-y-1"
        >
          {/* card sidebar */}
          <span className="folio absolute left-3 top-10 z-10 origin-top-left -rotate-90 whitespace-nowrap text-ink/60">
            KPM Coaching Card · No. 0{i + 1}
          </span>
          <span className="relative block aspect-[4/5] overflow-hidden bg-paper">
            <Image
              src={coach.image}
              alt={`${coach.name}, ${coach.title}`}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
            />
          </span>
          <span className="flex items-baseline justify-between gap-2 py-3">
            <span className="display text-lg leading-none">{coach.name}</span>
            <span className="folio text-right text-sky-deep">{coach.title}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export function PartnerBar() {
  return (
    <div className="border-t-2 border-ink bg-panel">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <p className="kicker text-center">Partners &amp; Affiliations</p>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((p) => {
            const img = (
              <span className="flex h-24 items-center justify-center border border-ink/30 bg-white p-4">
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
                    className="block transition-opacity hover:opacity-70"
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
            className="underline decoration-sky underline-offset-4 hover:text-sky-deep"
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
    <div className="grid gap-6 lg:grid-cols-3">
      {signupPaths.map((path, i) => (
        <div key={path.name} className="flex flex-col border-2 border-ink bg-panel p-7 sm:p-8">
          <p className="folio text-grass-deep">Path 0{i + 1}</p>
          <h3 className="display mt-2 text-2xl">{path.name}</h3>
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
                className="group flex min-h-12 items-center justify-between gap-3 border-2 border-ink px-4 font-cond text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-sky-deep hover:text-sky-deep"
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
    <div aria-hidden="true" className="overflow-hidden border-y-2 border-ink bg-ink py-3">
      <div className="ticker-track">
        {row.map((item, i) => (
          <span
            key={i}
            className="display mx-6 flex items-center gap-12 whitespace-nowrap text-xl text-paper sm:text-2xl"
          >
            {item}
            <span className={`h-2 w-2 ${i % 2 ? "bg-sky" : "bg-grass"}`} />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Back cover — logo-blue block. */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t-2 border-ink bg-sky">
      <span
        aria-hidden="true"
        className="display-ghost-light pointer-events-none absolute -bottom-6 right-0 text-[clamp(6rem,20vw,16rem)]"
      >
        Champ
      </span>
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <p className="font-cond text-xs font-semibold uppercase tracking-[0.28em] text-ink/80">
          Ready when you are
        </p>
        <h2 className="display mt-4 text-[clamp(2.8rem,9vw,7rem)] text-white [text-shadow:2px_2px_0_rgba(23,21,14,0.25)]">
          Move like
          <br />a champ<span className="text-ink">.</span>
        </h2>
        <p className="mt-6 max-w-xl text-ink/85">
          Start with a Full Panel Gait Analysis at our Somers Point facility, or call us
          and we&rsquo;ll point you to the right program.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Cta href="/signup">Start Training</Cta>
          <a
            href={site.phoneHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-ink px-7 font-cond text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
