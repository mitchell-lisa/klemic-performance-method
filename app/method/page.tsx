import type { Metadata } from "next";
import Image from "next/image";
import { gaitAnalysis, links, pillars } from "@/lib/site";
import { Cta, Kicker, Section, SectionHeading } from "@/components/ui";
import { FinalCta, StatStrip } from "@/components/sections";

export const metadata: Metadata = {
  title: "The Method — Four Pillars of Speed",
  description:
    "The Klemic Performance Method: an evidence-based training system built on four pillars — Acceleration, Initial Force Generation, Center of Mass Management, and Max Velocity.",
  alternates: { canonical: "/method" },
};

export default function MethodPage() {
  return (
    <>
      <Section className="pb-10 sm:pb-14">
        <Kicker>The Method</Kicker>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
          Speed isn&rsquo;t a gift. It&rsquo;s a system<span className="text-sky">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
          Over the past 20+ years, KPM has fine-tuned a unique, evidence-based training
          system using proprietary resistances that yield results at a profound rate.
          Every athlete is tested, profiled, and trained against four pillars.
        </p>
      </Section>

      {/* PILLARS */}
      <div className="border-t border-ink/30">
        {pillars.map((pillar, i) => (
          <section
            key={pillar.number}
            className="border-b border-ink/30 last:border-b-0"
            aria-labelledby={`pillar-${pillar.number}`}
          >
            <div
              className={`mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="display-ghost absolute -top-10 left-0 text-[7rem] sm:-top-14 sm:text-[10rem]"
                >
                  {pillar.number}
                </span>
                <h2
                  id={`pillar-${pillar.number}`}
                  className="display relative pt-14 text-4xl sm:pt-20 sm:text-5xl lg:text-6xl"
                >
                  {pillar.name}
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed text-mist">
                  {pillar.description}
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden border border-ink/30">
                <Image
                  src={pillar.image}
                  alt={`KPM athlete training — ${pillar.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* GAIT ANALYSIS */}
      <Section id="gait-analysis" className="border-t border-ink/30">
        <SectionHeading
          kicker="Where every athlete starts"
          title="Full Panel Gait Analysis"
          intro={gaitAnalysis.summary}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="kicker">What gets tested</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-ink/85 sm:grid-cols-3">
              {gaitAnalysis.tests.map((test) => (
                <li key={test} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-sky" />
                  {test}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-mist">
              After testing, athletes receive access to their results through the KPM
              client portal and app — an objective blueprint of their athletic profile —
              then select a training schedule based on their deficiencies and program
              availability.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta href={links.gaitAnalysisPurchase} external>
                Purchase Gait Analysis
              </Cta>
              <Cta href="/signup" variant="outline">
                See All Sign-Up Options
              </Cta>
            </div>
          </div>

          <div className="grid gap-px self-start border border-ink/30 bg-ink/25">
            {gaitAnalysis.dna.map((item) => (
              <div key={item.letter} className="flex gap-5 bg-panel p-6">
                <span className="display text-4xl text-sky">{item.letter}</span>
                <div>
                  <h4 className="display text-lg">{item.name}</h4>
                  <p className="mt-1 text-sm text-mist">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <StatStrip items={gaitAnalysis.stats} />
      <FinalCta />
    </>
  );
}
