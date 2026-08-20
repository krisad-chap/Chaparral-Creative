# Logo assets

Vector lockups for Chaparral Creative, LLC. All three are single-path SVGs using `fill="currentColor"` — they inherit the colour of their parent element, so one file covers every approved colourway.

| File | Lockup | Use |
|---|---|---|
| `logo-horizontal.svg` | Mark + wordmark, side by side | **Primary.** Site headers, email signatures, letterhead — anywhere with horizontal room. |
| `logo-stacked.svg` | Mark above wordmark | Square placements, social avatars, print collateral. |
| `logo-icon.svg` | Roadrunner mark alone | Favicons, app tiles, avatars — once the full lockup has appeared in the same view. |

## Using them

Inline the SVG and set colour on the parent:

```html
<span style="color: var(--cc-sage)">
  <!-- contents of logo-horizontal.svg -->
</span>
```

Or reference the file and colour it with a CSS mask / `<use>` sprite. Do **not** open the file and hard-code a fill — that breaks the reversed-on-Ink treatment.

Approved colourways: Sage `#3f5d5f` on White, Sage on Bone `#f1f1ef`, White on Ink `#120b47`. Full rules in `design-system/foundations/logo.html`.

## Minimum sizes

| | Screen | Print |
|---|---|---|
| Icon | 24px | 0.5 in |
| Horizontal lockup | 160px | 1.25 in |

The mark holds together down to 24px. Below that the tail and crest collapse — use a solid Sage tile with the wordmark set separately.

## Provenance

These were vectorised from the raster masters in the Canva brand kit, so the outlines are traced rather than the original construction curves. They are visually faithful at every size tested (24px to 2000px) and are the right assets for web, app and most print work.

**If the original vector artwork (AI, EPS or SVG) still exists, prefer it** — drop it in here under the same filenames and delete these. For large-format print (vehicle wraps, signage, banners), check with the original designer first.

## Raster exports

No PNG or JPG lives in this repo by design — SVG covers every screen use and scales without loss. If a raster is needed (an email client that strips SVG, a social platform upload, a partner's media kit):

- Export from the SVG at 2× the final display size, transparent background.
- Favicon: 512×512 PNG from `logo-icon.svg`, plus a 32×32 `.ico` if the platform requires it.
- Print: keep it vector. If a raster is unavoidable, 300 DPI at final size.

The Canva brand kit remains the master for anything that needs re-editing: [Chaparral Creative Brand Kit](https://www.canva.com/brand/kAGivSelmfc/).
