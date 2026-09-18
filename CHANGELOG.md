# Changelog

## 0.12.0 — 2026-09-18

- Services page as full theme port (page-services.php): dark hero + 4-fact proof strip, 4 accordion services (native details, verbatim copy), 4 packages with ₦ prices, 4 maintenance plans, consulting rates, international pricing, closing CTA. Hire-me links point at /contact/ (no hire-me route in staging); "100 PSI" reworded per no-fabrication gate. QA gate updated to theme copy, 31/31 checks.

## 0.11.0 — 2026-09-18

- Work page as full theme port (page-work.php + card-work.php): crumb/label hero, asymmetric grid, browser-frame cards with dots + URL bar + index chips, theme CTA (Hire Me + View Services). Slots stay explicitly unnamed placeholders, no fake links/images. QA gate updated to new markup, 31/31 checks.

## 0.10.0 — 2026-09-18

- About page as full theme port (page-about.php + style.css): crumb/label hero with portrait slot (monogram hold till King's photo), dark hook band, story / skills / beyond sections with verbatim theme copy, availability CTA with Hire Me + View Work. 31/31 checks.

## 0.9.1 — 2026-09-18

- Hero meta + scroll cue as exact theme port: dotted mono items, green pulsing live clock, build-computed experience years (from Aug 2019, same start date as theme helper), meta above CTAs, absolute bottom-center Scroll cue with animated drop line, hidden on short viewports. 31/31 checks.

## 0.9.0 — 2026-09-18

- Theme mobile drawer port (header.php + style.css): dark slide-in panel, 01–06 numbered links incl. Tech + Finance Blog externals, socials, purple Hire Me CTA, dimmer + focus trap + Escape. About photo slot with monogram hold (needs King's portrait). 31/31 checks.

## 0.8.1 — 2026-09-18

- Removed staging descriptive texts King flagged: hero tagline + bottom caption, About staging para, blog hold line. Hero now ends in the theme's own meta row (Anambra NG / UTC+1 / live Lagos clock) + Scroll hint; buttons in theme order (View Work ↓, Hire Me →).

## 0.8.0 — 2026-09-18

- Homepage sections rebuilt as 1:1 theme port (front-page.php + style.css): theme marquee (10 items, · separators, gradient every 4th), section-header rows (eyebrow + headline + right link), browser-frame work cards with index pills + tag chips, services rows with numbered badges + ↗ toggles + Get a Quote, theme About heading + copy, Writing/blog header. Holding honest: stats band (needs King's real numbers), screenshots (pending case studies), blog cards (no feed yet). 31/31 checks.

## 0.7.0 — 2026-09-18

- Homepage body per master-plan §10 (hero untouched): dark marquee strip (pauses on hover, still under reduced-motion), Selected Work asymmetric grid with three honest unnamed placeholders, What I Do accordion mirroring Services page copy, About snippet, Tech Blog preview with honest hold lines. Stats bar HELD — no verified numbers, and the 100-PSI claim stays banned. Final CTA not duplicated (theme footer is the CTA). 31/31 checks.

## 0.6.0 — 2026-09-18

- Theme footer port: `src/layouts/Layout.astro` footer replaced with the WordPress theme's `template-parts/footer.php` structure and `style.css` rules, ported 1:1 — dark band, `gwillchijioke` outline watermark, `performs` shimmer headline, Start A Project CTA, five social buttons (X / GitHub / LinkedIn / mail / tech) with theme brand hovers, Navigation + Elsewhere columns, `© 2026 Gwill Chijioke` bottom bar with live Privacy/Terms links.
- New `privacy.astro` + `terms.astro` draft pages so footer legal links resolve.
- Checker: skips SVG data-URI fragments (`url(%23noise)` in theme `--noise` var). 31/31 across 8 pages.

## 0.5.0 — 2026-09-17

- Real footer per master-plan §9 (gwillchijioke.com): `Let's build something that performs.` CTA with Start A Project → `/contact/` + `or email:` mailto fallback; brand + Navigation + Elsewhere columns; `© 2026 Gwillchijioke · Privacy · Terms` legal line.
- Honesty holds: no `Built with WordPress` claim on this Astro build; Twitter/LinkedIn omitted (profile addresses unconfirmed, holding for King); Privacy/Terms are unlinked text until real production routes exist.
- Removed the dead `#portfolio-scope` anchor (no remaining references).

## 0.4.0 — 2026-09-17

- Leg 2 staging candidate: real `/services/`, `/work/`, `/contact/` draft routes + branded `/404/` (master-plan specs 1511–1550, 1692–1714, 2297–2316). Six pages, static checks 25/25. Independent source review: `docs/MULTIPAGE-LEG2-REVIEW.md`.
- Review fixes: 404 Go Back only intercepts with a same-origin referrer (history.length is not proof; otherwise follows the home link); Services disclosures stay native-toggleable at all widths (no wide-screen click suppression, indicator always visible); hero CTAs retargeted into the multi-page funnel (Hire Me → `/contact/`, View Work → `/work/`, visuals untouched) and the home `#work` teaser links to the Work page.
- Intentional staging deferrals, not bugs: disabled contact preview (no backend), unnamed Project 1/2/3 placeholders, unconfirmed service terms/availability. Browser visual/keyboard verification outstanding at release time.

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
