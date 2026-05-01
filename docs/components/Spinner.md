# Spinner

Loading spinner in three sizes.

## Import

```jsx
import { Spinner } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Spinner size |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Inline

```jsx
<Spinner />
<Spinner size="sm" />
<Spinner size="lg" />
```

### Inside a button

```jsx
<Button variant="primary" loading>
  <Spinner size="sm" /> Saving…
</Button>
```

### Full-page loader

```jsx
<div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
  <Spinner size="lg" />
</div>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-spinner` | Root element |
| `.nxp-spinner--sm` | 16px size |
| `.nxp-spinner--md` | 24px size (default) |
| `.nxp-spinner--lg` | 32px size |

## Notes

The spin animation is paused when `prefers-reduced-motion: reduce` is active.
