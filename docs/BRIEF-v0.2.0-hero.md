# BRIEF v0.2.0 — rich hero rewrite (pure write, no reads)

Rewrite src/pages/index.astro COMPLETELY from this spec as one file. Write immediately; do not read the old file; no commands.

Keep EXACTLY this head (works on GitHub Pages staging):
```
---
const title = "Gwill Chijioke — Web Design & Development";
const description = "Web design and development studio. Built to mean business.";
---
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="deployment" content="GitHub Pages staging — not production" />
  <base href={`${import.meta.env.BASE_URL}/`} />
```

BODY STRUCTURE:
- skip link → #main (keep pattern: hidden until :focus).
- header.container: left wordmark `<a class="logo">gwillchijioke<span class="dot">.</span></a>` (lowercase, 800 weight, .dot violet); right: black pill `<a class="pill" href="mailto:hi@gwillchijioke.com">Hire me →</a>` + nav links Work (#work) and Contact (mailto). ≤479px hide .nav links, keep pill.
- main#main → section.hero → div.container.hero-grid:
  - LEFT .hero-content:
    - `<p class="badge"><span class="pulse"></span>Available for projects</p>` (mono 12px, .pulse 8px emerald circle, @keyframes pulse scale+fade 2s infinite).
    - h1 3 lines: `I design.` / `I build.` / `<span class="grad">I design experiences.</span><span class="cursor" aria-hidden="true"></span>` — .grad: background:linear-gradient(90deg,#7c3aed,#14b8a6); -webkit-background-clip:text; background-clip:text; color:transparent; .cursor: inline-block 0.55em×0.85em background #7c3aed margin-left 4px, @keyframes blink 1.1s step-end infinite.
    - h1: clamp(44px, 9vw, 76px), weight 900, line-height 1.04, letter-spacing -0.03em.
    - intro paragraph (keep existing truthful copy: "I design and build websites that look right, load fast, and turn visitors into clients. No templates, no filler — just focused craft for people who care about the details.")
    - metadata row: `<p class="meta mono"><span>●</span> Anambra, NG&nbsp;&nbsp;<span>●</span> UTC+1&nbsp;&nbsp;<span>●</span> 7+ yrs WordPress Experience</p>` (spans violet, mono 12.5px, opacity .8).
    - CTA row: primary black `<a class="cta" href="#work">Explore my work</a>`; ghost full-width on its own line `<a class="cta-ghost" href="#work">View work ↓</a>` (hairline 1px border, transparent bg, ≥48px height, hover border violet).
  - RIGHT .terminal (figure role="img" aria-label="Decorative terminal illustration of the studio motto"):
    - .term: background:#0C0C0E; border-radius:12px; box-shadow:0 20px 50px rgba(12,12,14,.18); padding:0; overflow:hidden; max-width:520px.
    - .term-bar: flex row, gap 8px, padding 12px 16px, background #16161A: three 10px dots (#7c3aed,#22c55e,#6b7280) + `<span class="term-title">~/gwillchijioke — zsh</span>` (mono 12px, #9ca3af).
    - .term-body: mono 13.5px, padding 20px, line-height 1.9: line1 `<span class="dim">$</span> <span class="tag">&lt;!--</span> turning ideas into fast, ranked websites <span class="tag">--&gt;</span>` (.dim #6b7280, .tag #a78bfa, text #e5e7eb); line2 `<span class="dim"># fast · ranked · handcrafted</span>`.
- section#work.container (keep): `<p>Selected work — next section to be designed.</p>`.
- footer (keep): draft label "Header and hero concept only — draft copy." + mailto hi@gwillchijioke.com.

CSS TOKENS & CANVAS:
- :root: --bg:#F8F9FA; --ink:#111; --violet:#7c3aed; --teal:#14b8a6; --green:#22c55e; --panel:#0C0C0E; --line:rgba(17,17,17,.10).
- body: background-color var(--bg); background-image: radial-gradient(rgba(17,17,17,.08) 1px, transparent 1px); background-size:22px 22px. Plus ONE fixed soft glow: body::after content:"" position:fixed right:-160px bottom:-160px width:480px height:480px border-radius:50% background:radial-gradient(rgba(20,184,166,.12), transparent 70%) pointer-events:none z-index:-1.
- dark @media(prefers-color-scheme:dark): --bg:#0F0F11; --ink:#F8F9FA; dots rgba(248,249,250,.07); --panel:#16161A; line rgba(248,249,250,.12); .term stays dark #0C0C0E with #e5e7eb text; glow rgba(124,58,237,.10).
- .hero-grid: grid; grid-template-columns:minmax(0,1fr); gap:40px. @media(min-width:900px): grid-template-columns:repeat(2,minmax(0,1fr)); align-items:center; gap:56px. .hero-content{min-width:0}.
- h1 max-width 12ch on desktop for the stacked look.
- Wordmark: 18px, letter-spacing:-0.03em, no uppercase. ≤479px: 14px; pill min-height:44px; all interactive ≥44px; :focus-visible outline 3px violet.
- @media(prefers-reduced-motion:reduce): kill pulse/blink animations, scroll-behavior:auto, transitions none.
- ≤360px nothing overflows: h1 uses clamp already; terminal width:100%.
- Keep single h1. Semantic: header/nav/main/section/footer. Skip-link, focus rings preserved.

Write the complete file now, then STOP. No other files, no commands, no git.
