# Radio

Accessible custom radio button — controlled and uncontrolled.

## Import

```jsx
import { Radio } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | This radio's value |
| `checked` | `boolean` | `undefined` | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Initial state (uncontrolled) |
| `onChange` | `(value: string) => void` | — | Change handler (receives this radio's `value`) |
| `disabled` | `boolean` | `false` | Disables interaction |
| `label` | `string` | — | Visible label text |
| `name` | `string` | — | Group name (ties radios together) |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Radio group

```jsx
const [plan, setPlan] = useState('monthly')

{['monthly', 'yearly', 'lifetime'].map(v => (
  <Radio
    key={v}
    name="plan"
    value={v}
    checked={plan === v}
    onChange={setPlan}
    label={v.charAt(0).toUpperCase() + v.slice(1)}
  />
))}
```

### Disabled option

```jsx
<Radio value="enterprise" disabled label="Enterprise (contact sales)" />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-radio` | Root wrapper |
| `.nxp-radio__dot` | Visual radio circle |
| `.nxp-radio__label` | Label text |
| `.nxp-radio.is-checked` | Checked state |
| `.nxp-radio.is-disabled` | Disabled state |
