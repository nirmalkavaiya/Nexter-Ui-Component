# Search

Search input with a leading search icon.

## Import

```jsx
import { Search } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | Controlled value |
| `defaultValue` | `string` | `''` | Initial value (uncontrolled) |
| `onChange` | `(value: string) => void` | — | Value change handler |
| `onSearch` | `(value: string) => void` | — | Called on Enter key |
| `placeholder` | `string` | `'Search…'` | Placeholder text |
| `disabled` | `boolean` | `false` | Disables the input |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Uncontrolled

```jsx
<Search placeholder="Search posts…" onSearch={q => console.log(q)} />
```

### Controlled with live filter

```jsx
const [query, setQuery] = useState('')

<Search value={query} onChange={setQuery} />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-search` | Root wrapper |
| `.nxp-search__icon` | Magnifier icon |
| `.nxp-search__input` | Text input |
| `.nxp-search.is-disabled` | Disabled state |
