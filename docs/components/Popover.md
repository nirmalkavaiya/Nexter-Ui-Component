# Popover

Floating card for contextual content, anchored to a trigger element.

## Import

```jsx
import { Popover } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `ReactNode` | — | The element that opens the popover |
| `children` | `ReactNode` | — | Popover panel content |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Preferred placement |
| `open` | `boolean` | `undefined` | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | — | Open state change handler |
| `className` | `string` | `''` | Extra class on popover panel |

## Usage

### Uncontrolled (click to open)

```jsx
<Popover trigger={<Button variant="ghost">Info</Button>}>
  <p>This is contextual help text.</p>
</Popover>
```

### Controlled

```jsx
const [open, setOpen] = useState(false)

<Popover
  open={open}
  onOpenChange={setOpen}
  trigger={<Button onClick={() => setOpen(o => !o)}>Options</Button>}
>
  <ul>
    <li>Edit</li>
    <li>Duplicate</li>
    <li>Delete</li>
  </ul>
</Popover>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-popover` | Popover panel |
| `.nxp-popover--top` | Placement modifier |
| `.nxp-popover--bottom` | Placement modifier |
| `.nxp-popover--left` | Placement modifier |
| `.nxp-popover--right` | Placement modifier |
| `.nxp-popover.is-open` | Visible state |

## Notes

- Clicking outside the popover closes it
- Escape key closes the popover
