# Chaparral Creative — Brand & Design System

The single source of truth for how Chaparral Creative, LLC looks, sounds and behaves — in a form both people and AI tools can read.

Every preview page is a standalone HTML file with a `@dsCard` marker on line one, so the `design-system/` folder can be pushed into a [Claude Design](https://claude.ai/design) project as-is.

---

## What's in here

```
brand/
  tokens.json          Design tokens — colour, type, space, radius, shadow (machine-readable)
  tokens.css           The same tokens as CSS custom properties (drop-in for any web project)
  components.css       The component library. Requires tokens.css. Prefix: .cc-
  guidelines.md        Brand story, voice, tone, and written-content rules
  assets/              Logo lockups as SVG — horizontal, stacked, icon

design-system/
  foundations/
    colors.html        Palette, extended ramp, status colours, contrast pairings
    typography.html    Four families, nine-step scale, worked composition
    layout.html        Spacing scale, radius, elevation, grid
    logo.html          Mark, clear space, minimum sizes, misuse rules
  components/
    buttons.html       Five variants, three sizes, full state table
    forms.html         Inputs, selects, textareas, validation, complete lead form
    cards.html         Service cards, elevation, testimonial, stats
    navigation.html    Primary nav, breadcrumb, tabs, footer
    feedback.html      Badges, alerts, empty states, tables
    sections.html      Hero, content bands, closing CTA
```

Every `.html` file is standalone — open it directly in a browser, no build step.

---

## Quick reference

| | |
|---|---|
| **Ink** `#120b47` | Headlines, footers, dark sections |
| **Signal Blue** `#3498db` | Primary actions, links, active states |
| **Slate** `#2c3e50` | Body copy, secondary surfaces |
| **Roadrunner Sage** `#3f5d5f` | Logo mark, editorial accents |
| **Mist** `#ecf0f1` · **Bone** `#f1f1ef` · **White** `#ffffff` | Surfaces, borders, alternating bands |

| Role | Font | Size |
|---|---|---|
| Title | Poppins | 42 |
| Subtitle | Montserrat | 36 |
| Subheading | Proxima Nova *(web fallback: Montserrat)* | 24 |
| Body | Merriweather Sans | 16 |

**Logos** — `brand/assets/logo-horizontal.svg` (primary), `logo-stacked.svg`, `logo-icon.svg`. All vector, all `fill="currentColor"`, so one file covers every colourway.

---

## Using it in a project

```html
<link rel="stylesheet" href="brand/tokens.css">
<link rel="stylesheet" href="brand/components.css">
```

```html
<a class="cc-btn cc-btn--primary cc-btn--lg" href="/contact">Book a consultation</a>
```

Or pull the raw values:

```js
const tokens = await fetch('brand/tokens.json').then(r => r.json());
tokens.color.brand.blue.value;   // "#3498db"
```

---

## Using it with Claude

Point Claude at this repo and it has everything it needs to produce on-brand work:

> Using the design system at github.com/krisad-chap/Chaparral-Creative, build a landing page for our local-government SEO service.

The `design-system/` previews double as few-shot examples — Claude reads the markup and matches the patterns rather than inventing its own.

---

## Provenance

Colour values, font assignments and font sizes come **verbatim** from the Canva brand kit *Chaparral Creative Brand Kit*. Everything else — the extended colour ramp, spacing scale, radius steps, elevation, component specs and written voice guidance — was built on top to make the kit usable as a working system. `tokens.json` marks every value as either `"canva": true` or `"derived": true` so the boundary stays visible.

**Canva remains the master for logo artwork.** See `brand/assets/README.md`.

---

*Chaparral Creative, LLC — creative marketing strategies that drive growth.*
