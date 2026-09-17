# Design Language — Gwill Chijioke Portfolio

**Status:** Provisional — may shift during build
**Origin:** Not derived from AndroidScroll — original direction

## Palette

| Token | Value | Use |
|-------|-------|-----|
| `--ivory` | `#FDFBF7` | Primary background |
| `--ink` | `#111111` | Primary text, high contrast |
| `--violet` | `#5C3D99` | Accent — links, focus, emphasis |
| `--faint` | `#E8E4DE` | Borders, dividers, muted rules |
| `--ghost` | `rgba(17,17,17,0.06)` | Surface tints, hover states |

Dark mode inverts to deep surface with ivory text and violet accent preserved.

## Typography

| Role | Stack | Weight | Scale |
|------|-------|--------|-------|
| Display | `'Inter', system-ui, sans-serif` | 700–900 | 2.5rem → 4.5rem |
| Body | `'Inter', system-ui, sans-serif` | 400–500 | 1rem |
| Small | `'Inter', system-ui, sans-serif` | 500 | 0.75rem, 0.12em tracking |

Editorial sensibility — spare, confident, typographic hierarchy carries the design. No decorative flourishes.

## Spacing & Grid

Base unit: 4px. Content width max 1120px, centred. Grid is 12-column at desktop, collapsed to single column on mobile. Generous whitespace — space communicates quality.

## Components

Straight geometry only: rectangular cards, square corners, no border-radius pills, no gradients. Rules are 1px solid `var(--faint)`. Buttons are solid rectangles with text, no decorative fills.

## Motion

Reduced to near-zero. Transitions only on focus rings and interactive states. No parallax, no scroll-triggered reveals at this stage.

## Voice

Direct, unpretentious, business-oriented. No jargon, no fluff. The copy should sound like someone who ships.
