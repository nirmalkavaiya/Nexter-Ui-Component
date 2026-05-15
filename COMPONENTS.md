# Nexter UI Component — Full Component Reference

> **v1.9.23 · 64 Components**  
> React 17+ · Zero Tailwind dependency · RTL-ready · `nxp-` token-driven  
> Install: `npm install nexter-ui-component`

---

## Quick Start

```jsx
import { Button, Modal, Container } from 'nexter-ui-component';
// CSS is auto-injected — no separate import needed
```

---

## Table of Contents

| # | Component | Category |
|---|-----------|----------|
| 1 | [Accordion](#accordion) | Data Display |
| 2 | [Alert](#alert) | Feedback |
| 3 | [AspectRatio](#aspectratio) | Layout |
| 4 | [Avatar](#avatar) | Display |
| 5 | [Badge](#badge) | Display |
| 6 | [Banner](#banner) | Feedback |
| 7 | [Breadcrumb](#breadcrumb) | Navigation |
| 8 | [Button](#button) | Actions |
| 9 | [Carousel](#carousel) | Display |
| 10 | [Checkbox](#checkbox) | Forms |
| 11 | [Collapsible](#collapsible) | Layout |
| 12 | [ColorPicker](#colorpicker) | Forms |
| 13 | [Combobox](#combobox) | Forms |
| 14 | [ConfirmButton](#confirmbutton) | Actions |
| 15 | [Container](#container) | Layout |
| 16 | [CopyInput](#copyinput) | Forms |
| 17 | [CountCard](#countcard) | Display |
| 18 | [DatePicker](#datepicker) | Forms |
| 19 | [DateRangePicker](#daterangepicker) | Forms |
| 20 | [Dialog](#dialog) | Overlays |
| 21 | [Drawer](#drawer) | Overlays |
| 22 | [Dropdown](#dropdown) | Forms |
| 23 | [EmptyState](#emptystate) | Feedback |
| 24 | [FeatureToggleCard](#featuretogglecard) | Display |
| 25 | [Field](#field) | Forms |
| 26 | [FileUpload](#fileupload) | Forms |
| 27 | [IconBox](#iconbox) | Display |
| 28 | [Input](#input) | Forms |
| 29 | [Kbd](#kbd) | Display |
| 30 | [Label](#label) | Forms |
| 31 | [Modal](#modal) | Overlays |
| 32 | [MultiSelect](#multiselect) | Forms |
| 33 | [Notice](#notice) | Feedback |
| 34 | [NumberInput](#numberinput) | Forms |
| 35 | [OTPInput](#otpinput) | Forms |
| 36 | [Pagination](#pagination) | Navigation |
| 37 | [Popover](#popover) | Overlays |
| 38 | [Progress](#progress) | Display |
| 39 | [Radio](#radio) | Forms |
| 40 | [ScrollArea](#scrollarea) | Layout |
| 41 | [Search](#search) | Forms |
| 42 | [Segmented](#segmented) | Navigation |
| 43 | [Select](#select) | Forms |
| 44 | [Separator](#separator) | Layout |
| 45 | [Sheet](#sheet) | Layout |
| 46 | [Sidebar](#sidebar) | Navigation |
| 47 | [Skeleton](#skeleton) | Feedback |
| 48 | [Slider](#slider) | Forms |
| 49 | [SortableList](#sortablelist) | Data Display |
| 50 | [Spinner](#spinner) | Feedback |
| 51 | [StatCard](#statcard) | Display |
| 52 | [Status](#status) | Display |
| 53 | [Stepper](#stepper) | Forms |
| 54 | [Table](#table) | Data Display |
| 55 | [Tabs](#tabs) | Navigation |
| 56 | [Tag](#tag) | Display |
| 57 | [Textarea](#textarea) | Forms |
| 58 | [ThemeProvider](#themeprovider) | System |
| 59 | [Toast](#toast) | Feedback |
| 60 | [Toggle](#toggle) | Forms |
| 61 | [ToggleGrid](#togglegrid) | Forms |
| 62 | [Tooltip](#tooltip) | Display |
| 63 | [Typography](#typography) | Display |
| 64 | [VerticalNavigationMenu](#verticalnavigationmenu) | Navigation |

---

## Accordion

Expandable accordion panels. Supports single or multi-open mode.

```jsx
import { Accordion } from 'nexter-ui-component';

<Accordion
  items={[
    { id: 'q1', title: 'What is Nexter?', content: 'A WordPress page builder plugin.' },
    { id: 'q2', title: 'Is it free?',     content: 'Yes, with a Pro upgrade available.' },
  ]}
  defaultOpen={['q1']}
  multi={false}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array<{id, title, content}>` | `[]` | Accordion panels |
| `defaultOpen` | `Array` | `[]` | IDs open by default |
| `multi` | `boolean` | `false` | Allow multiple open at once |
| `className` | `string` | `''` | Extra root class |

---

## Alert

Inline status alert with severity variants.

```jsx
import { Alert } from 'nexter-ui-component';

<Alert variant="success">Your settings have been saved.</Alert>
<Alert variant="error" icon={<MyIcon />}>Something went wrong.</Alert>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Alert severity |
| `icon` | `ReactNode` | — | Custom icon override |
| `children` | `ReactNode` | — | Alert content |
| `className` | `string` | `''` | Extra root class |

---

## AspectRatio

Constrains children to a fixed aspect ratio.

```jsx
import { AspectRatio } from 'nexter-ui-component';

<AspectRatio ratio={16 / 9}>
  <img src="thumbnail.jpg" alt="Video thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</AspectRatio>

<AspectRatio ratio={1}>
  <iframe src="https://maps.google.com/..." />
</AspectRatio>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ratio` | `number` | `16/9` | width ÷ height (e.g. `4/3`, `1`) |
| `children` | `ReactNode` | — | Content to constrain |
| `className` | `string` | `''` | Extra root class |

---

## Avatar

Circular user avatar — image with initial fallback.

```jsx
import { Avatar } from 'nexter-ui-component';

<Avatar src="https://i.pravatar.cc/80" name="John Doe" size="lg" />
<Avatar name="Nirmal Kavaiya" size="xxl" />  {/* initials fallback */}
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | Image URL |
| `name` | `string` | — | Used for initials fallback + alt text |
| `alt` | `string` | `''` | Override alt text |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | `'md'` | Avatar size |
| `className` | `string` | `''` | Extra root class |

---

## Badge

Compact inline label for status or counts.

```jsx
import { Badge } from 'nexter-ui-component';

<Badge variant="success">Active</Badge>
<Badge variant="error">Failed</Badge>
<Badge variant="gradient">Pro</Badge>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'gradient'` | `'default'` | Color variant |
| `children` | `ReactNode` | — | Badge text |
| `className` | `string` | `''` | Extra root class |

---

## Banner

Full-width notification banner with icon, title, text, and actions.

```jsx
import { Banner } from 'nexter-ui-component';

<Banner
  variant="warning"
  title="Storage almost full"
  text="You've used 90% of your storage quota."
  actions={<Button size="sm">Upgrade</Button>}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | Banner severity |
| `icon` | `ReactNode` | — | Custom icon |
| `title` | `ReactNode` | — | Heading text |
| `text` | `ReactNode` | — | Body text |
| `actions` | `ReactNode` | — | Action buttons slot |
| `className` | `string` | `''` | Extra root class |

---

## Breadcrumb

Navigation trail with links, icons, and custom separators.

```jsx
import { Breadcrumb } from 'nexter-ui-component';

<Breadcrumb
  items={[
    { label: 'Home',     href: '/' },
    { label: 'Settings', href: '/settings' },
    { label: 'Profile' },   // current page — no href
  ]}
  showHome
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array<{label, href?, onClick?, icon?}>` | `[]` | Breadcrumb items |
| `separator` | `ReactNode` | chevron `›` | Custom separator |
| `showHome` | `boolean` | `false` | Prepend home icon on first item |
| `className` | `string` | `''` | Extra root class |

---

## Button

Primary action button with variants, loading state, and icon mode.

```jsx
import { Button } from 'nexter-ui-component';

<Button variant="primary" onClick={handleSave}>Save Changes</Button>
<Button variant="destructive" loading={saving}>Delete</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="ghost" icon>🗑️</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive' \| 'link'` | `'secondary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `icon` | `boolean` | `false` | Square icon-only button |
| `loading` | `boolean` | `false` | Show spinner, disable interaction |
| `disabled` | `boolean` | `false` | Disabled state |
| `onClick` | `function` | — | Click handler |
| `className` | `string` | `''` | Extra root class |

---

## Carousel

Horizontal slide carousel with auto-play and custom slide content.

```jsx
import { Carousel } from 'nexter-ui-component';

// Text-based slides
<Carousel
  slides={[
    { title: '90+ Blocks', eyebrow: 'Gutenberg', cta: 'Enable', ctaHref: '/blocks' },
    { title: 'Pro Features',                     cta: 'Upgrade' },
  ]}
  autoPlay
  interval={4000}
  showArrows={false}
/>

// Custom content slides (e.g. gradient banner)
<Carousel
  slides={[
    {
      background: 'linear-gradient(135deg,#1717cc,#3535f0)',
      content: <MySlideContent />,
    },
  ]}
  variant="dark"
  className="nxp-rounded-md"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `slides` | `Array<SlideObject>` | `[]` | Slide data (see below) |
| `autoPlay` | `boolean` | `false` | Auto-advance slides |
| `interval` | `number` | `4000` | Auto-play interval (ms) |
| `showArrows` | `boolean` | `true` | Show prev/next buttons |
| `variant` | `'' \| 'dark'` | `''` | `'dark'` = white dots for dark backgrounds |
| `className` | `string` | `''` | Extra root class |

**Slide object:**

| Key | Type | Description |
|-----|------|-------------|
| `title` | `string` | Slide heading |
| `eyebrow` | `string` | Small text above title |
| `description` | `string` | Body text |
| `cta` | `string` | CTA button label |
| `ctaHref` | `string` | CTA link URL |
| `content` | `ReactNode` | Fully custom slide — overrides all text fields |
| `background` | `string` | Inline CSS background (gradient, color, image) |

---

## Checkbox

Accessible checkbox with optional label.

```jsx
import { Checkbox } from 'nexter-ui-component';

const [checked, setChecked] = useState(false);

<Checkbox
  label="Enable notifications"
  checked={checked}
  onChange={e => setChecked(e.target.checked)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Controlled state |
| `onChange` | `function` | — | Change handler |
| `label` | `ReactNode` | — | Label text |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Extra root class |

---

## Collapsible

Single collapsible panel with full trigger slot control.

```jsx
import { Collapsible } from 'nexter-ui-component';

<Collapsible trigger="Advanced Settings" defaultOpen={false}>
  <p>Hidden until expanded.</p>
</Collapsible>

// Controlled
<Collapsible open={open} onOpenChange={setOpen} trigger={<strong>Custom trigger</strong>}>
  Content
</Collapsible>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial state |
| `onOpenChange` | `function` | — | `(open: boolean) => void` |
| `trigger` | `ReactNode \| string` | `'Show / Hide'` | Trigger slot |
| `showChevron` | `boolean` | `true` | Animated chevron on trigger |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Extra root class |

---

## ColorPicker

Full HSV color picker with hex input, swatches, and optional alpha channel.

```jsx
import { ColorPicker } from 'nexter-ui-component';

const [color, setColor] = useState('#1717cc');

<ColorPicker
  value={color}
  onChange={setColor}
  showAlpha
  swatches={['#1717cc', '#f12d2d', '#2ea343', '#f5a623']}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled hex value `#rrggbb` |
| `defaultValue` | `string` | `'#1E40AF'` | Uncontrolled initial value |
| `onChange` | `function` | — | `(hex: string) => void` |
| `swatches` | `Array<string>` | preset colors | Pass `[]` to hide swatches |
| `showAlpha` | `boolean` | `false` | Show opacity/alpha slider |
| `disabled` | `boolean` | `false` | Disabled state |
| `hexLabel` | `string` | `'Hex color'` | i18n label |
| `alphaLabel` | `string` | `'Opacity'` | i18n label |
| `className` | `string` | `''` | Extra root class |

---

## Combobox

Searchable select dropdown with keyboard navigation.

```jsx
import { Combobox } from 'nexter-ui-component';

<Combobox
  options={[
    { label: 'Australia', value: 'au' },
    { label: 'Canada',    value: 'ca' },
    { label: 'India',     value: 'in' },
  ]}
  value={country}
  onChange={setCountry}
  placeholder="Search country…"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Array<{label, value}>` | `[]` | Option list |
| `value` | `string` | — | Controlled value |
| `onChange` | `function` | — | `(value) => void` |
| `placeholder` | `string` | `'Type to search…'` | Input placeholder |
| `className` | `string` | `''` | Extra root class |

---

## ConfirmButton

Two-step destructive action button with confirmation popover.

```jsx
import { ConfirmButton } from 'nexter-ui-component';

<ConfirmButton
  variant="error"
  message="This cannot be undone."
  confirmText="Delete"
  cancelText="Cancel"
  onConfirm={() => deleteItem(id)}
>
  Delete Post
</ConfirmButton>

// With auto-reset
<ConfirmButton
  variant="warning"
  confirmText="Archive"
  autoResetMs={3000}
  onConfirm={handleArchive}
  placement="bottom-start"
>
  Archive
</ConfirmButton>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Trigger button label |
| `label` | `string` | — | Fallback if no children |
| `onConfirm` | `function` | — | Called on confirmation |
| `message` | `string` | `''` | Text shown above action buttons |
| `confirmText` | `string` | `'Remove'` | Confirm button label |
| `cancelText` | `string` | `'Cancel'` | Cancel button label |
| `variant` | `'error' \| 'warning' \| 'primary'` | `'error'` | Trigger + confirm color |
| `confirmVariant` | `string` | same as `variant` | Override confirm button color |
| `size` | `'sm' \| 'md'` | `'md'` | Size |
| `disabled` | `boolean` | `false` | Disabled state |
| `autoResetMs` | `number` | `0` | Auto-close popover after N ms |
| `placement` | `'bottom-end' \| 'bottom-start' \| 'bottom'` | `'bottom-end'` | Popover position |
| `className` | `string` | `''` | Extra root class |

---

## Container

Unified layout primitive — flex or grid with responsive columns and semantic gap tokens.

```jsx
import { Container } from 'nexter-ui-component';

// Flex row
<Container gap="md" justify="between" align="center">
  <Container.Item grow={1}><Input /></Container.Item>
  <Button>Search</Button>
</Container>

// Responsive grid
<Container containerType="grid" cols={{ sm: 1, md: 2, lg: 4 }} gap="lg">
  <Card />
  <Card />
  <Card />
  <Card />
</Container>

// Grid with col-span
<Container containerType="grid" cols={3} gap="sm">
  <Container.Item colSpan={2}><Hero /></Container.Item>
  <Container.Item colSpan={1}><Sidebar /></Container.Item>
  <Container.Item colSpan="full"><Footer /></Container.Item>
</Container>
```

**Container props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `containerType` | `'flex' \| 'grid'` | `'flex'` | Layout mode |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| number` | `'sm'` | Gap between items (`number` = px) |
| `gapX` | same as `gap` | — | Column gap only |
| `gapY` | same as `gap` | — | Row gap only |
| `direction` | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'` | — | Flex direction |
| `justify` | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly'` | — | `justify-content` |
| `align` | `'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'` | — | `align-items` |
| `wrap` | `'wrap' \| 'nowrap' \| 'wrap-reverse'` | — | Flex wrap |
| `cols` | `number \| {sm?, md?, lg?}` | — | Grid columns (responsive object supported) |
| `as` | `string` | `'div'` | HTML tag to render |
| `className` | `string` | `''` | Extra root class |

**Container.Item props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `grow` | `0 \| 1` | — | `flex-grow` |
| `shrink` | `0 \| 1` | — | `flex-shrink` |
| `order` | `'first' \| 'last' \| 0–5` | — | Visual order |
| `alignSelf` | `'auto' \| 'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'` | — | Self cross-axis alignment |
| `justifySelf` | `'auto' \| 'start' \| 'end' \| 'center' \| 'stretch'` | — | Grid self inline alignment |
| `colSpan` | `number \| 'full' \| {sm?, md?, lg?}` | — | Grid column span (responsive) |
| `rowSpan` | `number` | — | Grid row span |
| `as` | `string` | `'div'` | HTML tag to render |

**Gap token map:**

| Name | Value |
|------|-------|
| `none` | 0 |
| `xs` | 4px |
| `sm` | 8px |
| `md` | 12px |
| `lg` | 16px |
| `xl` | 24px |
| `2xl` | 32px |

---

## CopyInput

Read-only input with one-click clipboard copy.

```jsx
import { CopyInput } from 'nexter-ui-component';

<CopyInput
  label="API Key"
  value="sk-abc123xyz789"
  hint="Keep this secret"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Text to copy |
| `label` | `ReactNode` | — | Field label |
| `hint` | `ReactNode` | — | Helper text |
| `disabled` | `boolean` | `false` | Disabled state |
| `copyText` | `string` | `'Copy'` | Button label |
| `copiedText` | `string` | `'Copied!'` | Post-copy button label |
| `className` | `string` | `''` | Extra root class |

---

## CountCard

Metric display card with value, label, and status badge.

```jsx
import { CountCard } from 'nexter-ui-component';

<CountCard value="90+" label="Total Blocks"     badge="Inactive"  />
<CountCard value="50+" label="Total Extensions" badge="25 Active" />
<CountCard value="12k" label="Monthly Visitors" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `ReactNode` | — | Primary metric (e.g. `"90+"`, `"12k"`) |
| `label` | `ReactNode` | — | Description below value |
| `badge` | `ReactNode` | — | Status badge on right (omit to hide) |
| `className` | `string` | `''` | Extra root class |

---

## DatePicker

Calendar-based single date picker.

```jsx
import { DatePicker } from 'nexter-ui-component';

<DatePicker
  value={date}
  onChange={setDate}
  minDate="2024-01-01"
  maxDate="2025-12-31"
  placeholder="Select date"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled ISO date `'YYYY-MM-DD'` |
| `defaultValue` | `string` | — | Uncontrolled initial ISO date |
| `onChange` | `function` | — | `(isoString \| null) => void` |
| `minDate` | `string` | — | Min selectable ISO date |
| `maxDate` | `string` | — | Max selectable ISO date |
| `disabled` | `boolean` | `false` | Disabled state |
| `clearable` | `boolean` | `true` | Show clear button |
| `placeholder` | `string` | `'Select date'` | Input placeholder |
| `todayText` | `string` | `'Today'` | i18n |
| `clearText` | `string` | `'Clear'` | i18n |
| `monthNames` | `Array<string>` | English | 12-item localization array |
| `dayNames` | `Array<string>` | English | 7-item localization array (Sun-Sat) |
| `className` | `string` | `''` | Extra root class |

---

## DateRangePicker

Dual-calendar date range picker with start/end selection.

```jsx
import { DateRangePicker } from 'nexter-ui-component';

const [range, setRange] = useState({ start: null, end: null });

<DateRangePicker
  value={range}
  onChange={setRange}
  showApply
  placeholder="Pick a date range"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `{start?, end?}` | — | Controlled range (ISO strings) |
| `defaultValue` | `{start?, end?}` | — | Uncontrolled initial range |
| `onChange` | `function` | — | `({start, end}) => void` |
| `minDate` / `maxDate` | `string` | — | ISO date constraints |
| `disabled` | `boolean` | `false` | Disabled state |
| `clearable` | `boolean` | `true` | Show clear button |
| `showApply` | `boolean` | `false` | Deferred apply mode |
| `placeholder` | `string` | — | Trigger placeholder |
| `monthNames` | `Array<string>` | English | 12-item localization array |
| `dayNames` | `Array<string>` | English | 7-item localization array |
| `className` | `string` | `''` | Extra root class |

---

## Dialog

Modal alert dialog with icon, title, description, and actions.

```jsx
import { Dialog } from 'nexter-ui-component';

<Dialog
  open={open}
  onClose={() => setOpen(false)}
  iconVariant="error"
  title="Delete Account?"
  description="This will permanently delete your account and all data."
  actions={
    <>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="destructive" onClick={handleDelete}>Delete</Button>
    </>
  }
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `true` | Show/hide |
| `onClose` | `function` | — | Close callback |
| `icon` | `ReactNode` | — | Custom icon override |
| `iconVariant` | `'warning' \| 'error' \| 'success' \| 'info'` | `'warning'` | Built-in icon style |
| `title` | `ReactNode` | — | Dialog heading |
| `description` | `ReactNode` | — | Dialog body text |
| `actions` | `ReactNode` | — | Action buttons slot |
| `className` | `string` | `''` | Extra root class |

---

## Drawer

Slide-in panel from any edge of the screen.

```jsx
import { Drawer } from 'nexter-ui-component';

<Drawer
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  placement="right"
  size="md"
  title="Edit Settings"
  footer={<Button onClick={handleSave}>Save</Button>}
>
  <p>Drawer body content here.</p>
</Drawer>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Controlled open state |
| `onClose` | `function` | — | Close callback |
| `placement` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | Side of screen |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Panel width/height |
| `title` | `ReactNode` | — | Header title |
| `byline` | `ReactNode` | — | Header subtitle |
| `footer` | `ReactNode` | — | Footer slot |
| `closeOnBackdrop` | `boolean` | `true` | Close on backdrop click |
| `closeOnEscape` | `boolean` | `true` | Close on Escape key |
| `hideClose` | `boolean` | `false` | Hide close button |
| `className` | `string` | `''` | Extra root class |

---

## Dropdown

Custom keyboard-navigable dropdown select.

```jsx
import { Dropdown } from 'nexter-ui-component';

<Dropdown
  options={[
    { label: 'Light',  value: 'light'  },
    { label: 'Dark',   value: 'dark'   },
    { label: 'System', value: 'system' },
  ]}
  value={theme}
  onChange={setTheme}
  placeholder="Select theme"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Array<{label, value}>` | `[]` | Options list |
| `value` | `string` | — | Controlled value |
| `onChange` | `function` | — | `(value) => void` |
| `placeholder` | `string` | `'Select…'` | Empty state label |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Extra root class |

---

## EmptyState

Empty content placeholder with icon, title, description, and action.

```jsx
import { EmptyState } from 'nexter-ui-component';

<EmptyState
  icon={<SearchIcon />}
  title="No results found"
  description="Try adjusting your search or filters."
  action={{ label: 'Clear filters', onClick: clearFilters }}
/>

// With custom action element
<EmptyState
  title="No posts yet"
  action={<Button variant="primary">Create Post</Button>}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | — | Illustration or icon |
| `title` | `string` | — | Heading |
| `description` / `desc` | `string` | — | Body text |
| `action` | `ReactNode \| {label, onClick}` | — | CTA element or shorthand |
| `className` | `string` | `''` | Extra root class |

---

## FeatureToggleCard

WordPress-style feature card with lock, plan badge, and upgrade prompt.

```jsx
import { FeatureToggleCard } from 'nexter-ui-component';

<FeatureToggleCard
  title="Advanced SEO"
  planLabel="PRO"
  isLocked={!hasPro}
  isNew
  tooltip="Optimize meta titles and descriptions per post."
  onUpgradeClick={() => window.open('/upgrade')}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Feature name |
| `tooltip` | `ReactNode` | — | Info tooltip content |
| `planLabel` | `string` | — | Top plan pill text; omit to hide |
| `isLocked` | `boolean` | `false` | Lock icon + disabled toggle |
| `isNew` | `boolean` | `false` | "New" badge |
| `onUpgradeClick` | `function` | — | Upgrade CTA callback |
| `showBadge` | `boolean` | — | Force show plan badge |
| `className` | `string` | `''` | Extra root class |

---

## Field

Form field wrapper — label, tooltip, hint text, and error message.

```jsx
import { Field, Input } from 'nexter-ui-component';

<Field
  label="Email address"
  hint="We'll never share your email."
  error={errors.email}
  required
  htmlFor="email"
>
  <Input id="email" type="email" value={email} onChange={setEmail} invalid={!!errors.email} />
</Field>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | — | Field label text |
| `tooltip` | `ReactNode` | — | Info tooltip beside label |
| `hint` | `string` | — | Helper text below input |
| `error` | `string` | — | Error message (red) |
| `required` | `boolean` | `false` | Adds `*` to label |
| `htmlFor` | `string` | — | Links label to input id |
| `className` | `string` | `''` | Extra root class |

---

## FileUpload

Drag-and-drop file uploader with preview. WordPress Media Library integration available.

```jsx
import { FileUpload } from 'nexter-ui-component';

<FileUpload
  value={files}
  onChange={setFiles}
  accept="image/*"
  multiple
  maxSize={5 * 1024 * 1024}  // 5 MB
  maxFiles={10}
  showPreview
/>

// WordPress Media Library
<FileUpload
  wpMedia
  wpMediaType="image"
  value={mediaIds}
  onChange={setMediaIds}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `File[] \| string[]` | `[]` | Controlled file list |
| `onChange` | `function` | — | `(files) => void` |
| `accept` | `string` | `'*/*'` | Accepted MIME types |
| `multiple` | `boolean` | `false` | Allow multiple files |
| `maxSize` | `number` | — | Max file size in bytes |
| `maxFiles` | `number` | — | Max file count |
| `disabled` | `boolean` | `false` | Disabled state |
| `showPreview` | `boolean` | `false` | Show file thumbnails |
| `wpMedia` | `boolean` | `false` | Use WP Media Library |
| `wpMediaTitle` | `string` | — | WP media modal title |
| `wpMediaButton` | `string` | — | WP media select button text |
| `wpMediaType` | `'image' \| 'video'` | — | WP media filter type |
| `className` | `string` | `''` | Extra root class |

---

## IconBox

Feature/benefit card with icon, step number, title, and CTA.

```jsx
import { IconBox } from 'nexter-ui-component';

<IconBox
  step={1}
  icon={<ShieldIcon />}
  title="Secure by default"
  description="All data is encrypted in transit and at rest."
  cta="Learn more"
  href="/security"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `topline` | `ReactNode` | — | Small text above title |
| `icon` | `ReactNode` | — | Icon element |
| `title` | `ReactNode` | — | Card heading |
| `description` | `ReactNode` | — | Body text |
| `cta` | `ReactNode` | — | Link label |
| `href` | `string` | — | Link URL |
| `step` | `number` | — | Step number badge |
| `className` | `string` | `''` | Extra root class |

---

## Input

Styled text input with validation state.

```jsx
import { Input } from 'nexter-ui-component';

<Input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={e => setName(e.target.value)}
/>

// With error state
<Input type="email" invalid={!!errors.email} value={email} onChange={...} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | HTML input type |
| `placeholder` | `string` | — | Placeholder text |
| `value` | `string` | — | Controlled value |
| `onChange` | `function` | — | Change handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `invalid` | `boolean` | `false` | Error/invalid state |
| `className` | `string` | `''` | Extra root class |
| `...rest` | — | — | Spread to `<input>` |

---

## Kbd

Semantic keyboard key display.

```jsx
import { Kbd } from 'nexter-ui-component';

<p>Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open search.</p>
<p>Use <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd> to save.</p>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Key label |
| `className` | `string` | `''` | Extra root class |

---

## Label

Standalone accessible form label.

```jsx
import { Label, Input } from 'nexter-ui-component';

<Label htmlFor="username" required>Username</Label>
<Input id="username" type="text" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `htmlFor` | `string` | — | Links to input `id` |
| `required` | `boolean` | `false` | Shows `*` indicator |
| `disabled` | `boolean` | `false` | Muted style |
| `children` | `ReactNode` | — | Label text |
| `className` | `string` | `''` | Extra root class |

---

## Modal

Centered overlay modal with header, body, and footer slots.

```jsx
import { Modal } from 'nexter-ui-component';

<Modal
  open={modalOpen}
  onClose={() => setModalOpen(false)}
  size="md"
  title="Edit Profile"
  byline="Update your personal information"
  footer={
    <>
      <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
      <Button variant="primary" onClick={handleSave}>Save Changes</Button>
    </>
  }
>
  <Field label="Display name"><Input value={name} onChange={...} /></Field>
  <Field label="Email"><Input type="email" value={email} onChange={...} /></Field>
</Modal>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Controlled open state |
| `onClose` | `function` | — | Close callback |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Modal width |
| `align` | `'left' \| 'center'` | `'left'` | Content alignment |
| `title` | `ReactNode` | — | Header title |
| `byline` | `ReactNode` | — | Header subtitle |
| `footer` | `ReactNode` | — | Footer slot |
| `className` | `string` | `''` | Extra root class |

---

## MultiSelect

Multi-value select with search and tag chips.

```jsx
import { MultiSelect } from 'nexter-ui-component';

<MultiSelect
  options={[
    { label: 'PHP',        value: 'php' },
    { label: 'JavaScript', value: 'js' },
    { label: 'Python',     value: 'py' },
  ]}
  value={selected}
  onChange={setSelected}
  searchable
  placeholder="Choose languages"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Array<{label, value}>` | `[]` | Options list |
| `value` | `Array<string>` | `[]` | Controlled selected values |
| `onChange` | `function` | — | `(values[]) => void` |
| `searchable` | `boolean` | `true` | Filter options on type |
| `disabled` | `boolean` | `false` | Disabled state |
| `placeholder` | `string` | `'Select options'` | Empty state label |
| `noResultsText` | `string` | — | No match message |
| `className` | `string` | `''` | Extra root class |

---

## Notice

Dismissible notification block (lighter than Alert/Banner).

```jsx
import { Notice } from 'nexter-ui-component';

<Notice variant="info" onDismiss={() => setVisible(false)}>
  A new version is available. <a href="/changelog">See what's new</a>
</Notice>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'default'` | Severity |
| `icon` | `ReactNode` | — | Custom icon |
| `dismissible` | `boolean` | `true` | Show close button |
| `onDismiss` | `function` | — | Dismiss callback |
| `children` | `ReactNode` | — | Notice content |
| `className` | `string` | `''` | Extra root class |

---

## NumberInput

Numeric input with +/− spinner, min/max, and unit selector.

```jsx
import { NumberInput } from 'nexter-ui-component';

<NumberInput
  label="Font size"
  value={fontSize}
  onChange={setFontSize}
  min={10}
  max={96}
  step={2}
  unit="px"
  units={['px', 'em', 'rem']}
  onUnitChange={setUnit}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | — | Controlled value |
| `defaultValue` | `number` | `0` | Uncontrolled initial value |
| `onChange` | `function` | — | `(number) => void` |
| `min` | `number` | — | Minimum value |
| `max` | `number` | — | Maximum value |
| `step` | `number` | `1` | Increment amount |
| `precision` | `number` | — | Decimal places |
| `label` | `string` | — | Field label |
| `prefix` | `string` | — | Text before value |
| `suffix` | `string` | — | Text after value |
| `hint` | `string` | — | Helper text |
| `error` | `string` | — | Error message |
| `disabled` | `boolean` | `false` | Disabled state |
| `unit` | `string` | — | Active unit |
| `units` | `Array<string>` | — | Unit options |
| `onUnitChange` | `function` | — | `(unit) => void` |
| `className` | `string` | `''` | Extra root class |

---

## OTPInput

One-time password input with multi-slot entry.

```jsx
import { OTPInput } from 'nexter-ui-component';

<OTPInput
  length={6}
  value={otp}
  onChange={setOtp}
  type="number"
  autoFocus
  separator={3}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `length` | `number` | `6` | Number of input slots |
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | — | Uncontrolled initial value |
| `onChange` | `function` | — | `(string) => void` |
| `type` | `'number' \| 'text' \| 'password'` | `'number'` | Slot input type |
| `disabled` | `boolean` | `false` | Disabled state |
| `autoFocus` | `boolean` | `false` | Focus first slot on mount |
| `separator` | `number` | — | Insert separator after N slots |
| `separatorChar` | `string` | `'–'` | Separator character |
| `className` | `string` | `''` | Extra root class |

---

## Pagination

Page navigation with previous/next and numbered buttons.

```jsx
import { Pagination } from 'nexter-ui-component';

<Pagination
  page={currentPage}
  totalPages={totalPages}
  onChange={setCurrentPage}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `page` | `number` | — | Controlled current page |
| `totalPages` | `number` | `1` | Total page count |
| `onChange` | `function` | — | `(page) => void` |
| `showPrevNext` | `boolean` | `true` | Show prev/next arrows |
| `className` | `string` | `''` | Extra root class |

---

## Popover

Content container for tooltips and popovers.

```jsx
import { Popover, Tooltip } from 'nexter-ui-component';

// Used inside Tooltip or Dropdown
<Popover
  title="More info"
  description="This setting controls the cache expiry."
  footer={<a href="/docs">Read docs →</a>}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | — | Popover heading |
| `description` | `ReactNode` | — | Body text |
| `footer` | `ReactNode` | — | Footer slot |
| `className` | `string` | `''` | Extra root class |

---

## Progress

Percentage progress bar with ARIA support.

```jsx
import { Progress } from 'nexter-ui-component';

<Progress value={72} />
<Progress value={100} variant="success" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | 0–100 percentage |
| `variant` | `string` | `'default'` | Color variant |
| `className` | `string` | `''` | Extra root class |

---

## Radio

Accessible radio button with label.

```jsx
import { Radio } from 'nexter-ui-component';

{['left','center','right'].map(align => (
  <Radio
    key={align}
    name="alignment"
    value={align}
    label={align}
    checked={selected === align}
    onChange={() => setSelected(align)}
  />
))}
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Controlled checked state |
| `onChange` | `function` | — | Change handler |
| `name` | `string` | — | Radio group name |
| `value` | `any` | — | This radio's value |
| `label` | `ReactNode` | — | Label text |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Extra root class |

---

## ScrollArea

Custom-styled scrollable container.

```jsx
import { ScrollArea } from 'nexter-ui-component';

<ScrollArea height={300}>
  {longList.map(item => <div key={item.id}>{item.name}</div>)}
</ScrollArea>

<ScrollArea maxHeight="60vh" horizontal>
  <WideTable />
</ScrollArea>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `height` | `string \| number` | — | Fixed height |
| `maxHeight` | `string \| number` | — | Max height (grows up to this) |
| `horizontal` | `boolean` | `false` | Enable horizontal scrolling |
| `children` | `ReactNode` | — | Scrollable content |
| `className` | `string` | `''` | Extra root class |

---

## Search

Search input with icon and clear button.

```jsx
import { Search } from 'nexter-ui-component';

<Search
  value={query}
  onChange={e => setQuery(e.target.value)}
  onClear={() => setQuery('')}
  placeholder="Search components…"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value |
| `onChange` | `function` | — | Change handler |
| `onClear` | `function` | — | Called when × is clicked |
| `placeholder` | `string` | `'Search…'` | Placeholder text |
| `className` | `string` | `''` | Extra root class |

---

## Segmented

Button-group single-select control.

```jsx
import { Segmented } from 'nexter-ui-component';

<Segmented
  options={[
    { label: 'Day',   value: 'day'   },
    { label: 'Week',  value: 'week'  },
    { label: 'Month', value: 'month' },
  ]}
  value={period}
  onChange={setPeriod}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Array<{label, value}>` | `[]` | Segment options |
| `value` | `string` | — | Controlled active value |
| `onChange` | `function` | — | `(value) => void` |
| `className` | `string` | `''` | Extra root class |

---

## Select

Native `<select>` wrapper with styled classes.

```jsx
import { Select } from 'nexter-ui-component';

<Select
  options={[
    { label: 'Small',  value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large',  value: 'lg' },
  ]}
  value={size}
  onChange={e => setSize(e.target.value)}
  placeholder="Choose size"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Array<{label, value}>` | `[]` | Option list |
| `value` | `string` | — | Controlled value |
| `onChange` | `function` | — | Native change event |
| `placeholder` | `string` | — | Empty option label |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Extra root class |

---

## Separator

Visual divider — horizontal or vertical, with optional label.

```jsx
import { Separator } from 'nexter-ui-component';

<Separator />
<Separator label="OR" />
<Separator orientation="vertical" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Divider direction |
| `label` | `ReactNode` | — | Centered label (horizontal only) |
| `decorative` | `boolean` | `true` | `role="none"` when decorative |
| `className` | `string` | `''` | Extra root class |

---

## Sheet

Card panel with header, body, and footer slots.

```jsx
import { Sheet } from 'nexter-ui-component';

// Prop-based
<Sheet title="General Settings" byline="Configure your preferences" footer={<Button>Save</Button>}>
  <Field label="Site Name"><Input /></Field>
</Sheet>

// Compound component
<Sheet>
  <Sheet.Head>
    <Sheet.Title>General Settings</Sheet.Title>
    <Sheet.Byline>Configure your preferences</Sheet.Byline>
  </Sheet.Head>
  <Sheet.Body>…</Sheet.Body>
  <Sheet.Foot>…</Sheet.Foot>
</Sheet>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | — | Panel title |
| `byline` | `ReactNode` | — | Panel subtitle |
| `footer` | `ReactNode` | — | Footer slot |
| `className` | `string` | `''` | Extra root class |

---

## Sidebar

Recursive multi-level navigation sidebar.

```jsx
import { Sidebar } from 'nexter-ui-component';

<Sidebar
  item={{ key: 'root', children: menuItems }}
  active={currentPage}
  onSelect={setCurrentPage}
  collapsed={false}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `item` | `object` | — | Root menu item with nested `children` |
| `active` | `string` | — | Active item key |
| `onSelect` | `function` | — | `(key) => void` |
| `collapsed` | `boolean` | `false` | Collapsed (icons-only) mode |

---

## Skeleton

Loading placeholder shapes.

```jsx
import { Skeleton } from 'nexter-ui-component';

<Skeleton variant="title" width="60%" />
<Skeleton variant="line" />
<Skeleton variant="line" width="80%" />
<Skeleton variant="circle" width={40} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'line' \| 'title' \| 'circle'` | `'line'` | Shape variant |
| `width` | `string \| number` | — | Custom width |
| `style` | `object` | — | Extra inline styles |
| `className` | `string` | `''` | Extra root class |

---

## Slider

Range slider with optional unit selector.

```jsx
import { Slider } from 'nexter-ui-component';

<Slider
  label="Border radius"
  value={radius}
  onChange={setRadius}
  min={0}
  max={50}
  step={1}
  unit="px"
/>

// With unit switcher
<Slider
  label="Width"
  value={width}
  onChange={setWidth}
  unit={unit}
  units={['px', '%', 'vw']}
  onUnitChange={setUnit}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | — | Controlled value |
| `defaultValue` | `number` | `50` | Uncontrolled initial value |
| `onChange` | `function` | — | `(number) => void` |
| `min` | `number` | `0` | Minimum |
| `max` | `number` | `100` | Maximum |
| `step` | `number` | `1` | Increment |
| `label` | `string` | — | Field label |
| `unit` | `string` | `'px'` | Active unit display |
| `units` | `Array<string>` | — | Unit switcher options |
| `onUnitChange` | `function` | — | `(unit) => void` |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Extra root class |

---

## SortableList

Drag-and-drop reorderable list.

```jsx
import { SortableList } from 'nexter-ui-component';

<SortableList
  items={items}
  onChange={setItems}
  renderItem={(item, { dragHandleProps }) => (
    <div>
      <span {...dragHandleProps}>⠿</span>
      {item.label}
    </div>
  )}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array` | `[]` | List items (must have `id`) |
| `onChange` | `function` | — | `(reorderedItems) => void` |
| `renderItem` | `function` | — | `(item, {dragHandleProps}) => ReactNode` |
| `disabled` | `boolean` | `false` | Disable drag |
| `className` | `string` | `''` | Extra root class |

---

## Spinner

Loading spinner indicator.

```jsx
import { Spinner } from 'nexter-ui-component';

<Spinner />
<Spinner size="lg" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Spinner size |
| `className` | `string` | `''` | Extra root class |

---

## StatCard

Statistics display card with label, value, and metadata.

```jsx
import { StatCard } from 'nexter-ui-component';

<StatCard
  label="Monthly Revenue"
  value="$42,500"
  meta="+12% from last month"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | — | Metric label |
| `value` | `ReactNode` | — | Primary metric value |
| `meta` | `ReactNode` | — | Secondary info / trend |
| `className` | `string` | `''` | Extra root class |

---

## Status

Dot/badge status indicator.

```jsx
import { Status } from 'nexter-ui-component';

<Status variant="success">Active</Status>
<Status variant="error">Offline</Status>
<Status variant="warning">Degraded</Status>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Status color |
| `children` | `ReactNode` | — | Status label |
| `className` | `string` | `''` | Extra root class |

---

## Stepper

Number input with +/− increment buttons.

```jsx
import { Stepper } from 'nexter-ui-component';

<Stepper
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={99}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | — | Controlled value |
| `onChange` | `function` | — | `(number) => void` |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | — | Maximum value |
| `step` | `number` | `1` | Increment amount |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Extra root class |

---

## Table

Data table with columns, rows, striped mode, and action column.

```jsx
import { Table } from 'nexter-ui-component';

<Table
  columns={[
    { key: 'name',  label: 'Name'  },
    { key: 'email', label: 'Email' },
    { key: 'role',  label: 'Role'  },
  ]}
  rows={users}
  striped
  actions={row => (
    <Button size="sm" variant="ghost" onClick={() => edit(row)}>Edit</Button>
  )}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Array<{key, label}>` | `[]` | Column definitions |
| `rows` | `Array<object>` | `[]` | Row data (keyed by column `key`) |
| `striped` | `boolean` | `false` | Alternating row shading |
| `actions` | `function` | — | `(row) => ReactNode` — appended column |
| `className` | `string` | `''` | Extra root class |

---

## Tabs

Tab navigation with pill or vertical variants.

```jsx
import { Tabs } from 'nexter-ui-component';

<Tabs
  variant="pill"
  tabs={[
    { id: 'general',  label: 'General',  content: <GeneralPanel /> },
    { id: 'advanced', label: 'Advanced', content: <AdvancedPanel /> },
    { id: 'seo',      label: 'SEO',      content: <SEOPanel /> },
  ]}
  defaultTab="general"
/>

// Controlled
<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `Array<{id, label, content, children?}>` | `[]` | Tab list |
| `variant` | `'pill' \| 'vertical'` | `'pill'` | Layout style |
| `activeTab` | `string` | — | Controlled active tab id |
| `onTabChange` | `function` | — | `(id) => void` |
| `defaultTab` | `string` | — | Uncontrolled initial tab |
| `className` | `string` | `''` | Extra root class |

---

## Tag

Compact label/chip component.

```jsx
import { Tag } from 'nexter-ui-component';

<Tag variant="primary">React</Tag>
<Tag variant="success">Published</Tag>
<Tag variant="warning">Draft</Tag>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'default'` | Color |
| `children` | `ReactNode` | — | Tag label |
| `className` | `string` | `''` | Extra root class |

---

## Textarea

Multi-line text input with optional character counter.

```jsx
import { Textarea } from 'nexter-ui-component';

<Textarea
  placeholder="Write your message…"
  value={message}
  onChange={e => setMessage(e.target.value)}
  rows={5}
  maxLength={500}
  showCount
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | — | Uncontrolled initial value |
| `onChange` | `function` | — | Change handler |
| `placeholder` | `string` | — | Placeholder text |
| `rows` | `number` | `4` | Visible rows |
| `disabled` | `boolean` | `false` | Disabled state |
| `invalid` | `boolean` | `false` | Error state |
| `maxLength` | `number` | — | Character limit |
| `showCount` | `boolean` | `false` | Show `current/max` counter |
| `className` | `string` | `''` | Extra root class |

---

## ThemeProvider

App-wide light/dark theme manager with localStorage sync.

```jsx
import { ThemeProvider } from 'nexter-ui-component';

// Wrap your app
<ThemeProvider defaultTheme="system">
  <App />
</ThemeProvider>

// Use the hook
import { useTheme } from 'nexter-ui-component';
const { theme, setTheme } = useTheme();
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultTheme` | `'light' \| 'dark' \| 'system'` | `'system'` | Initial theme |
| `target` | `HTMLElement` | `document.documentElement` | Element to apply theme class |
| `storageSync` | `boolean` | `true` | Persist to localStorage |
| `children` | `ReactNode` | — | App tree |

---

## Toast

Toast notification with title, description, and close button.

```jsx
import { Toast } from 'nexter-ui-component';

<Toast
  variant="success"
  title="Saved!"
  description="Your changes have been saved successfully."
  onClose={() => setToast(null)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | Toast severity |
| `icon` | `ReactNode` | — | Custom icon |
| `title` | `string` | — | Toast heading |
| `description` | `string` | — | Body text |
| `onClose` | `function` | — | Close callback |
| `className` | `string` | `''` | Extra root class |

---

## Toggle

On/off switch control.

```jsx
import { Toggle } from 'nexter-ui-component';

<Toggle
  checked={enabled}
  onChange={e => setEnabled(e.target.checked)}
  label="Enable dark mode"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Controlled state |
| `onChange` | `function` | — | Change handler |
| `label` | `string` | — | Label text |
| `disabled` | `boolean` | `false` | Disabled state |
| `variant` | `string` | — | Color variant |
| `className` | `string` | `''` | Extra root class |

---

## ToggleGrid

Grid layout of multiple toggle switches.

```jsx
import { ToggleGrid } from 'nexter-ui-component';

<ToggleGrid
  columns={2}
  items={[
    { key: 'cache',    label: 'Cache',    description: 'Enable page caching' },
    { key: 'minify',   label: 'Minify',   description: 'Minify CSS and JS' },
    { key: 'lazyload', label: 'Lazy Load',description: 'Lazy-load images' },
    { key: 'cdn',      label: 'CDN',      description: 'Serve assets via CDN' },
  ]}
  valueMap={{ cache: true, minify: false, lazyload: true, cdn: false }}
  onChange={(key, val) => update(key, val)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array<{key, label, description?}>` | `[]` | Toggle definitions |
| `columns` | `number` | `2` | Grid columns |
| `valueMap` | `object` | — | `{ [key]: boolean }` controlled state |
| `onChange` | `function` | — | `(key, value) => void` |
| `disabled` | `boolean` | `false` | Disable all toggles |
| `className` | `string` | `''` | Extra root class |

---

## Tooltip

CSS-powered tooltip wrapper.

```jsx
import { Tooltip } from 'nexter-ui-component';

<Tooltip content="Copy to clipboard" position="top">
  <Button icon>📋</Button>
</Tooltip>

<Tooltip content={<strong>Pro feature</strong>} position="right">
  <Badge variant="primary">Pro</Badge>
</Tooltip>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string \| ReactNode` | — | Tooltip text or element |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Tooltip position |
| `children` | `ReactNode` | — | Trigger element |
| `className` | `string` | `''` | Extra root class |

---

## Typography

Semantic text component with variant and prose modes.

```jsx
import { Typography } from 'nexter-ui-component';

<Typography variant="h1">Page Heading</Typography>
<Typography variant="lead">Introductory paragraph text.</Typography>
<Typography variant="body" color="muted">Secondary text content.</Typography>
<Typography variant="code">npm install nexter-ui-component</Typography>

// Prose mode — wraps rich HTML
<Typography prose>
  <h2>Getting started</h2>
  <p>Install via npm and import any component.</p>
  <code>npm install nexter-ui-component</code>
</Typography>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'h1'–'h6' \| 'lead' \| 'body' \| 'p' \| 'large' \| 'sm' \| 'xs' \| 'muted' \| 'code' \| 'blockquote'` | `'body'` | Text style |
| `prose` | `boolean` | `false` | Rich content wrapper mode |
| `as` | `ElementType` | auto | Override HTML tag |
| `color` | `'default' \| 'muted' \| 'primary' \| 'success' \| 'warning' \| 'error'` | `'default'` | Text color |
| `truncate` | `boolean` | `false` | Single-line truncation |
| `clamp` | `number` | — | Multi-line clamp (2, 3, …) |
| `className` | `string` | `''` | Extra root class |

---

## VerticalNavigationMenu

Hierarchical vertical nav menu (mirrors Nexter dashboard structure).

```jsx
import { VerticalNavigationMenu } from 'nexter-ui-component';

<VerticalNavigationMenu
  items={[
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      children: [
        { key: 'general',  label: 'General'  },
        { key: 'advanced', label: 'Advanced' },
      ],
    },
  ]}
  activeKey={current}
  onChange={setCurrent}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array<{key, label, icon?, children?}>` | `[]` | Menu items (recursive) |
| `activeKey` | `string` | — | Active item key |
| `onChange` | `function` | — | `(key) => void` |

---

## Utility Classes Reference

All `nxp-` utility classes used with components:

### Layout
```
nxp-flex         nxp-inline-flex    nxp-grid
nxp-flex-row     nxp-flex-col       nxp-flex-row-reverse  nxp-flex-col-reverse
nxp-flex-wrap    nxp-flex-nowrap    nxp-flex-wrap-reverse
nxp-flex-1       nxp-flex-none
nxp-items-start  nxp-items-center   nxp-items-end  nxp-items-stretch  nxp-items-baseline
nxp-justify-start  nxp-justify-center  nxp-justify-end
nxp-justify-between  nxp-justify-around  nxp-justify-evenly
nxp-self-start   nxp-self-center    nxp-self-end   nxp-self-stretch   nxp-self-auto
nxp-grow  nxp-grow-0  nxp-shrink  nxp-shrink-0
nxp-order-first  nxp-order-last  nxp-order-none  nxp-order-1 … nxp-order-5
nxp-w-full  nxp-h-full  nxp-overflow-hidden  nxp-relative  nxp-absolute
nxp-sticky  nxp-z-10  nxp-z-50
```

### Spacing (gap / padding / margin)
```
nxp-gap-0  nxp-gap-4  nxp-gap-6  nxp-gap-8  nxp-gap-10  nxp-gap-12
nxp-gap-16  nxp-gap-20  nxp-gap-24  nxp-gap-32
nxp-gap-x-4 … nxp-gap-x-24    nxp-gap-y-4 … nxp-gap-y-24
nxp-p-4  nxp-p-8  nxp-p-12  nxp-p-16  nxp-p-20  nxp-p-24
nxp-px-4 … nxp-px-24    nxp-py-4 … nxp-py-24
nxp-mt-2  (limited margin utilities)
```

### Typography
```
nxp-heading      nxp-subheading    nxp-title-label  nxp-body
nxp-font-family  nxp-text-sm       nxp-text-xs      nxp-text-md
nxp-weight-bold  nxp-weight-semibold  nxp-weight-medium  nxp-weight-regular
nxp-text-default  nxp-text-muted  nxp-text-faint
nxp-text-primary  nxp-text-success  nxp-text-warning  nxp-text-error  nxp-text-white
nxp-no-underline  nxp-whitespace-nowrap
```

### Colors & Backgrounds
```
nxp-bg-default  nxp-bg-muted  nxp-bg-subtle
nxp-bg-primary  nxp-bg-success  nxp-bg-warning  nxp-bg-error
nxp-bg-brand-grad  nxp-bg-grad
```

### Borders & Radius
```
nxp-border        nxp-border-strong  nxp-border-muted
nxp-border-t      nxp-border-b       nxp-border-l   nxp-border-r
nxp-rounded-xs    nxp-rounded-sm     nxp-rounded-md nxp-rounded-lg  nxp-rounded-full
```

### Responsive
```
nxp-sm-flex-col  nxp-sm-w-full  nxp-sm-hidden  nxp-sm-flex-wrap
nxp-md-flex-row  nxp-md-w-full  nxp-md-hidden
nxp-lg-flex-row  nxp-lg-w-full
```

---

## Design Tokens

All components use `--nxp-*` CSS custom properties. Override in your own CSS:

```css
:root {
  --nxp-color-primary:        #1717cc;
  --nxp-color-primary-dark:   #0e0e7a;
  --nxp-color-primary-subtle: #eff0ff;
  --nxp-color-bg:             #ffffff;
  --nxp-color-border:         #e2e8f0;
  --nxp-color-text:           #0f172a;
  --nxp-color-text-muted:     #64748b;
  --nxp-font:                 -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --nxp-radius-sm:            4px;
  --nxp-radius-md:            8px;
  --nxp-space-8:              8px;
  --nxp-space-16:             16px;
}
```

Use `ThemeProvider` + `setToken()` / `applyPreset()` from `nexter-ui-component/lib/theme` for runtime theme switching.

---

## RTL Support

Add `dir="rtl"` to any ancestor element — all spacing, borders, and layout flip automatically via CSS logical properties.

```jsx
<div dir="rtl">
  <Container gap="md">
    <Button>حفظ</Button>
    <Button variant="outline">إلغاء</Button>
  </Container>
</div>
```

---

*Generated for Nexter UI Component v1.9.23 · 64 components*
