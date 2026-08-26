import Image from "next/image";
import Link from "next/link";
import { images, links, site } from "@/lib/site";

/**
 * /concept — single-viewport homepage hero study (1440×900).
 * One composed poster, not assembled UI. Production untouched.
 */

const KPM_BLUE = "#2fa7d9";
const KPM_GREEN = "#a3b727";
const INK = "#141309";
const FIELD = "#f1f0ea";

const coverLines = [
  { lead: "The Method", rest: "four pillars of speed", href: "/method" },
  { lead: "Training", rest: "five ways in", href: "/training" },
  { lead: "Coaches", rest: "35+ yrs · 500+ NCAA", href: "/coaches" },
  { lead: "Alumni", rest: "Young Guns to the pros", href: "/alumni" },
];

export default function ConceptPage() {
  return (
    <div
      className="relative h-[100svh] w-full select-none overflow-hidden"
      style={{ background: FIELD, color: INK }}
    >
      {/* concept-only: suppress global chrome so the viewport is one poster */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "header{display:none!important}footer{display:none!important}main{padding-top:0!important}body::after{display:none!important}",
        }}
      />
      {/* left rail — vertical caption + hairline */}
      <div
        className="absolute bottom-0 top-0"
        style={{ left: 72, width: 1, background: "rgba(20,19,9,0.6)" }}
      />
      <p
        className="font-cond absolute font-semibold uppercase"
        style={{
          left: 44,
          bottom: 36,
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontSize: 11,
          letterSpacing: "0.32em",
        }}
      >
        Speed &amp; athletic performance training — Somers Point, New Jersey
      </p>

      {/* masthead — giant KPM in the brand blue, JOCK-scale */}
      <h1
        className="font-display absolute uppercase"
        style={{
          left: 96,
          top: -46,
          fontSize: 430,
          lineHeight: 1,
          letterSpacing: "-0.055em",
          color: KPM_BLUE,
          zIndex: 2,
        }}
      >
        KPM
      </h1>

      {/* MOVE / LIKE A — behind Dave */}
      <p
        className="font-display absolute uppercase"
        style={{ left: 108, top: 384, fontSize: 168, lineHeight: 0.86, zIndex: 3 }}
      >
        Move
      </p>
      <p
        className="font-display absolute uppercase"
        style={{ left: 236, top: 534, fontSize: 168, lineHeight: 0.86, zIndex: 3 }}
      >
        like
      </p>

      {/* Dave — dominant subject, feet cropped, blue offset silhouette */}
      <div
        className="absolute"
        style={{
          left: "37%",
          bottom: -120,
          width: 980,
          height: 980,
          zIndex: 4,
          filter: `drop-shadow(-34px 24px 0 rgba(47,167,217,0.85))`,
        }}
      >
        <Image
          src={images.cutoutDave}
          alt="Dave Klemic, founder of Klemic Performance Method"
          fill
          priority
          sizes="980px"
          className="object-contain object-bottom"
        />
      </div>

      {/* CHAMP. — in front of Dave, tilted, circled in logo green */}
      <div
        className="absolute"
        style={{ left: 148, top: 682, zIndex: 5, transform: "rotate(-2.2deg)" }}
      >
        <p
          className="font-display uppercase"
          style={{ fontSize: 176, lineHeight: 0.86 }}
        >
          a champ<span style={{ color: KPM_GREEN }}>.</span>
        </p>
        <svg
          aria-hidden="true"
          className="absolute"
          style={{ left: 168, top: -42, width: 800, height: 244 }}
          viewBox="0 0 800 244"
          fill="none"
        >
          <path
            d="M 90 140 C 60 60, 320 8, 480 26 C 680 48, 790 92, 762 152 C 736 210, 470 240, 280 226 C 130 214, 70 186, 88 132"
            stroke={KPM_GREEN}
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* real logo, top-right, small — the authentic mark */}
      <div className="absolute" style={{ right: 40, top: 30, zIndex: 6 }}>
        <Image
          src={images.logo}
          alt="Klemic Performance Method"
          width={168}
          height={67}
          priority
          className="h-auto w-[168px] object-contain"
        />
        <p
          className="font-cond mt-2 text-right font-semibold uppercase"
          style={{ fontSize: 10, letterSpacing: "0.24em", color: "rgba(20,19,9,0.65)" }}
        >
          Est. 2002 · 10,000+ athletes trained
        </p>
      </div>

      {/* cover lines — right of Dave, JOCK list energy, real links */}
      <nav
        aria-label="Sections"
        className="absolute"
        style={{ right: 40, top: 348, width: 218, zIndex: 6 }}
      >
        <p
          aria-hidden="true"
          className="font-display mb-3"
          style={{ fontSize: 15, letterSpacing: "0.06em", color: KPM_GREEN }}
        >
          ×××
        </p>
        <ul className="space-y-3">
          {coverLines.map((line) => (
            <li key={line.href}>
              <Link href={line.href} className="group block">
                <span
                  className="font-display block uppercase leading-tight transition-colors group-hover:text-ink"
                  style={{ fontSize: 19, color: KPM_BLUE }}
                >
                  {line.lead}
                </span>
                <span className="text-[13px] leading-snug" style={{ color: "rgba(20,19,9,0.8)" }}>
                  {line.rest}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* sprint sequence — the athlete as analytical material */}
      <div
        aria-hidden="true"
        className="absolute flex items-end"
        style={{ left: 636, bottom: 40, gap: 14, zIndex: 6 }}
      >
        {[images.cutoutHunter, images.cutoutNasir, images.cutoutTaboga].map((src, i) => (
          <div
            key={src}
            className="relative"
            style={{ width: 66, height: 66, filter: "grayscale(1) contrast(1.1)", opacity: 0.85 }}
          >
            <Image src={src} alt="" fill sizes="66px" className="object-contain object-bottom" />
          </div>
        ))}
      </div>

      {/* entry — typographic, not a pill */}
      <Link
        href="/signup"
        className="font-display group absolute uppercase"
        style={{ right: 40, bottom: 58, zIndex: 6, fontSize: 38, lineHeight: 1, color: INK }}
      >
        Start training{" "}
        <span aria-hidden="true" style={{ color: KPM_BLUE }}>
          ↗
        </span>
        <span
          aria-hidden="true"
          className="mt-2 block h-[6px] w-full transition-colors"
          style={{ background: KPM_BLUE }}
        />
      </Link>
      <a
        href={links.accountLogin}
        target="_blank"
        rel="noopener noreferrer"
        className="font-cond absolute font-semibold uppercase hover:text-ink"
        style={{
          right: 40,
          bottom: 24,
          zIndex: 6,
          fontSize: 10,
          letterSpacing: "0.24em",
          color: "rgba(20,19,9,0.55)",
        }}
      >
        Athlete sign in →
      </a>

      {/* bottom caption — real information as graphic material */}
      <div
        className="absolute"
        style={{ left: 96, bottom: 28, right: 430, zIndex: 6 }}
      >
        <div style={{ height: 1, background: "rgba(20,19,9,0.6)" }} />
        <p
          className="font-cond mt-2 font-semibold uppercase"
          style={{ fontSize: 10, letterSpacing: "0.22em", color: "rgba(20,19,9,0.7)" }}
        >
          Klemic Performance Method — {site.address.label} — {site.phone}
        </p>
      </div>
    </div>
  );
}
