# Skeleton

> Animated loading placeholder that mimics content shapes while data is being fetched.

---

## Import

```jsx
import { Skeleton } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"line" \| "circle" \| "title"` | `"line"` | Shape of the skeleton placeholder. |
| `width` | `string \| number` | — | CSS width value (e.g. `"200px"`, `"60%"`). Overrides the default full-width. |
| `style` | `object` | `{}` | Additional inline styles merged with the width. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Line skeleton

```jsx
<Skeleton />
<Skeleton width="80%" />
<Skeleton width="60%" />
```

### Title skeleton

```jsx
<Skeleton variant="title" width="50%" />
```

### Circle (avatar) skeleton

```jsx
<Skeleton variant="circle" style={{ width: 40, height: 40 }} />
```

### Skeleton list

```jsx
<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
  <Skeleton variant="title" width="40%" />
  <Skeleton />
  <Skeleton width="90%" />
  <Skeleton width="70%" />
</div>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-skeleton` | Root `<span>` element |
| `.nxp-skeleton--circle` | `variant="circle"` |
| `.nxp-skeleton--title` | `variant="title"` |

---

## Notes

- Root element has `aria-hidden="true"` and `role="presentation"` — screen readers skip it entirely.
- The shimmer animation is defined in the CSS design-token stylesheet.
- `"line"` variant adds no modifier class — it is the default shape.
