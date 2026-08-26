import Image from "next/image";
import Link from "next/link";
import { images, links, site } from "@/lib/site";

/**
 * The approved poster hero. Authored on a 1440-wide canvas; every
 * coordinate is expressed in the unit --u = 100vw/1440 so the whole
 * composition scales as one piece. A separately composed variant runs
 * under 640px (its own 390-wide unit --m).
 */

const KPM_BLUE = "#2fa7d9";
const KPM_GREEN = "#a3b727";
const INK = "#141309";

const coverLines = [
  { lead: "The Method", rest: "four pillars of speed", href: "/method" },
  { lead: "Training", rest: "five ways in", href: "/training" },
  { lead: "Coaches", rest: "35+ yrs · 500+ NCAA", href: "/coaches" },
  { lead: "Alumni", rest: "Young Guns to the pros", href: "/alumni" },
];

const u = (n: number) => `calc(var(--u) * ${n})`;
const m = (n: number) => `calc(var(--m) * ${n})`;

function Scribble({ style }: { style?: React.CSSProperties }) {
  return (
    <svg aria-hidden="true" className="absolute" style={style} viewBox="0 0 800 244" fill="none">
      <path
        d="M 90 140 C 60 60, 320 8, 480 26 C 680 48, 790 92, 762 152 C 736 210, 470 240, 280 226 C 130 214, 70 186, 88 132"
        stroke={KPM_GREEN}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.95"
      />
    </svg>
  );
}

