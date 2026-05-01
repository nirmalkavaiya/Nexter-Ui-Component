# Dialog

> Confirmation or alert dialog panel with an icon, title, description, and action slot.

---

## Import

```jsx
import { Dialog } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `bool` | `true` | When `false`, the dialog is not rendered. |
| `onClose` | `func` | — | Callback fired when the dialog requests closing. |
| `icon` | `node` | — | Icon rendered at the top of the dialog. |
| `iconVariant` | `"warning" \| "error" \| "success" \| "info"` | `"warning"` | Color theme for the icon container. |
| `title` | `string \| node` | — | Dialog heading text. |
| `description` | `string \| node` | — | Supporting body text. |
| `actions` | `node` | — | Slot for action buttons (confirm, cancel, etc.). |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic confirmation dialog

```jsx
const [open, setOpen] = useState(false);

<Dialog
  open={open}
  onClose={() => setOpen(false)}
  icon="🗑️"
  iconVariant="error"
  title="Delete this post?"
  description="This action is permanent and cannot be reversed. All comments will also be removed."
  actions={
    <>
      <Button variant="danger" onClick={handleDelete}>Yes, delete</Button>
      <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
    </>
  }
/>
```

### Success dialog

```jsx
<Dialog
  open={open}
  icon="✓"
  iconVariant="success"
  title="Payment successful"
  description="Your subscription has been activated. You now have access to all Pro features."
  actions={<Button variant="primary" onClick={() => setOpen(false)}>Continue</Button>}
/>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-dialog` | Root element |
| `.nxp-dialog__icon` | Icon wrapper |
| `.nxp-dialog__icon--warning` | `iconVariant="warning"` |
| `.nxp-dialog__icon--error` | `iconVariant="error"` |
| `.nxp-dialog__icon--success` | `iconVariant="success"` |
| `.nxp-dialog__icon--info` | `iconVariant="info"` |
| `.nxp-dialog__title` | Title div |
| `.nxp-dialog__desc` | Description paragraph |
| `.nxp-dialog__actions` | Actions slot div |

---

## Notes

- Root element uses `role="alertdialog"` and `aria-modal="true"` — wrap in a backdrop/overlay when using inline.
- Dialog does **not** include its own backdrop or focus trap — pair with a `Modal` if you need a full overlay experience.
- `open={false}` returns `null` — the Dialog is completely unmounted, not just hidden.
