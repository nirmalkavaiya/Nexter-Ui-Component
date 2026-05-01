# Popover

> Floating content panel with a title, description, and optional footer — positioning is managed by the parent.

---

## Import

```jsx
import { Popover } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string \| node` | — | Popover heading. |
| `description` | `string \| node` | — | Body text or content. |
| `footer` | `node` | — | Footer slot (links, actions, etc.). |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Popover
  title="Focus keyword"
  description="The primary keyword you want this page to rank for in search results."
/>
```

### With footer action

```jsx
<Popover
  title="Canonical URL"
  description="The preferred version of this URL that search engines should index."
  footer={<a href="/docs/canonical">Learn more →</a>}
/>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-popover` | Root wrapper div |
| `.nxp-popover__title` | Title div |
| `.nxp-popover__desc` | Description paragraph |
| `.nxp-popover__footer` | Footer div |

---

## Notes

- `Popover` is a **presentational** component — it does not manage open/close state or positioning.
- Wrap it in a parent component or use alongside `Tooltip` for trigger + positioning logic.
- Root element has `role="tooltip"` — ensure the anchor element references it via `aria-describedby` if used as a tooltip.
