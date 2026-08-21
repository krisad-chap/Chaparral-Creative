# Chaparral Creative — Design System

Chaparral Creative, LLC is a digital marketing agency working with local governments, nonprofits, service businesses and regional brands, mostly across Texas. Founded and led by Krisa De La Cruz. Services: SEO and web optimization, content and digital strategy, social media management, paid search, and brand and creative design.

The line the brand leads with: **More traffic, more leads, more growth — digital marketing that works.**

What the agency sells is clarity: an audit first, then a plan built from what the data says. That posture shapes both the writing and the visual system — plain, specific, numbers-forward.

**Surfaces this system covers.** One product: the marketing website (chaparralcreative.com) plus client-facing collateral built from the same parts. There is no app, dashboard or logged-in product in the source material, so none is recreated here.

## Sources

| Source | What came from it |
|---|---|
| https://github.com/krisad-chap/Chaparral-Creative | Everything. `brand/tokens.css` → `tokens/*.css`; `brand/components.css` → `tokens/components.css` verbatim; `brand/guidelines.md` → the content and visual sections below; `brand/assets/*.svg` → `assets/`; the ten worked examples under `design-system/` → layout patterns for the UI kit |
| Canva brand kit "Chaparral Creative Brand Kit" — https://www.canva.com/brand/kAGivSelmfc/ | Upstream master for colour values, font assignments, font sizes and logo artwork. Not directly accessible from here; values arrive via the repo, which marks each token `canva: true` (verbatim) or `derived: true` |
| chaparralcreative.com | Source of the voice guidance drafted in the repo's guidelines |

Read the repository directly for anything this system abbreviates — the `design-system/` HTML files there are deliberately verbose worked examples and are useful few-shot material.

## Index

| File / folder | What it is |
|---|---|
| `styles.css` | Global entry point. Link this one file; it imports everything below |
| `tokens/fonts.css` | Google Fonts import (Poppins, Montserrat, Merriweather Sans) |
| `tokens/colors.css` | Brand, neutral, extended-ramp, status and semantic colour tokens |
| `tokens/typography.css` | Families, nine-step size scale, rhythm, and the `.cc-display … .cc-eyebrow` type classes |
| `tokens/layout.css` | Spacing, radius, elevation, motion, container |
| `tokens/base.css` | Box-sizing, body defaults, link colours, focus ring |
| `tokens/components.css` | The `.cc-` component library, imported verbatim from the source repo |
| `assets/` | `logo-horizontal.svg` (primary), `logo-stacked.svg`, `logo-icon.svg` |
| `components/` | React primitives — see the list below |
| `ui_kits/website/` | Click-through recreation of the marketing site (home, service, work, contact) |
| `guidelines/` | The specimen cards shown in the Design System tab |
| `SKILL.md` | Agent-skill wrapper so this folder works in Claude Code |
| `github.md` | Source-repo association and sync record |

### Components

Grouped by concern. Every family maps to a class block already defined in `brand/components.css` — nothing invented.

- **`components/actions/`** — `Button`, `TextLink`
- **`components/forms/`** — `Field`, `Input`, `Select`, `Textarea`, `Checkbox`
- **`components/content/`** — `Card`, `Stat`, `Table`
- **`components/feedback/`** — `Badge`, `Alert`
- **`components/navigation/`** — `Nav`, `Breadcrumb`, `Tabs`
- **`components/layout/`** — `Section`, `Container`, `Hero`, `Eyebrow`, `Text`

**Intentional additions.** `Field` (the source has `.cc-field` parts but no assembled wrapper), `Eyebrow` and `Text` (React wrappers over the `.cc-eyebrow` and `.cc-display…cc-caption` type classes so the scale is used rather than retyped), and `Container` (over `.cc-container`). All four are thin wrappers over existing CSS, added so screens compose instead of hand-writing classes.

**Not built, because the source does not define them.** Footer, testimonial and empty-state blocks appear in the repo's worked examples as ad-hoc compositions with inline styles, not as library classes. The UI kit composes them the same way. There is no Dialog, Toast, Tooltip, Avatar or Switch in the source; none was added.

## Content fundamentals

Voice, verbatim in spirit from `brand/guidelines.md`: a capable operator, not a marketing brochure.

