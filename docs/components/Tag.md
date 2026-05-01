# Tag

Tag/chip in default, primary, success, warning, and error variants.

## Import

```jsx
import { Tag } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'default'` | Color variant |
| `children` | `ReactNode` | — | Tag label |
| `onRemove` | `() => void` | — | Shows remove (×) button when provided |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Variants

```jsx
<Tag>Default</Tag>
<Tag variant="primary">Primary</Tag>
<Tag variant="success">Active</Tag>
<Tag variant="warning">Trial</Tag>
<Tag variant="error">Expired</Tag>
```

### Removable tag

```jsx
<Tag variant="primary" onRemove={() => removeTag('react')}>
  React
</Tag>
```

### Tag list

```jsx
{tags.map(t => (
  <Tag key={t} onRemove={() => remove(t)}>{t}</Tag>
))}
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-tag` | Root span |
| `.nxp-tag--primary` | Blue variant |
| `.nxp-tag--success` | Green variant |
| `.nxp-tag--warning` | Amber variant |
| `.nxp-tag--error` | Red variant |
| `.nxp-tag__remove` | Remove button |
