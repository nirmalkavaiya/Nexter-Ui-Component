# Input

Text input with normal, invalid, and disabled states.

## Import

```jsx
import { Input } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | HTML input type |
| `value` | `string` | `undefined` | Controlled value |
| `defaultValue` | `string` | — | Initial value (uncontrolled) |
| `onChange` | `(e: ChangeEvent) => void` | — | Change handler |
| `placeholder` | `string` | — | Placeholder text |
| `invalid` | `boolean` | `false` | Shows error/red border state |
| `disabled` | `boolean` | `false` | Disables the input |
| `prefix` | `ReactNode` | — | Icon or text shown inside left edge |
| `suffix` | `ReactNode` | — | Icon or text shown inside right edge |
| `className` | `string` | `''` | Extra class on wrapper element |

## Usage

### Basic

```jsx
<Input placeholder="Enter site name…" />
```

### Controlled

```jsx
const [name, setName] = useState('')
<Input value={name} onChange={e => setName(e.target.value)} />
```

### Invalid state

```jsx
<Input type="email" invalid value="bad-email" />
```

### With prefix icon

```jsx
<Input prefix={<span>🔍</span>} placeholder="Search…" />
```

### Disabled

```jsx
<Input disabled value="read-only value" />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-input` | Wrapper div |
| `.nxp-input__control` | The `<input>` element |
| `.nxp-input__prefix` | Left slot content |
| `.nxp-input__suffix` | Right slot content |
| `.nxp-input.is-invalid` | Error/red state |
| `.nxp-input.is-disabled` | Disabled state |

## Dependencies

Typically wrapped in [`Field`](./Field.md) for label + error display.
