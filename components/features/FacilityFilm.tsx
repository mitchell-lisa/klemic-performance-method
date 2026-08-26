import { site, videos } from "@/lib/site";
import KpmVideo from "@/components/KpmVideo";

/**
 * THE FLOOR, ON FILM — a full-bleed ambient strip of KPM's own facility
 * footage. Almost no words. The footage carries it.
 */
export default function FacilityFilm() {
  return (
    <section aria-label="Inside the facility, on film" className="relative border-b-2 border-ink">
      <KpmVideo
        src={videos.facilityFilm.src}
        poster={videos.facilityFilm.poster}
        mode="ambient"
        label="Inside the KPM facility"
        className="h-[46vh] min-h-[300px] w-full sm:h-[60vh]"
        posterSizes="100vw"
      />
      <p className="pointer-events-none absolute bottom-4 left-5 z-10 border-l-2 border-sky bg-ink/80 py-1 pl-3 pr-4 font-cond text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-paper sm:left-8">
        On film · {site.address.label}
      </p>
    </section>
  );
}
