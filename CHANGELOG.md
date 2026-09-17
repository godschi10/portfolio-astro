# Changelog

## 0.3.0 — 2026-09-17

- Multi-page structure (King directive: a multi-page site like the WP themes, not a landing page): shared `src/layouts/Layout.astro` chrome (header, compact menu, footer, fonts, noindex) consumed by every page.
- New real route `/about/` — honest draft from the master-plan About spec with a visible "this page is a draft" notice; no invented bio, metrics or photo. About nav link is real on all pages.
- Homepage converted to consume the Layout; approved hero markup and responsive CSS preserved (768px/1024px/359px rules restored after extraction).
- Static multi-page checks (`scripts/check-multipage.mjs`): shared header/footer equality, per-route titles/h1, noindex + fixed light on both routes, all referenced assets exist. 4/4 passed.
- Unverified "100 PSI" claim removed from About. Contact remains a working mailto; Work/Services keep honest scope notices until their pages exist.
- Local build exit 0 (2 pages, 8.28s) and localhost serve-test passed (`docs/MULTIPAGE-LEG1-REPORT.md`). Browser visual/keyboard verification still outstanding.

## 0.2.0 — 2026-09-17

- Integrated the refined header/hero direction into the standalone Astro homepage; local integration only, not published or final-visual-approved.
- Fixed warm-light canvas, exact lowercase JetBrains Mono wordmark and ranking headline, no grain, desktop folio clearance retained.
- Added self-hosted 400/700/800 WOFF2 faces and upstream OFL license, BASE_URL-aware paths and font-display swap. No external font requests.
- Ported opaque compact navigation, modal focus containment/Escape/return and responsive CTAs. About/Services show an honest scope notice with a no-JS fallback; Work links to the existing pending work section.
- Preserved staging noindex and contact email; retained work placeholder without invented projects or metrics. Removed mockup review-note UI and unverified availability/experience copy.
- Added focused source/emitted-output checks and an integration report. Browser, accessibility and staging verification remain separate gates.

## 0.1.0 — 2026-09-17

### Added
- Initial project scaffold: `package.json`, `astro.config.mjs` (static output)
- `src/pages/index.astro` — standalone header + hero mockup with inline responsive CSS
- Responsive breakpoints: 360px (phone stacked), 768px, 1280px
- `prefers-color-scheme: dark` support
- Ivory / ink / violet palette — editorial typography, straight geometry
- Skip link, single h1, focus-visible rings
- GC letterform composition panel (labelled DESIGN STUDY — NOT A CLIENT PROJECT)
- Work anchor section (labelled pending)
- Contact mailto `hi@gwillchijioke.com`
- Footer note: "Header and hero concept only — draft copy"
- `docs/DESIGN-LANGUAGE.md` — provisional design language reference
- `README.md`
