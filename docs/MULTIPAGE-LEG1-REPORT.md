# Multi-Page Leg 1 — Shared Layout + /about/ (Sep 17, 2026)

**Status: BUILT + SERVE-TESTED locally. NOT committed, NOT published. No visual/browser checks yet.**

King directive: portfolio is a MULTI-PAGE site (like the WP themes), not a single landing page.
This leg proves the multi-page structure end to end with the narrowest possible scope.

## What was built
- `src/layouts/Layout.astro` — shared chrome extracted from the homepage: head (noindex, fixed-light
  color-scheme), @font-face (BASE_URL-correct local WOFF2), skip-link, header/wordmark, desktop nav,
  compact menu + JS (focus trap, Escape, inert background, resize close), route-notice dialog, footer.
  Pages pass `title`/`description` props.
- `src/pages/index.astro` — homepage content only, consumes the Layout. All approved hero markup/CSS
  preserved (v0.2.0 direction untouched).
- `src/pages/about.astro` — real `/about/` route, honest draft: master-plan About positioning headline,
  honest "this page is a draft" notice (full bio/project list/photo not written), More About Me → email.
  No invented metrics, no photo, no testimonials.

## Manager corrections to @builder's blocked output (verification leg done by Manager)
Builder was blocked by a tool-approval gate before building/verifying; Manager verified and repaired:
1. **Removed unverified claim** "I built this site to 100 PSI" from About (cannot verify; struck).
2. **Restored responsive hero rules** to `index.astro` (768px: paddings, roles inline, actions row,
   button min-width; 359px: hero padding, cursor hidden) — omitted by the CSS extraction.
3. **Restored footer styles** (`footer`, `footer a`, `#portfolio-scope` scroll-margin) to `Layout.astro`.
4. **Contact stays mailto** (decision): email is a working honest action; the `/contact/` page arrives
   with its own leg per the 18-route architecture. Nav Work/Services keep the honest scope-notice dialog.

## Verification (actual output)
- Build: `NODE_OPTIONS=--max-old-space-size=384 npm run build` → **exit 0, 2 pages built in 8.28s**
  (`/index.html`, `/about/index.html`). Log: docs/QA-BUILD.log (appended).
- Serve-test (localhost, `/portfolio-astro/` prefix): JSON evidence in `docs/MULTIPAGE-LEG1-HTTP.json`:
  - `/portfolio-astro/` → 200; `/portfolio-astro/about/` → 200
  - both: shared wordmark header ✓, `noindex,nofollow` ✓, no 100-PSI claim ✓, About link present ✓
  - every referenced CSS/WOFF2 asset on both routes → 200
- `git diff --check` → clean.

## Changed files (uncommitted)
- `src/layouts/Layout.astro` (new), `src/pages/index.astro` (M), `src/pages/about.astro` (new)
- `docs/MULTIPAGE-LEG1-HTTP.json` (evidence), this report.

## Not done here (honest)
- No git commit/push/publish — publish leg follows the architecture report + King's verdict.
- No real-browser visual/keyboard verification; no multi-width captures.
- Version bump (0.3.0) + CHANGELOG/README updates happen at the publish leg per batch law.
