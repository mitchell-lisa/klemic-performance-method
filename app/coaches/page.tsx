import type { Metadata } from "next";
import Image from "next/image";
import { coaches, coachingStats, privateStaff, site } from "@/lib/site";
import { Cta, Kicker, Section } from "@/components/ui";
import { FinalCta, StatStrip } from "@/components/sections";

export const metadata: Metadata = {
  title: "Meet the Coaches",
  description:
    "Meet the KPM coaching staff — 35+ years of experience, 500+ NCAA athletes trained, founded by former NFL receiver David Klemic.",
  alternates: { canonical: "/coaches" },
};

export default function CoachesPage() {
  return (
    <>
      <Section className="pb-10 sm:pb-14">
        <Kicker>The Staff</Kicker>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
          Meet the coaches<span className="text-gold">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
          KPM athletes are coached by people who&rsquo;ve competed, tested, and refined
          this system for more than two decades.
        </p>
      </Section>

      <StatStrip items={coachingStats} />

      <Section>
        <div className="space-y-16">
          {coaches.map((coach, i) => (
            <article
              key={coach.name}
              className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]"
              aria-labelledby={`coach-${i}`}
            >
              <div
                className={`relative aspect-[4/5] max-w-md overflow-hidden border border-line ${
                  i % 2 === 1 ? "lg:order-2 lg:justify-self-end" : ""
                }`}
              >
                <Image
                  src={coach.image}
                  alt={`${coach.name}, ${coach.title} at Klemic Performance Method`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="kicker">{coach.title}</p>
                <h2 id={`coach-${i}`} className="display mt-3 text-4xl sm:text-5xl">
                  {coach.name}
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed text-mist">{coach.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kicker>Private Training Staff</Kicker>
            <h2 className="display mt-3 text-3xl sm:text-4xl">One-on-one coaching</h2>
            <ul className="mt-6 space-y-5">
              {privateStaff.map((coach) => (
                <li key={coach.name} className="border-l-2 border-gold pl-4">
                  <p className="display text-xl">{coach.name}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-mist">
                    {coach.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-center border border-line bg-panel p-8">
            <p className="display text-2xl">Train with the staff</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Schedule a private session or ask about facility training — call or email
              and we&rsquo;ll get you on the floor.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Cta href={site.privatePhoneHref} external>
                Call {site.privatePhone}
              </Cta>
              <Cta href={`mailto:${site.email}`} external variant="outline">
                Email Us
              </Cta>
            </div>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
