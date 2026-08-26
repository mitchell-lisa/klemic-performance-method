"use client";

/**
 * Re-mounts on every route change, giving each page a magazine
 * "page turn" entrance. Disabled automatically for users with
 * prefers-reduced-motion (see globals.css).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-turn">{children}</div>;
}
