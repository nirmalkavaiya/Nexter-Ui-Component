# Table

> Responsive data table with column definitions, optional striping, and a per-row actions slot.

---

## Import

```jsx
import { Table } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `array` | `[]` | Column definition objects (see shape below). |
| `rows` | `array` | `[]` | Row data objects. Keys should match column `key` values. |
| `striped` | `bool` | `false` | Adds alternating row background colors. |
| `actions` | `func` | — | Render function `(row) => node` for a trailing "Actions" column. |
| `className` | `string` | `''` | Additional CSS class(es) on the `<table>` element. |

### Column object shape

| Key | Type | Description |
|-----|------|-------------|
| `key` | `string` | Maps to the property name in each row object. |
| `label` | `string` | Column header text. |
| `numeric` | `bool` | When `true`, applies right-aligned numeric styling. |

---

## Usage

### Basic

```jsx
const columns = [
  { key: 'url',    label: 'URL' },
  { key: 'target', label: 'Redirect to' },
  { key: 'code',   label: 'Code', numeric: true },
];

const rows = [
  { url: '/old-home', target: '/', code: 301 },
  { url: '/blog-v1',  target: '/blog', code: 301 },
  { url: '/product',  target: '/shop/product-1', code: 302 },
];

<Table columns={columns} rows={rows} />
```

### Striped with actions

```jsx
<Table
  columns={columns}
  rows={rows}
  striped
  actions={(row) => (
    <>
      <Button variant="ghost" size="sm" onClick={() => handleEdit(row)}>Edit</Button>
      <Button variant="danger" size="sm" onClick={() => handleDelete(row)}>Delete</Button>
    </>
  )}
/>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-table` | Root `<table>` element |
| `.nxp-table--striped` | `striped={true}` |
| `.nxp-table__num` | Column/cell with `numeric: true` |
| `.nxp-table__actions` | Actions cell wrapper div |

---

## Notes

- The table is wrapped in `<div style={{ overflowX: 'auto' }}>` for horizontal scroll on small screens.
- `actions` receives the full row object — use it to build edit/delete buttons with access to row data.
- The "Actions" column header is always right-aligned.