export default function HomeHero() {
  return (
    <>
      {/* ============ DESKTOP / TABLET POSTER (>= 640px) ============ */}
      <section
        aria-label="Klemic Performance Method"
        className="relative hidden select-none overflow-hidden sm:block"
        style={
          {
            "--u": "min(calc(100vw / 1440), 1.25px)",
            height: u(900),
            background: "var(--color-paper)",
            color: INK,
          } as React.CSSProperties
        }
      >
        {/* left rail */}
        <div
          className="absolute bottom-0 top-0"
          style={{ left: u(72), width: 1, background: "rgba(20,19,9,0.6)" }}
        />
        <p
          className="font-cond absolute font-semibold uppercase"
          style={{
            left: u(44),
            bottom: u(36),
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: `max(9px, ${u(11)})`,
            letterSpacing: "0.32em",
          }}
        >
          Speed &amp; athletic performance training — Somers Point, New Jersey
        </p>

        {/* masthead */}
        <h1
          className="font-display absolute uppercase"
          style={{
            left: u(96),
            top: u(-46),
            fontSize: u(430),
            lineHeight: 1,
            letterSpacing: "-0.055em",
            color: KPM_BLUE,
            zIndex: 2,
          }}
        >
          KPM
        </h1>

        {/* MOVE / LIKE — behind Dave */}
        <p
          className="font-display absolute uppercase"
          style={{ left: u(108), top: u(384), fontSize: u(168), lineHeight: 0.86, zIndex: 3 }}
        >
          Move
        </p>
        <p
          className="font-display absolute uppercase"
          style={{ left: u(236), top: u(534), fontSize: u(168), lineHeight: 0.86, zIndex: 3 }}
        >
          like
        </p>

        {/* Dave — dominant subject */}
        <div
          className="absolute"
          style={{
            left: "37%",
            bottom: u(-120),
            width: u(980),
            height: u(980),
            zIndex: 4,
            filter: `drop-shadow(calc(var(--u) * -34) calc(var(--u) * 24) 0 rgba(47,167,217,0.85))`,
          }}
        >
          <Image
            src={images.cutoutDave}
            alt="Dave Klemic, founder of Klemic Performance Method"
            fill
            priority
            sizes="(max-width: 1440px) 68vw, 980px"
            className="object-contain object-bottom"
          />
        </div>

        {/* A CHAMP. — in front, tilted, circled */}
        <div
          className="absolute"
          style={{ left: u(148), top: u(682), zIndex: 5, transform: "rotate(-2.2deg)" }}
        >
          <p className="font-display uppercase" style={{ fontSize: u(176), lineHeight: 0.86 }}>
            a champ<span style={{ color: KPM_GREEN }}>.</span>
          </p>
          <Scribble style={{ left: u(168), top: u(-42), width: u(800), height: u(244) }} />
        </div>

        {/* real logo, top-right */}
        <div className="absolute" style={{ right: u(40), top: u(30), zIndex: 6 }}>
          <Image
            src={images.logo}
            alt="Klemic Performance Method"
            width={168}
            height={67}
            priority
            className="h-auto object-contain"
            style={{ width: u(168) }}
          />
          <p
            className="font-cond mt-2 text-right font-semibold uppercase"
            style={{
              fontSize: `max(9px, ${u(10)})`,
              letterSpacing: "0.24em",
              color: "rgba(20,19,9,0.65)",
            }}
          >
            Est. 2002 · 10,000+ athletes trained
          </p>
        </div>

        {/* cover lines — real links */}
        <nav
          aria-label="Sections"
          className="absolute"
          style={{ right: u(40), top: u(348), width: u(218), zIndex: 6 }}
        >
          <p
            aria-hidden="true"
            className="font-display mb-3"
            style={{ fontSize: `max(11px, ${u(15)})`, letterSpacing: "0.06em", color: KPM_GREEN }}
          >
            ×××
          </p>
          <ul className="space-y-3">
            {coverLines.map((line) => (
              <li key={line.href}>
                <Link href={line.href} className="group block">
                  <span
                    className="font-display block uppercase leading-tight transition-colors group-hover:text-ink"
                    style={{ fontSize: `max(13px, ${u(19)})`, color: "var(--color-sky-deep)" }}
                  >
                    {line.lead}
                  </span>
                  <span
                    style={{ fontSize: `max(11px, ${u(13)})`, color: "rgba(20,19,9,0.8)" }}
                    className="leading-snug"
                  >
                    {line.rest}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* sprint sequence on the baseline */}
        <div
          aria-hidden="true"
          className="absolute flex items-end"
          style={{ left: u(636), bottom: u(40), gap: u(14), zIndex: 6 }}
        >
          {[images.cutoutHunter, images.cutoutNasir, images.cutoutTaboga].map((src) => (
            <div
              key={src}
              className="relative"
              style={{ width: u(66), height: u(66), filter: "grayscale(1) contrast(1.1)", opacity: 0.85 }}
            >
              <Image src={src} alt="" fill sizes="66px" className="object-contain object-bottom" />
            </div>
          ))}
        </div>

        {/* entry */}
        <Link
          href="/signup"
          className="font-display group absolute uppercase"
          style={{
            right: u(40),
            bottom: u(58),
            zIndex: 6,
            fontSize: `max(20px, ${u(38)})`,
            lineHeight: 1,
            color: INK,
          }}
        >
          Start training{" "}
          <span aria-hidden="true" style={{ color: KPM_BLUE }}>
            ↗
          </span>
          <span
            aria-hidden="true"
            className="mt-2 block w-full"
            style={{ height: u(6), background: KPM_BLUE }}
          />
        </Link>
        <a
          href={links.accountLogin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-cond absolute font-semibold uppercase hover:text-ink"
          style={{
            right: u(40),
            bottom: u(24),
            zIndex: 6,
            fontSize: `max(9px, ${u(10)})`,
            letterSpacing: "0.24em",
            color: "rgba(20,19,9,0.55)",
          }}
        >
          Athlete sign in →
        </a>

        {/* bottom caption */}
        <div className="absolute" style={{ left: u(96), bottom: u(28), right: u(430), zIndex: 6 }}>
          <div style={{ height: 1, background: "rgba(20,19,9,0.6)" }} />
          <p
            className="font-cond mt-2 font-semibold uppercase"
            style={{
              fontSize: `max(8px, ${u(10)})`,
              letterSpacing: "0.22em",
              color: "rgba(20,19,9,0.7)",
            }}
          >
            Klemic Performance Method — {site.address.label} — {site.phone}
          </p>
        </div>
      </section>

      {/* ============ MOBILE POSTER (< 640px) ============ */}
      <section
        aria-label="Klemic Performance Method"
        className="relative select-none overflow-hidden sm:hidden"
        style={
          {
            "--m": "calc(100vw / 390)",
            height: m(660),
            background: "var(--color-paper)",
            color: INK,
          } as React.CSSProperties
        }
      >
        <h1
          className="font-display absolute uppercase"
          style={{
            left: m(16),
            top: m(-14),
            fontSize: m(150),
            lineHeight: 1,
            letterSpacing: "-0.055em",
            color: KPM_BLUE,
            zIndex: 2,
          }}
        >
          KPM
        </h1>

        {/* The real KPM mark, set in the clear band under the wordmark — it
            used to sit on top of the blue KPM type, where it disappeared. */}
        <div className="absolute" style={{ left: m(18), top: m(140), zIndex: 6 }}>
          <Image
            src={images.logo}
            alt="Klemic Performance Method"
            width={750}
            height={300}
            priority
            sizes="160px"
            className="h-auto object-contain"
            style={{ width: m(124) }}
          />
        </div>

        <p
          className="font-display absolute uppercase"
          style={{ left: m(18), top: m(196), fontSize: m(64), lineHeight: 0.88, zIndex: 3 }}
        >
          Move
        </p>
        <p
          className="font-display absolute uppercase"
          style={{ left: m(64), top: m(254), fontSize: m(64), lineHeight: 0.88, zIndex: 3 }}
        >
          like
        </p>

        <div
          className="absolute"
          style={{
            right: m(-56),
            bottom: m(140),
            width: m(330),
            height: m(330),
            zIndex: 4,
            filter: `drop-shadow(calc(var(--m) * -14) calc(var(--m) * 10) 0 rgba(47,167,217,0.85))`,
          }}
        >
          <Image
            src={images.cutoutDave}
            alt="Dave Klemic, founder of Klemic Performance Method"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom"
          />
        </div>

        <div
          className="absolute"
          style={{ left: m(18), top: m(330), zIndex: 5, transform: "rotate(-2.2deg)" }}
        >
          <p className="font-display uppercase" style={{ fontSize: m(66), lineHeight: 0.88 }}>
            a champ<span style={{ color: KPM_GREEN }}>.</span>
          </p>
          <Scribble style={{ left: m(58), top: m(-16), width: m(300), height: m(92) }} />
        </div>

        {/* entry + est line */}
        <Link
          href="/signup"
          className="font-display absolute uppercase"
          style={{ left: m(18), bottom: m(84), zIndex: 6, fontSize: m(30), lineHeight: 1, color: INK }}
        >
          Start training{" "}
          <span aria-hidden="true" style={{ color: KPM_BLUE }}>
            ↗
          </span>
          <span
            aria-hidden="true"
            className="mt-1.5 block w-full"
            style={{ height: m(5), background: KPM_BLUE }}
          />
        </Link>
        <p
          className="font-cond absolute font-semibold uppercase"
          style={{
            left: m(18),
            bottom: m(56),
            zIndex: 6,
            fontSize: 10,
            letterSpacing: "0.22em",
            color: "rgba(20,19,9,0.65)",
          }}
        >
          Est. 2002 · 10,000+ athletes trained
        </p>

        <div className="absolute" style={{ left: m(18), bottom: m(20), right: m(18), zIndex: 6 }}>
          <div style={{ height: 1, background: "rgba(20,19,9,0.6)" }} />
          <p
            className="font-cond mt-1.5 font-semibold uppercase"
            style={{ fontSize: 8.5, letterSpacing: "0.18em", color: "rgba(20,19,9,0.7)" }}
          >
            {site.address.label} — {site.phone}
          </p>
        </div>
      </section>
    </>
  );
}
