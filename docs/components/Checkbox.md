# Checkbox

Accessible custom checkbox — supports controlled and uncontrolled modes.

## Import

```jsx
import { Checkbox } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `undefined` | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Initial state (uncontrolled) |
| `onChange` | `(checked: boolean) => void` | — | Change handler |
| `disabled` | `boolean` | `false` | Disables interaction |
| `label` | `string` | — | Visible label text |
| `indeterminate` | `boolean` | `false` | Shows indeterminate dash state |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Uncontrolled

```jsx
<Checkbox label="Accept terms" defaultChecked={false} onChange={console.log} />
```

### Controlled

```jsx
const [agreed, setAgreed] = useState(false)

<Checkbox
  checked={agreed}
  onChange={setAgreed}
  label="I agree to the terms"
/>
```

### Indeterminate

```jsx
<Checkbox indeterminate label="Select all" />
```

### Disabled

```jsx
<Checkbox checked disabled label="Read-only option" />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-checkbox` | Root wrapper |
| `.nxp-checkbox__box` | Visual checkbox square |
| `.nxp-checkbox__label` | Label text |
| `.nxp-checkbox.is-checked` | Checked state |
| `.nxp-checkbox.is-indeterminate` | Indeterminate state |
| `.nxp-checkbox.is-disabled` | Disabled state |
