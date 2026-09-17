# Leg 2 browser QA — PASS (staging, Sep 17 2026 ~20:00 UTC)

Target: `https://godschi10.github.io/portfolio-astro/` (Pages build `built` for pages-dist `6663da1`; all five routes served byte-identical to `dist/`). Browser: Obscura/Chrome 145 via CDP, session `leg2-qa`. No source edits came out of this pass.

## Phone 390px (home)

- Exact title `Gwill Chijioke — Web Design, Development & SEO`, exact H1 `I design. I build. I make it rank.`
- Horizontal overflow `0`. Menu hidden by default. CTAs resolve to `/portfolio-astro/contact/` and `/portfolio-astro/work/`.
- Screenshot `docs/phone-390-home.png` visually reviewed: wordmark legible, headline unclipped, CTAs stacked full-width, code panel renders. Two vision-model notes dispositioned, both non-defects: the light layer peeking below the dark code card is the approved offset-backplate design (`.folio::before`), and the `←!—` reading is a model misread of the correctly emitted `<!--` comment markup.
- Menu keyboard: Enter on toggle opens + focus moves inside; Escape closes + focus returns to the toggle.

## Phone 390px (services)

- Four disclosures, closed by default; summary activation natively toggles (Enter then click returned it to closed — two genuine native toggles, no wide-screen suppression remains). All four quote links → `/portfolio-astro/contact/`. Overflow `0`.

## Tablet 768px (all five routes)

- Overflow `0` on home, about, services, work, contact.

## Desktop 1440px

- Services: all four disclosures open by default, overflow `0`.
- Work: 3 cards, 0 images (placeholders honest), closing CTA → `/portfolio-astro/contact/`.
- Contact: fieldset disabled, Send button disabled, real `mailto:hi@gwillchijioke.com` present.
- About: correct H1, draft notice present, overflow `0`.

## 404 routing

- Unknown path returns HTTP 404 with the branded page; body byte-matches `dist/404.html` (motif, four recovery routes, Go Back/Home).

## Not covered here

- Screen-reader/AT pass, reduced-motion and 359px rendering (CSS rules present, unobserved), contact delivery (no backend by design), case-study content (awaiting King's project list).
