# Homepage design brief — gwillchijioke

**Date:** 2026-09-17 (UTC) · **Owner:** @researcher
**Status:** Research handoff complete; direction proposed, NOT implemented or visually approved.
**Project:** Standalone Astro full-portfolio redesign. Review staging only: https://godschi10.github.io/portfolio-astro/. No code, build, git, deployment, production, WordPress, DNS, migration, redirect or service changes in this task.

## 1. Authority and citation key

Current task instructions govern authorization. The supplied main-portfolio brand/spec governs identity; external references inform craft, not requirements. The existing digest records prior observations, not freshly verified user approval. AndroidScroll remains a separate identity; it can be a portfolio project, not the source of the portfolio's branding.

Exact local citation keys (line numbers refer to the inspected files, not rendered pages):
- **MP**: `/home/ubuntu/.hermes/cache/documents/doc_6e871ac65d57_gwillchijioke-master-plan-1.md` (10,102 lines).
- **LG**: `/home/ubuntu/.hermes/cache/documents/doc_9c3b672cdee2_gwillchijioke-main-logo-1.html` (348 lines).
- **BI**: `/home/ubuntu/portfolio-astro/docs/BRAND-INTAKE.md` (121 lines).
- **RD**: `/home/ubuntu/portfolio-astro/docs/REFERENCE-DIGEST.md` (33 lines).
- **IX**: `/home/ubuntu/portfolio-astro/src/pages/index.astro` (511 lines at inspection).

MP is dated 2025 (MP 1–4), includes two sites, and appends substantial design material AFTER its apparent ending and 50-section TOC (MP 5925–5975). Therefore the first homepage section is not the whole specification. Later additions are captured below; incompatible versions are exposed rather than silently normalized. BI is explicitly partial (BI 108–117); this brief extends it, not retroactively changes what its author read.

## 2. Binding identity and visual foundation

- Name/handle: `gwillchijioke` / `@gwillchijioke`; positioning: **Web dev · Designer · SEO** (MP 139–143; MP 247–260). Keep a personal practitioner voice, not an invented anonymous studio.
- Main wordmark: **`gwillchijioke.`**, lowercase; **JetBrains Mono 700**; purple period `#7c3aed`; purple→green underline `#7c3aed`→`#00c96e`; light presentation primary (MP 146–156). LG 84–116 supplies the implementation reference: tracking −0.04em, line-height 1, no wrapping, period 800, 1px period offset, 2px underline 6px below, opacity 0.7. LG 119–122 are specimen sizes, not mandatory header sizes.
- Palette: warm light `#f7f6f3`, white surfaces `#ffffff`, border `#e4e2dc`, ink `#0d0d0d`, primary purple `#7c3aed`, secondary green `#00c96e`, historical dim `#9a9a9a` (MP 224–233). **Always light; no theme toggle AND no `prefers-color-scheme` adaptation** (MP 235–242).
- Dark accent panels are allowed within this light site: the marquee and final CTA explicitly use dark backgrounds (MP 1111–1115; MP 1278–1281). “Light always” does not mean every component must be white.
- Do not import the tech-blog prompt-logo, global fixed-dark canvas or terminal-green `#00ff91` identity (MP 173–209; MP 213–242). The main site has its own code-comment motif (MP 1100; MP 7659–7661).
- Craft standard: designer-who-codes, strong hierarchy, deliberate space, responsive feedback, one visual idea per section (MP 5944–5967). Real work, real metrics and professional communication must carry the claim (MP 7644–7677). Do not publish the plan's example stats as measured facts.

## 3. Header and navigation requirements

### Main specification

**Desktop ≥1024px:** sticky top, 64px header, warm-light background, lower border `#e4e2dc`, logo left and nav right. Links: **About / Work / Services / Tech Blog ↗ / Hire Me →**. Hire Me is black primary action; Tech Blog is explicitly external/new-tab (MP 887–899; breakpoints MP 477–485). Actual destination availability is not established by this research; no domain work is implied.

**Tablet 768–1023px:** logo left, hamburger right, same sticky behavior (MP 902–909).

