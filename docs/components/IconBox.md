# IconBox

Feature card with icon, title, description, and an optional CTA link.

## Import

```jsx
import { IconBox } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | — | Icon element or emoji |
| `title` | `string` | — | Card heading |
| `description` | `string` | — | Supporting text |
| `cta` | `ReactNode` | — | Optional action link or button |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic

```jsx
<IconBox
  icon={<span>🚀</span>}
  title="Fast indexing"
  description="Submit URLs to search engines instantly via IndexNow."
/>
```

### With CTA

```jsx
<IconBox
  icon={<span>🔐</span>}
  title="Secure redirects"
  description="Manage 301, 302, 307, and 308 redirects."
  cta={<a href="/redirects">Manage redirects →</a>}
/>
```

### Grid layout

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
  <IconBox icon="🔍" title="SEO Analysis" description="Focus keyword scoring." />
  <IconBox icon="📊" title="Analytics" description="Track traffic trends." />
  <IconBox icon="🗺️" title="Sitemaps" description="Auto-generated XML sitemaps." />
</div>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-icon-box` | Root card |
| `.nxp-icon-box__icon` | Icon container |
| `.nxp-icon-box__title` | Heading text |
| `.nxp-icon-box__desc` | Description text |
| `.nxp-icon-box__cta` | CTA slot |
