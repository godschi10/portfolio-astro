# Desktop QA — local `dist` render @ 1440px (Obscura, geometry verification)

- **Date:** 2026-09-17 (UTC)
- **Scope:** verification only — **no edits, no rebuild, no git ops, no publishing** performed.
- **Built artifact:** `/home/ubuntu/portfolio-astro/dist/` (served read-only over local HTTP).
- **URL:** `http://127.0.0.1:8766/portfolio-astro/` (Python `http.server`, bound `127.0.0.1` only; path-prefix shim so the built absolute asset path `/portfolio-astro/_astro/index.BWPfb2G3.css` resolves)
- **Viewport:** 1440 × 1000 px via CDP `Emulation.setDeviceMetricsOverride` (width=1440, height=1000, deviceScaleFactor=1, mobile=false)
- **Browser engine:** Obscura headless CDP server on `127.0.0.1:9222` (`obscura serve`, ~30MB RAM), driven by browser-harness (`BU_CDP_URL=http://127.0.0.1:9222`). **No Chromium installed or launched.** No services or memory guards changed; no remote/staging URL used as evidence.
- **Stylesheet check in-page:** `document.styleSheets` = `/_astro/index.BWPfb2G3.css`, parsed **72 CSS rules** (the first attempt serving plain `dist/` at the root URL loaded 0 rules because of the absolute asset path; the prefixed URL above is the valid evidence URL). `matchMedia('(min-width:900px)')` → `true`.

## Geometry measurements (computed styles + bounding boxes, observed in-page at 1440×1000)

| Element | Computed display | Grid placement (computed) | Bounding box (x, y, w×h → right/bottom) |
|---|---|---|---|
| `section.hero` (grid container) | `block` | `grid-template-columns` computed: `none` (cols defined implicitly; see note) | 0, 84, 1440×1048 |
| `.hero-content` | **`display: contents`** ✓ | — (box intentionally zero: 0, 0, 0×0) | — |
| `.badge` | block | — | 184, 132, 508×19 |
| `h1` | block | gridColumnStart/End: `""` (see caveat) — **column band x 184–692 (left)** | 184, 231, 508×316 |
| `.terminal` | block | gridColumnStart/End: `""` (see caveat) — **column band x 748–1256 (right)** | 748, 525, 508×134 |
| `.hero-intro` | block | — | 184, 627, 508×87 |
| `.meta` | block | — | 184, 794, 508×20 |
| `.cta-row` | block | — | 184, 898, 508×98 |

### Checks

1. **`.hero-content` computed display = `contents`** at 1440px ✓ (desktop `min-width:900px` media rule active).
2. **Terminal in right column ✓** — verified geometrically: `h1` occupies x ∈ [184, 692] (left column band), `.terminal` occupies x ∈ [748, 1256] (right column band); identical widths (508px) and a 56px gutter (748 − 692). No part of `.terminal` extends into or left of the h1 band.
3. **No overlap ✓** — pairwise intersection test across all 6 direct children of `.hero-content` (badge, h1, terminal, hero-intro, meta, cta-row): **zero intersecting pairs** (any overlap >0.5px would be reported; none found).
4. **No horizontal overflow ✓** — `document.documentElement.scrollWidth` = 1440 = `clientWidth`; `document.body.scrollWidth` = 1440. Nothing extends past the 1440px viewport.
5. **Source-vs-render consistency:** `dist/_astro/index.BWPfb2G3.css` contains, in the final `@media (min-width:900px)` block: `.hero-content{display:contents}`, `h1{grid-column:1;grid-row:2}`, `.terminal{grid-column:2;grid-row:1 / span 6;align-self:center}` — matching the observed layout behavior above.

### Caveats (stated plainly)

- **This is geometry verification only, not a visual review.** Colors, contrast, typography rendering, imagery, and overall aesthetics were **not** evaluated. The screenshot exists for human/visual review; no visual judgment is claimed here.
- Obscura reported computed `gridColumnStart/End` (and shorthand `gridColumn`) as empty strings for `h1`/`.terminal` even though the applied media rule sets `grid-column:2` (confirmed in the served stylesheet and consistent with the measured non-overlapping column bands). Column assignment is therefore proven **geometrically + by stylesheet content**, not by a computed-longhand string from this engine.
- Engine fingerprint: Obscura reports CDP `Browser: Chrome/145.0.0.0`; it is not Chromium. Layout behavior matched Chromium-era CSS (display:contents honored) at desktop width.

## Screenshot (real capture, not fabricated)

- **Path:** `/home/ubuntu/portfolio-astro/docs/desktop-1440-obscura.png`
- Verified on disk: `PNG image data, 1440 x 1000, 8-bit/color RGBA`, 180,726 bytes (captured via CDP `Page.captureScreenshot` through browser-harness `capture_screenshot()`).

## Reproduce / cleanup

```bash
bash ~/.hermes/scripts/obscura-serve.sh                 # Obscura CDP on 127.0.0.1:9222
python3 -m http.server 8766 --bind 127.0.0.1 --directory /home/ubuntu/portfolio-astro/dist   # see note*
BU_CDP_URL=http://127.0.0.1:9222 browser-harness        # drive CDP
pkill -f "obscura serve --port 9222"                    # stop browser
```
*A plain `http.server` on `dist/` root returns the CSS 404 (built asset path is absolute `/portfolio-astro/...`); the QA run used port **8766** with a path-prefix shim and that URL is the one cited above. As of this writing Obscura (9222) and the 8766 server were left running for parent re-checks; kill with `pkill -f "obscura serve --port 9222"` and `kill <8766 pid>` when done.