**Mobile 320–767px:** hamburger opens full-screen dark overlay; vertical About, Work, Services, Tech Blog ↗, Contact; full-width Hire Me action and close × at top right (MP 911–925). Keep text strongly legible against dark, retain visible focus and meaningful button labels. Keyboard operation, logical tab order and no keyboard trap are binding (MP 4087–4108). MP heading/search inspection also located a toggle/focus-trap/Escape-close instruction at MP 5102; its surrounding JS section was not fully read.

### Premium details, not a new identity

Main nav uses mono, 14px/600, tracking 0.02em, ink on active/hover and a purple underline; active underline full-width, hover half-width (MP 7264–7295). Treat active page semantics as an implementation requirement, not a purely decorative line. The later Hire Me specification is mono 13px/700, dark solid, 4px radius, purple hover, moving arrow and a 1px press response (MP 7323–7349).

**Conflict to carry into design:** RD 4 and RD 30 describe the original black *pill*, while MP specifies a 4px button. The loaded portfolio workflow also records a later user correction keeping Hire Me visible below 1024px and removing header blur for scroll performance; these are secondary historical records, not fresh approval or measurements in this task. Proposed resolution: keep the conversion action visible beside the hamburger at compact widths; retain the source logo and dark CTA hierarchy; use the MP 4px shape and a solid light sticky background in the first mockup, with both departures from the older pill/blur presentation explicitly reviewable. Do not infer that the minimal tablet diagram forbids an always-visible CTA.

## 4. Hero and typography requirements

### Content and hierarchy

The explicit homepage headline on **all three devices** is:

> I design. I build.
> I make it rank.

(MP 1056–1090.) The developer cue is `<!-- turning ideas into fast, ranked websites -->`; View Work and Hire Me are the two actions; availability is a green pulsing dot plus “Available for projects” (MP 1061–1100). Desktop/tablet actions share a row; mobile actions stack (MP 1066; MP 1081; MP 1095–1097). The original diagram places availability after actions; RD 4 records it above the title. Keep its content/function, expose positioning as a design decision rather than an exact binding DOM order.

Later elevation calls for warm-light subtle grain, an oversized tight headline and a refined mono code-comment panel (MP 5973–6027): comment text 14–18px fluid, 16px × 24px padding, 6px radius, 420px maximum, pale fill, border and 3px purple left accent. Availability is mono 13px with an 8px `#00c96e` dot and 2-second halo animation (MP 6029–6057). This conflicts with the later mobile text floor; do not blindly reproduce 13px labels on phones.

### Typeface and scale

- **JetBrains Mono for all headings** (MP 3550), logo, code/technical labels and CTA treatment; system sans for body (MP 442–459; MP 560–583). BI's “font on both sites” does not require all prose to be mono.
- Base scale: H1 64/40/32px desktop/tablet/mobile at 800 and −0.04em tracking; H2 40/32/26 at 700; H3 28/22/20 at 700; body 18/17/16 at 400, line-height 1.8; caption 14 (MP 442–452).
- Later elevated hero: `clamp(48px, 8vw, 96px)`, 800, tracking −0.04 to −0.06em, leading 1.0–1.1 (MP 5992–5999).
- Later typography chapter: **`clamp(36px, 8vw, 96px)` for the main hero**, H2 `clamp(24px, 4vw, 40px)`, H3 `clamp(20px, 2.5vw, 28px)`; continuous scaling, no font-size breakpoint overrides (MP 6606–6625). This is the recommended starting scale, not proof that the exact line breaks fit a particular viewport.
- Main headings may isolate emphasis in purple; logo/headings enable kerning, ligatures and contextual alternates (MP 6642–6655; MP 6667–6677). Tracking also has a later competing formula (MP 6680–6685); see conflicts below.
- Self-hosted JetBrains Mono, WOFF2, appropriate weights, `font-display: swap` and a size-adjusted fallback are the source intent (MP 3546–3614). The R2 hostname and Google Fonts link in the specimen are **not** instructions to configure infrastructure or load Google's font endpoint in Astro. MP 3574–3576 calls “logo” 800 generically; the explicit main-logo 700 specification and supplied LG 88 take precedence over that generic note.

### What is proposed, not binding copy/design

