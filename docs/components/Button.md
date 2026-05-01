# Button

> Primary interactive element. Five variants, three sizes, loading state, and icon mode.

---

## Import

```jsx
import { Button } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'destructive' \| 'link'` | `'secondary'` | Visual style. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Height and padding. |
| `icon` | `boolean` | `false` | Square icon-only button (equal width/height). |
| `loading` | `boolean` | `false` | Shows spinner; disables interaction. |
| `disabled` | `boolean` | `false` | Prevents clicks and dims the button. |
| `onClick` | `() => void` | — | Click handler. |
| `children` | `ReactNode` | — | Button label. |
| `className` | `string` | `''` | Extra class on root element. |

---

## Usage

### Variants

```jsx
<Button variant="primary">Save changes</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost">More options</Button>
<Button variant="destructive">Delete site</Button>
<Button variant="link">View docs</Button>
```

### Sizes

```jsx
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary">Medium</Button>
<Button variant="primary" size="lg">Large</Button>
```

### States

```jsx
<Button variant="primary" loading>Saving…</Button>
<Button variant="primary" disabled>Disabled</Button>
```

### Icon button

```jsx
<Button variant="secondary" icon aria-label="Open settings">⚙</Button>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-btn` | Base element |
| `.nxp-btn--primary` | Primary (indigo) |
| `.nxp-btn--secondary` | Secondary (white + border) |
| `.nxp-btn--ghost` | Ghost (transparent) |
| `.nxp-btn--destructive` | Destructive (red) |
| `.nxp-btn--link` | Link style |
| `.nxp-btn--sm` | Small size |
| `.nxp-btn--lg` | Large size |
| `.nxp-btn--icon` | Square icon button |
| `.nxp-btn--loading` | Loading state |
| `.nxp-btn__spinner` | Spinner inside loading button |

---

## Notes

- `loading` automatically sets `disabled` on the `<button>`.
- Override primary colour globally: `--nxp-brand: #7C3AED;`
