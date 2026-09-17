# BRAND-INTAKE — gwillchijioke main portfolio brand

**Status:** PARTIAL intake — brand-system section only. See §7 Scope.
**Written:** 2026-09-17 (UTC)
**Prepared by:** @researcher (delegated subagent)
**Repo:** `/home/ubuntu/portfolio-astro` (staging-only Astro portfolio; production/DNS/WordPress untouched)

---

## 1. Sources read for this intake

| Source | What was read | Role |
|---|---|---|
| `~/.hermes/cache/documents/doc_6e871ac65d57_gwillchijioke-master-plan-1.md` | **Lines 134–260 only** (Brand System §3 + palette) | Primary written spec |
| `~/.hermes/cache/documents/doc_9c3b672cdee2_gwillchijioke-main-logo-1.html` | **Full file** (348 lines) | Visual/logo spec sheet (CSS reference implementation) |
| `docs/REFERENCE-DIGEST.md` | Full file (33 lines) | Prior external research digest — context only |

Note: the sibling `doc_9c3b672cdee2_gwillchijioke-master-plan-1.html` was **not** used as a citation source; the `.md` master plan is the authoritative written spec for lines 134–260.

Citation shorthand below: **MP** = master-plan `.md` line, **LG** = logo-spec `.html` line.

---

## 2. Core identity (MP 134–144)

- Name: `gwillchijioke` (MP 139)
- Main domain: `gwillchijioke.com` (MP 140)
- Blog: `tech.gwillchijioke.com` (MP 141)
- Handle: `@gwillchijioke` on all platforms (MP 142; listed per-platform at MP 247–256)
- Font: **JetBrains Mono** on both sites (MP 143)
- Social bio: `Web dev · Designer · SEO` (MP 258–260)

---

## 3. Main-site wordmark (gwillchijioke.com) — exact spec (MP 146–156; LG 84–122)

The wordmark is `gwillchijioke.` — the trailing period is part of the mark (MP 150).

| Property | Value | Source |
|---|---|---|
| Text | `gwillchijioke.` | MP 150 |
| Case | **Lowercase always** | MP 152 |
| Typeface | JetBrains Mono | MP 143, 153 |
| Weight | **Bold 700** (wordmark body) | MP 153; LG 88 (`font-weight: 700`) |
| Period colour | Purple **`#7c3aed`** | MP 154; LG 99–103 (`.dot { color: var(--purple) }`) |
| Period weight | 800 in the logo sheet implementation (`font-weight: 800`, `margin-left: 1px`) | LG 101–102 |
| Underline | **Purple → green gradient: `#7c3aed` → `#00c96e`** | MP 155; LG 106–116 |
| Underline implementation (logo sheet) | `::after`, 2px tall, full width, `linear-gradient(90deg, #7c3aed, #00c96e)`, `border-radius: 2px`, `opacity: 0.7`, positioned `bottom: -6px` | LG 106–116 |
| Tracking / line-height (logo sheet) | `letter-spacing: -0.04em`, `line-height: 1`, `white-space: nowrap` | LG 89–92 |
| Default background | Light background primary | MP 156 |
| Wordmark sizes in sheet | 52px / 34px / 22px / 15px (`wm-xl/lg/md/sm`) | LG 119–122 |

---

## 4. Main-site icon mark (MP 158–166; LG 149–189)

| Property | Value | Source |
|---|---|---|
| Glyph | `G.` — letter G + purple period | MP 160, 162; LG 296 etc. |
| Background | Dark **`#0d0d0d`** (logo sheet uses `var(--ink)` = `#0d0d0d`) | MP 163; LG 12, 14, 154 |
| Letter colour | `#ffffff` surface on the dark tile (`color: var(--surface)`) | LG 158 |
| Period colour in icon | Purple `#7c3aed` | MP 162; LG 177 |
| Icon weight | 800 | LG 157 |
| Gradient bottom bar | Purple → green bar at bottom of the icon (`linear-gradient(90deg, var(--purple), var(--green))`, 4px at base size) | MP 164; LG 166–174 |
| Container (logo sheet) | rounded square, `border-radius: 22%` base | LG 155 |
| Usage | Favicon and app icon | MP 165 |
| Required sizes | 256px, 128px, 64px, 32px, SVG | MP 166; LG 179–189 (256: radius 52px/bar 10px; 128: 26px/5px; 64: 14px/3px; 32: 7px/2px) |

