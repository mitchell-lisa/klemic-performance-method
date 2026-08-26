"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  className?: string;
  mode?: "ambient" | "feature";
  label?: string;
  posterSizes?: string;
};

export default function KpmVideo({
  src,
  poster,
  className = "",
  mode = "feature",
  label,
  posterSizes = "(max-width: 1024px) 100vw, 50vw",
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(true);

  // Autoplay when the video scrolls into view; pause when it leaves.
  // Muted is required for autoplay to be allowed by browsers.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            v.play().catch(() => {
              /* autoplay refused — poster stays, controls remain available */
            });
          } else if (!v.paused) {
            v.pause();
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
    if (!next) void v.play().catch(() => {});
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
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          started ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        onPlaying={() => setStarted(true)}
        onLoadedData={() => setStarted(true)}
        aria-label={label}
      />

      {mode === "feature" ? (
        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? `Unmute: ${label ?? "video"}` : `Mute: ${label ?? "video"}`}
          className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2.5 bg-ink/90 px-3.5 py-2.5 text-paper transition-colors hover:bg-ink"
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center bg-sky text-ink"
          >
            {muted ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
                <path d="m17 9 4 6M21 9l-4 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
                <path
                  d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
          <span className="font-cond text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
            {muted ? "Sound on" : "Sound off"}
          </span>
        </button>
      ) : null}
    </div>
  );
}
