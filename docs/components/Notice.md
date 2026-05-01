# Notice

> Dismissible notification strip with variant styles, animated exit, and an optional icon.

---

## Import

```jsx
import { Notice } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "info" \| "success" \| "warning" \| "error"` | `"default"` | Controls color theme and default icon. |
| `icon` | `node` | variant default | Custom icon. Pass `null` to suppress the icon. |
| `children` | `node` | — | Notice message content. |
| `onDismiss` | `func` | — | Called after the dismiss animation completes (~220 ms). |
| `dismissible` | `bool` | `true` | When `false`, hides the dismiss (×) button. |
| `className` | `string` | `''` | Additional CSS class(es). |

---

## Usage

### Basic

```jsx
<Notice variant="success">
  Your sitemap has been submitted to Google Search Console.
</Notice>
```

### Non-dismissible

```jsx
<Notice variant="warning" dismissible={false}>
  Maintenance window scheduled for Saturday 02:00–04:00 UTC.
</Notice>
```

### With dismiss callback

```jsx
<Notice variant="info" onDismiss={() => markSeen('update-notice')}>
  Nexter SEO v3.2 is available. <a href="/update">Update now</a>
</Notice>
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onDismiss` | `() => void` | Called ~220 ms after the user clicks the dismiss button (after exit animation). |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-notice` | Root element |
| `.nxp-notice--info` | `variant="info"` |
| `.nxp-notice--success` | `variant="success"` |
| `.nxp-notice--warning` | `variant="warning"` |
| `.nxp-notice--error` | `variant="error"` |
| `.nxp-notice.is-dismissing` | During 220 ms exit animation |
| `.nxp-notice__icon` | Icon span |
| `.nxp-notice__body` | Content wrapper |
| `.nxp-notice__close` | Dismiss button |

---

## Notes

- After dismissal the component returns `null` — it disappears from the DOM.
- Default icons: `default/info → ℹ`, `success → ✓`, `warning → ⚠`, `error → ✕`.
- `"default"` variant does not add a modifier class.
- Root has `role="status"` for polite screen reader announcements.
