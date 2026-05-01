# Tag

> Compact inline label for categories, topics, or metadata.

---

## Import

```jsx
import { Tag } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "primary" \| "success" \| "warning" \| "error"` | `"default"` | Color theme of the tag. |
| `children` | `node` | — | Tag label text. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Tag>WordPress</Tag>
```

### Variants

```jsx
<Tag variant="primary">Featured</Tag>
<Tag variant="success">Published</Tag>
<Tag variant="warning">Draft</Tag>
<Tag variant="error">Broken</Tag>
```

### Tag list

```jsx
<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
  {post.categories.map((cat) => (
    <Tag key={cat}>{cat}</Tag>
  ))}
</div>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-tag` | Root `<span>` element |
| `.nxp-tag--primary` | `variant="primary"` |
| `.nxp-tag--success` | `variant="success"` |
| `.nxp-tag--warning` | `variant="warning"` |
| `.nxp-tag--error` | `variant="error"` |

---

## Notes

- `"default"` variant adds no modifier class.
- Unlike `Badge`, `Tag` is intended for categorical labels rather than status or counts. The two share similar token-based styles but different semantic intent.
