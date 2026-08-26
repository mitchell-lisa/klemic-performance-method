import Image from "next/image";
import { speedster } from "@/lib/site";

/**
 * THE KLEMIC TRAINING KIT — a small, quiet object page.
 * One product photograph sitting alone in a field of nothing, one caption.
 * The stillness IS the composition.
 */
export default function SpeedsterInsert() {
  return (
    <section
      id="speedster"
      aria-label="The Klemic Training Kit by Speedster"
      className="scroll-mt-20 border-b-2 border-ink bg-paper"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-24 text-center sm:px-8 lg:py-32">
        <a
          href={speedster.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <span className="relative block h-56 w-56 transition-transform duration-300 group-hover:-translate-y-1 sm:h-72 sm:w-72">
            <Image
              src={speedster.image}
              alt="The Klemic Training Kit by Speedster"
              fill
              sizes="288px"
              className="object-contain"
            />
          </span>
        </a>
        <p className="folio mt-8 text-sky-deep">Equipment</p>
        <h2 className="display mt-2 text-3xl sm:text-4xl">The Klemic Training Kit</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
          KPM&rsquo;s own training kit, sold through Speedster.
        </p>
        <a
          href={speedster.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 font-cond text-xs font-semibold uppercase tracking-[0.2em] text-sky-deep underline decoration-2 underline-offset-4 hover:text-ink"
        >
          Purchase at speedster.com ↗
        </a>
      </div>
    </section>
  );
}