- **Direct.** The point comes first. If the opening sentence is scene-setting, cut it. *"Call volume dropped a third — here's what changed."*
- **Concrete.** Numbers, timeframes, named outcomes. Reach for a figure in every piece.
- **Plain-spoken.** A city manager understands it. Specific nouns: "Google Business Profile," not "your local listings presence."
- **Warm but not chummy.** We like our clients and it shows. No gimmicks.
- **Confident, not boastful.** Never dismissive of what the client already built.

**Person and address.** Second person for the client, first-person plural for the agency. "Your site," not "the client's site." "We rebuilt the site," never "the site was rebuilt" — active voice throughout.

**Casing.** Sentence case for headlines, section headings and buttons. Uppercase is reserved for eyebrows, badges and table headers, where it is a type treatment (12px Montserrat 700, 0.08em tracking), not a writing choice. Headlines take terminal periods when they are sentences — *"More traffic. More leads. More growth."*

**Length.** Sentences under 25 words. Paragraphs under four lines. Hero headlines under nine words.

**Banned words.** leverage, utilize, best-in-class, cutting-edge, game-changing, unlock, supercharge, "we're excited to announce." No promised rankings or guaranteed positions — talk traffic, leads and revenue. No exclamation marks in client-facing writing (one per social post, maximum). No more than two adjectives on anything.

**Emoji: never.** Not on the site, not in collateral, not in reporting. Nothing in the source uses one.

**Naming.** *Chaparral Creative, LLC* on contracts, invoices, footers and first mention in formal documents. *Chaparral Creative* everywhere else. Never "Chaparral" alone, never "CC."

**Tone by context.** Website — confident, outcome-led, one action per page. Proposals — what's included, what it costs, when it lands; no hedged timelines. Reporting — honest first, encouraging second: what moved, what didn't, what changes next month. Social — lighter, teach something small. Bad news — straight, early, with the fix attached.

**Worked examples of the register:**

> More traffic. More leads. More growth.

> Every engagement opens with an audit: what's ranking, what's converting, and what's quietly costing you. The plan comes from the data, not from a template.

> A free consultation, no obligation — we'll walk your site and tell you the three things worth fixing first.

## Visual foundations

**Colour.** Seven brand colours; roughly 70% neutral (White / Bone), 20% Ink or Slate, 10% Signal Blue and Sage combined. Blue is an accent, used for primary actions, links and active states only. Ink `#120b47` carries headlines, footers and dark bands. Slate `#2c3e50` is body copy. Roadrunner Sage `#3f5d5f` is the logo colour and the editorial accent — eyebrows, quotes, badge accents. Status colours are derived, each with a tint for backgrounds.

Accessibility: Ink and Slate pass AAA on white at any size. White on Signal Blue is 3.2:1 — fine as a UI component (buttons at 14px+ Montserrat 600) but never 16px white body copy on Blue. Slate 60 `#697786` is the lowest AA-safe grey; Slate 40 `#9aa6b2` is disabled and decorative only.

**Type.** Four families, one job each, and no fifth family — if something needs to feel different, change size, weight or colour. Poppins for display and title (56 / 42px, 700, line-height 1.15, tracking −0.02em), never below 24px. Montserrat for section headings, eyebrows, buttons and UI labels (36px subtitle at 600). Proxima Nova for in-content subheads at 24px — licensed, not on Google Fonts, so Montserrat is the approved web fallback and Subheading reads close to Subtitle in browser previews. Merriweather Sans for all running copy, captions and form text (18 / 16 / 14 / 12px, line-height 1.6–1.75).

**Spacing and layout.** 4px base, twelve steps to 96px. Sections are 80px vertical padding (heroes 96px), gutter 24px, container 1200px, prose measure 760px. Layout is a plain 12-column grid with 24px gaps; nothing is fixed-position except the site header, which sticks with a `shadow-sm` hairline. Card grids are three-up at desktop with a 24px gap.

**Backgrounds.** Flat colour bands, alternating White and Bone down the page so long scrolls stay legible, with at most two Ink bands per page. No gradients anywhere. No repeating patterns, no textures, no noise. Imagery is real work and real places — Texas light, wide skies, actual main streets and actual staff — warm and unfiltered rather than cool or graded. If stock is unavoidable, pick frames with room for text and avoid anything that reads as stock (no handshakes over conference tables). Any text over an image sits on a solid Ink overlay at 70% or more; there are no protection gradients or frosted capsules in this system. Where a real image isn't available yet, the pattern is a flat Sage-tint `#eaefee` block at the image's aspect ratio, labelled as a placeholder.

