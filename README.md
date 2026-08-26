# Klemic Performance Method — Website

Redesigned marketing site for [Klemic Performance Method](https://www.klemicperformancemethod.com) — an evidence-based speed & athletic performance training facility in Somers Point, NJ (est. 2002).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Editing content

All business facts, copy blocks, links, and imagery live in **`lib/site.ts`** — phone numbers, registration URLs, testimonials, programs, stats, coaches, and image sources. Edit that file rather than hunting through components.

Imagery is currently served from the existing Wix media CDN (`static.wixstatic.com`). To migrate images into the repo, download them into `public/` and update the URLs in `lib/site.ts`.

## Development

```bash
npm install
npm run dev    # local dev server
npm run build  # production build
npm run lint   # eslint
```

## Routes

`/` · `/training` · `/method` · `/coaches` · `/alumni` · `/signup`

External athlete registration and account login flow through `app.klemicperformancemethod.com` (unchanged from the original site).
