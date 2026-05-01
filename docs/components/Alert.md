# Alert

> Inline contextual message with icon and rich content. Four severity variants.

---

## Import

```jsx
import { Alert } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Colour and default icon. |
| `icon` | `ReactNode` | auto | Override the default icon. Pass `null` to hide. |
| `children` | `ReactNode` | — | Alert body content. |
| `className` | `string` | `''` | Extra class on root element. |

---

## Usage

```jsx
<Alert variant="info">A new template pack is ready to import.</Alert>
<Alert variant="success"><strong>Saved.</strong> Your changes are live.</Alert>
<Alert variant="warning">You are nearing the free-plan limit.</Alert>
<Alert variant="error"><strong>Could not save.</strong> Check your network.</Alert>
```

### Custom icon

```jsx
<Alert variant="info" icon="💡">
  Pro tip: use keyboard shortcuts to speed up your workflow.
</Alert>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-alert` | Root element |
| `.nxp-alert--info` | Info variant |
| `.nxp-alert--success` | Success variant |
| `.nxp-alert--warning` | Warning variant |
| `.nxp-alert--error` | Error variant |
| `.nxp-alert__icon` | Icon chip |
| `.nxp-alert__body` | Text / content area |

---

## Notes

- `role="alert"` — announced immediately by screen readers on mount.
- Default icons: `info → i`, `success → ✓`, `warning → !`, `error → ×`.
