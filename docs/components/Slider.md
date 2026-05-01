# Slider

> Range input slider with live value display, unit label, and CSS custom property for track fill.

---

## Import

```jsx
import { Slider } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `min` | `number` | `0` | Minimum value. |
| `max` | `number` | `100` | Maximum value. |
| `step` | `number` | `1` | Increment per step. |
| `value` | `number` | — | Controlled value. Omit for uncontrolled (defaults internally to `50`). |
| `onChange` | `func` | — | Called with the numeric value on change. |
| `unit` | `string` | `''` | Unit label appended to the displayed value (e.g. `%`, `px`). |
| `disabled` | `bool` | `false` | Disables the slider. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Slider unit="%" />
```

### Controlled

```jsx
const [quality, setQuality] = useState(75);

<Slider
  min={0}
  max={100}
  step={5}
  value={quality}
  onChange={setQuality}
  unit="%"
/>
```

### Custom range with step

```jsx
const [timeout, setTimeout] = useState(30);

<Slider
  min={5}
  max={120}
  step={5}
  value={timeout}
  onChange={setTimeout}
  unit=" sec"
/>
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onChange` | `(value: number) => void` | Fired with the parsed numeric value on every change. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-slider` | Root wrapper div |
| `.nxp-slider__range` | Native `<input type="range">` |
| `.nxp-slider__value` | Current value display span |

---

## Notes

- Track fill is driven by a CSS custom property `--val` (0–100 percentage) set via a `ref` on the input element.
- ARIA attributes `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` are applied to the native input.
- Uncontrolled mode defaults to `50`; to start at a specific value use the controlled pattern.
