# Slider

A two-row range slider with an editable numeric input, optional label, and dynamic unit support — including a `<select>` dropdown when multiple units are needed.

## Import

```jsx
import { Slider } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | — | Controlled numeric value |
| `defaultValue` | `number` | `50` | Uncontrolled seed value |
| `onChange` | `(value: number) => void` | — | Called with the new numeric value |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `label` | `string` | — | Left-aligned label above the track; linked to the slider via `htmlFor` |
| `unit` | `string \| false` | `'px'` | Static suffix shown inside the input. Pass `false` to hide all unit display |
| `units` | `string[]` | — | Enables a unit `<select>` dropdown (e.g. `['px', '%', 'rem', 'em']`) |
| `onUnitChange` | `(unit: string) => void` | — | Controlled unit handler |
| `disabled` | `boolean` | `false` | Disables slider, input, and unit dropdown |
| `className` | `string` | `''` | Extra class on the root element |

---

## Usage

### Basic (uncontrolled, static unit)

```jsx
<Slider label="Border Radius" defaultValue={8} unit="px" min={0} max={48} />
```

### Controlled

```jsx
const [width, setWidth] = useState(280)

<Slider
  label="Menu Width"
  value={width}
  onChange={setWidth}
  unit="px"
  min={0}
  max={600}
/>
```

### Dynamic units dropdown

```jsx
const [width, setWidth] = useState(280)
const [unit, setUnit]   = useState('px')

<Slider
  label="Menu Width"
  value={width}
  onChange={setWidth}
  units={['px', '%', 'rem', 'em']}
  unit={unit}
  onUnitChange={setUnit}
  min={0}
  max={600}
/>
```

### No unit (pure number)

```jsx
<Slider label="Opacity" value={opacity} onChange={setOpacity} unit={false} min={0} max={100} />
```

### Disabled

```jsx
<Slider label="Cache TTL" defaultValue={60} unit="s" disabled />
```

---

## Controlled vs Uncontrolled (value)

Omit `value` for uncontrolled mode — internal `useState` is seeded from `defaultValue`. Pass `value` + `onChange` for full controlled mode.

## Controlled vs Uncontrolled (unit)

| Mode | How to activate |
|------|----------------|
| **Uncontrolled unit** | Pass `units` array only — internal state manages selection |
| **Controlled unit** | Pass `units` + `unit` + `onUnitChange` together |

---

## Layout

```
[label]                    [unit ▾] [value]
[━━━━━━━━●━━━━━━━━━━━━━━━━━━━━━]
```

- Top row: label on left, unit dropdown (if `units`) + numeric input on right
- Bottom row: full-width slider track
- Numeric input: directly editable; clamps to `[min, max]` on blur; spinner arrows hidden

---

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-slider` | Root flex-column wrapper |
| `.nxp-slider--disabled` | Opacity + pointer-events none |
| `.nxp-slider__header` | Top row (label + controls) |
| `.nxp-slider__label` | Left-side label (brand colour) |
| `.nxp-slider__controls` | Right-side control group |
| `.nxp-slider__unit-select` | Unit `<select>` dropdown |
| `.nxp-slider__input-wrap` | Border wrapper for the numeric input |
| `.nxp-slider__input` | Editable `<input type="number">` |
| `.nxp-slider__unit-suffix` | Static unit text (no dropdown) |
| `.nxp-slider__range` | The `<input type="range">` track |

---

## Design Tokens Used

| Token | Where |
|-------|-------|
| `--nxp-brand` | Track fill colour, label colour, input focus border |
| `--nxp-brand-soft` | Focus ring on input and unit select |
| `--nxp-border` | Input wrapper and unit select border, unfilled track |
| `--nxp-bg` | Thumb and input background |
| `--nxp-text` | Input value text |
| `--nxp-text-muted` | Static unit suffix |
| `--nxp-radius-sm` | Input wrapper and unit select |
| `--nxp-radius-pill` | Track border-radius |
| `--nxp-shadow-sm` | Thumb shadow |
| `--nxp-font` | All text |

---

## Accessibility

- The `<input type="range">` has `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-label`
- When `label` is provided it is linked to both the range and the numeric input via `htmlFor`/`id`
- The unit `<select>` has `aria-label="Unit"`
- The numeric input has `aria-label="{label} value"` (or `'Slider value'` when no label)
- Keyboard: range is fully navigable with arrow keys; numeric input accepts direct typed values

---

## Notes

- The filled-track gradient is driven by a `--val` CSS custom property (0–100) set via `element.style.setProperty` on every render, keeping the fill accurate across all browsers.
- Editing the numeric input directly triggers `onChange` on each keystroke; leaving the field empty and blurring snaps the value back to `min`.
- The spinner arrows on the numeric input are hidden via `-webkit-appearance: none` / `-moz-appearance: textfield` to maintain the clean design.
