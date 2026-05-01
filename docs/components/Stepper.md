# Stepper

Numeric +/− stepper for integer input.

## Import

```jsx
import { Stepper } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `undefined` | Controlled value |
| `defaultValue` | `number` | `0` | Initial value (uncontrolled) |
| `onChange` | `(value: number) => void` | — | Change handler |
| `min` | `number` | `-Infinity` | Minimum allowed value |
| `max` | `number` | `Infinity` | Maximum allowed value |
| `step` | `number` | `1` | Increment / decrement amount |
| `disabled` | `boolean` | `false` | Disables all controls |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic

```jsx
<Stepper defaultValue={1} min={0} max={10} onChange={setQty} />
```

### Controlled

```jsx
const [count, setCount] = useState(3)
<Stepper value={count} onChange={setCount} min={1} max={99} />
```

### Custom step

```jsx
<Stepper defaultValue={0} step={5} min={0} max={100} />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-stepper` | Root wrapper |
| `.nxp-stepper__btn` | − and + buttons |
| `.nxp-stepper__value` | Number display |
| `.nxp-stepper.is-disabled` | Disabled state |

## Notes

The − button is disabled when `value === min`; the + button is disabled when `value === max`.