**Illustration.** Line-based, single weight, echoing the roadrunner mark. Never filled or multi-colour illustration.

**Borders, radii, shadows.** 1px borders in `--cc-border` `#dfe4e6`; row rules in Mist. Radii: 4px inputs and small chips, 8px buttons and inputs, 12px cards, 20px for large panels, full for badges and pills. Elevation is four Ink-tinted shadows — `sm` for the sticky header, `md` for raised cards, `lg` for card hover, `xl` for overlays. Cards are one of two treatments: bordered on White (1px Mist border, 12px radius, no shadow) or raised on Bone (`shadow-md`, no border). Never both. No inner shadows, no coloured left-border accent cards.

**Transparency and blur.** Used sparingly and only on Ink: white text at 78% for hero body copy, 72% for inverse nav links, 55% for footer meta, and `rgba(255,255,255,.12)` hairlines inside dark bands. No backdrop blur anywhere.

**Motion.** One easing curve, `cubic-bezier(0.2, 0, 0.2, 1)` — no bounce, no spring, no overshoot. 120ms for button and input colour changes, 200ms for card shadow and lift, 320ms for panel reveals. Transitions are on colour, shadow and a 2px translate only; nothing fades in on scroll.

**Interaction states.** Hover darkens rather than lightens: Blue `#3498db` → `#2b7fbd`; press → `#22689b`. Ink buttons go to Ink 90. Secondary buttons fill with Bone on hover and Mist on press, with the border stepping to Slate 40. Ghost buttons take a Blue-tint wash. Links keep their colour and thicken the underline from 1px to 2px. Cards lift 2px with a shadow step, only when the whole card is a link. Nothing shrinks on press and nothing changes opacity. Focus is always a 2px Signal Blue outline at 2px offset — never removed. Disabled is Mist fill with Slate 40 text, `cursor: not-allowed`.

## Iconography

**The source ships no icon set.** No icon font, no SVG sprite, no PNG glyphs — the repo's `brand/assets/` folder contains only the three logo lockups, and the worked example pages use none. Consequently:

- Nothing in this system renders an icon. Buttons, nav, alerts and badges are text-only, which matches the source exactly.
- Emoji are never used. Unicode characters are used as marks in exactly one place, the breadcrumb separator `/`.
- **If an icon becomes necessary,** use [Lucide](https://lucide.dev) — 1.5–2px single-weight strokes, rounded caps, matching the brand's "line-based, single-weight" illustration rule — at 20px inside 44px controls, coloured `currentColor`. This is a substitution, not a brand asset: it is flagged here and nowhere used in this system's screens.

**Logo usage.** `assets/logo-horizontal.svg` is primary (site headers, signatures, letterhead), `logo-stacked.svg` for square placements, `logo-icon.svg` for favicons and avatars once the full lockup has appeared in the same view. All three are single-path SVGs using `fill="currentColor"`, so set the colour on the parent — inline the SVG, or use a CSS mask as the specimen cards and UI kit do. Never hard-code a fill; that breaks the reversed-on-Ink treatment.

Clear space is one quarter of the mark's height on all four sides. Minimum sizes: icon 24px screen / 0.5in print; horizontal lockup 160px / 1.25in. Approved colourways: Sage on White, Sage on Bone, White on Ink. Over photography, place the reversed mark on a solid colour block. Never recolour outside Sage / White / Ink, stretch, rotate, outline, add effects, or rebuild the wordmark in another typeface. Canva remains the master for logo artwork; the SVGs here were traced from raster masters, so prefer original vector artwork if it surfaces.

## Substitutions and gaps

- **Proxima Nova is not licensed for the web here.** The token still points at `'Proxima Nova'` and falls back to Montserrat, per the source. Upload the font files to close the gap.
- **No font binaries are bundled.** Poppins, Montserrat and Merriweather Sans load from Google Fonts.
- **No photography.** Image areas in the UI kit are flat Sage-tint placeholders, labelled as such.
