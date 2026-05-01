# Combobox

Filterable searchable list with keyboard navigation.

## Import

```jsx
import { Combobox } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `{ value: string; label: string }[]` | `[]` | Selectable options |
| `value` | `string` | `undefined` | Controlled selected value |
| `defaultValue` | `string` | `''` | Initial value (uncontrolled) |
| `onChange` | `(value: string) => void` | — | Selection change handler |
| `placeholder` | `string` | `'Search…'` | Input placeholder |
| `disabled` | `boolean` | `false` | Disables interaction |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Basic

```jsx
const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
]

<Combobox options={options} placeholder="Search framework…" onChange={console.log} />
```

### Controlled

```jsx
const [selected, setSelected] = useState('react')

<Combobox
  options={options}
  value={selected}
  onChange={setSelected}
/>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-combobox` | Root wrapper |
| `.nxp-combobox__input` | Text input |
| `.nxp-combobox__list` | Dropdown option list |
| `.nxp-combobox__option` | Individual option |
| `.nxp-combobox__option.is-active` | Keyboard-focused option |
| `.nxp-combobox__option.is-selected` | Currently selected option |
| `.nxp-combobox__empty` | No results message |

## Notes

- Keyboard: Arrow keys navigate, Enter selects, Escape closes
- Filters options live as the user types
