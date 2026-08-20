# Logo assets

**These files are not yet in the repo.** The masters live in the Canva brand kit and could not be transferred automatically — Canva's asset CDN is outside the sandbox network allowlist, so the binaries have to be exported by hand once.

## How to add them

1. Open the [Chaparral Creative Brand Kit](https://www.canva.com/brand/kAGivSelmfc/) → **Logos**
2. Download each asset listed below
3. Rename to the target filename and drop it in this folder
4. Commit

Once they're here, the placeholders in `design-system/foundations/logo.html` can be swapped for real `<img>` tags.

## Files to add

| Target filename | Source in Canva | Notes |
|---|---|---|
| `logo-horizontal.png` | High Res Banner.jpg | Mark + wordmark side by side. Primary lockup. Re-export as PNG with transparency if available. |
| `logo-stacked.png` | High Res Green Logo.jpg | Mark above wordmark. Square and social placements. |
| `logo-icon-sage.png` | High Res Transparent Icon.jpg | Roadrunner only, Sage. Light backgrounds. |
| `logo-icon-white.png` | High Res Transparent Icon White.jpg | Roadrunner only, white. Dark backgrounds. |
| `logo-bw.png` | High Res BW logo.jpg | Single-colour black. Fax, stamps, one-colour print. |
| `favicon.png` | derive from `logo-icon-sage.png` | 512×512, square, safe margin. |

## Export settings

- **Web:** PNG, transparent background, 2× the largest display size (so a 160px lockup exports at 320px+).
- **Print:** PDF or SVG vector. If only raster is available, 300 DPI at final print size.
- **Favicon:** 512×512 PNG, plus `.ico` at 32×32 if the platform needs it.

## A note on the current files

The Canva masters are `.jpg`, which means the "transparent" icons are not actually transparent — JPEG has no alpha channel. If a genuine transparent version exists upstream (original AI/SVG/PNG), use that instead. Otherwise the icons will carry a white or black box behind them on non-matching backgrounds.
