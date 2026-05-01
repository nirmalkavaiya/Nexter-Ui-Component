# Avatar

> Circular user representation — displays an image or text initials fallback.

---

## Import

```jsx
import { Avatar } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `node` | — | Content shown when no `src` is provided (e.g. initials). |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls the avatar diameter. |
| `src` | `string` | — | Image URL. When provided, renders an `<img>` instead of children. |
| `alt` | `string` | `''` | Alt text for the image (or aria-label when using initials). |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Image avatar

```jsx
<Avatar src="https://i.pravatar.cc/80" alt="Nirmal Kavaiya" size="md" />
```

### Initials fallback

```jsx
<Avatar size="lg" alt="Nirmal Kavaiya">NK</Avatar>
```

### Sizes

```jsx
<Avatar size="sm" alt="Small">NK</Avatar>
<Avatar size="md" alt="Medium">NK</Avatar>
<Avatar size="lg" alt="Large">NK</Avatar>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-avatar` | Root `<span>` element |
| `.nxp-avatar--sm` | `size="sm"` |
| `.nxp-avatar--lg` | `size="lg"` |

---

## Notes

- `"md"` size adds no extra modifier class — it is the base style.
- The `alt` prop doubles as `aria-label` when rendering initials, ensuring screen readers announce the user name.
