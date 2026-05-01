# MultiSelect

A fully div-based multi-select dropdown with removable tag chips, grouped options, live search, keyboard navigation, and controlled/uncontrolled state. No native `<select>` element.

## Import

```jsx
import { MultiSelect } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Option[] \| Group[]` | `[]` | Flat or grouped option list — see [Options shape](#options-shape) |
| `value` | `string[]` | `[]` | Controlled array of selected values |
| `onChange` | `(values: string[]) => void` | — | Called with updated array on every change |
| `searchable` | `boolean` | `true` | Render search input inside dropdown |
| `disabled` | `boolean` | `false` | Disables all interaction |
| `placeholder` | `string` | `'Select options'` | Shown when nothing is selected |
| `searchPlaceholder` | `string` | `'Search…'` | Search input placeholder |
| `noResultsText` | `string` | `'No results found'` | Shown when search yields no matches |
| `clearAllLabel` | `string` | `'Clear all'` | `aria-label` for the × clear-all button |
| `removeLabel` | `string` | `'Remove'` | `aria-label` prefix for each tag × button |
| `className` | `string` | `''` | Extra class on the root element |

---

## Options Shape

### Flat (no groups)

```js
const options = [
  { label: 'Canonical URL',  value: 'canonical' },
  { label: 'Open Graph',     value: 'og' },
  { label: 'JSON-LD Schema', value: 'schema', disabled: true },
]
```

### Grouped

```js
const options = [
  {
    label: 'Basic',
    options: [
      { label: 'Entire Website', value: 'entire' },
      { label: 'All Singulars',  value: 'singulars' },
      { label: 'All Archives',   value: 'archives' },
    ],
  },
  {
    label: 'Special Pages',
    options: [
      { label: 'Front Page',   value: 'front' },
      { label: 'Blog / Posts', value: 'blog' },
    ],
  },
]
```

Flat and grouped lists can **not** be mixed at the top level — use one shape per instance.

Individual options accept an optional `disabled: true` field to make them non-interactive.

---

## Usage

### Basic (controlled)

```jsx
const [selected, setSelected] = useState([])

<MultiSelect
  options={options}
  value={selected}
  onChange={setSelected}
  placeholder="Select pages…"
/>
```

### Pre-selected values

```jsx
<MultiSelect
  options={groupedOptions}
  value={['entire', 'singulars', 'archives']}
  onChange={setSelected}
/>
```

### Without search

```jsx
<MultiSelect
  options={options}
  value={selected}
  onChange={setSelected}
  searchable={false}
/>
```

### Disabled

```jsx
<MultiSelect
  options={options}
  value={['front']}
  onChange={setSelected}
  disabled
/>
```

### i18n / Translation strings

All user-visible strings are props with defaults, making translation trivial:

```jsx
<MultiSelect
  options={options}
  value={selected}
  onChange={setSelected}
  placeholder="विकल्प चुनें"
  searchPlaceholder="खोजें…"
  noResultsText="कोई परिणाम नहीं मिला"
  clearAllLabel="सब हटाएं"
  removeLabel="हटाएं"
/>
```

---

## Behavior

| Action | Result |
|--------|--------|
| Click trigger | Opens / closes dropdown |
| Click outside | Closes dropdown |
| Click option | Toggles selection |
| Click tag `×` | Removes that value |
| Click `×` (right of trigger) | Clears all values |
| Type in search | Filters options across all groups; hides empty groups |
| No search results | Shows `noResultsText` |

---

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `Enter` / `Space` / `↓` | Opens dropdown (when trigger focused) |
| `↓` / `↑` | Move focus through visible options |
| `Enter` | Toggle focused option |
| `Escape` | Close dropdown, return focus to trigger |

Arrow keys and Enter work from **both** the root element and the search input.

---

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.nxp-ms` | Root wrapper |
| `.nxp-ms--open` | Applied when dropdown is visible |
| `.nxp-ms--disabled` | Disabled state (opacity + pointer-events none) |
| `.nxp-ms__trigger` | Clickable tag + actions bar |
| `.nxp-ms__tags-wrap` | Flex wrap area for tag chips |
| `.nxp-ms__placeholder` | Placeholder text when empty |
| `.nxp-ms__tag` | Individual selected tag chip |
| `.nxp-ms__tag-label` | Text inside a chip |
| `.nxp-ms__tag-remove` | `×` button on each chip |
| `.nxp-ms__trigger-end` | Right side (clear + chevron) |
| `.nxp-ms__clear` | Global clear-all `×` |
| `.nxp-ms__chevron` | Arrow icon |
| `.nxp-ms__chevron--up` | Rotated 180° when open |
| `.nxp-ms__dropdown` | Floating panel |
| `.nxp-ms__search-wrap` | Search input container |
| `.nxp-ms__search` | Search `<input>` |
| `.nxp-ms__list` | Scrollable options list |
| `.nxp-ms__group` | One group (flat or named) |
| `.nxp-ms__group-label` | Grey uppercase group header |
| `.nxp-ms__option` | Single option row |
| `.nxp-ms__option--selected` | Blue background, white text |
| `.nxp-ms__option--focused` | Hover / arrow-key highlight |
| `.nxp-ms__option--disabled` | Dimmed, non-interactive |
| `.nxp-ms__option-label` | Option text (truncates on overflow) |
| `.nxp-ms__option-check` | Checkmark shown on selected options |
| `.nxp-ms__empty` | "No results found" message |

---

## Design Tokens Used

| Token | Where |
|-------|-------|
| `--nxp-brand` | Open trigger border, selected option background |
| `--nxp-brand-soft` | Focus ring on trigger |
| `--nxp-bg` / `--nxp-bg-alt` | Panel and search backgrounds |
| `--nxp-border` / `--nxp-border-strong` | Borders, separators |
| `--nxp-text` / `--nxp-text-muted` / `--nxp-text-faint` | Option, group label, placeholder text |
| `--nxp-wash-hover` | Focused (but not selected) option row |
| `--nxp-shadow-md` | Dropdown shadow |
| `--nxp-radius` / `--nxp-radius-sm` / `--nxp-radius-pill` | Dropdown, search, tag chips |
| `--nxp-font` | All text |

---

## Accessibility

- Root element: `role="combobox"`, `aria-expanded`, `aria-haspopup="listbox"`, `aria-disabled`
- List: `role="listbox"`, `aria-multiselectable="true"`
- Options: `role="option"`, `aria-selected`, `aria-disabled`
- Each tag × button: `aria-label="{removeLabel} {item label}"`
- Clear-all button: `aria-label={clearAllLabel}`
- Search input: `aria-label={searchPlaceholder}`
- Empty state: `role="status"`
- Keyboard fully navigable without a mouse

---

## Notes

- **`onPointerDown` (not `onClick`)** is used on options and tag buttons so the dropdown stays open when interacting with options, while `onClick` on the trigger handles open/close. This prevents focus-blur flicker.
- The dropdown re-normalises flat option arrays to grouped internally — no code-change needed to switch shapes.
- `min-width: 0` on `.nxp-ms__option-label` ensures long labels truncate with `text-overflow: ellipsis` inside flex.
