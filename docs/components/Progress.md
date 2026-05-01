# Progress

Progress bar in default, success, and warning variants.

## Import

```jsx
import { Progress } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Current value (0–100) |
| `max` | `number` | `100` | Maximum value |
| `variant` | `'default' \| 'success' \| 'warning'` | `'default'` | Color variant |
| `label` | `string` | — | Accessible label (screen readers) |
| `showValue` | `boolean` | `false` | Show percentage text |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic

```jsx
<Progress value={65} />
```

### With label and value

```jsx
<Progress value={40} showValue label="Upload progress" />
```

### Variants

```jsx
<Progress value={100} variant="success" />
<Progress value={30} variant="warning" />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-progress` | Root track element |
| `.nxp-progress__bar` | Filled portion |
| `.nxp-progress--success` | Green variant |
| `.nxp-progress--warning` | Amber variant |
| `.nxp-progress__value` | Percentage text |
