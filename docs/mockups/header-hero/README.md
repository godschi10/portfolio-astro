# Header + hero — warm-light precision / source-code folio

**Status: direction approved (2026-09-17, King: "Yes, go ahead"); refinement leg delivered — grain artifact removed, desktop cursor-to-card clearance increased. NOT final-visual-approved, not implemented in Astro, not published, not production-ready.**
Owner: @designer · 2026-09-17 UTC

## Open the proposal

Open `index.html` directly in a browser. It is self-contained: inline CSS/JS and three embedded real JetBrains Mono WOFF2 faces. No server, package install or network access is required to view it. Contact and Tech Blog links only navigate if selected.

Actual Obscura captures (not synthetic wireframes):
- `viewport-390.png` — 390 × 1150. Phone header, hero and beginning of review note.
- `viewport-768.png` — 768 × 1250. Tablet header, hero and beginning of review note.
- `viewport-1440.png` — 1440 × 1000. Desktop header and hero.
- `menu-390.png` — 390 × 844. Open compact navigation.
- `overview.png` — 1620 × 1610. Composite of the four captures above, rebuilt 2026-09-17 from the refreshed captures. Scaling is approximate; the individual PNGs are the authoritative evidence.

The note below the hero explains mockup boundaries and is NOT a proposed homepage section. Its bottom is cropped in the phone/tablet captures, which are viewport captures rather than full-page screenshots.

## Single proposed direction

A personal designer-developer portfolio, with a text-led asymmetric desktop composition and a bounded dark source-code folio. The folio is an illustration of intent, not a running terminal: the source comment is paired with “Design for people / Build for speed / Structure for search”, explicitly captioned “Intent, not output.” No test results, fake commands, metrics, clients, projects, testimonials or current availability are asserted.

The opening “I'm Gwill.” and the individual-practitioner supporting sentence prevent an anonymous studio voice. The headline is exactly **I design. I build. I make it rank.** Its three-line treatment puts each discipline on its own beat. On 320px the final phrase may wrap; no word is removed.

### Identity retained

- Exact lowercase `gwillchijioke.` wordmark; JetBrains Mono 700; period 800 and `#7c3aed`, 1px offset; −.04em tracking; 2px purple→`#00c96e` underline, 6px below, .7 opacity, from supplied logo.
- Fixed `#f7f6f3` canvas, ink `#0d0d0d`, `#e4e2dc` header border. No dark-mode toggle or system-color adaptation.
- H1 JetBrains Mono 800, `clamp(36px, 8vw, 96px)`, −.04em tracking, 1.08 leading. Body is system sans.
- Real local font files for 400/700/800, with `font-display: swap`, embedded in the HTML; size-adjusted DejaVu Mono fallback. WOFF2 binaries plus the upstream license remain in `fonts/` for provenance. No synthetic 800 face is requested for the headline.
- Source contact address `hi@gwillchijioke.com`; supplied Tech Blog domain `https://tech.gwillchijioke.com/` is explicitly new-tab. Destination freshness and mailbox operation were not tested.

### Deliberate proposals / departures needing King's verdict

1. **Three headline lines** rather than the older two-line diagram. Desktop has an asymmetric two-zone layout; phone/tablet stack headline → folio → actions → supporting copy.
2. **Dark folio** replaces MP's pale comment box. Offset lavender backing and a restrained shadow add physical depth; the caption prevents any interpretation as measured operational output.
3. **Ranking gradient + nonessential blinking cursor** are proposed, not mandated. The green text endpoint is darkened to `#087b48` for legibility, rather than using bright brand green as text on the light canvas. The logo retains exact original accent colors. This text-role variant needs approval; no formal gradient contrast PASS is claimed.
4. **Persistent compact Hire Me** beside a 48px menu button; 390px fits one row. Under 360px the action takes a second full-width header row rather than shrinking the wordmark or controls. Desktop header inner row is 64px plus its 1px border.
5. **4px action shape, no header blur**, following the brief's proposed compromise rather than the historical pill/blur presentation.
6. **Hire Me first in hero action order** for conversion hierarchy; View Work stays visible and outlined. Phone actions stack; tablet/desktop share a row. Header arrows disappear only on the narrow compact header to preserve fit.
7. **All visible phone text is designed at 16px or larger**, including technical notes. Source dim gray is replaced with stronger text-role colors. No unconfirmed availability dot or years-of-experience line.
8. **No false current nav state.** Home is the current page, represented by the logo/home link; About/Work/Services are not marked current. Their mockup links open an explicit scope dialog, not invented sections. A real site's anchor-active treatment follows implementation after review.
9. **Grain removed.** An earlier revision layered a quiet SVG feTurbulence grain over the hero ("quiet grain only, not grain + dot-grid + glow"). In Obscura captures it rendered as a conspicuous hard-edged rectangular noise patch instead of a texture, and engine rendering could not be trusted; per King's refinement directive the layer was deleted entirely rather than reworked. The hero background is now the flat `#f7f6f3` canvas. Any future grain reintroduction needs a mainstream-browser-tested technique first. The folio backing is an intentional offset layer, not a missing card.

