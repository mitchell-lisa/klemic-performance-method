"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  /** aspect ratio classes for the wrapper, e.g. "aspect-[9/16]" */
  className?: string;
  /** ambient = autoplaying silent background film; feature = click-to-play */
  mode?: "ambient" | "feature";
  label?: string;
  posterSizes?: string;
};

/**
 * Video primitive for KPM's real footage (Wix media CDN).
 * The poster renders through next/image underneath the element so the frame
 * is always present even before the video can play; the video paints over it.
 */
export default function KpmVideo({
  src,
  poster,
  className = "",
  mode = "feature",
  label,
  posterSizes = "(max-width: 1024px) 100vw, 50vw",
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(mode === "ambient");
  const [started, setStarted] = useState(mode === "ambient");

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
      setStarted(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      <Image
        src={poster}
        alt={label ?? "KPM video"}
        fill
        sizes={posterSizes}
        className="object-cover"
      />
      <video
        ref={ref}
        src={src}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          started ? "opacity-100" : "opacity-0"
        }`}
        muted={mode === "ambient"}
        loop={mode === "ambient"}
        autoPlay={mode === "ambient"}
        playsInline
        controls={mode === "feature" && started}
        preload={mode === "ambient" ? "metadata" : "none"}
        onPlay={() => {
          setPlaying(true);
          setStarted(true);
        }}
        onPause={() => setPlaying(false)}
        aria-label={label}
      />
      {mode === "feature" ? (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pause: ${label ?? "video"}` : `Play: ${label ?? "video"}`}
          className={`absolute inset-0 z-10 flex items-end justify-start p-4 text-left transition-opacity ${
            playing ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <span className="inline-flex items-center gap-3 bg-ink/90 px-4 py-3 text-paper">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center bg-sky text-ink"
            >
              ▶
            </span>
            <span className="font-cond text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
              {label ?? "Play film"}
            </span>
          </span>
        </button>
      ) : null}
    </div>
  );
}
