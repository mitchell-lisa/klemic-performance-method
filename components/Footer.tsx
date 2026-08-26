import Link from "next/link";
import Image from "next/image";
import { images, links, nav, site } from "@/lib/site";

const programLinks = [
  { label: "Facility Training", href: "/training#facility" },
  { label: "Private Training", href: "/training#private" },
  { label: "Young Guns", href: "/training#young-guns" },
  { label: "Online Training", href: "/training#online" },
  { label: "SJRS Program", href: "/training#sjrs" },
];

const signupLinks = [
  { label: "New Athletes", href: "/signup" },
  { label: "Veteran Athletes", href: "/signup" },
  { label: "Account Sign In", href: links.accountLogin, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={images.logo}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-contain"
            />
            <p className="display text-lg leading-none">
              Klemic
              <span className="block text-[0.65rem] font-medium tracking-[0.3em] text-paper/60">
                Performance Method
              </span>
            </p>
          </div>
          <p className="display mt-5 text-2xl text-sky">Move Like a Champ</p>
          <p className="mt-4 text-sm leading-relaxed text-paper/60">
            Evidence-based speed &amp; athletic performance training.
            <br />
            Est. {site.established} · Somers Point, NJ
          </p>
        </div>

        <div>
          <p className="kicker text-sky">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-sky">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/signup" className="text-white/80 hover:text-sky">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="kicker text-sky">Programs</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {programLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-white/80 hover:text-sky">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="kicker text-sky">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky"
              >
                {site.address.label}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-sky">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-sky">
                {site.email}
              </a>
            </li>
            {signupLinks.map((item) =>
              item.external ? (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky"
                  >
                    {item.label}
                  </a>
                </li>
              ) : null,
            )}
          </ul>
          <div className="mt-5 flex gap-4">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KPM on Instagram"
              className="text-paper/60 hover:text-sky"
            >
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KPM on YouTube"
              className="text-paper/60 hover:text-sky"
            >
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="m10.5 9.5 4.5 2.5-4.5 2.5v-5Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-ink">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-display uppercase tracking-[0.2em]">
            Est. {site.established} · Somers Point, NJ
          </p>
        </div>
      </div>
    </footer>
  );
}
