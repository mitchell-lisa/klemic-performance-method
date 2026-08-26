"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { images, links, nav, site, siteIndex } from "@/lib/site";

/**
 * Global chrome: a slim masthead bar plus the Index — a full-screen table
 * of contents that reaches every chapter of the publication.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Klemic Performance Method — home"
        >
          <Image
            src={images.logo}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-contain"
            priority
          />
          <span className="display text-base leading-none tracking-[0.02em]">
            Klemic
            <span className="block font-cond text-[0.62rem] font-semibold tracking-[0.3em] text-mist">
              Performance Method
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-cond text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-colors hover:text-sky-deep ${
                pathname === item.href ? "text-sky-deep" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={links.accountLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-cond text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-mist transition-colors hover:text-sky-deep"
          >
            Sign In
          </a>
          <Link
            href="/signup"
            className="inline-flex min-h-10 items-center bg-ink px-5 font-cond text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-sky-deep hover:text-white"
          >
            Sign Up
          </Link>
        </nav>

        {/* Index trigger — the publication's table of contents */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="site-index"
          className="flex h-11 items-center gap-2 px-2"
        >
          <span className="hidden font-cond text-[0.8rem] font-semibold uppercase tracking-[0.22em] lg:inline">
            {open ? "Close" : "Index"}
          </span>
          <span className="sr-only lg:hidden">{open ? "Close index" : "Open index"}</span>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M3 6h18M3 12h12M3 18h18" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
        </button>
      </div>

      {/* THE INDEX — full-screen contents */}
      <div
        id="site-index"
        className={`${open ? "block" : "hidden"} h-[calc(100dvh-4rem)] overflow-y-auto border-t-2 border-ink bg-paper`}
      >
        <nav
          aria-label="Site index"
          className="mx-auto grid w-full max-w-6xl gap-x-14 gap-y-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr] lg:py-14"
        >
          {siteIndex.map((section, s) => (
            <div key={section.heading}>
              <p className="kicker">{section.heading}</p>
              <ul className={`mt-4 ${s === 0 ? "" : "border-t-2 border-ink"}`}>
                {section.entries.map((entry, i) => {
                  const external = "external" in entry && entry.external;
                  const inner = (
                    <>
                      <span className="flex items-baseline justify-between gap-4">
                        <span
                          className={`display ${
                            s === 0 ? "text-3xl sm:text-4xl" : "text-lg"
                          } transition-colors group-hover:text-sky-deep`}
                        >
                          {entry.label}
                        </span>
                        <span className="folio shrink-0 text-sky-deep">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </span>
                      <span className="mt-0.5 block text-xs text-mist">{entry.note}</span>
                    </>
                  );
                  const cls = `group block border-b border-ink/25 py-3 ${
                    s === 0 ? "py-4" : ""
                  }`;
                  return (
                    <li key={entry.label}>
                      {external ? (
                        <a
                          href={entry.href}
                          target={entry.href.startsWith("http") ? "_blank" : undefined}
                          rel={entry.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className={cls}
                          onClick={() => setOpen(false)}
                        >
                          {inner}
                        </a>
                      ) : (
                        <Link href={entry.href} className={cls} onClick={() => setOpen(false)}>
                          {inner}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink pt-5">
              <p className="text-sm text-mist">
                {site.address.label} ·{" "}
                <a href={site.phoneHref} className="text-ink hover:text-sky-deep">
                  {site.phone}
                </a>
              </p>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-12 items-center bg-ink px-6 font-cond text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-sky-deep"
              >
                Start Training
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
