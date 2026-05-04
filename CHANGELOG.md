# Changelog — nexter-ui-component

All notable changes to this project are documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [1.5.3] — 2026-05-04

### Fixed — Full CSS design-token audit: 45 hardcoded values replaced with `--nxp-*` variables

Every property in every class audited for hardcoded values that should use the token system. All issues found and resolved.

**border-radius** (6 locations tokenised)
| Component | Before | After |
|---|---|---|
| `.nxp-ftc` (FeatureToggleCard) | `10px` | `var(--nxp-radius-lg)` |
| `.nxp-ftc-plan` | `20px` | `var(--nxp-radius-pill)` |
| `.nxp-ftc__badge` | `4px` | `var(--nxp-radius-sm)` |
| `.nxp-sortable__handle`, `.nxp-cpicker__trigger-swatch`, `.nxp-cpicker__swatch` | `3px` | `var(--nxp-radius-sm)` |
| `.nxp-ms__list` scrollbar-thumb | `99px` | `var(--nxp-radius-pill)` |
| `.nxp-scroll-area` scrollbar track + thumb | `999px` | `var(--nxp-radius-pill)` |

**box-shadow** (2 locations tokenised)
| Component | Before | After |
|---|---|---|
| `.nxp-ftc` | `0 1px 3px 0 rgba(0,0,0,.05)` | `var(--nxp-shadow-sm)` |
| `.nxp-ftc:hover` | `0 2px 8px 0 rgba(0,0,0,.08)` | `var(--nxp-shadow-md)` |

**transition** (35+ locations tokenised across 15 components)
All hardcoded durations (`.15s`, `.12s`, `.1s`, `0.15s`, `0.12s`, `0.1s`, `0.18s`) in `transition:` properties replaced with `var(--nxp-dur-hover) var(--nxp-ease)`. Components affected: Field, Slider, FeatureToggleCard, ToggleGrid, CopyInput, NumberInput, Breadcrumb, ConfirmButton, SortableList, FileUpload, ColorPicker, DatePicker/DateRangePicker, MultiSelect, OTPInput, Sortable.

**border-color** (1 location)
| Component | Before | After |
|---|---|---|
| `.nxp-textarea__control:hover` | `#cbd5e1` (hardcoded light hex) | `var(--nxp-border-strong)` |

This fix is especially important: `#cbd5e1` was a light-mode only color that would not switch in dark mode.

**Intentionally kept as hardcoded** (non-tokenisable by design):
- ColorPicker thumb/slider `box-shadow: rgba(0,0,0,...)` — overlay shadows must work on any hue background
- Sidebar chevron `200ms` — intentionally slower than standard hover
- `border-radius: 50%` — percentage radii for circles
- `border-radius: 2px` (btn–link focus) — sub-token micro radius

### Changed
- Version: `1.5.2` → `1.5.3`

---

## [1.5.2] — 2026-05-04

### Added — CSS Utility Classes

5 global utility classes added to `src/styles/index.css`. All properties use existing `--nxp-*` design tokens — fully dark-mode-aware and theme-switchable.

**Typography**

| Class | Size | Weight | Color |
|---|---|---|---|
| `.nxp-heading` | `--nxp-font-size-3xl` (24px) | `bold` (700) | `--nxp-color-text-strong` |
| `.nxp-subheading` | `--nxp-font-size-lg` (16px) | `semibold` (600) | `--nxp-color-text-default` |
| `.nxp-body` | `--nxp-font-size-base` (13.5px) | `regular` (400) | `--nxp-color-text-muted` |

All three: `font-family: var(--nxp-font-family-sans)`, `margin: 0`, correct `line-height` token per optical role.

**Cards**

