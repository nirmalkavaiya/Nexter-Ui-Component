# Button

> Clickable action trigger with multiple variants, sizes, loading state, and icon-only mode.

---

## Import

```jsx
import { Button } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "ghost" \| "danger"` | `"secondary"` | Visual style of the button. |
| `size` | `"sm" \| "md" \| "lg"` | — | Size override. `"md"` adds no modifier class. |
| `icon` | `bool` | `false` | When `true`, applies icon-only square padding. |
| `loading` | `bool` | `false` | Shows a spinner and disables the button. |
| `disabled` | `bool` | `false` | Disables the button and sets `aria-disabled`. |
| `onClick` | `func` | — | Click handler. |
| `children` | `node` | — | Button label or content. |
| `className` | `string` | `''` | Additional CSS class(es). |
| `...rest` | — | — | Any other native `<button>` attributes (e.g. `type`, `form`). |

---

## Usage

### Basic

```jsx
<Button variant="primary" onClick={() => alert('Saved!')}>Save Changes</Button>
```

### Variants

```jsx
<Button variant="primary">Publish</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost">Learn More</Button>
<Button variant="danger">Delete Account</Button>
```

### Sizes

```jsx
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary">Default</Button>
<Button variant="primary" size="lg">Large</Button>
```

### Loading state

```jsx
<Button variant="primary" loading>Saving…</Button>
```

### Icon-only

```jsx
<Button variant="ghost" icon aria-label="Close">×</Button>
```

### States

```jsx
<Button variant="primary" disabled>Unavailable</Button>
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onClick` | `(event: MouseEvent) => void` | Fired on button click when not disabled or loading. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-btn` | Base class (always present) |
| `.nxp-btn--primary` | `variant="primary"` |
| `.nxp-btn--secondary` | `variant="secondary"` |
| `.nxp-btn--ghost` | `variant="ghost"` |
| `.nxp-btn--danger` | `variant="danger"` |
| `.nxp-btn--sm` | `size="sm"` |
| `.nxp-btn--lg` | `size="lg"` |
| `.nxp-btn--icon` | `icon={true}` |
| `.nxp-btn--loading` | `loading={true}` |
| `.nxp-btn__spinner` | Inner spinner span (rendered during loading) |

---

## Notes

- When `loading` is `true`, the native `disabled` attribute is also set on the `<button>`, preventing double-submit.
- `aria-disabled` mirrors the computed disabled state for assistive technology.
- Spread `...rest` lets you pass `type="submit"`, `form`, data attributes, etc.
