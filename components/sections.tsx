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

/** Editorial data strip — reads like a stats table printed across the page. */
export function StatStrip({
  items,
  className = "",
}: {
  items: readonly { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div className={`border-y-2 border-ink bg-panel ${className}`}>
      <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <div
            key={s.label}
            className={`relative px-5 py-7 sm:px-8 ${i % 2 === 1 ? "border-l border-ink/25" : ""} ${
              i >= 2 ? "border-t border-ink/25 lg:border-t-0" : ""
            } ${i >= 1 ? "lg:border-l lg:border-ink/25" : ""}`}
          >
            <span aria-hidden="true" className="absolute right-4 top-4 h-1.5 w-1.5 bg-red" />
            <dd className="display text-3xl sm:text-4xl lg:text-5xl">{s.value}</dd>
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
      <h3 className="serifhead mt-3 text-3xl sm:text-4xl">{program.name}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-mist">{program.summary}</p>
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Cta href={program.cta.href} external={program.cta.external} className="min-h-11 px-5 text-xs">
          {program.cta.label}
        </Cta>
        {program.secondaryCta ? (
          <Link
            href={program.secondaryCta.href}
            className="inline-flex items-center gap-2 font-cond text-xs font-semibold uppercase tracking-[0.16em] text-mist hover:text-red"
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
      className={`border-t-2 border-ink bg-transparent pt-6 ${featured ? "lg:col-span-2" : ""}`}
    >
      <blockquote
        className={`serifhead text-ink/90 ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}
      >
        <span aria-hidden="true" className="text-red">
          &ldquo;
        </span>
        {t.quote}
        <span aria-hidden="true" className="text-red">
          &rdquo;
        </span>
      </blockquote>
      <figcaption className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="display text-base text-red">{t.name}</p>
        <p className="folio">{t.credential}</p>
      </figcaption>
    </figure>
  );
}

/** Coaches as archival collector cards. */
export function CoachesPreview() {
  return (
    <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
      {coaches.map((coach, i) => (
        <Link
          key={coach.name}
          href="/coaches"
          className="group relative block border border-ink bg-white p-3 pb-0 shadow-[4px_4px_0_rgba(23,19,11,0.9)] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(194,42,28,0.9)]"
        >
          <span className="spine absolute left-4 top-12 z-10 opacity-60">
            KPM Coaching Card · No. 0{i + 1}
          </span>
          <span className="relative block aspect-[4/5] overflow-hidden bg-paper-deep">
            <Image
              src={coach.image}
              alt={`${coach.name}, ${coach.title}`}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="archival object-cover object-top transition duration-300 group-hover:scale-[1.03]"
            />
          </span>
          <span className="flex items-baseline justify-between gap-2 py-3">
            <span className="display text-lg leading-none">{coach.name}</span>
            <span className="folio text-right text-red">{coach.title}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export function PartnerBar() {
  return (
    <div className="border-t border-ink/25">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <p className="folio text-center">In partnership with</p>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((p) => {
            const img = (
              <span className="flex h-24 items-center justify-center border border-ink/40 bg-white p-4">
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
        <p className="annotation mt-8 text-center">
          <a
            href={antepes.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-red/60 underline-offset-4 hover:text-red"
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
    <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
      {signupPaths.map((path, i) => (
        <div key={path.name} className="rule-2 flex flex-col pt-5">
          <p className="folio text-red">Path 0{i + 1} / 03</p>
          <h3 className="serifhead mt-2 text-3xl">{path.name}</h3>
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
                className="group flex min-h-12 items-center justify-between gap-3 border border-ink bg-panel px-4 font-cond text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-red hover:text-red"
              >
                {step.label}
                <ArrowIcon />
              </a>
            ))}
          </div>
          {!compact && path.note ? (
            <p className="annotation mt-4 text-sm">{path.note}</p>
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
            <span className={`h-2 w-2 ${i % 2 ? "bg-red" : "bg-tan"}`} />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Back cover — red plate, like the last page of the issue. */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t-2 border-ink bg-red">
      <span
        aria-hidden="true"
        className="display-ghost-light pointer-events-none absolute -bottom-6 right-0 text-[clamp(6rem,20vw,16rem)]"
      >
        Champ
      </span>
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <p className="folio text-paper/80">Back page · Ready when you are</p>
        <h2 className="display mt-4 text-[clamp(2.8rem,9vw,7rem)] text-paper">
          Move like
          <br />a champ<span className="text-ink">.</span>
        </h2>
        <p className="serifhead mt-6 max-w-xl text-xl text-paper/90">
          Start with a Full Panel Gait Analysis at our Somers Point facility, or call and
          we&rsquo;ll point you to the right program.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/signup"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-7 font-cond text-sm font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Start Training
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-paper px-7 font-cond text-sm font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-paper hover:text-red"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
