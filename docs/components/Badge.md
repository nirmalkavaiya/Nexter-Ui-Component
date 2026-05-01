# Badge

> Small solid label for status or tier. Plain colour or indigo-to-violet gradient.

---

## Import

```jsx
import { Badge } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'gradient'` | `'default'` | Visual style. Use `gradient` for PRO / premium labels. |
| `children` | `ReactNode` | — | Badge text. |
| `className` | `string` | `''` | Extra class on root element. |

---

## Usage

```jsx
<Badge>Default</Badge>
<Badge variant="primary">FREE</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Beta</Badge>
<Badge variant="error">Deprecated</Badge>
<Badge variant="gradient">PRO</Badge>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-badge` | Base element |
| `.nxp-badge--gradient` | Gradient (PRO) |
| `.nxp-badge--primary` | Blue |
| `.nxp-badge--success` | Green |
| `.nxp-badge--warning` | Amber |
| `.nxp-badge--error` | Red |

---

## Notes

- For lighter inline chips prefer [`Tag`](./Tag.md).
