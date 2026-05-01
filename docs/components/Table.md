# Table

Data table with striped rows, numeric column alignment, and an actions slot.

## Import

```jsx
import { Table } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Column[]` | `[]` | Column definitions (see below) |
| `rows` | `Record<string, ReactNode>[]` | `[]` | Row data objects |
| `striped` | `boolean` | `false` | Alternate row background |
| `loading` | `boolean` | `false` | Show skeleton rows |
| `emptyMessage` | `string` | `'No data'` | Message when rows is empty |
| `className` | `string` | `''` | Extra class on root element |

### Column shape

```ts
type Column = {
  key: string       // maps to row object key
  label: string     // header text
  numeric?: boolean // right-align values
  width?: string    // CSS width
}
```

## Usage

### Basic

```jsx
const columns = [
  { key: 'name',  label: 'Name' },
  { key: 'plan',  label: 'Plan' },
  { key: 'usage', label: 'Usage', numeric: true },
]

const rows = [
  { name: 'nexterwp.com',  plan: 'Pro',  usage: '128,420' },
  { name: 'uichemy.com',   plan: 'Free', usage: '12,031' },
]

<Table columns={columns} rows={rows} striped />
```

### With JSX cells

```jsx
const rows = [
  {
    name: 'nexterwp.com',
    status: <Status variant="active">Live</Status>,
    actions: <Button variant="ghost" size="sm">Edit</Button>,
  },
]
```

### Loading state

```jsx
<Table columns={columns} rows={[]} loading />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-table` | Root wrapper |
| `.nxp-table__table` | `<table>` element |
| `.nxp-table__th` | Header cell |
| `.nxp-table__th--numeric` | Right-aligned header |
| `.nxp-table__td` | Body cell |
| `.nxp-table__td--numeric` | Right-aligned body cell |
| `.nxp-table__row--striped` | Alternate row shade |
| `.nxp-table__empty` | Empty state row |
