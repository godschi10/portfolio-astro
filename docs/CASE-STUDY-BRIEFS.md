# Case-Study Briefs — portfolio-astro /work/ + /work/[slug]/

**Status:** RESEARCH ONLY — no code, no copy changes. Spec for the builder.
**Written:** 2026-09-18 UTC · **By:** @researcher
**Context:** `/work/` currently renders 3 explicitly unnamed placeholder cards (`src/pages/work.astro`); homepage `index.astro` mirrors 3 placeholders. King orders 3 real case studies below, in this fixed order: **1 → 2 → 3 → 1**.

**Sources actually read (nothing invented):**
- Live: `https://androidscroll.com` (homepage, full text) + `https://androidscroll.com/wp-json/wp/v2/types` (stack fingerprints)
- Live: `https://godschi10.github.io/portfolio-astro/work/` (confirmed placeholder state)
- DNS/HTTP probes 2026-09-18: `finance.gwillchijioke.com` = **NXDOMAIN** (unreachable); `gwillchijioke.com` = NXDOMAIN publicly (theme CHANGELOG confirms: live verification is on-box `/etc/hosts` truth only)
- Repo: `src/pages/*.astro` (all 8 routes), `src/layouts/Layout.astro`, `src/styles/interior.css`, `astro.config.mjs`, `docs/BRAND-INTAKE.md`, `docs/SITE-ARCHITECTURE.md`, `docs/DESIGN-LANGUAGE.md`
- Theme truth: `/home/ubuntu/gwillchijioke-theme/` — `style.css` (tokens, v1.9.17), `case-study.php` (§§1–8), `page-work.php`, `inc/helpers.php` (`gwill_work_items_defaults`), `README.md`/`CHANGELOG.md`

**Honesty rule (binding on builder):** only the facts below may ship as claims. Anything marked **TBD** needs King's word first. In particular: theme fallback copy claiming *"200-post blog / 180k+ annual organic visitors / 100 PSI mobile"* for AndroidScroll is **contradicted by the live site** (16 guides; 200 is the stated Dec-2026 goal) — do NOT use it.

---

## Project 1 — This portfolio site (gwillchijioke.com)

**What it is:** King's own portfolio — custom standalone WordPress theme (source of truth in `/home/ubuntu/gwillchijioke-theme/`) plus its static Astro port (this repo, staging on GitHub Pages). A design-system + performance + SEO showcase: the site sells the craft it is built with.

