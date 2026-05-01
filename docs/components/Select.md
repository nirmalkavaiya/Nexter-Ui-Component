# Select

Native `<select>` element styled with design tokens.

## Import

```jsx
import { Select } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `{ value: string; label: string }[]` | `[]` | Select options |
| `value` | `string` | `undefined` | Controlled value |
| `defaultValue` | `string` | — | Initial value (uncontrolled) |
| `onChange` | `(value: string) => void` | — | Change handler |
| `placeholder` | `string` | — | Disabled placeholder option |
| `disabled` | `boolean` | `false` | Disables the select |
| `invalid` | `boolean` | `false` | Error state |
| `className` | `string` | `''` | Extra class on wrapper |

## Usage

### Basic

```jsx
<Select
  options={[
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
  ]}
  placeholder="Choose language"
  onChange={setLang}
/>
```

### Controlled

```jsx
<Select value={lang} onChange={setLang} options={langOptions} />
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-select` | Wrapper div |
| `.nxp-select__control` | The `<select>` element |
| `.nxp-select__chevron` | Dropdown arrow icon |
| `.nxp-select.is-invalid` | Error state |
| `.nxp-select.is-disabled` | Disabled state |

## Notes

Uses native `<select>` for maximum OS/browser compatibility. For fully custom styling with sub-labels and dividers, use [`Dropdown`](./Dropdown.md).
