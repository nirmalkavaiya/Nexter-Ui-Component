# Banner

> Full-width promotional or informational strip with optional icon, title, body text, and action buttons.

---

## Import

```jsx
import { Banner } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "success" \| "warning" \| "error"` | `"default"` | Controls color theme and default icon. |
| `icon` | `node` | variant default | Override the default emoji icon. Pass `null` to remove it. |
| `title` | `string \| node` | — | Bold heading text rendered above the body. |
| `text` | `string \| node` | — | Paragraph body text. |
| `actions` | `node` | — | Slot for action buttons or links. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Banner
  title="New features available"
  text="We've just launched bulk export and advanced filters. Try them now."
/>
```

### Success banner with action

```jsx
<Banner
  variant="success"
  title="Import complete"
  text="142 records were imported without errors."
  actions={<Button variant="primary" size="sm">View Records</Button>}
/>
```

### Warning banner

```jsx
<Banner
  variant="warning"
  title="Your plan is expiring"
  text="Your Pro subscription expires in 3 days. Renew to keep access."
  actions={<Button variant="primary" size="sm">Renew Now</Button>}
/>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-banner` | Root element |
| `.nxp-banner--success` | `variant="success"` |
| `.nxp-banner--warning` | `variant="warning"` |
| `.nxp-banner--error` | `variant="error"` |
| `.nxp-banner__icon` | Icon wrapper span |
| `.nxp-banner__body` | Content wrapper |
| `.nxp-banner__title` | Title div |
| `.nxp-banner__text` | Body text paragraph |
| `.nxp-banner__actions` | Actions slot div |

---

## Notes

- Default icons per variant: `default → 🚀`, `success → ✅`, `warning → ⚠️`, `error → ❌`.
- Root element has `role="region"` — provide a meaningful `title` for screen reader landmarks.
- `"default"` variant does not add a modifier class.
