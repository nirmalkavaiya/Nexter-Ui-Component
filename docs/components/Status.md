# Status

Status pill with a colored dot indicator — active, inactive, pending, or info.

## Import

```jsx
import { Status } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'active' \| 'inactive' \| 'pending' \| 'info' \| 'default'` | `'default'` | Color and label variant |
| `children` | `ReactNode` | — | Label text |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic

```jsx
<Status variant="active">Active</Status>
<Status variant="inactive">Inactive</Status>
<Status variant="pending">Pending</Status>
<Status variant="info">Info</Status>
```

### In a table

```jsx
const columns = [{ key: 'status', label: 'Status' }]
const rows = [
  { status: <Status variant="active">Live</Status> },
  { status: <Status variant="inactive">Disabled</Status> },
]
<Table columns={columns} rows={rows} />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-status` | Root pill span |
| `.nxp-status--active` | Green dot |
| `.nxp-status--inactive` | Grey dot |
| `.nxp-status--pending` | Amber dot |
| `.nxp-status--info` | Blue dot |
