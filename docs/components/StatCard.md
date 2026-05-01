# StatCard

> Metric display card showing a label, primary value, and optional meta/trend text.

---

## Import

```jsx
import { StatCard } from 'nexter-ui-component'
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string \| node` | — | Metric name displayed above the value. |
| `value` | `string \| number \| node` | — | Primary metric value (large display text). |
| `meta` | `string \| node` | — | Secondary info below the value (trend, period, etc.). |
| `className` | `string` | `''` | Additional CSS class(es) on the root element. |

---

## Usage

### Basic

```jsx
<StatCard label="Indexed pages" value={1_284} meta="+42 this week" />
```

### Dashboard row

```jsx
<div style={{ display: 'flex', gap: 16 }}>
  <StatCard label="Total redirects" value="3,491" meta="Last 30 days" />
  <StatCard label="404 errors"      value="27"    meta="-12 vs last week" />
  <StatCard label="Avg load time"   value="1.2s"  meta="PageSpeed score: 94" />
</div>
```

---

## CSS Classes

| Class | Applied when |
|-------|-------------|
| `.nxp-stat` | Root wrapper div |
| `.nxp-stat__label` | Label div |
| `.nxp-stat__value` | Value div |
| `.nxp-stat__meta` | Meta / trend div |

---

## Notes

- All props are optional — render only the parts you need.
- `value` accepts any renderable node, so you can pass formatted numbers, colored text, or icons.
