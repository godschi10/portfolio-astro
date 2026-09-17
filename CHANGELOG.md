# Changelog

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
