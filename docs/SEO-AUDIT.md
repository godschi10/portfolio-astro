# SEO Audit — portfolio-astro (staging) vs gwillchijioke-theme (production bar)

**Date:** 2026-09-18 · **Scope:** RESEARCH ONLY, no code changed.
**Astro:** `/home/ubuntu/portfolio-astro` (static, 8 routes: `/ /about/ /work/ /services/ /contact/ /privacy/ /terms/` + 404)
**Staging:** `https://godschi10.github.io/portfolio-astro/` (robots noindex — staging only, deliberate)
**Bar:** `/home/ubuntu/gwillchijioke-theme` (`inc/seo.php` + `inc/head.php`, plus `docs/SEO-AUDIT-2026-08-15.md`)

## Verdicts per area (present / partial / missing)

| # | Area | Verdict | Notes |
|---|------|---------|-------|
| 1 | Per-route `<title>` | **present** | All 8 routes + 404 pass unique titles via `Layout` props. Home: "Gwill Chijioke — Web Design, Development & SEO" (~46ch, within the ~60ch SERP comfort zone; theme front title is "Gwill Chijioke — Web Developer & SEO Specialist"). Others 20–35ch. No duplicates, no empty. |
| 2 | Meta descriptions | **present** | All routes + 404 pass unique descriptions via `Layout` props. All read within usable SERP length (~85–115ch). No duplicates site-wide. |
| 3 | Canonical URLs | **missing** | Zero `rel="canonical"` anywhere (`src/layouts/Layout.astro` emits none). Theme ships exactly one canonical per indexable view (`gwill_seo_output_canonical`, core `rel_canonical` removed to avoid dupes). |
| 4 | Open Graph tags | **missing** | No `og:*` tags at all. Theme ships `og:type/url/site_name/locale/title/description/image(+width/height)` + `article:*` dates for posts (`gwill_output_og_tags`, `inc/head.php` §4). |
| 5 | Twitter / X cards | **missing** | No `twitter:*` tags at all. Theme ships `summary_large_image` + `site/creator=@gwillchijioke` + title/desc/image. |
| 6 | Share image | **missing** | No OG image in `public/` (no `og-default.png` equivalent). Theme resolves featured image → CF Worker → `assets/og-default.png` fallback with real width/height (`gwill_og_image_url`, `inc/helpers.php`). |
| 7 | JSON-LD structured data | **missing** | Zero `application/ld+json` blocks. Theme ships: WebSite+SearchAction (every page), Person (sitewide, headshot image), Organization (front), Article (posts), BreadcrumbList (pages/posts/archives), ProfilePage (authors). |
| 8 | sitemap.xml | **missing** | Nothing in `public/` generates one; no Astro sitemap integration in `package.json` (only dependency is `astro`). Theme builds its own `/sitemap.xml` (posts/pages/CPTs, transient-cached) alongside core's. |
| 9 | robots.txt | **missing** (staging-correct) | No `public/robots.txt`. Currently harmless — staging relies on the site-wide `<meta name="robots" content="noindex,nofollow">` in `Layout.astro:16`, which is the deliberate staging posture. Required at production cutover (allow + `Sitemap:` line, mirroring the theme's `gwill_seo_robots_txt`). |
| 10 | Favicon / app icons + manifest | **missing** | No icon links, no `manifest.json` in Astro `<head>`. Theme ships full chain: `icon.svg`, 16/32/96 PNG, `favicon.ico`, `apple-touch-icon` 180, `manifest.json` (`gwill_output_favicon`, `inc/head.php` §2; source files in `assets/icons/`). |
| 11 | `theme-color` / viewport extras | **partial** | `charset` ✓, `viewport` ✓, `lang="en"` ✓ — but no `theme-color` (`#7c3aed` in theme) and viewport lacks `viewport-fit=cover`. Minor. |
| 12 | Heading hierarchy | **present** | Exactly one `<h1>` per route verified in all 8 pages + 404 (`index/about/work/services/contact/privacy/terms/404.astro`); logical `<h2>` sections beneath. One nit: `Layout.astro:87` renders the footer CTA as an `<h2>` on every page (after `<main>` — tolerable, but the theme keeps conversion headlines outside the heading outline or at lower weight; consider `<p>`). 404's recovery `<h2>` after its `<h1>` is fine. |
| 13 | Image alts | **present** | Single image asset (`public/images/gwill-portrait.png`) used twice, both with descriptive `alt="Portrait of Gwill Chijioke"` + explicit `width/height` (no CLS) + `loading="lazy"`/`decoding="async"` where appropriate. Work-card placeholders are CSS-only (no fake `<img>`, nothing to alt). No gaps; at content pass keep the rule: content images get descriptive alts, decorative stay `alt=""`. |
| 14 | Internal linking | **present** | Header nav + footer sitemap grid + in-page CTAs cross-link all 7 routes from every page; 404 offers 4 recovery links + home. Descriptive anchors throughout, no "click here". Staging note: hire-me CTAs intentionally point at `/contact/` (no `/hire-me/` route in staging — matches theme's hire-me funnel only at copy level). |
| 15 | 404 / noindex rules | **partial** | 404 copy + recovery UX is good, but the 404 emits the same indexable head as content pages (only the staging site-wide noindex covers it). Theme deliberately noindexes 404/search/archives/pagination via `wp_robots` (`gwill_seo_wp_robots`). At production cutover the Astro 404 needs its own `noindex` (and search-equivalent pages must never be indexed). |
| 16 | Performance basics (SEO-impacting) | **present** | Self-hosted fonts (`public/fonts/`, `font-display:swap`), inlined critical CSS, tiny inline scripts, zero external requests, no render-blocking third parties. Astro static output is structurally faster than the WP baseline. Nit: theme `<link rel="preload">`s the two critical heading weights (800/700); Astro defines them in an inline `<style>` with no preload hints — verify LCP/headline-flash on a real device before calling this done. |

## Staging-vs-production: what differs deliberately, what must flip

Deliberate staging posture (keep until cutover):
- `Layout.astro:16` — `<meta name="robots" content="noindex,nofollow">` site-wide. Correct for `godschi10.github.io` staging.
- `Layout.astro:20` — `<meta name="deployment" content="GitHub Pages staging — not production">`. Staging marker; strip at cutover.
- `astro.config.mjs` — `site: https://godschi10.github.io`, `base: /portfolio-astro`. Must become the production domain + `/`.

Production cutover checklist (do all at once, verify with a `curl` header/body pass):
1. Remove the site-wide `noindex,nofollow`; add per-view robots (index content routes; `noindex` the 404).
2. Remove the `deployment` meta tag.
3. Point `site`/`base` at the production origin; every canonical / OG URL / sitemap loc must use it.
4. Ship `robots.txt` (allow + `Sitemap:` line) and `sitemap.xml` covering all 7 routes.
5. Confirm OG/Twitter tags + share image resolve over absolute production URLs (relative OG URLs are ignored by scrapers).

## Ranked gap list (exact files to touch)

1. **No canonical URLs** — `src/layouts/Layout.astro` (add per-route `<link rel="canonical">` built from the production origin; keep exactly one per page, none on the 404).
2. **No OG / Twitter Card tags** — `src/layouts/Layout.astro` (port the theme's set from `inc/head.php` §4: `og:type/url/site_name/locale/title/description/image(+dims)`, `twitter:card/site/creator/title/description/image`; absolute URLs only).
3. **No share image** — `public/` (add an `og-default`-equivalent ~1200×630 image, e.g. `public/images/og-default.png`, and wire it as the fallback the way `gwill_og_image_url` does in the theme's `inc/helpers.php`).
4. **No JSON-LD** — `src/layouts/Layout.astro` (port from theme `inc/head.php` §5 + `inc/seo.php` §4: WebSite+SearchAction on every page, Person sitewide, Organization on `/`, BreadcrumbList on interior pages; skip Article/ProfilePage — no posts/authors in static staging).
5. **No sitemap.xml / robots.txt** — `public/robots.txt` (static file) + sitemap via `@astrojs/sitemap` in `astro.config.mjs` + `package.json` (or a static `public/sitemap.xml`); mirror the theme's rule that only canonical production URLs appear.
6. **No favicon / manifest chain** — `public/icons/` + `public/manifest.json` + links in `src/layouts/Layout.astro` (port `gwill_output_favicon`: `icon.svg`, 16/32/96 PNG, `favicon.ico`, `apple-touch-icon` 180, manifest; source art exists at `gwillchijioke-theme/assets/icons/`).
7. **404 indexable at production** — `src/pages/404.astro` or `Layout` (give the 404 its own `noindex` so the site-wide index flip at cutover doesn't make "Page not found" rankable; mirrors `gwill_seo_wp_robots`).
8. **Head nits** — `src/layouts/Layout.astro` (add `<meta name="theme-color" content="#7c3aed">`, add `viewport-fit=cover`; consider demoting the footer CTA `h2` at line 87 to a `<p>`).
9. **Font preload verification** — `src/layouts/Layout.astro` (confirm the inline `@font-face` weights don't flash/regress LCP vs the theme's preload of 800/700; add `<link rel="preload">` only if a device test shows the need).

## Top 5 (short version)

1. Canonicals — none exist; add one per page in `Layout.astro`.
2. OG/Twitter tags — none exist; port the theme's `inc/head.php` §4 set into `Layout.astro`.
3. JSON-LD — none exists; port WebSite+SearchAction / Person / Organization / BreadcrumbList.
4. sitemap.xml + robots.txt + favicon/manifest — none exist; theme's `inc/seo.php` + `inc/head.php` §2 are the spec.
5. Cutover flip — remove site-wide `noindex` + `deployment` meta, repoint `site`/`base` to production, noindex the 404.
