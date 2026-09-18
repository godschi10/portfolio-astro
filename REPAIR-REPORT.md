# Repair Report — desktop hero grid fix

**Date:** 2026-09-17
**File edited:** `src/pages/index.astro` (only file touched)
**Change:** Appended the following CSS block immediately before the final `</style>` (now line 445, block at lines 435–444), so it sits later in the stylesheet than the existing `@media (min-width: 900px)` block (~lines 197–209) and wins the cascade:

```css
@media (min-width: 900px) {
  .hero-content { display: contents; }
  .hero-grid { align-items: start; }
  .badge { grid-column: 1; grid-row: 1; }
  h1 { grid-column: 1; grid-row: 2; }
  .terminal { grid-column: 2; grid-row: 1 / span 6; align-self: center; }
  .hero-intro { grid-column: 1; grid-row: 3; }
  .meta { grid-column: 1; grid-row: 4; }
  .cta-row { grid-column: 1; grid-row: 5; }
}
```

This places the terminal figure in column 2 of the desktop two-column grid (previously unplaced).

**Build:** `NODE_OPTIONS=--max-old-space-size=384 npm run build` run once from the repo root.
**Build exit code:** `0` (1 page built in 3.93s; `1 page(s) built` confirmed).

No other files modified; no git operations; no deploy.
