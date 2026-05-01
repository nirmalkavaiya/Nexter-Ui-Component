# Field

> Form field wrapper that pairs a label, input, hint text, and error message into a consistent layout.

---

## Import

```jsx
import { Field } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string \| node` | — | Label text rendered above the input. |
| `hint` | `string \| node` | — | Helper text rendered below the input when there is no error. |
| `error` | `string \| node` | — | Error message rendered below the input. When present, `hint` is suppressed. |
| `children` | `node` | — | The form control (Input, Select, Textarea, etc.). |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<Field label="Site title" hint="Shown in browser tabs and search results.">
  <Input placeholder="My Awesome Website" />
</Field>
```

### With error

```jsx
<Field label="Email address" error="Please enter a valid email address.">
  <Input type="email" value="not-an-email" invalid />
</Field>
```

### Hint vs error priority

```jsx
// hint is hidden when error is present
<Field
  label="Meta description"
  hint="Aim for 120–160 characters."
  error={descTooLong ? 'Description exceeds 160 characters.' : undefined}
>
  <Textarea rows={3} />
</Field>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-field` | Root wrapper div |
| `.nxp-field__label` | `<label>` element |
| `.nxp-field__hint` | Hint span (visible only when no error) |
| `.nxp-field__error` | Error span |

---

## Notes

- The error span has `role="alert"` so screen readers announce it immediately on appearance.
- `hint` and `error` are mutually exclusive — `error` always wins.
- The `<label>` is not automatically associated with the child input. Pass a matching `id` / `htmlFor` through the child control if strict association is needed.
