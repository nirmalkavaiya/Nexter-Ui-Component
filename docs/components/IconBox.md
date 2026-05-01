# IconBox

> Feature card combining a topline label, icon (or step number), title, description, and CTA link.

---

## Import

```jsx
import { IconBox } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `topline` | `string \| node` | — | Small eyebrow text above the icon/step. |
| `icon` | `node` | — | Icon element. Hidden when `step` is provided. |
| `title` | `string \| node` | — | Card heading. |
| `description` | `string \| node` | — | Supporting body text. |
| `cta` | `string` | — | Call-to-action link label. |
| `href` | `string` | — | URL for the CTA link. Omit for a no-op anchor. |
| `step` | `number \| string` | — | Step number. When provided, renders a step bubble instead of the icon. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Feature card with icon

```jsx
<IconBox
  icon="⚡"
  title="Instant Indexing"
  description="Submit URLs to search engines in real time using the IndexNow protocol."
  cta="Learn more"
  href="/features/indexnow"
/>
```

### Numbered step card

```jsx
<IconBox
  step={1}
  title="Connect your site"
  description="Install the plugin and verify your domain in under 2 minutes."
/>
```

### With topline

```jsx
<IconBox
  topline="Step 2 of 3"
  icon="🔒"
  title="Set up redirects"
  description="Map old URLs to new destinations to preserve SEO equity."
  cta="Configure redirects"
  href="/settings/redirects"
/>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-iconbox` | Root wrapper div |
| `.nxp-iconbox__topline` | Topline eyebrow div |
| `.nxp-iconbox__step` | Step number bubble |
| `.nxp-iconbox__icon` | Icon wrapper (hidden when `step` is set) |
| `.nxp-iconbox__title` | Title div |
| `.nxp-iconbox__desc` | Description paragraph |
| `.nxp-iconbox__cta` | CTA anchor |

---

## Notes

- When `step` is provided, the `icon` is not rendered — they are mutually exclusive.
- CTA links with no `href` call `e.preventDefault()` to avoid navigating to `#`.
- The icon wrapper has `aria-hidden="true"` — it is decorative.
