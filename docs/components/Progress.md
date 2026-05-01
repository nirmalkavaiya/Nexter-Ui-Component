# Progress

> Horizontal progress bar with semantic ARIA attributes.

---

## Import

```jsx
import { Progress } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Progress percentage (0–100). Values are clamped to this range. |
| `variant` | `"default" \| "success" \| "warning" \| "error"` | `"default"` | Color theme of the filled bar. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Progress value={65} />
```

### Variants

```jsx
<Progress value={100} variant="success" />
<Progress value={72}  variant="warning" />
<Progress value={35}  variant="error" />
```

### Dynamic progress

```jsx
const [progress, setProgress] = useState(0);

useEffect(() => {
  const id = setInterval(() => setProgress((p) => Math.min(p + 10, 100)), 500);
  return () => clearInterval(id);
}, []);

<Progress value={progress} variant={progress === 100 ? 'success' : 'default'} />
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-progress` | Root track element |
| `.nxp-progress--success` | `variant="success"` |
| `.nxp-progress--warning` | `variant="warning"` |
| `.nxp-progress--error` | `variant="error"` |
| `.nxp-progress__bar` | Filled inner bar (width set via inline style) |

---

## Notes

- Root element has `role="progressbar"` with `aria-valuenow`, `aria-valuemin={0}`, and `aria-valuemax={100}`.
- `"default"` variant adds no modifier class.
- Values outside 0–100 are clamped automatically.
