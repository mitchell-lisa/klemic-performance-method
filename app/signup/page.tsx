import type { Metadata } from "next";
import Image from "next/image";
import { images, links, site } from "@/lib/site";
import { Cta, Kicker, Section, SectionHeading } from "@/components/ui";
import { SignupPathways } from "@/components/sections";

export const metadata: Metadata = {
  title: "Sign Up — Start Training at KPM",
  description:
    "Sign up for facility training at Klemic Performance Method in Somers Point, NJ. Clear paths for new athletes, veteran athletes, and Young Guns (ages 5–11).",
  alternates: { canonical: "/signup" },
};

export default function SignupPage() {
  return (
    <>
      <Section className="pb-10 sm:pb-14">
        <Kicker>Sign Up</Kicker>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
          Start <span className="text-sky">training</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
          Every KPM athlete starts with objective testing. Pick your path below — if
          you&rsquo;re not sure which applies, call{" "}
          <a href={site.phoneHref} className="text-sky-deep hover:text-ink">
            {site.phone}
          </a>{" "}
          and we&rsquo;ll sort it out in two minutes.
        </p>
      </Section>

      <Section className="pt-0">
        <SignupPathways />
      </Section>

      {/* This summer's actual schedule, pinned beside the program overview */}
      <Section className="border-t border-ink/30">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <Kicker>On the wall now</Kicker>
            <h2 className="display mt-3 text-4xl sm:text-5xl">
              Summer schedule<span className="text-sky">.</span>
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-mist">
              Established in 2002 by former Kansas City Chiefs fastest man David Klemic,
              KPM&rsquo;s training is powered by over 20 years of time-tested,
              evidence-based training that creates physical, neurological, and technical
              change in every athlete that completes a full 12-week training cycle.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist">
              After testing, athletes select their weekly classes based on deficiencies
              and current openings in the program.
            </p>
          </div>
          <figure className="w-full max-w-[340px] rotate-[1deg] border-2 border-ink bg-white p-2 shadow-[10px_10px_0_rgba(20,19,9,0.9)] justify-self-center lg:justify-self-end">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={images.summerSchedule}
                alt="KPM facility summer schedule 2026"
                fill
                sizes="340px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="pt-2 text-center font-cond text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-mist">
              Facility summer schedule
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section className="border-t border-ink/30">
        <SectionHeading
          kicker="Other ways to train"
          title="Private, online & account access"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="flex flex-col border border-ink/30 bg-panel p-7">
            <h3 className="display text-2xl">Private Training</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
              One-on-one sessions scheduled directly with our coaching staff.
            </p>
            <div className="mt-6">
              <Cta href={site.privatePhoneHref} external className="w-full min-h-11 text-xs">
                Call {site.privatePhone}
              </Cta>
            </div>
          </div>
          <div className="flex flex-col border border-ink/30 bg-panel p-7">
            <h3 className="display text-2xl">Online Training</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
              Custom monthly programming through the KPM app — $299/month.
            </p>
            <div className="mt-6">
              <Cta href={links.onlineTrainingPurchase} external className="w-full min-h-11 text-xs">
                Sign Up Online
              </Cta>
            </div>
          </div>
          <div className="flex flex-col border border-ink/30 bg-panel p-7">
            <h3 className="display text-2xl">Existing Account</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
              Already train with us? Sign in to your KPM athlete account.
            </p>
            <div className="mt-6">
              <Cta
                href={links.accountLogin}
                external
                variant="outline"
                className="w-full min-h-11 text-xs"
              >
                Account Sign In
              </Cta>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-ink/30" id="contact">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kicker>Contact</Kicker>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Questions? Ask a coach.</h2>
            <ul className="mt-8 space-y-4 text-lg">
              <li>
                <a href={site.phoneHref} className="text-sky-deep hover:text-ink">
                  {site.phone}
                </a>
                <span className="block text-xs uppercase tracking-[0.16em] text-mist">
                  Facility &amp; programs
                </span>
              </li>
              <li>
                <a href={site.privatePhoneHref} className="text-sky-deep hover:text-ink">
                  {site.privatePhone}
                </a>
                <span className="block text-xs uppercase tracking-[0.16em] text-mist">
                  Private training
                </span>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-sky-deep hover:text-ink">
                  {site.email}
                </a>
                <span className="block text-xs uppercase tracking-[0.16em] text-mist">
                  Email
                </span>
              </li>
            </ul>
          </div>
          <div className="self-center border border-ink/30 bg-panel p-8">
            <p className="display text-3xl">The facility</p>
            <p className="mt-3 text-mist">{site.address.label}</p>
            <p className="mt-1 text-sm text-mist">
              {site.facilitySize} · {site.sessionCapacity.toLowerCase()}
            </p>
            <div className="mt-6">
              <Cta href={site.mapsUrl} external variant="outline">
                Get Directions
              </Cta>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
