# Tooltip

Portal tooltip that positions above an anchor element with viewport clamping.

## Import

```jsx
import { Tooltip } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `ReactNode` | — | Tooltip text or content |
| `children` | `ReactElement` | — | The anchor element |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Preferred placement |
| `delay` | `number` | `300` | Show delay in ms |
| `disabled` | `boolean` | `false` | Prevents tooltip from showing |
| `className` | `string` | `''` | Extra class on tooltip panel |

## Usage

### Basic

```jsx
<Tooltip content="Copy to clipboard">
  <Button variant="ghost" icon aria-label="Copy">📋</Button>
</Tooltip>
```

### Bottom placement

```jsx
<Tooltip content="Requires Pro plan" placement="bottom">
  <span>PRO feature</span>
</Tooltip>
```

### Long content

```jsx
<Tooltip content="This will permanently delete all redirects and cannot be undone.">
  <Button variant="destructive">Delete all</Button>
</Tooltip>
```

### Disabled

```jsx
<Tooltip content="Save first" disabled={!isDirty}>
  <Button>Publish</Button>
</Tooltip>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-tooltip` | Tooltip panel |
| `.nxp-tooltip.is-visible` | Visible state |
| `.nxp-tooltip--top` | Above anchor (default) |
| `.nxp-tooltip--bottom` | Below anchor |
| `.nxp-tooltip--left` | Left of anchor |
| `.nxp-tooltip--right` | Right of anchor |

## Notes

- Renders into `document.body` via `createPortal`
- Repositions on scroll and resize while visible
- Flips to opposite side automatically if there is not enough space in the preferred direction
