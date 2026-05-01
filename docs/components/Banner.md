# Banner

> Full-width announcement strip with icon, title, body text, and optional actions.

---

## Import

```jsx
import { Banner } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | Colour theme and default icon. |
| `icon` | `ReactNode` | auto | Override the default icon. |
| `title` | `string` | — | Bold headline. |
| `text` | `string` | — | Supporting body copy. |
| `actions` | `ReactNode` | — | Buttons / links at the trailing end. |
| `className` | `string` | `''` | Extra class on root element. |

---

## Usage

```jsx
<Banner
  title="New in v4.7"
  text="WebP image optimisation is now built in."
  actions={<Button variant="link">See changes</Button>}
/>

<Banner variant="success" title="Backup complete." text="All 12 sites are healthy." />

<Banner
  variant="warning"
  title="Heads up."
  text="Free-plan limit at 80%."
  actions={<Button variant="secondary" size="sm">Upgrade</Button>}
/>

<Banner variant="error" title="Could not save." text="Check your network and try again." />
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-banner` | Root element |
| `.nxp-banner--success` | Success variant |
| `.nxp-banner--warning` | Warning variant |
| `.nxp-banner--error` | Error variant |
| `.nxp-banner__icon` | Icon chip |
| `.nxp-banner__body` | Content wrapper |
| `.nxp-banner__title` | Headline |
| `.nxp-banner__text` | Body paragraph |
| `.nxp-banner__actions` | Action slot |
