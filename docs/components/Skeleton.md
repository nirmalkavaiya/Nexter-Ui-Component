# Skeleton

Loading placeholder in line, circle, and title shapes.

## Import

```jsx
import { Skeleton } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'line' \| 'circle' \| 'title'` | `'line'` | Shape variant |
| `width` | `string \| number` | — | Override width (CSS value or px number) |
| `height` | `string \| number` | — | Override height |
| `count` | `number` | `1` | Number of skeleton lines to render |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Text lines

```jsx
<Skeleton count={3} />
```

### Title

```jsx
<Skeleton variant="title" width="60%" />
```

### Avatar placeholder

```jsx
<Skeleton variant="circle" width={40} height={40} />
```

### Card skeleton

```jsx
<div>
  <Skeleton variant="title" width="50%" />
  <Skeleton count={4} />
  <Skeleton width="30%" />
</div>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-skeleton` | Base skeleton element |
| `.nxp-skeleton--line` | Line variant |
| `.nxp-skeleton--circle` | Circle variant |
| `.nxp-skeleton--title` | Title variant (taller line) |

## Notes

Skeleton uses a shimmer animation. The animation is disabled when `prefers-reduced-motion: reduce` is active.
