repo: krisad-chap/Chaparral-Creative
branch: main
path: brand/, design-system/

## Last sync
date: 2026-08-20T18:04:00Z

### Updated in this project
- Imported colour, type, spacing, radius, elevation and motion tokens from brand/tokens.css.
- Imported the .cc- component library (brand/components.css) verbatim as tokens/components.css.
- Copied the three SVG logo lockups from brand/assets/ into assets/.
- Authored React primitives and a marketing-site UI kit on top of the imported CSS.

## Screen map
| Project file | Built from |
|---|---|
| tokens/colors.css, tokens/typography.css, tokens/layout.css | brand/tokens.css |
| tokens/components.css | brand/components.css |
| assets/logo-*.svg | brand/assets/*.svg |
| components/**/*.jsx | brand/components.css class contracts |
| ui_kits/website/index.html | design-system/components/sections.html, navigation.html, cards.html, forms.html |
| readme.md (content + visual foundations) | brand/guidelines.md, README.md |
