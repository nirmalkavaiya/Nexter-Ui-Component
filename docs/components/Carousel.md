# Carousel

> Horizontally scrollable slide deck with dot navigation and prev/next controls.

---

## Import

```jsx
import { Carousel } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `slides` | `array` | `[]` | Array of slide objects (see shape below). |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

### Slide object shape

| Key | Type | Required | Description |
|-----|------|----------|-------------|
| `title` | `string \| node` | Yes | Primary heading of the slide. |
| `eyebrow` | `string` | No | Small label rendered above the title. |
| `description` | `string` | No | Body text paragraph. |
| `cta` | `string` | No | Call-to-action link text. |
| `ctaHref` | `string` | No | URL for the CTA link. Omit for a no-op anchor. |

---

## Usage

### Basic

```jsx
const slides = [
  {
    eyebrow: 'What's new',
    title: 'Introducing Nexter SEO v3',
    description: 'Faster indexing, smarter schema, and a redesigned dashboard.',
    cta: 'Read the release notes',
    ctaHref: '/blog/nexter-seo-v3',
  },
  {
    title: 'Smart Redirects',
    description: 'Map old URLs to new ones in seconds with bulk import support.',
    cta: 'Try it now',
    ctaHref: '/features/redirects',
  },
  {
    eyebrow: 'Coming soon',
    title: 'AI Content Scorer',
    description: 'Get real-time readability and keyword density feedback as you write.',
  },
];

<Carousel slides={slides} />
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-carousel` | Root wrapper |
| `.nxp-carousel__track` | Scrollable slides container |
| `.nxp-carousel__slide` | Individual slide |
| `.nxp-carousel__eyebrow` | Eyebrow label span |
| `.nxp-carousel__title` | Slide heading |
| `.nxp-carousel__desc` | Slide description paragraph |
| `.nxp-carousel__cta` | CTA anchor link |
| `.nxp-carousel__nav` | Navigation bar (dots + buttons) |
| `.nxp-carousel__btn` | Prev / Next arrow buttons |
| `.nxp-carousel__dots` | Dots container |
| `.nxp-carousel__dot` | Individual dot button |
| `.nxp-carousel__dot.is-active` | Dot for the currently visible slide |

---

## Notes

- Scroll position is synced bidirectionally — dragging/swiping the track also updates the active dot.
- Prev/Next buttons use `aria-label` attributes ("Previous slide" / "Next slide") for screen readers.
- Each dot button announces "Go to slide N" via `aria-label`.
- Uses native CSS scroll-snap via `scrollIntoView` — no JS animation library required.
