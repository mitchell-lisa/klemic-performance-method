import type { Metadata } from "next";
import Image from "next/image";
import {
  images,
  links,
  membership,
  onlinePrograms,
  onlineTraining,
  privateStaff,
  site,
  videos,
  youngGuns,
} from "@/lib/site";
import { ArrowIcon, Cta, Kicker, Section } from "@/components/ui";
import { FinalCta } from "@/components/sections";
import KpmVideo from "@/components/KpmVideo";

export const metadata: Metadata = {
  title: "Training — Facility, Private, Young Guns, Online Programs & SJRS",
  description:
    "Facility training, one-on-one private training, Young Guns youth development (ages 5–11), remote coaching with The Perfect Off Season, Anti Atrophy and Fully Custom Programs, and the SJRS program — all built on KPM's evidence-based method in Somers Point, NJ.",
  alternates: { canonical: "/training" },
};

export default function TrainingPage() {
  return (
    <>
      <Section className="pb-10 sm:pb-14">
        <Kicker>Training</Kicker>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
          Every path runs through the <span className="text-sky">method</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
          In the facility, one-on-one, online, or in the Young Guns program — every KPM
          athlete is tested first and trained against the four pillars.
        </p>
      </Section>

      {/* ================= FACILITY — photo-led spread ================= */}
      <section id="facility" className="scroll-mt-20 border-t-2 border-ink" aria-labelledby="facility-h">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden border-2 border-ink">
              <Image
                src={images.signupBanner}
                alt="A KPM athlete training on the facility floor"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <p className="folio mt-3">The floor — Somers Point, NJ</p>
            {/* Marquies cutout crossing the photo's corner */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 hidden h-56 w-56 lg:block"
              style={{ filter: "drop-shadow(-12px 10px 0 rgba(163,183,39,0.75))" }}
            >
              <Image src={images.cutoutMarquies} alt="" fill sizes="224px" className="object-contain" />
            </div>
          </div>
          <div className="lg:pl-4">
            <Kicker>Group training · Somers Point</Kicker>
            <h2 id="facility-h" className="display mt-3 text-4xl sm:text-6xl">
              Facility Training
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-mist">
              <p>
                KPM&rsquo;s core program: 20+ years of time-tested, evidence-based
                training that creates physical, neurological, and technical change in
                every athlete that completes a full 12-week training cycle.
              </p>
              <p>{membership.summary}</p>
            </div>
            <ul className="mt-8 grid gap-x-8 gap-y-2 border-t-2 border-ink pt-5 text-sm text-ink/85 sm:grid-cols-2">
              {[
                "Step 1 — Full Panel Gait Analysis",
                "Step 2 — Monthly membership, 3 classes/week",
                "12-week evidence-based cycles",
                "Sessions capped at 30 athletes",
                "Minimum three-month commitment",
                "Trazer-based testing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-sky" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta href="/signup">Facility Sign Up</Cta>
              <Cta href={links.veteranMembershipPurchase} external variant="outline">
                Purchase Monthly
              </Cta>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRIVATE — the staff ARE the spread ================= */}
      <section id="private" className="scroll-mt-20 border-t-2 border-ink bg-panel" aria-labelledby="private-h">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Kicker>One-on-one · by appointment</Kicker>
              <h2 id="private-h" className="display mt-3 text-4xl sm:text-6xl">
                Private Training
              </h2>
            </div>
            <a
              href={site.privatePhoneHref}
              className="display text-2xl text-sky-deep hover:text-ink sm:text-3xl"
            >
              {site.privatePhone}
            </a>
          </div>

          <p className="mt-6 max-w-2xl leading-relaxed text-mist">
            Fully customized one-on-one sessions at the 7,200 sq ft facility — built
            around the athlete&rsquo;s sport, position, age, training history, and the
            specific gaps holding them back. Specific track work can be done offsite.
            Every private program is written by Cruz Lewis.
          </p>

          {/* Three coaches, three different column heights — a contact sheet of people */}
          <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
            {privateStaff.map((coach, i) => (
              <article
                key={coach.name}
                className={`flex flex-col ${i === 1 ? "lg:mt-14" : ""} ${i === 2 ? "lg:mt-7" : ""}`}
              >
                <div
                  className={`relative w-full overflow-hidden border-2 border-ink bg-white ${
                    i === 0 ? "aspect-[3/4]" : i === 1 ? "aspect-[4/5]" : "aspect-[3/4]"
                  }`}
                >
                  <Image
                    src={coach.image}
                    alt={`${coach.name} — ${coach.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="display mt-4 text-2xl">{coach.name}</h3>
                <p className="font-cond text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky-deep">
                  {coach.title}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{coach.detail}</p>
                <a
                  href={site.privatePhoneHref}
                  className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 border-2 border-ink px-5 font-cond text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-sky-deep hover:text-sky-deep"
                >
                  Schedule with {coach.name.split(" ")[0]} <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= YOUNG GUNS — copy + real film ================= */}
      <section id="young-guns" className="scroll-mt-20 border-t-2 border-ink" aria-labelledby="yg-h">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Kicker>Youth development · ages 5–11</Kicker>
            <h2 id="yg-h" className="display mt-3 text-4xl sm:text-6xl">
              Young Guns
            </h2>
            <p className="mt-6 text-xl font-medium leading-relaxed text-ink/95">
              {youngGuns.claim}
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-mist">{youngGuns.why}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist">
              {youngGuns.membership}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta href={links.gaitAnalysisPurchase} external>
                Purchase Gait Analysis
              </Cta>
              <Cta href={links.youngGunsMembershipPurchase} external variant="outline">
                Young Guns Monthly
              </Cta>
            </div>
            <div className="relative mt-12 aspect-square w-full max-w-xl overflow-hidden border-2 border-ink sm:aspect-[16/10]">
              <Image
                src={images.youngGunsPhoto}
                alt="A Young Guns athlete training at KPM"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <figure className="self-start lg:pt-16">
            <KpmVideo
              src={videos.youngGuns.src}
              poster={videos.youngGuns.poster}
              mode="feature"
              label="On the floor with a KPM athlete"
              className="mx-auto aspect-[9/16] w-full max-w-[320px] border-2 border-ink shadow-[10px_10px_0_rgba(47,167,217,0.95)]"
              posterSizes="320px"
            />
            <figcaption className="mx-auto mt-3 max-w-[320px] text-xs leading-snug text-mist">
              KPM&rsquo;s own footage — from the Young Guns page of the original archive.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ================= ONLINE — the manifesto chapter ================= */}
      <section id="online" className="scroll-mt-20 border-t-2 border-ink bg-ink text-paper" aria-labelledby="online-h">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="kicker !text-sky">Remote training · anywhere</p>
          <h2 id="online-h" className="display mt-4 text-5xl leading-[0.9] sm:text-7xl lg:text-8xl">
            Jump high<span className="text-sky">.</span>
            <br />
            Run fast<span className="text-grass">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-paper/80">{onlineTraining.sub}</p>

          {/* The manifesto — three flat refusals, stacked and indented */}
          <div className="mt-14 border-t border-paper/25 pt-8">
            {onlineTraining.manifesto.map((line, i) => (
              <p
                key={line}
                className="display text-3xl leading-tight text-paper/90 sm:text-5xl"
                style={{ paddingLeft: `${i * 44}px` }}
              >
                {line}
              </p>
            ))}
            <p className="display mt-6 text-3xl text-sky sm:text-5xl">
              {onlineTraining.manifestoClose}
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-paper/70">
            {onlineTraining.philosophy}
          </p>
        </div>
      </section>

      {/* The two offers — light plates on paper */}
      <section aria-label="Online training offers" className="border-t-2 border-ink">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-8">
          {onlineTraining.offers.map((offer, i) => (
            <article
              key={offer.id}
              id={offer.id}
              className={`flex scroll-mt-20 flex-col border-2 border-ink bg-panel p-7 sm:p-9 ${
                i === 0 ? "plate-sky" : "plate-ink lg:mt-14"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <h3 className="display min-w-0 text-3xl sm:text-4xl">{offer.name}</h3>
                <p className="shrink-0 text-right">
                  <span className="display block text-3xl text-sky-deep">{offer.price}</span>
                  <span className="folio">{offer.priceNote}</span>
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mist">{offer.summary}</p>

              <p className="kicker mt-7">What you get</p>
              <ul className="mt-3 space-y-2 text-sm text-ink/85">
                {offer.whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-sky" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="kicker mt-7">Who it&rsquo;s built for</p>
              <ul className="mt-3 space-y-2 text-sm text-ink/85">
                {offer.builtFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-grass" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="kicker mt-7">The process</p>
              <ol className="mt-3 space-y-2.5 text-sm text-ink/85">
                {offer.process.map((step, s) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="folio mt-0.5 shrink-0 text-sky-deep">0{s + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-1 items-end">
                <Cta href={offer.cta.href} external className="w-full">
                  {offer.cta.label}
                </Cta>
              </div>
            </article>
          ))}
        </div>

        {/* Why this matters — one long passage, set big */}
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
          <div className="border-y-2 border-ink py-10">
            <p className="kicker">Why this matters</p>
            <p className="mt-4 max-w-4xl text-lg font-medium leading-relaxed text-ink/95 sm:text-xl">
              {onlineTraining.whyItMatters}
            </p>
          </div>
        </div>
      </section>

      {/* ================= THE PROGRAM LIBRARY — three posters ================= */}
      <section id="programs" className="scroll-mt-20 border-t-2 border-ink bg-panel" aria-labelledby="library-h">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Kicker>The program library · in the KPM app</Kicker>
          <h2 id="library-h" className="display mt-3 max-w-3xl text-4xl sm:text-6xl">
            Programs you can hold in your hand<span className="text-sky">.</span>
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-8">
            {onlinePrograms.map((program, i) => (
              <article key={program.id} id={program.id} className={`scroll-mt-20 ${i === 1 ? "lg:mt-12" : ""}`}>
                <div
                  className={`relative aspect-[2/3] w-full overflow-hidden border-2 border-ink bg-white ${
                    i % 2 === 0 ? "rotate-[-0.8deg]" : "rotate-[1deg]"
                  } shadow-[8px_8px_0_rgba(20,19,9,0.9)]`}
                >
                  <Image
                    src={program.poster}
                    alt={`${program.name} program`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="display mt-5 text-2xl">{program.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{program.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                  {program.facts.map((fact) => (
                    <li
                      key={fact}
                      className="border border-ink/40 px-2 py-0.5 font-cond text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink/75"
                    >
                      {fact}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-xl border-t-2 border-ink pt-5 text-sm text-mist">
            All programs are delivered through the KPM app with full video guidance, sets
            and reps, and habit tracking. To enroll, email{" "}
            <a href={`mailto:${site.email}`} className="text-sky-deep hover:text-ink">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref} className="text-sky-deep hover:text-ink">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ================= SJRS — the flyer on the wall ================= */}
      <section id="sjrs" className="scroll-mt-20 border-t-2 border-ink" aria-labelledby="sjrs-h">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_auto]">
          <div>
            <Kicker>Partner program</Kicker>
            <h2 id="sjrs-h" className="display mt-3 text-4xl sm:text-6xl">
              SJRS Program
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-mist">
              KPM&rsquo;s dedicated training program for SJRS student-athletes, with its
              own testing and registration. Questions? Contact{" "}
              <a href={`mailto:${site.email}`} className="text-sky-deep hover:text-ink">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={site.phoneHref} className="text-sky-deep hover:text-ink">
                {site.phone}
              </a>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta href={links.sjrsCheckout} external>
                Sign Up for Testing
              </Cta>
            </div>
          </div>
          <figure className="w-full max-w-[320px] rotate-[-1.2deg] border-2 border-ink bg-white p-2 shadow-[10px_10px_0_rgba(47,167,217,0.95)] justify-self-center lg:justify-self-end">
            <div className="relative aspect-[9/16] w-full">
              <Image
                src={images.sjrsPricing}
                alt="KPM SJRS program pricing sheet"
                fill
                sizes="320px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="pt-2 text-center font-cond text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-mist">
              Program pricing sheet
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FACILITY PHOTO BREAK */}
      <div className="relative aspect-[21/9] min-h-72 w-full overflow-hidden border-t-2 border-ink">
        <Image
          src={images.facilityNight}
          alt="The Klemic Performance Method facility in Somers Point, NJ at night"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <FinalCta />
    </>
  );
}
