# Tooltip

> Hover/focus-triggered floating label that positions itself above the anchor and renders via a portal.

---

## Import

```jsx
import { Tooltip } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string \| node` | — | Tooltip text or content to display. |
| `children` | `node` | — | The element that triggers the tooltip on hover/focus. |
| `className` | `string` | `''` | Additional CSS class(es) on the anchor wrapper span. |

---

## Usage

### Basic

```jsx
<Tooltip content="Copy to clipboard">
  <Button variant="ghost" icon aria-label="Copy">⎘</Button>
</Tooltip>
```

### With Kbd hint

```jsx
<Tooltip content={<>Open search <Kbd>⌘K</Kbd></>}>
  <Button variant="secondary">Search</Button>
</Tooltip>
```

### On an icon

```jsx
<Tooltip content="This page is excluded from the sitemap.">
  <span style={{ cursor: 'help' }}>ⓘ</span>
</Tooltip>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-tooltip-wrap` | Anchor wrapper `<span>` (always present around children) |
| `.nxp-tooltip` | Floating tooltip bubble (portaled to body) |

---

## Notes

- Renders into `document.body` via `createPortal` to avoid clipping by `overflow: hidden` parents.
- Position is computed above the anchor; if it would overflow the top of the viewport it flips below.
- Repositions automatically on window scroll and resize while visible.
- Tooltip responds to both `mouseenter`/`mouseleave` (mouse) and `focus`/`blur` (keyboard).
- Tooltip bubble has `role="tooltip"` — wire `aria-describedby` on the trigger if strict ARIA is required.
- `content` being falsy prevents the portal from being created even if the anchor is hovered.
