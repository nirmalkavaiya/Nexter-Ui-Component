# Modal

Portal modal dialog — multiple sizes, Escape + backdrop close.

## Import

```jsx
import { Modal } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls modal visibility |
| `onClose` | `() => void` | — | Called when modal is dismissed |
| `title` | `string` | — | Modal header title |
| `byline` | `string` | — | Subtitle text below title |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Modal width |
| `footer` | `ReactNode` | — | Footer slot (typically buttons) |
| `children` | `ReactNode` | — | Modal body content |
| `className` | `string` | `''` | Extra class on modal panel |

## Usage

### Basic confirm modal

```jsx
const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open modal</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm action"
  byline="This cannot be undone."
  footer={
    <>
      <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="destructive" onClick={handleDelete}>Delete</Button>
    </>
  }
>
  <p>Are you sure you want to delete this item?</p>
</Modal>
```

### Large modal

```jsx
<Modal open={open} onClose={onClose} title="Import settings" size="lg">
  <ImportForm />
</Modal>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-modal-backdrop` | Full-screen backdrop |
| `.nxp-modal` | Modal panel |
| `.nxp-modal--sm` | Small width variant |
| `.nxp-modal--md` | Medium width variant (default) |
| `.nxp-modal--lg` | Large width variant |
| `.nxp-modal--xl` | Extra-large width variant |
| `.nxp-modal__header` | Title + byline area |
| `.nxp-modal__title` | Title text |
| `.nxp-modal__byline` | Subtitle text |
| `.nxp-modal__close` | Close button (×) |
| `.nxp-modal__body` | Content area |
| `.nxp-modal__footer` | Footer button row |

## Notes

- Renders into `document.body` via `createPortal`
- Locks body scroll (`overflow: hidden`) while open
- Escape key and backdrop click both call `onClose`
