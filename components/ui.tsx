import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  external?: boolean;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const base =
  "inline-flex items-center justify-center gap-2 font-cond uppercase tracking-[0.14em] text-sm font-semibold transition-colors duration-200 min-h-12 px-7";

const variants = {
  solid: "bg-ink text-paper hover:bg-sky-deep hover:text-white",
  outline:
    "border-2 border-ink text-ink hover:border-sky-deep hover:text-sky-deep",
  ghost: "text-ink hover:text-sky-deep underline-offset-4 hover:underline px-0",
};

export function Cta({
  href,
  children,
  variant = "solid",
  external,
  className = "",
  ...rest
}: CtaProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    const isWeb = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker">{children}</p>;
}

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
}: {
  kicker: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Kicker>{kicker}</Kicker>
      <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {intro ? (
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-mist">{intro}</p>
      ) : null}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 sm:px-8 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M2 8h11M9 3.5 13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
      />
    </svg>
  );
}
