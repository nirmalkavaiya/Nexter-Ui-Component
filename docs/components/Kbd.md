# Kbd

> Keyboard key indicator styled as a physical keycap.

---

## Import

```jsx
import { Kbd } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `node` | — | Key label (e.g. `⌘`, `K`, `Ctrl`). |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Kbd>⌘</Kbd>
<Kbd>K</Kbd>
```

### Key combination

```jsx
<span>Press <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd> to save.</span>
```

### Shortcut hint in a tooltip

```jsx
<Tooltip content={<>Save <Kbd>⌘S</Kbd></>}>
  <Button variant="primary">Save</Button>
</Tooltip>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-kbd` | Root `<kbd>` element |

---

## Notes

- Renders a semantic `<kbd>` HTML element — screen readers announce keyboard shortcuts correctly.
- No variants or sizes — style overrides can be applied via `className` or CSS tokens.
