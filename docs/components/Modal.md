# Modal

> Accessible overlay dialog with scroll lock, Escape-to-close, backdrop-click-to-close, and portal rendering.

---

## Import

```jsx
import { Modal } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `bool` | `false` | Controls visibility. Modal is fully unmounted when `false`. |
| `onClose` | `func` | — | Called when the user clicks the backdrop or presses Escape. |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | Sets the modal panel width. |
| `title` | `string \| node` | — | Heading displayed in the modal header. |
| `byline` | `string \| node` | — | Supporting subtitle below the title. |
| `children` | `node` | — | Modal body content. |
| `footer` | `node` | — | Footer slot — typically action buttons. |
| `className` | `string` | `''` | Additional CSS class(es) on the inner panel. |

---

## Usage

### Basic

```jsx
const [open, setOpen] = useState(false);

<>
  <Button variant="primary" onClick={() => setOpen(true)}>Open Settings</Button>

  <Modal
    open={open}
    onClose={() => setOpen(false)}
    title="Site Settings"
    byline="Changes apply immediately after saving."
    footer={
      <>
        <Button variant="primary" onClick={handleSave}>Save</Button>
        <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
      </>
    }
  >
    <Field label="Site title">
      <Input placeholder="My Website" />
    </Field>
  </Modal>
</>
```

### Large modal

```jsx
<Modal open={open} onClose={() => setOpen(false)} size="lg" title="Import CSV">
  {/* file picker, preview table… */}
</Modal>
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onClose` | `() => void` | Fired on backdrop click or `Escape` key. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-modal-backdrop` | Full-screen backdrop overlay |
| `.nxp-modal` | Inner panel container |
| `.nxp-modal--sm` | `size="sm"` |
| `.nxp-modal--lg` | `size="lg"` |
| `.nxp-modal--xl` | `size="xl"` |
| `.nxp-modal__head` | Header row |
| `.nxp-modal__title` | Title text |
| `.nxp-modal__byline` | Subtitle text |
| `.nxp-modal__close` | Close (×) button |
| `.nxp-modal__body` | Scrollable body area |
| `.nxp-modal__foot` | Footer area |

---

## Notes

- Renders into `document.body` via `createPortal` — z-index stacking is isolated from the component tree.
- `document.body` scroll is locked (`overflow: hidden`) while the modal is open and restored on unmount.
- `"md"` size adds no modifier class — it is the default panel width.
- The backdrop element has `role="dialog"` and `aria-modal="true"` pointing at the title for screen readers.
