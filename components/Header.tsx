"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { images, links, nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu on Escape.
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
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
          <span className="display text-base leading-none tracking-[0.08em]">
            Klemic
            <span className="block text-[0.62rem] font-medium tracking-[0.3em] text-mist">
              Performance Method
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-display text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors hover:text-gold ${
                pathname === item.href ? "text-gold" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={links.accountLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[0.8rem] font-medium uppercase tracking-[0.18em] text-mist transition-colors hover:text-gold"
          >
            Sign In
          </a>
          <Link
            href="/signup"
            className="inline-flex min-h-10 items-center bg-gold px-5 font-display text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-bright"
          >
            Sign Up
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 py-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display border-b border-line py-4 text-3xl hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={links.accountLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="display border-b border-line py-4 text-3xl text-mist hover:text-gold"
          >
            Account Sign In
          </a>
          <Link
            href="/signup"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex min-h-13 items-center justify-center bg-gold px-6 font-display text-base font-semibold uppercase tracking-[0.16em] text-ink"
          >
            Sign Up
          </Link>
          <div className="mt-8 text-sm text-mist">
            <a href={site.phoneHref} className="block py-1 hover:text-gold">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block py-1 hover:text-gold">
              {site.email}
            </a>
            <p className="py-1">{site.address.label}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
