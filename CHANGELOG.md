# Changelog

## 0.14.11 — 2026-09-18

- About hero portrait centered at mobile (King phone-verdict): the figure sat left-aligned at 390px (`justify-self:start` in the single-column hero grid) — now `justify-self:center` below 768px so the portrait sits centered in the viewport. Desktop ≥768px rule (`justify-self:end` beside the headline) untouched, copy verbatim, width cap `min(320px,100%)` unchanged so no 390px overflow. 31/31 checks.

## 0.14.10 — 2026-09-18

- Legal section headers sit flush with body copy on privacy + terms (King phone-verdict): every clause h2 carried the theme section-47 purple dot (`h2::before` 6px dot + `gap:var(--space-3)` flex row = header text pushed 22px right of body text) — dot and flex row dropped identically on both pages so headers align flush left with paragraphs. Same-version ride-along (King catch): homepage teaser hold panels straight-bottomed — the v0.14.9 panel-level radius:0 couldn't defeat the theme-verbatim rounded `.work-card__frame` + `overflow:hidden` clip, so the grey placeholder still rendered round-bottomed; the homepage frame is now square at the bottom (`border-radius:var(--radius-lg) var(--radius-lg) 0 0`, top stays theme-rounded), work page frame was already square. src/ grep confirms these are the only two placeholder instances (contact matches are input placeholder attributes, untouched). Copy verbatim, desktop untouched except the flagged components, no overflow. 31/31 checks.

## 0.14.9 — 2026-09-18

- Work-card screenshot placeholders go straight-bottomed site-wide (homepage `.work-card__image-wrap--hold` grey "Screenshot lands with the case study" panels + work page `.work-card__image-wrap` / `.work-card__placeholder` panels): ports the theme's verbatim `.work-card__image-wrap{border-radius:0}` (style.css work-cards v1.8, dropped in the Astro port) and adds King's explicit `border-bottom-left/right-radius:0` on both placeholder panels, so the panels no longer inherit the frame's rounded bottom corners. Copy verbatim, desktop untouched, no overflow. 31/31 checks.

## 0.14.8 — 2026-09-18

- Homepage about-snippet portrait keeps theme-verbatim mobile framing at 390px: restores the theme's `height:auto` on `.about-photo` (style.css §24, dropped in the Astro port), so the 640px image height attribute can never dictate layout height — the photo renders as the theme's 130px square (float right, text wrap) with the full face visible instead of a tall cropped strip cut off at the viewport edge. Copy verbatim, desktop untouched, no overflow. 31/31 checks.

## 0.14.7 — 2026-09-18

- Privacy + terms pages as full theme ports (page-privacy.php, page-terms.php): legal hero (crumb, Legal label, theme h1, Last-updated pill), sticky TOC sidebar, all clause blocks with copy verbatim, section-47 legal styles + shared page-hero styles ported (scoped under .legal-page; decorative noise/grid/glow omitted per work-port precedent, data-animate omitted — no animation JS in staging). Static "Last updated: September 5, 2026" matches the templates' last-modified date (theme v1.8.74); legal email hi@gwillchijioke.com per theme doctrine. QA gate headings updated to theme h1s (Privacy Policy / Terms & Conditions) with theme-copy + section-id assertions. 31/31 checks.

## 0.14.6 — 2026-09-18

- Homepage about snippet shows King's real Gravatar (same local `images/gwill-portrait.png` asset as the about page); mobile photo treatment now matches the WordPress theme verbatim (float:right, min(130px,40vw), text wraps, tight gradient offset, clearfix) instead of the centered hold. Copy verbatim, desktop ≥768px untouched. 31/31 checks.

## 0.14.5 — 2026-09-18

- All staging/draft warning boxes removed site-wide (about honest-notice + work/services/contact/privacy/terms draft-notices, dead CSS in pages + interior.css, draft wording in meta descriptions/eyebrows/footer tagline); contact hero stack tightened to theme v1.8.10 uniform 24px rhythm (contact-info gap space-6→space-4, children already margin:0); homepage portrait centered at mobile (photo frame float:right→centered block, desktop ≥768px untouched). Copy otherwise verbatim. 31/31 checks.

## 0.14.4 — 2026-09-18

- CTA + draft-notice top/bottom symmetry to theme rhythm (about/work/services/contact + privacy/terms): availability lines had no margin reset (staging lacks the theme's global reset, so ~16px UA paragraph air sat above the CTA) — now margin:0 as the theme computes; draft notices were one-sided (about/work/services margin-top only, contact margin-bottom only, legal 24px/40px) — now symmetric margin-block with theme spacing (space-6 on about/work/services, space-5 on contact/legal). Copy verbatim, no overflow. 31/31 checks.

## 0.14.3 — 2026-09-18

- Availability CTA bands tightened to theme section rhythm (about/work/services): 64px top/bottom pads become clamp(24px,3vw,48px), the verbatim theme section-top value from v0.14.1 — about CTA drops from 440px to ~360px at 390px width. Copy verbatim, no overflow. Contact panels and privacy/terms scanned: already on slim rhythm, untouched. 31/31 checks.

## 0.14.2 — 2026-09-18

- Draft notices slimmed site-wide (about/work/services/contact + privacy/terms via interior.css): 258–344px dashed boxes become quiet 16px strips with small caps headings; QA text kept verbatim. About stale photo line removed (portrait is live). 31/31 checks.

## 0.14.1 — 2026-09-18

- About section rhythm fixed to exact theme values: section tops were 48px, theme uses 24px (measured 96px gaps vs theme 72px at phone width). Now padding-top clamp(24px,3vw,48px), padding-bottom clamp(48px,8vw,128px) verbatim. 31/31 checks.

## 0.14.0 — 2026-09-18

- About portrait: King's real Gravatar (godschi10@gmail.com) replaces the monogram hold — B&W on teal, 640px local asset. 31/31 checks.

## 0.13.0 — 2026-09-18

- Contact page as full theme port (page-contact.php): split layout, dark info panel (crumb, Let's talk, availability, email/response/location, 5 socials), theme-styled form side kept as disabled preview (no backend in staging; QA gate enforces it). 31/31 checks.

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
