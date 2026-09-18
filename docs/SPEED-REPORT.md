# SPEED-REPORT — v0.14.17 (2026-09-18)

Measured with `du -b` on `dist/` bytes + `gzip -c | wc -c`. No Lighthouse scores
were collected on this box — nothing below is estimated.

## Per-page HTML bytes (dist, uncompressed)

| Page | Before (v0.14.16) | After (v0.14.17) | Delta |
|---|---|---|---|
| / (index.html) | 35174 | 35731 | +557 |
| /about/ | 27057 | 27575 | +518 |
| /services/ | 31216 | 31472 | +256 |
| /work/ | 23196 | 23452 | +256 |
| /work/portfolio/ | 24307 | 24563 | +256 |
| /work/androidscroll/ | 24288 | 24544 | +256 |
| /work/finance/ | 22318 | 22574 | +256 |
| /contact/ | 22548 | 22804 | +256 |
| /privacy/ | 22323 | 22579 | +256 |
| /terms/ | 21700 | 21956 | +256 |
| /404.html | 20644 | 20900 | +256 |

Gzip probes: index 8196 → 8328 (+132); about 7467 → 7598 (+131).

Why HTML grew: every page gains two font `<link rel="preload">` tags (~+256B);
index adds preconnect+dns-prefetch for the island feed origin (+~300B); about +
index gain `<picture>/<source srcset>` portrait markup (+~260B on those two).
`compressHTML: true` is now on (whitespace minification on all emitted HTML,
zero visual change) — it offsets part of the added tags but the net is positive
because the tags themselves are new bytes.

## Image payload (the real win)

| File | Bytes |
|---|---|
| gwill-portrait.png (fallback, kept) | 151037 |
| gwill-portrait-640.webp (new) | 12792 |
| gwill-portrait-320.webp (new) | 4916 |
| og-default.png (unchanged, social only, not render-blocking) | 59944 |

WebP-capable browsers now fetch 4916B (320w mobile) or 12792B (640w desktop)
instead of 151037B PNG on the two portrait pages — a measured saving of
~138–146KB per portrait view (~91–97%). PNG stays as `<img>` fallback.
About (LCP portrait): `fetchpriority="high"`, no lazy (above fold). Homepage
portrait (below fold): `loading="lazy"` kept.

## Fonts / CSS / JS

- Fonts: 3 × woff2 shipped (400: 21168, 700: 21908, 800: 21236 = 64312B total),
  `font-display: swap` inline, fallback `size-adjust:99.6%` retained. Only the two
  heading weights (800+700, ~43KB) are preloaded — 400 (rarely LCP) is not.
- CSS: per-route `_astro/*.css` unchanged except index hash rename
  (index 15700 → 15744, +44B from `picture{display:contents}`); contact 4190,
  work 4962, terms 5480, privacy 5793, androidscroll 8750, services 12477,
  about 13225. No render-blocking chains added (zero external CSS/JS).
- JS: zero render-blocking scripts. Menu + route-notice stay as the existing
  end-of-body inline script; the Android island stays a tiny end-of-body inline
  script (mount `#android-grid`, single `ANDROID_FEED_URL` constant, 1hr
  localStorage cache, silent fallback to build-time cards, textContent-only
  render). `preconnect` (+`dns-prefetch`) to https://androidscroll.com is set
  ONLY on `/` where the island fetches — no other page pays the handshake.

## Render-blocking / overflow

- Chains: no Google Fonts, no external CSS/JS, no blocking island fetch.
- 390px: added CSS is `picture{display:contents}` on two selectors only — it
  creates no box and cannot overflow. No fixed widths added; portrait caps
  (`min(320px,100%)`, `min(130px,40vw)` mobile float) untouched. Check gate
  green (42/42) which asserts referenced assets exist, including the new webp.