| Class | Background | Shadow | Use |
|---|---|---|---|
| `.nxp-card` | `--nxp-color-surface-card` (white / dark: #1E293B) | `--nxp-shadow-sm` | Primary content card |
| `.nxp-card--alt` | `--nxp-color-bg-alt` (#F8FAFC / dark: #0F172A) | none | Tinted / secondary surface |

Both cards: `border: 1px solid --nxp-color-border-default`, `border-radius: --nxp-radius-lg` (12px), `padding: --nxp-spacing-lg` (24px), `box-sizing: border-box`, smooth `transition` on background + border-color via `--nxp-motion-duration-hover` + `--nxp-motion-ease-standard`.

**Usage**
```html
<h1 class="nxp-heading">Page title</h1>
<h2 class="nxp-subheading">Section title</h2>
<p class="nxp-body">Body copy or description text.</p>

<div class="nxp-card">Primary card content</div>
<div class="nxp-card--alt">Tinted alternate card</div>
```

### Changed
- Version: `1.5.1` → `1.5.2`

---

## [1.5.1] — 2026-05-04 *(patch 2)*

### Performance — `npm install github:…` now fast

**Before:** `npm install github:nirmalkavaiya/Nexter-Ui-Component` could take 2–5 minutes.
**After:** Completes in 3–8 seconds.

**Root cause of slowness:** npm v7+ always installs a git dependency's devDependencies before running any lifecycle script, including our conditional `prepare`. That meant installing `@storybook` (6 packages + hundreds of transitive deps), `@playwright/test`, `chromatic`, `vite`, `style-dictionary`, etc. — on every consumer install, for no benefit since `dist/` is already committed.

**Changes:**

| | Before | After |
|---|---|---|
| `prepare` script | Conditional node check (still triggered devDep install) | **Removed** — `dist/` is committed, no build needed at install time |
| `files` field | `["dist","src","tokens","style-dictionary.config.mjs"]` | `["dist","tokens"]` — src is never needed by consumers |
| `.npmignore` | Not present | Added — excludes `src/`, `vite.config.js`, test dirs, storybook, etc. |
| Pack size | 207 files / 182 kB / 911 kB unpacked | **72 files / 98 kB / 485 kB unpacked (−47%)** |
| devDeps installed on `npm install github:…` | ~300+ transitive packages | **0** |

**For library developers:** `dist/` is still committed so you get it from git. To rebuild after source changes run `npm run build` explicitly.

---

## [1.5.1] — 2026-05-04

### Fixed — CSS not loading in webpack / @wordpress/scripts consumers

**Root cause:** `"sideEffects": false` in `package.json` told webpack that every file in the package was pure. `vite-plugin-css-injected-by-js` places all styles inside an IIFE at the top of `dist/index.js`. Because webpack's production tree-shaking honoured `sideEffects: false`, it eliminated that IIFE as dead code — zero styles loaded.

**Three-layer fix:**

1. **`package.json` `sideEffects`** changed from `false` to an allowlist:
   ```json
   "sideEffects": ["./dist/index.js", "./dist/index.cjs.js"]
   ```
   Per-component files remain fully tree-shakeable; only the two entry bundles are marked as having side effects so the CSS IIFE survives.

2. **`vite.config.js`** — explicit options added to `cssInjectedByJsPlugin`:
   - `relativeCSSInjection: false` — all CSS stays in the entry bundle, not split into per-component files (webpack would silently drop those)
   - `topExecutionPriority: true` — CSS IIFE runs before any component code, styles available before first render
   - `styleId: 'nexter-ui-component'` — prevents duplicate `<style>` if bundle is loaded twice

3. **Consumer webpack guard** — for `@wordpress/scripts` projects add to `webpack.config.js`:
   ```js
   { test: /node_modules[\\/]nexter-ui-component[\\/]dist[\\/]index/, sideEffects: true }
   ```

### Changed
- Version: `1.5.0` → `1.5.1`

---

## [1.5.0] — 2026-05-04

### Added — RTL Support
- **Full bidirectional (RTL) support** for all 61 components via pure CSS — zero JS changes, zero API changes
- New file `src/styles/rtl.css` (280 lines) — additive `[dir="rtl"]` overrides, fully backward-compatible
- Usage: add `dir="rtl"` to `<html>` or any ancestor element; all Nexter components inside auto-adapt

**Component-level RTL fixes:**
| Component | What flips |
|---|---|
| Toggle | Knob slides right→left; `translateX` direction flipped |
| Notice | Accent bar moves to inline-end (right side) |
| Search | Icon and input padding sides swap |
| Dropdown / Combobox / MultiSelect | Menus open from inline-end edge |
| DatePicker / DateRangePicker | Popovers open from inline-end; nav arrows mirror |
| ColorPicker | Panel opens from inline-end; alpha value aligns left |
| NumberInput | Dec/Inc button borders and flex order swap |
| CopyInput | Copy button border moves to inline-end |
| Breadcrumb | Separator chevron mirrors (`scaleX(-1)`) |
| Pagination | Prev/Next arrow icons mirror |
| Carousel | Prev/Next buttons mirror |
| Drawer | Left/right panels swap position + new RTL keyframe animations |
| Sidebar | Border moves to inline-end; child indent flips; collapse toggle position and arrow mirror |
| Collapsible | Trigger text direction + chevron mirrors |
| Accordion | Trigger text direction |
| Tabs | Panel text alignment + padding side |
| Table | `th`/`td` text-align + `data-align="end"` override |
| Typography | Blockquote border + list padding side |
| Toast | Text direction + close button order |
| Alert / Banner | Text direction + close button position |
| Tag | Remove icon order |
| Select | Chevron and padding flip |
| Field | Helper/error text direction |
| Label | Text direction + required marker margin |
| StatCard | Text direction |
| ScrollArea | Direction control with inner content override |
| Separator | Label text direction |
| Popover | Aligns to inline-end of trigger |
| SortableList | Drag handle margin flip |

### Added — Auto GitHub Releases
- `.github/workflows/release.yml` — triggers on every push to `main`
- Reads version from `package.json`, creates git tag `v{version}` if not already present
- Publishes a GitHub Release with auto-generated notes from commits since last release
- Skips silently if the tag already exists (safe to re-push)
- `npm run release` — manual release command via `gh` CLI (optional)

### Changed
- `package.json` version `1.4.0` → `1.5.0`
- Keywords: added `rtl`, `bidi`, `right-to-left`, `arabic`, `hebrew`
- TypeScript: added `rtlSupport` export + JSDoc documentation of RTL usage

---

## [1.4.0] — 2026-05-04

### Added — Design Token System
- **`tokens/` directory** with Tokens Studio / Figma-compatible JSON
  - `global.json` — brand palette (100–900 + accent), spacing scale (xs–3xl), radius (none–full), sizing, typography, motion
  - `light.json` — semantic light-theme tokens (bg, primary, text, border, surface, shadow)
  - `dark.json` — semantic dark-theme tokens (same structure, dark values)
  - `$themes.json` — Tokens Studio theme definitions
  - `$metadata.json` — token set order for Tokens Studio
- **`style-dictionary.config.mjs`** — build pipeline: reads `tokens/*.json` → outputs `src/styles/theme.css`
  - Naming: `--nxp-color-primary`, `--nxp-spacing-md`, `--nxp-radius-md`
  - Outputs `:root {}` (light) + `.nxp-dark, [data-theme="dark"] {}` + `@media (prefers-color-scheme: dark)` blocks
  - Backward-compat aliases so all existing `--nxp-brand`, `--nxp-bg`, `--nxp-text` etc. still work
- **`src/styles/theme.css`** — auto-generated, 397 lines — all semantic CSS custom properties

### Added — ThemeProvider
- `<ThemeProvider defaultTheme="system" storageSync={true}>` — wraps any sub-tree
- Supports `'light' | 'dark' | 'system'` themes
- Writes `.nxp-dark` / `.nxp-light` + `data-theme` attribute to target element
- Persists to `localStorage` under `nxp-theme` key
- `useTheme()` hook → `{ theme, resolvedTheme, setTheme, toggle }`
- Full TypeScript types

### Changed
- `src/styles/index.css` now `@import`s `theme.css` instead of inline `:root` block
- `npm run build` auto-runs token build first
- `npm run build:tokens` — standalone token regeneration
- `files` field includes `tokens/` and `style-dictionary.config.mjs`
- Subpath export: `./ThemeProvider`
- Version: `1.3.0` → `1.4.0`

---

## [1.3.0] — 2026-05-03

### Added — 6 New Components
| Component | Description |
|---|---|
| `Separator` | Horizontal/vertical divider with optional label; `decorative` prop for accessibility |
| `Label` | Standalone form label with required indicator and `htmlFor` |
| `AspectRatio` | Wrapper that enforces any aspect ratio (16/9, 1/1, etc.) |
| `Collapsible` | Generic collapse/expand panel; controlled + uncontrolled; animated chevron |
| `ScrollArea` | Custom scrollbar overlay; horizontal/vertical; cross-browser |
| `Typography` | Single-element variants (`h1`–`h6`, `p`, `lead`, `large`, `small`, `muted`, `code`, `blockquote`) + prose wrapper |

### Added — Per-Component Tree-Shaking
- `preserveModules: true` in Vite/Rollup ESM output — each component is its own file
- 61 individual `dist/components/*/index.js` files
- Full subpath exports map in `package.json` for all components
- Import a single component without pulling the whole bundle:
  ```js
  import Button from 'nexter-ui-component/Button'
  ```

### Changed
- `src/index.js` now exports all 61 components
- `dist/index.js` — 103 KB ESM entry (CSS injected)
- Version: `1.2.0` → `1.3.0`

---

## [1.2.0] — 2026-05-02

### Added
- **TypeScript declarations** (`src/index.d.ts`) — complete props types for all 54 components
- **Full dark mode** — three-layer CSS strategy:
  1. Auto: `@media (prefers-color-scheme: dark)` — respects OS preference
  2. Explicit: `.nxp-dark` or `[data-theme="dark"]` on any ancestor
  3. Override: `.nxp-light` forces light mode regardless of OS
- Dark mode covers all 17 design tokens + every component

### Fixed
- `sideEffects: false` in `package.json` — enables proper tree-shaking now that CSS is JS-injected

### Changed
- Version: `1.1.1` → `1.2.0`

---

## [1.1.1] — 2026-05-01

### Fixed
- **CSS not loading** after `npm install` — root cause: CSS was not bundled into JS
- Integrated `vite-plugin-css-injected-by-js@3.5.2` — all styles auto-inject at runtime
- Consumers no longer need `import 'nexter-ui-component/dist/style.css'`
- Fixed webpack `splitChunks` documentation for consumers using `@wordpress/scripts`

---

## [1.0.0] — Initial Release

- 54 accessible React components for WordPress admin / dashboard UIs
- CSS custom properties (design tokens) via `--nxp-*` variables
- Peer dependencies: React ≥ 17
