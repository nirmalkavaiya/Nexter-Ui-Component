# Toast

Toast notification in default and error variants.

## Import

```jsx
import { Toast } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | — | Notification message |
| `variant` | `'default' \| 'error'` | `'default'` | Color variant |
| `visible` | `boolean` | `false` | Controls toast visibility |
| `onClose` | `() => void` | — | Called when dismissed or auto-hidden |
| `duration` | `number` | `3000` | Auto-dismiss delay in ms (0 = no auto-dismiss) |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic usage pattern

```jsx
const [toast, setToast] = useState({ visible: false, message: '' })

function showToast(msg) {
  setToast({ visible: true, message: msg })
}

<Button onClick={() => showToast('Settings saved!')}>Save</Button>

<Toast
  visible={toast.visible}
  message={toast.message}
  onClose={() => setToast(t => ({ ...t, visible: false }))}
/>
```

### Error toast

```jsx
<Toast
  variant="error"
  visible={hasError}
  message="Failed to save settings."
  duration={5000}
  onClose={clearError}
/>
```

### Persistent (no auto-dismiss)

```jsx
<Toast visible={open} message="Processing…" duration={0} onClose={onClose} />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-toast` | Root element |
| `.nxp-toast--error` | Red error variant |
| `.nxp-toast.is-visible` | Visible/animated-in state |
| `.nxp-toast__message` | Message text |
| `.nxp-toast__close` | Close button |

## Notes

Toast renders in a portal at the bottom of `document.body`. Multiple Toast instances stack vertically.
