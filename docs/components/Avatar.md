# Avatar

> Circular user-identity element — shows an image or falls back to initials.

---

## Import

```jsx
import { Avatar } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string` | — | Initials shown when no `src` provided (e.g. `"NK"`). |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Avatar diameter. |
| `src` | `string` | — | Image URL. Renders `<img>` when provided. |
| `alt` | `string` | `''` | Alt text for the image; also used as `aria-label`. |
| `className` | `string` | `''` | Extra class on root element. |

---

## Usage

```jsx
<Avatar size="sm">A</Avatar>
<Avatar>NK</Avatar>
<Avatar size="lg">NX</Avatar>

<Avatar src="/avatars/nirmal.jpg" alt="Nirmal Kavaiya" size="lg" />
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-avatar` | Base element |
| `.nxp-avatar--sm` | Small (28 px) |
| `.nxp-avatar--lg` | Large (48 px) |
