# Status

> Inline status indicator badge with semantic variant colors.

---

## Import

```jsx
import { Status } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "success" \| "warning" \| "error" \| "info"` | `"default"` | Color theme of the status badge. |
| `children` | `node` | — | Status label text. |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Status variant="success">Active</Status>
<Status variant="warning">Pending</Status>
<Status variant="error">Failed</Status>
<Status variant="info">Indexing</Status>
<Status>Unknown</Status>
```

### In a table row

```jsx
<Table
  columns={[
    { key: 'url',    label: 'URL' },
    { key: 'status', label: 'Status' },
  ]}
  rows={[
    { url: '/about', status: <Status variant="success">Indexed</Status> },
    { url: '/blog',  status: <Status variant="warning">Pending</Status> },
  ]}
/>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-status` | Root `<span>` element |
| `.nxp-status--success` | `variant="success"` |
| `.nxp-status--warning` | `variant="warning"` |
| `.nxp-status--error` | `variant="error"` |
| `.nxp-status--info` | `variant="info"` |

---

## Notes

- `"default"` variant adds no modifier class.
- Root element has `aria-label="Status: {variant}"` for screen readers.
