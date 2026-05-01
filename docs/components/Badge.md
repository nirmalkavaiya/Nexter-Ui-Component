# Badge

> Small label used to highlight status, counts, or categories.

---

## Import

```jsx
import { Badge } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "primary" \| "success" \| "warning" \| "error" \| "gradient"` | `"default"` | Visual style of the badge. |
| `children` | `node` | — | Badge label text or content. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Badge>New</Badge>
```

### Variants

```jsx
<Badge variant="primary">Beta</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Overdue</Badge>
<Badge variant="gradient">Pro</Badge>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-badge` | Root `<span>` element (always present) |
| `.nxp-badge--primary` | `variant="primary"` |
| `.nxp-badge--success` | `variant="success"` |
| `.nxp-badge--warning` | `variant="warning"` |
| `.nxp-badge--error` | `variant="error"` |
| `.nxp-badge--gradient` | `variant="gradient"` |

---

## Notes

- `"default"` variant renders only the base `.nxp-badge` class with no modifier.
- `"gradient"` applies the brand gradient (`--nxp-brand-grad`) defined in the design tokens.
