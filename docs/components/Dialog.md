# Dialog

Small centered confirmation dialog with title, message, and action buttons.

## Import

```jsx
import { Dialog } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls dialog visibility |
| `onClose` | `() => void` | — | Called when dialog is dismissed |
| `title` | `string` | — | Dialog heading text |
| `message` | `string` | — | Body message text |
| `confirmLabel` | `string` | `'Confirm'` | Confirm button label |
| `cancelLabel` | `string` | `'Cancel'` | Cancel button label |
| `onConfirm` | `() => void` | — | Called when confirm is clicked |
| `variant` | `'default' \| 'destructive'` | `'default'` | Confirm button style |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic confirm dialog

```jsx
const [open, setOpen] = useState(false)

<Dialog
  open={open}
  onClose={() => setOpen(false)}
  title="Delete item?"
  message="This action cannot be undone."
  variant="destructive"
  confirmLabel="Delete"
  onConfirm={handleDelete}
/>
```

### Informational dialog

```jsx
<Dialog
  open={open}
  onClose={() => setOpen(false)}
  title="Update available"
  message="Version 2.0 is ready to install."
  confirmLabel="Install now"
  onConfirm={handleInstall}
/>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-dialog-backdrop` | Full-screen dimmed backdrop |
| `.nxp-dialog` | Dialog card |
| `.nxp-dialog__title` | Heading text |
| `.nxp-dialog__message` | Body text |
| `.nxp-dialog__actions` | Button row |

## Notes

- Backdrop click and Escape key both trigger `onClose`
- Uses `createPortal` to render into `document.body`
