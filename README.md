# portfolio-astro

Personal portfolio site for Gwill Chijioke, built with Astro.

## Status

**v0.2.0 — header/hero integrated and built locally.** Refined direction ported from `docs/mockups/header-hero/index.html`. This is not a complete portfolio, a new staging publish, or final visual approval. Selected work remains the existing pending placeholder. About/Services offer an honest scope notice and no-JS fallback; contact uses `hi@gwillchijioke.com`.

## Implementation

- Astro 5 static output, vanilla CSS/JS; no added dependency.
- Fixed warm-light palette; JetBrains Mono 700 lowercase wordmark/purple period/gradient underline, 800 headline: “I design. I build. I make it rank.”
- Local Latin WOFF2 400/700/800 faces and upstream OFL license in `public/fonts/`, copied unchanged from the mockup. Font-display swap, size-adjusted fallback, BASE_URL-aware asset paths; no external font calls.
- Refined responsive layout retained, including grain removal, desktop folio margin-left 32px, persistent compact Hire Me, and opaque full-screen menu.
- Modal source includes inert background, focus containment, Escape and return handling. These are implementation details, not browser accessibility certification.
- Mockup-only review-note UI omitted; existing work placeholder and contact preserved without invented projects or metrics.

## Verification

```sh
python3 docs/check-astro-integration.py
NODE_OPTIONS=--max-old-space-size=384 npm run build
python3 docs/check-astro-integration.py --built
```

This leg ran one low-memory build (exit 0, one page) and focused static checks. Evidence and remaining browser/staging checks: `docs/ASTRO-INTEGRATION-REPORT.md`.

## Staging protections

Unchanged `astro.config.mjs`: static output, site `https://godschi10.github.io`, base `/portfolio-astro`. Homepage preserves `noindex,nofollow` and staging metadata. No production, WordPress, DNS or domain changes. No commit/push/deploy in this integration leg; existing GitHub staging still requires a separate verified publish.

## Key paths

- `src/pages/index.astro` — integrated page and responsive CSS/JS.
- `public/fonts/` — local assets and `OFL.txt`.
- `docs/mockups/header-hero/` — preserved original design and historical browser evidence.
- `docs/HOMEPAGE-DESIGN-BRIEF.md` — identity/scope reference.
- `docs/check-astro-integration.py` — focused static checks.
- `docs/ASTRO-INTEGRATION-REPORT.md` — observed results and handoff.
