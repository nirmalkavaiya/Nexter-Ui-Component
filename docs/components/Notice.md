# Notice

Dismissible inline notice in four semantic variants.

## Import

```jsx
import { Notice } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Color and icon variant |
| `title` | `string` | — | Bold notice heading |
| `children` | `ReactNode` | — | Notice body content |
| `dismissible` | `boolean` | `true` | Show dismiss (×) button |
| `onDismiss` | `() => void` | — | Called when dismissed |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Info notice

```jsx
<Notice title="Heads up">
  Your sitemap will regenerate in a few minutes.
</Notice>
```

### Success notice

```jsx
<Notice variant="success" title="Settings saved">
  All changes have been applied.
</Notice>
```

### Warning notice

```jsx
<Notice variant="warning" title="Action required">
  Your SSL certificate expires in 7 days.
</Notice>
```

### Error notice

```jsx
<Notice variant="error" title="Save failed">
  Could not connect to the database.
</Notice>
```

### Non-dismissible

```jsx
<Notice variant="info" dismissible={false}>
  Read-only mode is active.
</Notice>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-notice` | Root wrapper |
| `.nxp-notice--info` | Info variant |
| `.nxp-notice--success` | Success variant |
| `.nxp-notice--warning` | Warning variant |
| `.nxp-notice--error` | Error variant |
| `.nxp-notice__icon` | Variant icon |
| `.nxp-notice__title` | Bold title |
| `.nxp-notice__body` | Body content |
| `.nxp-notice__dismiss` | Dismiss button |