---

## 5. Colour variants — main site (MP 168–171; LG 214–223)

1. **Light (primary)** — white `#ffffff` background (MP 169; LG 215). Wordmark text in ink `#0d0d0d`, purple period, gradient underline.
2. **Dark reverse** — `#0d0d0d` background with **green period** (MP 170; LG 218–220: name in `#f7f6f3`, dot in `var(--green)` = `#00c96e`).
3. **Warm parchment** — `#fdf8f0` background (MP 171; LG 223, border `#e8dfd0`).

---

## 6. Main-site palette + dark-mode decision — hero-relevant requirements from the lines read (MP 211–242)

This is the only hero-relevant material present in lines 134–260: the hero must sit on the **fixed light** main-site palette, with **no dark mode**. No hero layout, copy, or section requirements appear in the lines read (those live in unreviewed sections — see §7).

**Main Site — Fixed Light** (MP 224–233):

| Token | Value | Use |
|---|---|---|
| `--bg` | `#f7f6f3` | Background |
| `--surface` | `#ffffff` | Card backgrounds |
| `--border` | `#e4e2dc` | Borders and dividers |
| `--text` | `#0d0d0d` | Body text |
| `--purple` | `#7c3aed` | **Primary accent** |
| `--green` | `#00c96e` | Secondary accent |
| `--dim` | `#9a9a9a` | Muted text, labels |

**Dark Mode Decision** (MP 235–242):
- **No dark mode toggle on either site** (MP 237)
- Main site is **light always** — client trust (MP 239)
- `prefers-color-scheme` not used (MP 240)

For contrast, the tech-blog palette is fixed dark (`--bg #0d0d0d`, terminal green `#00ff91`, purple `#7c3aed` secondary — MP 213–222). **The tech-blog palette is NOT the main portfolio palette**; the main site uses the fixed-light set above.

Brand connection rule (MP 200–209): same font (JetBrains Mono), same name, same purple+green palette; different energy — light vs dark. The tech-blog logo spec (`>_ gwillchijioke`, green `#00ff91` prompt, ExtraBold 800, blinking cursor, dark always — MP 173–198) is **out of scope for this intake**; recorded here only as context.

Logo-sheet page treatment (context, LG 35–44): subtle SVG grain/noise overlay at ~0.04 opacity over `#f7f6f3`.

---

## 7. Scope — PARTIAL

- **Reviewed:** master-plan lines 134–260 (Brand System, logo specs, colour palette, dark-mode decision, social handles/bio) and the full main-logo HTML spec sheet.
- **NOT reviewed:** the **homepage**, **header**, and **deployment** sections of the master plan (all outside lines 134–260). Any hero layout, header/nav, content, or deployment requirements they contain are **not captured here**.
- **External visual research is not part of this intake.** `docs/REFERENCE-DIGEST.md` exists and was read for context, but its findings are not re-verified or absorbed into this document.
- The master plan's remaining ~9,800 lines are unreviewed by this intake.

## 8. Authorization status

- Older **WordPress and domain-migration plans are historical context only — they are NOT authorization** to touch production, DNS, or WordPress. This repo remains **staging-only**; production/DNS/WordPress untouched unless the King grants explicit, current authorization.

## 9. Constraints of this document

- No design opinions, no code edits, no builds, no publishing — transcription of spec only. Numbers/colours above are quoted verbatim from the cited sources.
