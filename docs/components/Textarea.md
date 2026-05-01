# Textarea

Resizable multi-line text area.

## Import

```jsx
import { Textarea } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | Controlled value |
| `defaultValue` | `string` | — | Initial value (uncontrolled) |
| `onChange` | `(e: ChangeEvent) => void` | — | Change handler |
| `placeholder` | `string` | — | Placeholder text |
| `rows` | `number` | `4` | Initial visible rows |
| `invalid` | `boolean` | `false` | Error state |
| `disabled` | `boolean` | `false` | Disables the textarea |
| `maxLength` | `number` | — | Maximum character count |
| `showCount` | `boolean` | `false` | Show character counter |
| `className` | `string` | `''` | Extra class on wrapper |

## Usage

### Basic

```jsx
<Textarea placeholder="Enter description…" rows={5} />
```

### Controlled with character count

```jsx
const [bio, setBio] = useState('')

<Textarea
  value={bio}
  onChange={e => setBio(e.target.value)}
  maxLength={160}
  showCount
  placeholder="Write a short bio…"
/>
```

### Invalid state

```jsx
<Textarea invalid value="bad input" />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-textarea` | Wrapper div |
| `.nxp-textarea__control` | The `<textarea>` element |
| `.nxp-textarea__count` | Character counter |
| `.nxp-textarea.is-invalid` | Error state |
| `.nxp-textarea.is-disabled` | Disabled state |
