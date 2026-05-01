# Accordion

> Collapsible content panels — supports single-open and multi-open modes.

---

## Import

```jsx
import { Accordion } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `array` | `[]` | Array of `{ id, title, content }` objects to render as panels. |
| `defaultOpen` | `array` | `[]` | Array of `id` values that should be open on first render. |
| `multi` | `bool` | `false` | When `true`, multiple panels can be open simultaneously. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
const faqItems = [
  { id: 'shipping', title: 'How long does shipping take?', content: 'Orders ship within 2–5 business days.' },
  { id: 'returns',  title: 'What is the return policy?',  content: 'Returns accepted within 30 days of purchase.' },
  { id: 'support',  title: 'How do I contact support?',   content: 'Email us at support@example.com.' },
];

<Accordion items={faqItems} />
```

### Pre-opened panel

```jsx
<Accordion items={faqItems} defaultOpen={['shipping']} />
```

### Multi-open mode

```jsx
<Accordion items={faqItems} multi />
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-accordion` | Root wrapper element |
| `.nxp-accordion__item` | Each panel wrapper |
| `.nxp-accordion__item.is-open` | Panel is expanded |
| `.nxp-accordion__head` | Toggle button |
| `.nxp-accordion__chevron` | SVG chevron icon inside head |
| `.nxp-accordion__body` | Collapsible content region |

---

## Notes

- Each `item` object requires a unique `id` (string or number), a `title` (string or node), and `content` (string or node).
- The toggle button uses `aria-expanded` and `aria-controls` pointing to the body element for full a11y compliance.
- The body element has `role="region"` so screen readers announce it as a landmark.