RD 4, RD 14–19 and RD 24–30 describe a richer original: gradient phrase/cursor, dark terminal, metadata, dot grid and glow. These are valuable recorded identity cues, but the underlying screenshot/live site was not reopened here. They do **not** override the supplied MP headline with “I design experiences.” They also do not prove current availability or experience. Preserve visual richness without copying AndroidScroll or inventing factual credentials.

## 5. Full homepage scope beyond the first viewport

A full-portfolio redesign cannot finish as the current hero stub. Binding content structure in the inspected main-homepage section:

| Section | Required content / responsive implication | Source |
|---|---|---|
| Marquee | WordPress, SEO, Web Design, Cloudflare, Performance, Branding; dark contrast strip; pause on hover; slower/smaller mobile | MP 1104–1115 |
| Selected Work | First project full-width, next two half-width on desktop/tablet; mobile full-width stack; screenshot, tags, case-study action | MP 1120–1150 |
| Services | Numbered Web Development, Web Design, SEO, Tech Consulting; desktop/tablet expanded; mobile accordion | MP 1155–1184 |
| Proof band | Desktop/tablet row, mobile 2×2; actual verified metrics only; no automatic reuse of 100/2+/20+/#1 examples | MP 1189–1206; MP 7644–7677 |
| About | Gwill's performance/design/search positioning, optional personal photo, More About Me action; old phone sketch puts photo above copy | MP 1210–1237 |
| Blog preview | Three real posts, desktop/tablet three columns, mobile full-width stack; external Visit link | MP 1242–1264 |
| Final CTA | “Let's build something that performs.”, Start A Project, hi@gwillchijioke.com; full-width dark section | MP 1269–1281 |

MP 980–1012 describes the main footer, including navigation/social/legal groups. Its “WordPress + GeneratePress” and 2025 stamp are historical, not appropriate Astro claims. The later full footer chapter was located but not read; footer design remains a later handoff scope.

## 6. One proposed direction: warm-light precision, with earned depth

**A personal designer-developer portfolio, not a generic studio landing page and not a terminal publication.** Use the exact mono wordmark on a warm-light sticky header; ink navigation with precise purple active detail; a visibly primary dark Hire Me action.

Hero: start with the source headline **“I design. I build. I make it rank.”** in JetBrains Mono 800. Make the ranking phrase the single emphasis. Proposal: use a restrained purple→main-green gradient (not teal) and a nonessential cursor to preserve the richer original's energy; ensure text remains legible throughout the gradient and keep a solid-purple fallback. The gradient/cursor treatment is explicitly a proposal from RD, not mandated by MP's purple-span example. Keep a small availability line only if confirmed current.

Use a dark, bounded terminal-style interpretation of the source code comment as the one supporting visual, not another generic slogan or a fake command output. It should be subordinate to the headline and conversion action, with deliberate tonal layering rather than decorative clutter. This is a proposed adaptation of the pale comment panel in MP 6013–6026, justified by the original terminal recorded in RD 4 and RD 14; it is not falsely described as an exact MP requirement. Subtle grain supplies depth on the light canvas. Do not simultaneously maximize grain, dot grid, glow, cursor and halo.

On wide screens, propose a text-led asymmetric composition with the terminal on the right and a shared alignment rhythm; the diagram does not itself prescribe a two-column hero. On smaller screens, order headline → comment panel → action pair → confirmed metadata/status without compressing typography into illegibility. View Work remains the secondary exploration route; Hire Me is the consistent primary conversion path. The next section immediately offers real work rather than more marketing adjectives. Selected Work's large-first/small-following rhythm then carries the visual interest down-page.

**Reference applications:** 35mm supplies hierarchy contrast, Treize grammes supplies brand/navigation grouping and balanced visual/text zones, Eric Jordan supplies a short role-led opening followed by named work and direct contact paths. Keep Gwill's mono, exact palette, service mix and personal voice; import no foreign serif, camera, corporate client, dark global theme or software dependency.

## 7. Responsive implications and verification handoff

