# Stepper

> Numeric increment/decrement input with +/− buttons, min/max clamping, and editable text input.

---

## Import

```jsx
import { Stepper } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | — | Controlled value. Omit for uncontrolled (starts at `0`). |
| `onChange` | `func` | — | Called with the clamped numeric value on any change. |
| `min` | `number` | `0` | Minimum allowed value. |
| `max` | `number` | — | Maximum allowed value. Omit for no upper bound. |
| `step` | `number` | `1` | Amount to increment/decrement per button click. |
| `disabled` | `bool` | `false` | Disables all controls. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Stepper />
```

### Controlled with min/max

```jsx
const [qty, setQty] = useState(1);

<Stepper
  value={qty}
  onChange={setQty}
  min={1}
  max={99}
/>
```

### Custom step

```jsx
const [fontSize, setFontSize] = useState(16);

<Stepper
  value={fontSize}
  onChange={setFontSize}
  min={10}
  max={72}
  step={2}
/>
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onChange` | `(value: number) => void` | Fired with the clamped numeric value. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-stepper` | Root wrapper div |
| `.nxp-stepper__btn` | Decrement (−) and increment (+) buttons |
| `.nxp-stepper__input` | Number input field |

---

## Notes

- The − button is disabled when `current <= min`; + button disabled when `current >= max`.
- Direct text entry in the input also fires `onChange` after `parseInt` parsing.
- Values are always clamped to `[min, max]` — typing an out-of-range value is corrected on the next render.
