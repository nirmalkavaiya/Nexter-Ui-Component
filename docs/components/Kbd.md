# Kbd

Keyboard shortcut chip for displaying hotkeys inline.

## Import

```jsx
import { Kbd } from 'nexter-ui-component'
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Key label text |
| `className` | `string` | `''` | Extra class on root element |

## Usage

### Single key

```jsx
<Kbd>Enter</Kbd>
<Kbd>Esc</Kbd>
<Kbd>Tab</Kbd>
```

### Combination

```jsx
<span>Save with <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd></span>
```

### In a help text

```jsx
<p>
  Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette.
</p>
```

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-kbd` | The `<kbd>` chip element |