| Viewport | Proposed application within the source requirements |
|---|---|
| Mobile 320–767 | Full-screen accessible menu, minimum 16px side padding; retain visible Hire Me if fitting alongside the unbroken wordmark and hamburger. Never solve crowding by shrinking link hit areas. Stack hero actions, permit headline wrapping, full-width comment/work panels, service accordions, proof 2×2. Primary facts and CTAs must not become hover-only. |
| Tablet 768–1023 | Compact header/menu rather than squeezed desktop links; source tablet actions side-by-side where fit. Prefer a stacked hero until real text widths justify a split. Work item 1 full-width, items 2/3 paired per explicit tablet diagram; blog three-up only with readable content. |
| Desktop ≥1024 | Full navigation/64px sticky bar; text-led two-zone hero is proposed, not mandated. Use 96px-scale hero breathing room only where composition earns it; work asymmetry and shared baselines make depth intentional rather than empty. |

Sources: breakpoints MP 477–485; spacing MP 461–475 and MP 7063–7078; containers MP 7080–7091; compact text/target rules MP 7479–7485. The later explicit minimum is **48×48px for every mobile link/button/icon**, not a 44px default. Body must never be below 16px. MP 7609–7615 goes further (“No text below 16px on mobile”), conflicting with earlier captions/nav/availability sizes; first mockup should honor the stronger legibility rule and record exceptions, not hide them.

Prepared checks for the next owner (NOT executed here): phone 320/390, tablet 768/1023, desktop 1024/1440; wordmark must not clip; no unintended horizontal scroll; real font loaded; logical focus order despite visual grid placement; menu open/close/Escape/focus return; readable gradient endpoints; minimum target sizes; sticky header must not cover anchors; reduced-motion/static alternatives for cursor/pulse/marquee/reveals. Main focus and accessibility requirements: MP 844–855; MP 4070–4143. Source stats explicitly skip counting under reduced motion (MP 5476–5483); no-JS content should remain understandable (handoff recommendation).

Mockups, then rendered device checks and King's verdict remain necessary. The manager's prior 1440px geometry/build result is context, not repeated or independently verified here; no screenshot or production approval is claimed.

## 8. Three verified external design references

Verified 2026-09-17 through actual public-page `web_extract` reads, starting from RD 5–9. Gallery entries link to original sites and give dated static captures; they are not proofs of current responsive behavior. Two gallery images were inspected with the image-analysis tool; its descriptions are qualitative, not measured CSS. No external page instructions were executed.

| Reference and verified URL | Actual evidence returned | Concrete applicable lesson / limit |
|---|---|---|
| **35mm** — https://supahero.io/hero/35mm | Page title “35mm Hero Section - Supahero”; film-photography description; June 23, 2025; original link https://35mm-one.vercel.app/. Gallery image inspected: https://pub-26e6aa63ed7942ecb7e9dbc72f09f164.r2.dev/heroes/35mm.webp — large “TIMELESS CRAFT” display, small technical metadata, wireframe camera and peripheral framing. | Use sharp contrast between the hero statement and readable mono metadata, and balance a supporting visual against text. Do not transplant the camera, dark canvas, tiny type or pseudo-controls. No live interaction/mobile behavior verified. |
| **Treize grammes** — https://supahero.io/hero/treize-grammes | Page title “Treize grammes Hero Section - Supahero”; growth-stage company description; October 29, 2024; original link https://www.13g.fr/. Gallery image inspected: https://pub-26e6aa63ed7942ecb7e9dbc72f09f164.r2.dev/heroes/treize-grammes.webp — left brand, grouped right navigation/contact, tactile visual opposite display title and subordinate copy. | Keep logo recognition separate from grouped navigation; give one supporting visual a deliberate zone and align text to a clear grid. Transfer hierarchy, not its serif, sage palette, capsule nav or 3D toggle. Static image cannot verify dropdown behavior or exact border width. |
| **Eric Jordan** — https://supahero.io/hero/eric-jordan and https://ericjordan.design/ | Gallery title and November 4, 2024 description identify creative technical leadership. Current original page was also read: “Designer. Director.”, strategy/design positioning, named Cash App work images and numbered projects, Home / Book Call / Send Email, attributed testimonial. | Pair a short personal role statement with concrete work immediately; make project identification and direct contact obvious. For Gwill this means real owned work and Hire Me/email, NOT borrowing Eric's clients or testimonials. Current content differs from the old gallery, so RD's older shadow/gray-step claims are not newly confirmed. |

