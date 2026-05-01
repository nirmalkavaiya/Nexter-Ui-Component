# Search

> Search input with a built-in search icon, supporting controlled and uncontrolled modes.

---

## Import

```jsx
import { Search } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled search query. Omit for uncontrolled. |
| `onChange` | `func` | — | Called with the new string value on every keystroke. |
| `placeholder` | `string` | `"Search…"` | Placeholder and `aria-label` text. |
| `onClear` | `func` | — | Reserved for a future clear button (not yet rendered). |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Uncontrolled

```jsx
<Search placeholder="Search redirects…" onChange={(val) => console.log(val)} />
```

### Controlled

```jsx
const [query, setQuery] = useState('');

<Search
  value={query}
  onChange={setQuery}
  placeholder="Search posts…"
/>
```

### Filtering a list

```jsx
const [q, setQ] = useState('');
const filtered = items.filter((i) => i.title.toLowerCase().includes(q.toLowerCase()));

<Search value={q} onChange={setQ} placeholder="Filter by title…" />
<Table rows={filtered} columns={columns} />
```

---

## Events / Callbacks

| Event | Signature | Description |
|-------|-----------|-------------|
| `onChange` | `(value: string) => void` | Fired with the current input value on every change. |

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-search` | Root wrapper div |
| `.nxp-search__icon` | Search icon span (aria-hidden) |
| `.nxp-search__input` | The `<input type="search">` element |

---

## Notes

- The `placeholder` string is also used as the input's `aria-label`.
- Input type is `search`, enabling native browser clear buttons and search semantics.
- `onClear` prop is accepted but not yet wired to a UI element — reserved for future implementation.
