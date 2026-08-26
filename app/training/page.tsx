import type { Metadata } from "next";
import Image from "next/image";
import { images, links, privateStaff, site } from "@/lib/site";
import { Cta, Kicker, Section } from "@/components/ui";
import { FinalCta } from "@/components/sections";

export const metadata: Metadata = {
  title: "Training Programs — Facility, Private, Young Guns, Online & SJRS",
  description:
    "Facility training, one-on-one private training, Young Guns youth development (ages 5–11), custom online programming, and the SJRS program — all built on KPM's evidence-based method in Somers Point, NJ.",
  alternates: { canonical: "/training" },
};

function ProgramSection({
  id,
  kicker,
  title,
  children,
  aside,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
  aside: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line" aria-labelledby={`${id}-h`}>
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Kicker>{kicker}</Kicker>
          <h2 id={`${id}-h`} className="display mt-3 text-4xl sm:text-5xl">
            {title}
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-mist">{children}</div>
        </div>
        <div className="self-start lg:pt-16">{aside}</div>
      </div>
    </section>
  );
}

function AsideCard({
  heading,
  items,
  children,
}: {
  heading: string;
  items?: string[];
  children?: React.ReactNode;
}) {
  return (
    <div className="border border-line bg-panel p-7">
      <p className="kicker">{heading}</p>
      {items ? (
        <ul className="mt-4 space-y-2.5 text-sm text-white/85">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {children}
    </div>
  );
}

export default function TrainingPage() {
  return (
    <>
      <Section className="pb-10 sm:pb-14">
        <Kicker>Training</Kicker>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
          Every path runs through the method<span className="text-gold">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
          Whether you train in the facility, one-on-one, online, or in the Young Guns
          program, every KPM athlete is tested first and trained against the four pillars.
        </p>
      </Section>

      {/* FACILITY TRAINING */}
      <ProgramSection
        id="facility"
        kicker="Group training · Somers Point"
        title="Facility Training"
        aside={
          <AsideCard
            heading="How it works"
            items={[
              "Step 1 — Full Panel Gait Analysis to build your athletic profile",
              "Step 2 — Monthly membership: three classes per week",
              "12-week evidence-based training cycles",
              "Sessions capped at 30 athletes",
              "Minimum three-month commitment",
            ]}
          >
            <div className="mt-6 flex flex-col gap-3">
              <Cta href="/signup" className="w-full">
                Facility Sign Up
              </Cta>
            </div>
          </AsideCard>
        }
      >
        <p>
          KPM&rsquo;s core program. Established in 2002 by David Klemic, facility training
          delivers 20+ years of time-tested, evidence-based training designed to create
          physical, neurological, and technical improvements through structured 12-week
          cycles.
        </p>
        <p>
          Weekly training splits across the pillars — an Acceleration day, an Initial
          Force Generation day, and a Center of Mass Management class — inside the 7,200
          sq ft facility at {site.address.label}.
        </p>
      </ProgramSection>

      {/* PRIVATE TRAINING */}
      <ProgramSection
        id="private"
        kicker="One-on-one"
        title="Private Training"
        aside={
          <AsideCard heading="Private training staff">
            <ul className="mt-4 space-y-4">
              {privateStaff.map((coach) => (
                <li key={coach.name}>
                  <p className="display text-lg">{coach.name}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-mist">
                    {coach.title}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Cta href={site.privatePhoneHref} external className="w-full">
                Call {site.privatePhone}
              </Cta>
            </div>
          </AsideCard>
        }
      >
        <p>
          Fully customized one-on-one sessions at the Somers Point facility — built around
          the athlete&rsquo;s sport, position, age, training history, and the specific
          gaps holding them back. Specific track work can be done offsite.
        </p>
        <p>
          Private training is the fastest way to improve because every rep gets coached,
          every detail gets corrected, and the program scales as the athlete does.
        </p>
      </ProgramSection>

      {/* YOUNG GUNS */}
      <ProgramSection
        id="young-guns"
        kicker="Youth development · Ages 5–11"
        title="Young Guns"
        aside={
          <AsideCard
            heading="How it works"
            items={[
              "Step 1 — Full Panel Gait Analysis (360° movement assessment)",
              "Step 2 — Young Guns monthly membership",
              "Three classes per week: Acceleration, Initial Force Generation, Max Velocity",
              "Minimum three-month commitment",
            ]}
          >
            <div className="mt-6 flex flex-col gap-3">
              <Cta href={links.gaitAnalysisPurchase} external className="w-full">
                Purchase Gait Analysis
              </Cta>
              <Cta
                href={links.youngGunsMembershipPurchase}
                external
                variant="outline"
                className="w-full"
              >
                Young Guns Monthly
              </Cta>
            </div>
          </AsideCard>
        }
      >
        <p>
          Youth athletic development built for ages 5–11 — the window where
          neuroplasticity is most malleable and speed and movement quality develop
          fastest.
        </p>
        <p>
          The results speak for themselves: KPM Young Guns as young as 9 have reached
          nearly a 30-inch vertical leap, and athletes as young as 6 have run 15+ miles
          per hour.
        </p>
      </ProgramSection>

      {/* ONLINE TRAINING */}
      <ProgramSection
        id="online"
        kicker="Remote coaching · $299/month"
        title="Online Training"
        aside={
          <AsideCard
            heading="What's included"
            items={[
              "Custom monthly programming for your sport, position & goals",
              "Video demonstrations with sets, reps & rest in the KPM app",
              "Monthly assessments to track progress",
              "Direct messaging access to coaches",
              "Anatomy, physiology & technical movement education",
              "Monthly recalibration based on your data",
            ]}
          >
            <div className="mt-6">
              <Cta href={links.onlineTrainingPurchase} external className="w-full">
                Sign Up — $299/mo
              </Cta>
            </div>
          </AsideCard>
        }
      >
        <p>
          Can&rsquo;t get to Somers Point? Online training delivers custom monthly
          programming built around your body and your goals — your sport, your position,
          your starting point.
        </p>
        <p>
          Onboarding starts with an intake covering goals, sport, position, and training
          history. Dave Klemic builds your program, you train through the KPM app with
          full video demonstrations, and the program recalibrates monthly based on your
          progress data.
        </p>
      </ProgramSection>

      {/* SJRS */}
      <ProgramSection
        id="sjrs"
        kicker="Partner program"
        title="SJRS Program"
        aside={
          <AsideCard heading="Sign up">
            <div className="mt-4 flex flex-col gap-3">
              <Cta href={links.sjrsCheckout} external className="w-full">
                Sign Up Today
              </Cta>
              <Cta href={links.sjrsCheckout} external variant="outline" className="w-full">
                Sign Up for Testing
              </Cta>
            </div>
          </AsideCard>
        }
      >
        <p>
          KPM&rsquo;s dedicated training program for SJRS student-athletes, with its own
          testing and registration. Questions about the program? Contact{" "}
          <a href={`mailto:${site.email}`} className="text-gold hover:text-gold-bright">
            {site.email}
          </a>{" "}
          or call{" "}
          <a href={site.phoneHref} className="text-gold hover:text-gold-bright">
            {site.phone}
          </a>
          .
        </p>
      </ProgramSection>

      {/* FACILITY PHOTO BREAK */}
      <div className="relative aspect-[21/9] min-h-72 w-full overflow-hidden border-t border-line">
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