Supporting discovery reads also succeeded for https://supahero.io (named entries), https://navbar.gallery (static/fullscreen/navigation pattern taxonomy), and https://rivet.design (reference-led exploration product with graphic assets and feature hierarchy). These are not additional binding requirements, and Rivet is not installation authorization.

**Exact evidence limitation:** first image calls used an invalid zero-area crop `[0,0,0,0]`; corrected to full image bounds. 35mm and Treize then succeeded. Eric's corrected image call failed: `Gemini HTTP 503 (UNAVAILABLE): This model is currently experiencing high demand. Spikes in demand are usually temporary. Please try again later.` Its page and original-site text reads succeeded; no tooling diagnostics or retries beyond that were pursued. Eric's panel shadows, spacing and motion therefore remain unverified visually in this pass.

## 9. Concrete current-code mismatches — read-only inventory

These are static source observations, not browser findings. IX was read in full; nothing in it was modified.

| Finding | Inspected current source | Binding comparison / qualification |
|---|---|---|
| Automatic dark theme directly contradicts identity | IX 28–37, IX 51–53, IX 68–70 | MP 235–242 forbids system-preference theming. This is a clear defect, not a design-option debate. |
| Main palette drifts | IX 18–25: `#F8F9FA`, `#111`, teal `#0f766e`, green `#22c55e`; IX 250 gradient uses teal | MP 224–233 and MP 6995–7003 define different main values. Dark terminal itself is not a global-light violation; custom palette must be reconciled. |
| Missing branded type and underline | IX 44 body sans inherited by logo/H1; IX 106–115 logo 800/−0.03em, no underline; no font load in IX 7–445 | MP 146–155 / LG 84–116 require mono 700 main wordmark and underline; MP 3550 requires mono headings. Body sans is correct. |
| H1 typography and message drift | IX 236–243 uses 900 and 44–76px; IX 468–471 says “I design. I build. I design experiences.” | MP 1058–1059 explicitly includes ranking; MP 5994–5997 / MP 6620 define 800 and a 96px ceiling. RD's alternate phrase is not binding approval. |
| Header functionality/coverage absent | IX 98–104 only flex/padding, no sticky/border/64px; IX 450–460 only Work and Contact, mailto Hire me | MP 887–925 requires fuller nav, sticky header and compact menu. No About/Services/Tech Blog or hamburger overlay exists in this file. Link to existing email is not a functioning site-wide navigation replacement. |
| Compact nav hidden rather than replaced | IX 156–159 hides nav only below 480; no menu button/script anywhere in IX | MP 902–925 requires tablet/mobile menu; MP 477–485 uses 768/1024 transitions. Current hero breakpoint 900 (IX 173–179) also differs from source device tiers. |
| Hero lacks explicit Hire Me action | IX 493–496 uses View work + “Let us talk” mailto | MP 1066–1097 requires View Work + Hire Me in the hero. Header Hire me remains present; do not falsely call it absent site-wide. |
| Small UI type and target floor are below later source rules | IX 215–219 badge 12, IX 282–290 meta 12.5, IX 378–390 terminal 12/13.5, IX 154 links min-height 44 | MP 7479–7485 requires mobile 48×48 targets; MP 7614–7615 sets stronger text floors. A 44px minimum does not guarantee every actual target fails, but fails to enforce the required floor. Rendered sizes not measured here. |
| Paragraph leading and scale not the body specification | IX 44–45 body leading 1.6; IX 273–279 intro 17/1.7 at every width | MP 449–450: 18/17/16 and 1.8. Later headline scale differences are separately unresolved, not justification for arbitrary body values. |
| Full-homepage content is missing | IX 501–508 contains only “Selected work — next section to be designed” and concept-only footer | MP 1104–1281 requires work/services/proof/about/blog/final CTA. This is incomplete scope, not a claim of a broken shipped full portfolio. |
| Metadata and availability lack a demonstrated current basis | IX 467 / IX 490–491 assert availability and static 7+ years | MP 7644–7677 demands evidence; RD 27/33 records prior verification, not current freshness. Treat as unverified factual copy, not a proven false statement. |

Existing positives are not defects: IX 12–13 explicitly protects staging; IX 72–75 includes reduced motion; IX 448 provides skip link; IX 429–433 supplies visible focus. Do not remove these while reconciling the design.

