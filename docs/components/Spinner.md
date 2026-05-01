# Spinner

> Animated loading indicator in three sizes.

---

## Import

```jsx
import { Spinner } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls the spinner diameter. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Spinner />
```

### Sizes

```jsx
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```

### Inline loading state

```jsx
{isLoading ? <Spinner size="sm" /> : <span>Data loaded</span>}
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-spinner` | Root `<span>` element |
| `.nxp-spinner--sm` | `size="sm"` |
| `.nxp-spinner--lg` | `size="lg"` |

---

## Notes

- Root has `role="status"` and `aria-label="Loading"` for screen readers.
- `"md"` size applies no modifier class — it is the default.
- The spinner animation is CSS-only (no JS timer).