## Source basis / bounded read

Read all 165 lines of `../../HOMEPAGE-DESIGN-BRIEF.md`. Confirmed the original supplied logo HTML in full (348 lines). Read master plan ranges 134–260, 427–586, 832–1285, 5973–6057 and 6606–6685 directly. This is not a whole-master-plan audit.

Used the brief's completed reference research: 35mm's display-to-technical-text hierarchy, Treize grammes' separated brand/nav grouping and balanced text/visual zones, Eric Jordan's personal role-led opening. No additional research round or foreign branding imported. Existing `docs/DESIGN-LANGUAGE.md` is older/conflicting; it was read but not changed or treated as authority over this brief.

## Actual testing evidence

`verify.py` runs inside the installed **browser-harness**, not plain Python. Its `cdp`, `js`, `goto_url` and `wait_for_load` are injected harness helpers; editor undefined-name warnings are expected outside that runtime.

The already-running process was `/home/ubuntu/bin/obscura serve --port 9222 --allow-private-network`. Its CDP version string says Chrome/145, but the observed OS process was Obscura, not Chromium. No browser/service started or restarted, no local web server, no build, no git, no source/public/dist edits, no deployment or DNS/WordPress operations.

Command used:

```
BU_CDP_URL=http://127.0.0.1:9222 BH_RECORD=0 browser-harness < /home/ubuntu/portfolio-astro/docs/mockups/header-hero/verify.py
```

Final run exited 0. `measurements.json` contains the raw per-viewport evidence:

| Width | document scrollWidth | H1 computed size after fresh navigation | Horizontal outliers |
|---:|---:|---:|---:|
| 320 | 320 | 36px | none |
| 390 | 390 | 36px | none |
| 768 | 768 | 61.44px | none |
| 1023 | 1023 | 81.84px | none |
| 1024 | 1024 | 81.92px | none |
| 1440 | 1440 | 96px | none |

- 390px header: wordmark link 159×48, Hire Me 94×48, menu 48×48; hero actions each 358×56. 320px full-width header action is 288×48. All measured visible compact controls meet 48×48.
- H1 textContent returned exactly `I design. I build. I make it rank.` at every measured width.
- All three JetBrains Mono faces reported `loaded` after explicit `document.fonts.load` requests at all six widths. Earlier automatic enumeration reported `unloaded` despite `document.fonts.status === 'loaded'`; that early aggregate was NOT used as font proof. The final evidence is FontFace-level, not just a CSS family declaration. The renderer's exact glyph-source selection is not independently instrumented.
- Obscura cached computed fluid type after viewport-only changes (e.g. stale 96px on phone). Final verification navigates afresh after each viewport change; it reports the expected fluid sizes. Screenshots are from those final fresh navigations.
- Actual PNG dimensions were opened and checked with Pillow: 390×1150, 768×1250, 1440×1000, menu 390×844.
- Image analysis inspected phone, tablet and desktop captures: no hard text clipping reported; desktop cursor/card proximity and the thin lavender backing are visual-review questions, not approved design outcomes. The analyzer's estimated colors/type sizes are not authoritative; its descriptions also misread some logo coloring. Supplied identity and measured source values remain authoritative.

### Interaction evidence and limits

See `interaction-checks.json`:
- Trusted CDP Enter opens the menu, expands the toggle, moves focus to Close and sets background `inert`.
- Tab from the final menu action wraps to Close.
- Escape closes, clears background inert/scroll lock, resets aria-expanded and returns focus to the opening toggle.
- View Work opens an explicit scope note; closing returns focus to View Work.
- A separate explicit `KeyboardEvent` with `key:'Tab', shiftKey:true` from Close returned focus to `button overlay-hire`; Escape then returned to the toggle. This proves the reverse-cycle handler, not native Shift+Tab behavior.
- **Trusted CDP Shift+Tab did not expose Shift correctly** in the observed run (focus stayed on Close); no native Shift+Tab PASS is claimed. Native Enter initially did not synthesize button activation in this engine, so explicit Enter/Space opening was added and trusted Enter then passed. Manual mainstream-browser keyboard/AT testing remains required.
- Menu uses a labelled modal, background inert, focus containment, Escape, focus return, visible focus, scroll locking; it closes when resized into desktop navigation. No-JS keeps hero/contact/blog understandable but not the full compact menu.
- Reduced-motion and forced-colors fallbacks are present in source; not emulated or screen-reader-tested. No blanket WCAG, Safari/iOS, touch-device or cross-browser PASS.

