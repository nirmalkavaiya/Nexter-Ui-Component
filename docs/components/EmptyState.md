# EmptyState

> Placeholder shown when a list or view has no content, with optional icon, title, description, and action.

---

## Import

```jsx
import { EmptyState } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `node` | — | Illustration or emoji rendered above the title. |
| `title` | `string \| node` | — | Primary heading. |
| `description` | `string \| node` | — | Supporting text below the title. |
| `action` | `node` | — | Call-to-action button or link. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<EmptyState
  icon="📭"
  title="No redirects yet"
  description="Create your first redirect rule to start managing URLs."
  action={<Button variant="primary">Add Redirect</Button>}
/>
```

### Without action

```jsx
<EmptyState
  icon="🔍"
  title="No results found"
  description="Try adjusting your search or filter to find what you're looking for."
/>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-empty` | Root wrapper div |
| `.nxp-empty__icon` | Icon wrapper div |
| `.nxp-empty__title` | Title div |
| `.nxp-empty__desc` | Description paragraph |

---

## Notes

- Root element has `role="status"` to announce the empty state to assistive technology.
- The icon wrapper is `aria-hidden="true"` — decorative icons are ignored by screen readers.
- The `action` slot is rendered inside an unstyled `div` with `marginTop: 8px`. Apply your own spacing if needed.
