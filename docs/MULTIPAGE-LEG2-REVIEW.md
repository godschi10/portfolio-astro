# Leg 2 independent source review

Reviewer: @qa-inspector. Date: 2026-09-17 UTC.

## Verdict

**Build and static structure PASS; two low-severity behavior defects remain.** Suitable to continue staging review, not evidence of browser accessibility, visual correctness, delivery, or production readiness. No source fixes, commits, pushes or publishing performed. The required build regenerated local build artifacts; this report is the only authored file.

## Observed execution

Executed independently in `/home/ubuntu/portfolio-astro`:

- `NODE_OPTIONS=--max-old-space-size=384 npm run build` — exit 0; Astro generated six pages in 7.53 seconds (17:20:55 UTC).
- `node scripts/check-multipage.mjs` — exit 0; **25/25 static multipage checks passed across 6 pages**.
- `node --check scripts/check-multipage.mjs` — exit 0.
- Additional Python HTMLParser check of all six generated HTML files — no duplicate IDs; all input/select/textarea controls have explicit matching labels. This is a limited markup check, not an accessibility audit.

A first build invocation was blocked before execution by an invalid workdir argument; corrected to the exact repository path and rerun successfully. No browser was opened (parent owns browser verification).

## Findings

### L2-01 — Low: Go Back can swallow navigation with no preceding history entry

`src/pages/404.astro:26–31` treats `history.length > 1` as proof that backward navigation is possible. History length includes forward entries. At the earliest entry after navigating Back from another page, length can exceed one while `history.back()` does nothing. The handler has already prevented the home-link default, contradicting the fallback promise at line 22.

This is a source-derived edge case, **not browser-reproduced here**. Parent verification: open 404 as a tab's initial entry, navigate elsewhere, return Back to 404, then activate Go Back. Prefer a home fallback unless backward navigation is demonstrably available; do not treat length alone as proof. Modified-click navigation is correctly preserved by line 27.

### L2-02 — Low: desktop service disclosures advertise an action they suppress

`src/pages/services.astro:24–25,48–55,72` keeps native focusable summary controls, but cancels their click default at widths >=768px. They remain exposed as expanded disclosure controls to keyboard/assistive-technology users while activation cannot collapse them; only pointer cursor/indicator styling changes. The mobile native-disclosure behavior is appropriate.

This is a source-derived semantic/interaction inconsistency, **not a claimed WCAG failure or browser reproduction**. Either permit native disclosure behavior at all widths or render the wide-screen headings as non-interactive headings while preserving mobile controls and content. Browser acceptance should include Enter/Space at both sides of the breakpoint.

## Master-plan cross-check

Source plan: `/home/ubuntu/.hermes/cache/documents/doc_6e871ac65d57_gwillchijioke-master-plan-1.md`.

| Area | Source evidence | Review |
|---|---|---|
| Services, plan 1511–1532 | `services.astro:7–41` | Four exact service categories, numbered blocks, description, inclusions/client-fit labels, four quote links, closing Let's Talk CTA. Scope vocabulary checked against plan 1161–1175; no invented results guarantees found. Exact terms and intended clients remain explicitly unconfirmed. |
| Work, plan 1535–1550 | `work.astro:11–27,37–46` | Selected Work title and first-full-width/next-two-halves CSS structure are present. Three clearly unnamed placeholders, no fabricated screenshots, metrics, identities or case-study links. Actual project data, screenshots and case-study routes are intentionally absent. No visual-grid PASS claimed. |
| Contact, plan 1692–1714 | `contact.astro:11–45` | Email, handle, two-column CSS, labelled fields and deliberately disabled preview present. Availability is explicitly unconfirmed rather than copied as a claim. Project-type/budget options and requiredness also checked against plan 3728–3747. |
| 404, plan 2297–2316 | `404.astro:7–22`; shared Layout | Correct visible code-comment motif, headline, four recovery routes, Go Back/Home and fixed-light palette. History fallback edge case above remains. |

Intentional staging deferrals, **not bugs**: contact has no form/backend, honeypot, timestamp, success redirect or error state; these must be implemented and verified before enabling submission, not patched into this inactive static preview. Confirm service terms, project evidence and availability before publishing real claims. Work remains a layout preview, not a completed portfolio.

## Links, shared chrome and accessibility source review

- All generated local anchor targets/fragments and referenced local resources pass the supplied checker. Base-prefixed route links are correct for `/portfolio-astro/`, including recovery links and generated assets.
- Shared header/footer are byte-equal across six pages. Layout diff changes route targets and staging copy, not the approved homepage visual direction. New interior rules are `.interior`/page-class scoped.
- One h1 and main landmark per page; skip target is focusable; language, titles, descriptions and staging noindex exist. Contact labels are correctly associated and the fieldset genuinely disables its controls; no fake submit path was found.
- Main and compact Tech Blog links retain new-tab behavior with noopener/noreferrer. No external HTTP availability or mail delivery was tested.
- Menu source retains dialog naming, inert background, Escape, focus trapping/restoration and reduced-motion CSS. These are implementation observations, not verified native keyboard/screen-reader results.
- Shared navigation has no `aria-current` marker. This is a low-priority location/orientation enhancement, not a claimed conformance failure or new Leg 2 regression.
- Homepage `src/pages/index.astro:15,20–21` still sends View Work to its existing placeholder section rather than `/work/`; hero Hire Me still uses email while shared Hire Me opens Contact. These are inherited integration gaps, not broken URLs or permission to redesign the approved homepage. Parent should decide whether to retarget the hero CTA in a separate approved change.

## Test limitations / remaining gates

- The checker proves emitted strings/files, not functioning interaction. It does not exercise the services script, 404 history, native menu focus, contrast, zoom, overflow, or actual browser rendering. Its successful count should not be reported as 25 browser/accessibility tests.
- Regex resource checks do not walk JS module imports. Current build completed successfully, but future chunk dependencies would need dedicated emitted-resource coverage.
- Checking local `404.html` does not prove hosting serves it for arbitrary missing/deep URLs. Parent should verify actual missing-path response plus base-prefixed CSS/JS/fonts.
- Desktop/tablet/mobile visuals, long text/zoom resilience, no-JS behavior, native keyboard and focus behavior remain with the parent browser gate. No production approval is implied.
