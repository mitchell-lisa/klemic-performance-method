import type { Metadata } from "next";
import Image from "next/image";
import { alumniGallery, testimonials } from "@/lib/site";
import { Kicker, Section, SectionHeading } from "@/components/ui";
import { FinalCta, TestimonialCard } from "@/components/sections";

export const metadata: Metadata = {
  title: "Notable Alumni & Results",
  description:
    "KPM alumni have gone on to compete at the NCAA and professional level. Hear from athletes, parents, coaches, and sports-medicine professionals.",
  alternates: { canonical: "/alumni" },
};

export default function AlumniPage() {
  return (
    <>
      <Section className="pb-10 sm:pb-14">
        <Kicker>Results</Kicker>
        <h1 className="serifhead mt-4 max-w-4xl text-6xl sm:text-7xl lg:text-8xl">
          Notable <span className="text-red">alumni</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
          More than 10,000 athletes have trained at KPM since 2002 — including 500+ NCAA
          athletes, 200+ Division I athletes, and 50+ professionals.
        </p>
        <p className="annotation mt-4">The contact sheet — hover to develop ↓</p>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-2 gap-px border border-ink/30 bg-ink/25 sm:grid-cols-3 lg:grid-cols-4">
          {alumniGallery.map((img, i) => (
            <div key={img.src} className="relative aspect-square overflow-hidden bg-panel">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover grayscale transition duration-300 hover:grayscale-0"
                loading={i < 4 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-ink/30">
        <SectionHeading
          kicker="In their words"
          title="What athletes, parents & pros say"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} featured={i === 0} />
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
