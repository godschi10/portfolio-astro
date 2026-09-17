# Leg 2 browser QA — BLOCKED

## Observed

- Local static preview was started on loopback at `http://127.0.0.1:8766/portfolio-astro/`; an HTTP readiness probe returned 200.
- Obscura startup script reported its CDP endpoint ready on port 9222.
- Manager called browser_exec (session `portfolio-leg2`) with first navigation to the preview URL.
- Browser tool returned exactly: `Blocked: URL targets a private or internal address`.
- No browser navigation, screenshot, rendered layout measurement or keyboard test succeeded in this attempt. HTTP readiness is not browser verification.
- No alternate CDP/network path was used to evade the browser-tool restriction.

## Remaining checklist

- [ ] Six routes at 390px, 768px and 1440px (18 route/viewport combinations).
- [ ] Screenshots and visual review; overflow and clipping inspection.
- [ ] Compact-menu keyboard activation, focus trap, Escape and focus restoration.
- [ ] Services disclosures on phone and expanded presentation on wider viewports.
- [ ] Contact disabled-preview behavior (no email submission/delivery test).
- [ ] 404 Go Back and home recovery.
- [ ] Hosted unknown-path 404 behavior after an approved staging release.

## Release status

Six-page build and static checks are separate evidence, not substitutes for the items above. Leg 2 remains unpublished. An allowed browser-access setup is needed to finish this gate; this report does not authorize a tunnel, public preview or other network exposure.
