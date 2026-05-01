# Pagination

> Page navigator with numbered page buttons and optional previous/next controls.

---

## Import

```jsx
import { Pagination } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `page` | `number` | — | Controlled current page (1-based). Omit for uncontrolled. |
| `totalPages` | `number` | `1` | Total number of pages. |
| `onChange` | `func` | — | Called with the new page number on navigation. |
| `showPrevNext` | `bool` | `true` | Show/hide the Previous (‹) and Next (›) buttons. |
| `className` | `string` | `''` | Additional CSS class(es) on the root `<nav>`. |

---

## Usage

### Uncontrolled

```jsx
<Pagination totalPages={8} onChange={(p) => fetchPage(p)} />
```

### Controlled

```jsx
const [page, setPage] = useState(1);

<Pagination
  page={page}
  totalPages={12}
  onChange={setPage}
/>
```

### Without prev/next arrows

```jsx
<Pagination totalPages={5} showPrevNext={false} />
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onChange` | `(page: number) => void` | Fired with the new (clamped) page number. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-pagination` | Root `<nav>` element |
| `.nxp-pagination__item` | Each page button |
| `.nxp-pagination__item.is-active` | Currently active page button |
| `.nxp-pagination__item--prev` | Previous button |
| `.nxp-pagination__item--next` | Next button |

---

## Notes

- Pages are clamped between `1` and `totalPages` — you cannot navigate below 1 or above `totalPages`.
- Active page button has `aria-current="page"` for screen readers.
- Prev/Next buttons are disabled (not just visually hidden) at the boundaries.
- Root `<nav>` has `aria-label="Pagination"`.
