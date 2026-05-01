# Alert

> Inline status message that draws attention to information, success, warnings, or errors.

---

## Import

```jsx
import { Alert } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Controls color and default icon. |
| `icon` | `node` | variant default | Custom icon node. Pass `null` to suppress the icon entirely. |
| `children` | `node` | — | Alert body content. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Alert variant="info">Your session will expire in 5 minutes.</Alert>
```

### Variants

```jsx
<Alert variant="success">Your profile has been saved successfully.</Alert>
<Alert variant="warning">You are approaching your storage limit (90% used).</Alert>
<Alert variant="error">Payment failed. Please check your card details and try again.</Alert>
```

### Custom icon

```jsx
<Alert variant="info" icon="🔔">You have 3 new messages in your inbox.</Alert>
```

### No icon

```jsx
<Alert variant="warning" icon={null}>This action cannot be undone.</Alert>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-alert` | Root element |
| `.nxp-alert--info` | `variant="info"` |
| `.nxp-alert--success` | `variant="success"` |
| `.nxp-alert--warning` | `variant="warning"` |
| `.nxp-alert--error` | `variant="error"` |
| `.nxp-alert__icon` | Icon wrapper span |
| `.nxp-alert__body` | Content wrapper div |

---

## Notes

- Root element has `role="alert"` so assistive technology announces it immediately.
- The icon span is `aria-hidden="true"` — do not rely on it for semantic meaning.
- Default icons per variant: `info → i`, `success → ✓`, `warning → !`, `error → ×`.
