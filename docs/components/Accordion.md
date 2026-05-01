# Accordion

> Vertically stacked collapsible panels. Supports single-open or multi-open modes.

---

## Import

```jsx
import { Accordion } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `{ id, title, content }[]` | `[]` | Panels to render. |
| `defaultOpen` | `string[]` | `[]` | IDs of panels open on first render. |
| `multi` | `boolean` | `false` | Allow multiple panels open simultaneously. |
| `className` | `string` | `''` | Extra class on the root element. |

---

## Usage

### Basic

```jsx
const items = [
  { id: 'general', title: 'General settings', content: <p>Manage your site defaults.</p> },
  { id: 'seo',     title: 'SEO options',      content: <p>Title, meta and schema.</p> },
  { id: 'perf',    title: 'Performance',      content: <p>Caching and minification.</p> },
]
<Accordion items={items} />
```

### Pre-opened panel

```jsx
<Accordion items={items} defaultOpen={['seo']} />
```

### Multi-open

```jsx
<Accordion items={items} multi />
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-accordion` | Root wrapper |
| `.nxp-accordion__item` | Each panel |
| `.nxp-accordion__item.is-open` | Panel is expanded |
| `.nxp-accordion__head` | Clickable trigger button |
| `.nxp-accordion__chevron` | Chevron SVG icon |
| `.nxp-accordion__body` | Collapsible content region |

---

## Notes

- `aria-expanded` on trigger, `role="region"` on body — fully keyboard accessible.
- Each item `id` must be unique; used for `aria-controls` wiring.