### Verifiable facts
1. **WP theme v1.9.17, zero dependencies on parents/builders.** Standalone theme, no parent; `Requires WP 6.1 / PHP 7.4 / plugin: advanced-custom-fields`. Audit trail in-repo: "Exhaustive Perfectionist capstone — 15/15 PASS", WCAG 2.2 AA pass, SEO + Cloudflare-cache + perf audits all closed in-cycle (`docs/` in theme).
2. **Full page inventory exists in theme:** front-page, about, work (`/work/`, asymmetric grid: first card full-width, rest half-width, via `template-parts/card-work.php`), services, hire-me, contact, process/uses/now/testimonials/faq/thank-you pages, `case-study.php` template (hero → problem → solution → results → screenshots → stack → prev/next → CTA), archive/search/404/single.
3. **Measured perf work (theme CHANGELOG, code-proven):** cache-HIT TTFB ~5ms avg, Brotli ~6.9x, WebP variants served via nginx rewrite (−71%/image), feed card images right-sized 155KB → ~45KB, fonts 1y immutable, PHP 8.3 + OPcache + Redis, 16KB autoload.
4. **Astro port (this repo):** Astro 5, `output: static`, staging at `godschi10.github.io/portfolio-astro`, 8 routes (`/ about work services contact privacy terms 404`), shared `Layout.astro` chrome (self-hosted JetBrains Mono 400/700/800 woff2, fixed-light, staging-wide noindex + deployment marker, WebSite+SearchAction / Person / Organization / BreadcrumbList schema mirroring `inc/head.php` + `inc/seo.php`). Homepage hero: "I design. I build. I make it rank." + approach.html code panel + live Lagos clock + `{yrs}+ yrs WordPress` (dynamic from 2019, mirrors theme's `gwill_years_experience` from Aug 2019).
5. **Design tokens (theme `:root`, Astro inherits):** `--bg #f7f6f3 · --surface #fff · --text #0d0d0d · --text-dim #6e6e6e · --purple #7c3aed · --green #00964e · --red #b91c1c · --gradient-brand 135deg purple→green`; mono stack `'NairaSign','JetBrains Mono',monospace`; spacing 4→128px scale; radii 4/8/12/20/9999; header 64px (shrunk 56px); wordmark `gwillchijioke.` lowercase bold with purple period + purple→green underline (BRAND-INTAKE).

### Screenshot-worthy detail (builder: capture these 3 views)
1. **Hero + approach panel** — mono headline, `approach.html` code panel (01 Design for people / 02 Build for speed / 03 Structure for search), meta row (Anambra NG · UTC+1 · live clock · yrs experience), marquee ticker (WordPress · SEO · Web Design · Cloudflare · Performance …).
2. **Work grid browser-frame cards** — frame bar (purple/green/dim dots + mono URL + `01` index pill), 16:9 visual, tag row, name + one-line desc.
3. **Case-study anatomy** — `work/[slug]/` crumb, "Case Study" eyebrow, tag pills, Role/Year/View-Live-Site meta, numbered 01 Problem / 02 Solution / 03 Results (number+suffix+label stat grid), screenshot gallery (first eager, rest lazy + srcset), "Built with" stack pills, prev/next nav, "Want results like this?" CTA → Hire Me.

### TBDs needing King's word
- [ ] Live production URL + permission to claim it (main domain not publicly resolvable today).
- [ ] Real PSI numbers (mobile/desktop) and any traffic/ranking claim — theme CTA draft says "targets 100"; needs a dated screenshot or it stays out.
- [ ] Slug: suggested `/work/portfolio/` — confirm.
- [ ] Screenshots: exports at 1200px+ (first = hero, eager).

---

## Project 2 — AndroidScroll (androidscroll.com)

**What it is:** King's live Android help publication — "The Android field manual". Practical, tested-on-mid-range-phones guides with an openly stated small library and public roadmap. Best EEAT story of the three (real byline, correction contact, published test method).

### Verifiable facts (all observed live 2026-09-18)
1. **Live + counted honestly:** homepage ledger reads — **16 guides · 54 comments · 37.7k words · est. 2019**; "site:status ● live" with `fix_guides 16 · quick_reads 8 ≤10min · shelves 7/19 · stocked 16/200`. No vanity metrics — the smallness is the brand.
2. **Real content depth:** "Top fixes" rail (e.g. *Android Problems: 16 Fixes That Work* — 24 min, 4,792 words, 3 comments; *Battery Draining Fast? 7 Fixes* — 11 min, 6 comments; Overheating; Storage-Full; *7 Charging mistakes* — 18 comments) + "Latest from the bench" chronology (newest Sep 17/16 2026: battery-health tests, Samsung secret codes, used-phone checks).
3. **Information architecture:** 4 pillar shelves (Troubleshooting & Fixes 6 live/14,680 words; Tips & Hidden Features 4; Guides & How-tos 6; Buying Guides 0 live — *"We won't tell you what to buy until we've broken one first"*, 6 sub-shelves slated Q1 2027, retail-bought + 2-week daily-drive verdicts); honest "money tree" section; desk (G-will Chijioke, writing since 2019, byline + correction email + comments policy), bench (Galaxy-A / Pixel-a / Redmi-Note class test devices, `how-we-test` page), numbers (16 / 54 / 12 shelves / 200-by-Dec-2026 goal).
4. **Stack fingerprints:** WP REST API live (`/wp-json/wp/v2/types` exposes posts/pages/media + **RankMath** schema templates + **ThirstyAffiliates**); served behind **Cloudflare** (`server: cloudflare`, `cf-cache-status`, NEL reporting, `cache-control: public, max-age=0, must-revalidate`); search UX is app-like (trending queries, keyboard-navigate palette, empty-state backlog CTA). Theme fallback called it "200-post / 180k visitors" — live site says 16 guides; use live numbers only.
5. **Key pages/routes for the case study to reference:** `/` (top fixes, ledger, pillar map, money tree, desk/bench/numbers), `/latest/`, `/category/{troubleshooting-fixes,tips-hidden-features,guides-how-tos,buying-guides}/`, `/how-we-test/`, `/contact/`, `/comments-policy/`, guide permalinks above.

### Screenshot-worthy detail (builder: capture these 3 views)
1. **Hero + honest ledger** — "Master your Android." + est-2019/comments/words line + live-counts strip (16 · 8 · 54 · 7/19 · 16/200) + Q&A terminal strip.
2. **Top-fixes rail** — numbered 01–05 cover cards (cover image, FIX tag, read time, category, comment + word counts).
3. **Pillar map + money-tree** — 4 shelf cards with live counts/word totals/battery-glyph stock honesty + the "won't tell you what to buy" empty-shelf statement (strong differentiator visual).

### TBDs needing King's word
- [ ] PSI / Core Web Vitals numbers + traffic (Search Console/GA) — nothing quotable observed; "100 PSI / 180k visitors" in theme defaults is UNVERIFIED, do not ship.
- [ ] Stack beyond fingerprints (theme? page builder? R2? Matomo?) — needs King or WP-admin truth.
- [ ] Role label: theme default says "Design + Development + SEO" — confirm.
- [ ] Slug: suggested `/work/androidscroll/` — confirm.
- [ ] Design tokens of AndroidScroll itself — not captured (research was content/architecture); builder should sample its CSS before styling the card/screenshots.
- [ ] Screenshots: homepage hero, a guide page, a category shelf (1200px+, light theme as served).

---

## Project 3 — Finance site (finance.gwillchijioke.com)

**What it is (per repo, site itself unreachable):** King's planned/second blog — personal finance in plain language. Case study will be thinner than the other two until the site ships; spec below keeps its slot honest.

### Verifiable facts
1. **Reachability (2026-09-18): `finance.gwillchijioke.com` is NXDOMAIN** — no DNS, no HTTP. `web_extract` refused it as private/internal; `curl -L` returned `http=000 size=0`. There is no live content to quote, screenshot, or metric.
2. **Repo intent is consistent everywhere:** desktop+mobile nav "Finance Blog ↗" (external, new tab), footer link, homepage `blog-preview-section--finance` ("Latest from the *finance blog*" + placeholder card *"Finance posts land here"*), contact page lists it, about page defines the beat: *"I also write about personal finance at finance.gwillchijioke.com — covering Nigerian personal finance, savings, and investment in plain language."*
3. **Theme reserves a matching slot:** `gwill_work_items_defaults()` slot 4 = "Finance Premium Theme — finance-focused premium theme: editorial layout, live ticker, 100 PSI mobile" (tags: WordPress/Premium Theme/Fintech). Whether Project 3 = a finance *blog* or the finance *premium theme* is ambiguous — flagged below. (Slot 5 = generic "Client Project" is out of scope for this 3-project cycle; note it so the builder doesn't wire 5 cards.)

### Screenshot-worthy detail — GAP, no live views exist
Builder: do NOT fabricate. When the site ships, capture (1) homepage/hero + ticker, (2) an article page, (3) a category/archive. Until then the card uses the same browser-frame placeholder treatment as today, labelled honestly.

### TBDs needing King's word (Project 3 has the most)
- [ ] Does the site exist anywhere (staging/local/other domain)? If yes, URL + access.
- [ ] Project identity: finance **blog** (repo links) vs finance **premium theme** (theme slot 4) — which one is case study #3?
- [ ] Real name, description, stack, pages/features, launch date.
- [ ] Any results at all (posts count, traffic, PSI) — expected answer today: none; spec the Results section as "Early days — TBD" rather than stats.
- [ ] Slug: suggested `/work/finance/` — confirm.
- [ ] Interim treatment decision: ship /work/ with 2 live + 1 "Coming soon" card, or hold all 3? Recommend the former; King decides.

---

## Shared spec — prev/next/all bottom navigation

Port of theme `case-study.php` §7 ("PREV / NEXT — premium card navigation", v1.8.16), adapted from the theme's date-ordered 5-page list to King's **fixed 3-project cycle**.

### Order (normative)
```
1 → 2 → 3 → 1 (wrap-around; every page always has BOTH neighbors)
Project 1 (portfolio) ⇄ Project 2 (androidscroll) ⇄ Project 3 (finance) ⇄ back to 1
```
- Prev/Next are **cyclical**, never empty: on Project 1, Prev = Project 3; on Project 3, Next = Project 1. (Theme renders empty placeholders at list ends; the cycle makes placeholders unreachable — builder: keep the placeholder element support for safety but it must never render with 3 published studies.)
- Suggested slugs (confirm with King): `/work/portfolio/` · `/work/androidscroll/` · `/work/finance/`.

### Anatomy (per theme, keep визуально + semantically)
1. `<nav class="case-nav" aria-label="Project navigation">` containing eyebrow `"Continue exploring"` + `.case-nav-inner` (3 columns: prev / all / next; stack vertically ≤767px).
2. **Prev card** `.case-nav-link.case-nav-link--prev`: 120×68 thumb (`loading="lazy"`, `alt=""` since decorative + `aria-hidden`, gradient fallback swatch when no image) → text stack (dir `"Previous project"` + title) → `←` arrow.
3. **Center link** `.case-nav-all` → `/work/` (Astro: `${base}work/`), label `"All Projects"` + `☰` icon.
4. **Next card** `.case-nav-link.case-nav-link--next`: mirror of prev (`→` first, then text `"Next project"` + title, then thumb).
5. **CTA follows nav** (theme §8): `"Want results like this?"` + sub + primary button. Note: theme points to `/hire-me/`; **Astro has no hire-me route** — point to `${base}contact/` and mark the headline/sub as TBD copy for King.

### Astro implementation notes (static, no JS needed)
- Compute prev/next at build from the fixed 3-item ordered array in a shared data file (single source for `/work/` grid + homepage section + case-study nav) — do NOT re-derive from filesystem dates (theme behavior, not portable).
- Thumbs: reuse each target study's card image at small size; `width="120" height="68"`.
- Guard: if a study is unpublished/draft (likely Project 3 initially), cycle among **published only**, and if fewer than 3 are published, fall back to theme behavior (missing side → placeholder `<span>`, center link always present).
- Touch: hover-lift/translate on nav cards must sit inside `(hover:hover) and (pointer:fine)` (theme cross-browser audit law); always keep `:active` press state + visible `:focus-visible` ring.
- A11y: nav `aria-label`, decorative thumbs `aria-hidden`, dir labels real text, titles in the link name.

### Copy (frozen except TBDs)
- Eyebrow: "Continue exploring" · Prev: "Previous project" · Next: "Next project" · Center: "All Projects" · CTA head TBD ("Want results like this?" proposed) · CTA button: "Hire Me" → contact page (label TBD: theme says Hire Me, Astro route is Contact).

---

## Builder handoff checklist
- [ ] Shared 3-item data file (slug, name, desc, tags, role, year, live URL, image, results[number|suffix|label], stack[], screenshots[]) drives grid + nav.
- [ ] `/work/` cards + homepage work section populated from it; placeholder prose removed only for shipped studies.
- [ ] Case-study template sections: hero (crumb `work/[slug]`, eyebrow, title, tags, Role/Year/Live link) → 01 Problem → 02 Solution → 03 Result (stat grid) → screenshots → Built-with → case-nav → CTA.
- [ ] Results grids contain ONLY verified numbers above; every other metric slot renders TBD/omitted — never a placeholder statistic.
- [ ] King decisions outstanding: 3 slugs, Project 3 identity + interim treatment, all PSI/traffic claims, CTA copy + button label, live URLs for Projects 1–2 cards.
