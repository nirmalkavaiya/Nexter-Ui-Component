# Field

Form field wrapper that provides a label, hint text, and error message around any input control.

## Import

```jsx
import { Field } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Field label text |
| `hint` | `string` | — | Helper text shown below the control |
| `error` | `string` | — | Error message (replaces hint, styles red) |
| `required` | `boolean` | `false` | Appends asterisk to label |
| `htmlFor` | `string` | — | `for` attribute on the `<label>` element |
| `children` | `ReactNode` | — | The input control to wrap |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### With hint

```jsx
import { Field, Input } from 'nexter-ui-component'

<Field label="Email address" hint="We'll never share this.">
  <Input type="email" placeholder="you@example.com" />
</Field>
```

### With validation error

```jsx
<Field label="Email address" error="That email looks wrong.">
  <Input type="email" invalid value="not-an-email" />
</Field>
```

### Required field

```jsx
<Field label="Site name" required>
  <Input placeholder="My awesome site" />
</Field>
```

### Wrapping any control

```jsx
<Field label="Plan" hint="You can upgrade later.">
  <Dropdown options={planOptions} />
</Field>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-field` | Root wrapper |
| `.nxp-field__label` | Label element |
| `.nxp-field__required` | Asterisk span |
| `.nxp-field__hint` | Hint text |
| `.nxp-field__error` | Error message (visible when `error` prop set) |
| `.nxp-field.has-error` | Error state modifier on root |