## 10. Conflicts, scope limits and next handoff

1. **Typography versions:** base H1 32/40/64 (MP 445), elevated minimum 48 (MP 5994), later minimum 36 (MP 6620). Proposed first mockup uses the later fluid scale and 800; actual wrapping must decide composition, not guessed equivalence. Tracking −0.04…−0.06 (MP 5995) also differs from later −0.04…−0.02 formula (MP 6684). Use −0.04em as a conservative proposed common value. RD 19's 0.8–0.9 leading and generic gallery typography “laws” do not override MP 5996's 1.0–1.1.
2. **Light comment vs dark terminal; purple span vs gradient/cursor; pale grain vs dot-grid/glow:** MP 5977–6026 / MP 6646–6655 and RD 4/14–19 describe different treatments. Proposed terminal and restrained gradient preserve the reported original richness, but need explicit visual review; they are not newly discovered mandates. The supplied main logo always keeps its own purple period/underline, not a prompt logo.
3. **Header history:** MP blur and 4px button vs recorded later no-blur/pill/persistent compact Hire Me. First mockup should make the proposed compromise in §3 visible. No later skill history is permission to edit the old PHP site.
4. **Readability vs literal tokens:** MP dim `#9a9a9a` (MP 232), later marquee `#4a5268` on dark (MP 6072–6091) and 13–14px microtype can conflict with MP 4077–4079 contrast and MP 7614–7615 size floors. Colors were transcribed, not contrast-tested here. Require contrast checks and accessible text-role variants before implementation, retaining exact logo accents where appropriate.
5. **Spacing conflicts:** early mobile section padding 24 (MP 469) vs later 32 (MP 7070); strict multiples of eight (MP 7065–7078) vs the spec's own nav padding 10/20 (MP 7334). Proposed common rhythm: 8/16/24/32/48/64, with compact component exceptions explicit. Do not turn the strict rule into an unreviewed mass rewrite.
6. **Tablet work grid:** explicit tablet diagram pairs projects 2/3 (MP 1140–1143), but later CSS opens two columns only at 1024 (MP 7057–7059). Prefer the explicit device layout in mockups and document the discrepancy.
7. **Proof/content:** 2025 stats and copy are examples, not measurements. Neither the project count, #1 rankings, PSI 100, current availability, experience calculation nor any blog feed/destination was revalidated here. AndroidScroll ownership/metrics may be used only with evidence; old migration claims (MP 7696–7715) do not establish that a migration happened or authorize one now.
8. **Architecture/content remains wider than this brief:** full page routing inventory, remaining templates, real case-study assets, forms, feeds and content migration are not audited. Preserve scope for a full portfolio rather than declaring a hero complete project.
9. **Other ledger history:** the separate older styled-hero ledger line still mentions light/dark review. It was not rewritten in this task. That historical note cannot override fixed-light brand requirements; the research entry now points here for the conflict resolution.

### Inspected-source coverage (bounded, not an exhaustive read)

Read MP ranges: **1–62; 134–260; 427–586; 832–1285; 3546–3645; 4070–4169; 5349–5493; 5890–6144; 6580–6689; 6964–7095; 7262–7353; 7477–7487; 7589–7778**. Some ranges included adjacent tech-blog/historical material only to establish boundaries. Heading searches located sections outside those ranges; search hits are not a full section review. Read LG **1–125** for logo CSS (BI records an earlier full-logo review); read BI, RD and IX in full.

**Not fully read:** remaining MP ranges, including main site architecture (located at 356), advanced services/stats/final-CTA details (6177–6334), motion chapter (6690–6899), later footer (7354–7476), image treatment, deployment/launch, WordPress/PHP, domain strategy, migrations and post-7778 infrastructure/build phases. Only isolated search hits were inspected around JS navigation. Do not claim a whole-master-plan audit. These omissions do not block a header/hero/type research handoff, but constrain downstream full-site planning.

**Next owner:** designer prepares one coherent phone/tablet/desktop mockup using this direction and resolves the exposed visual choices with King. Implementation follows that review; research completion is neither implementation completion nor approval. No build or latest publish was performed here.
