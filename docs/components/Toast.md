# Toast

> Brief notification message with variant styling, optional close button, and live region announcement.

---

## Import

```jsx
import { Toast } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "error"` | `"default"` | Visual style — `"error"` applies error colors. |
| `icon` | `node` | variant default | Custom icon. Default: `✓` for default, `✕` for error. |
| `title` | `string \| node` | — | Bold toast heading. |
| `description` | `string \| node` | — | Supporting body text. |
| `onClose` | `func` | — | When provided, renders a × close button and calls this on click. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Success toast

```jsx
<Toast
  title="Settings saved"
  description="Your changes have been applied successfully."
  onClose={() => dismissToast(id)}
/>
```

### Error toast

```jsx
<Toast
  variant="error"
  title="Save failed"
  description="Could not connect to the server. Please try again."
  onClose={() => dismissToast(id)}
/>
```

### Without close button

```jsx
<Toast title="Indexing complete" description="42 URLs submitted to IndexNow." />
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onClose` | `() => void` | Fired when the user clicks the × close button. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-toast` | Root element |
| `.nxp-toast--error` | `variant="error"` |
| `.nxp-toast__icon` | Icon span |
| `.nxp-toast__body` | Content wrapper |
| `.nxp-toast__title` | Title div |
| `.nxp-toast__desc` | Description div |
| `.nxp-toast__close` | Close button |

---

## Notes

- Root has `role="alert"` and `aria-live="assertive"` — announced immediately by screen readers.
- Toast does **not** auto-dismiss or manage a toast stack — implement a toast queue in your app state.
- `onClose` being absent removes the × button entirely; use this for non-dismissible notifications.
