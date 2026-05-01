# Segmented

Segmented control — a horizontal radio group styled as connected buttons.

## Import

```jsx
import { Segmented } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `{ value: string; label: ReactNode }[]` | `[]` | Segment options |
| `value` | `string` | `undefined` | Controlled selected value |
| `defaultValue` | `string` | — | Initial value (uncontrolled) |
| `onChange` | `(value: string) => void` | — | Selection change handler |
| `disabled` | `boolean` | `false` | Disables all segments |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic

```jsx
<Segmented
  options={[
    { value: 'list',  label: 'List' },
    { value: 'grid',  label: 'Grid' },
    { value: 'table', label: 'Table' },
  ]}
  defaultValue="list"
  onChange={setView}
/>
```

### With icons

```jsx
<Segmented
  options={[
    { value: 'day',   label: '1D' },
    { value: 'week',  label: '7D' },
    { value: 'month', label: '30D' },
  ]}
  value={range}
  onChange={setRange}
/>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-segmented` | Root group wrapper |
| `.nxp-segmented__option` | Individual segment button |
| `.nxp-segmented__option.is-active` | Selected segment |
| `.nxp-segmented.is-disabled` | Disabled state |
