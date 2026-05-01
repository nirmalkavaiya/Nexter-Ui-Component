# Slider

Range input with a live value chip showing the current value.

## Import

```jsx
import { Slider } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `undefined` | Controlled value |
| `defaultValue` | `number` | `0` | Initial value (uncontrolled) |
| `onChange` | `(value: number) => void` | — | Change handler |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `disabled` | `boolean` | `false` | Disables the slider |
| `showValue` | `boolean` | `true` | Show the live value chip |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic

```jsx
<Slider defaultValue={50} onChange={console.log} />
```

### Controlled

```jsx
const [opacity, setOpacity] = useState(80)
<Slider value={opacity} onChange={setOpacity} min={0} max={100} step={5} />
```

### Without value chip

```jsx
<Slider showValue={false} />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-slider` | Root wrapper |
| `.nxp-slider__input` | The `<input type="range">` |
| `.nxp-slider__value` | Live value chip |
| `.nxp-slider.is-disabled` | Disabled state |

## Notes

The filled track uses a CSS `--val` custom property (0–100) set inline on the input element to drive the gradient background.
