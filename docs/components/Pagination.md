# Pagination

Page number controls with previous/next navigation.

## Import

```jsx
import { Pagination } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `page` | `number` | — | Current active page (1-indexed) |
| `total` | `number` | — | Total number of pages |
| `onChange` | `(page: number) => void` | — | Page change handler |
| `siblingCount` | `number` | `1` | Pages to show on each side of current |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic

```jsx
const [page, setPage] = useState(1)

<Pagination page={page} total={10} onChange={setPage} />
```

### More siblings

```jsx
<Pagination page={5} total={20} siblingCount={2} onChange={setPage} />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-pagination` | Root wrapper |
| `.nxp-pagination__btn` | Individual page button |
| `.nxp-pagination__btn.is-active` | Current page button |
| `.nxp-pagination__btn.is-disabled` | Prev/next when at edge |
| `.nxp-pagination__ellipsis` | `…` gap indicator |

## Notes

- Ellipsis (`…`) is shown automatically when pages exceed visible range
- Previous/Next buttons are disabled at the first and last page