## Fonts / tooling limits

The OS font list had no JetBrains Mono and the repo contained none. A font CDN request was approval-gated; a Fontsource archive was subsequently downloaded from npm registry using `npm pack @fontsource/jetbrains-mono@5.2.5`, **not installed** as a dependency. Only 400/700/800 WOFF2 bytes and LICENSE were extracted into this isolated mockup and embedded. Package/project manifests were not touched.

The overview composite was rebuilt on 2026-09-17 (1620 × 1610) from the refreshed captures. An optional overview-composite/contrast calculation call had earlier been approval-gated and did not run; therefore **no contrast.json or calculated contrast ratios are claimed**. Individual screenshots exist and were checked. Initial image analysis returned HTTP 503; subsequent direct image inspections succeeded.

## Refinement leg — 2026-09-17 (direction approved; two scoped fixes)

King approved the existing direction ("Yes, go ahead") in response to refining mockups. Only two fixes were made; brand, headline, composition and responsive behavior are unchanged.

1. **Grain artifact removed.** The `.hero::before` feTurbulence SVG layer rendered as a hard-edged ~180px-wide rectangular noise patch over the hero's upper-left in phone/tablet Obscura captures (seam confirmed by image analysis of the earlier capture). Because the engine's turbulence rendering could not be trusted, the layer was deleted rather than adjusted. Evidence: disk grep of `index.html` = 0 occurrences of `feTurbulence` and `.hero::before`; CSSOM rule scan = no grain rule; computed `::before` background at all six measured widths = `none`; refreshed 390px capture inspected — hero flat, no rectangular patch; code card and buttons intact.
2. **Desktop cursor-to-card clearance increased.** Inside the ≥1024px media query only, `.folio` gained `margin-left:32px`. Measured horizontal gap, cursor right edge → folio left edge at 1440px: **83px** (was ~50–70px per earlier review). Column ratios, breakpoints and wrap behavior unchanged.

**Observed checks on the fresh run (verify.py exit 0):** `document.scrollWidth === innerWidth` at 320/390/768/1023/1024/1440 and 0 horizontal outliers at every width; H1 fluid sizes unchanged (36 / 36 / 61.44 / 81.84 / 81.92 / 96px) and H1 textContent exactly `I design. I build. I make it rank.`; all three JetBrains Mono faces `loaded` at all six widths; interaction checks pass as before (trusted-Enter menu open, tab wrap, Escape return, scope-note return). PNG dimensions verified with Pillow: 390×1150, 768×1250, 1440×1000, menu 390×844, overview 1620×1610.

**Analyzer reliability note:** an image-model review of the refreshed `menu-390.png` claimed the hero "bleeds through" a translucent overlay. Direct pixel sampling contradicts this: overlay whitespace samples equal the declared opaque `#17141c` (23, 20, 28) at every sampled point; the only bright pixels belong to the overlay's own Hire Me button. The analyzer description is treated as unreliable on this point; no change was made.

**Remaining limitations (unchanged or new):** Obscura's engine (CDP Chrome/145 string, Obscura process) is not a mainstream-browser guarantee; no contrast ratios calculated; manual keyboard/AT and cross-browser review still outstanding; grain is gone rather than reimplemented; scope-note dialog and menu behavior untested in real browsers.

## King's verdict — direction received; sub-questions still open

King approved the header/hero direction on 2026-09-17 ("Yes, go ahead") and both requested refinements are delivered. This is direction approval plus refinement status, **not** final visual approval of the refreshed artifacts and **not** permission to touch the Astro homepage. Still awaiting explicit verdicts on:

- ~~Keep the three-line display and dark source-code folio as this single direction?~~ **Answered 2026-09-17: approved.**
- Approve the darkened green text variant and cursor, or use source-purple-only emphasis?
- Keep the compact persistent Hire Me / under-360 second row and the 4px control family?
- Does the folio's layered backing feel intentional? (Desktop cursor-to-card space was raised to 83px in this leg; final sign-off on the refreshed composition still pending.)
- Approve the first-person supporting copy; confirm availability separately before adding any status.

This is a reviewable local proposal, not permission to patch the Astro homepage. The full portfolio, real-work content, destination checks and publishing remain separate work.
