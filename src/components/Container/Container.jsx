import React, { createContext, useContext } from 'react';

/**
 * Container
 *
 * A layout primitive that wraps flex and grid in one API.
 * Inspired by Force UI's Container — rebuilt with nxp- tokens.
 *
 * Props (Container):
 *   containerType  'flex' | 'grid'                          default: 'flex'
 *   gap            'none'|'xs'|'sm'|'md'|'lg'|'10'|'20'|'xl'|'2xl'   default: 'sm'
 *   gapX           same as gap — column gap only
 *   gapY           same as gap — row gap only
 *   direction      'row'|'row-reverse'|'column'|'column-reverse'
 *   justify        'start'|'end'|'center'|'between'|'around'|'evenly'
 *   align          'start'|'end'|'center'|'baseline'|'stretch'
 *   wrap           'wrap'|'nowrap'|'wrap-reverse'
 *   cols           number  OR  { sm?, md?, lg? }   — grid columns (responsive)
 *   as             HTML tag to render (default 'div')
 *   className, style, children
 *
 * Props (Container.Item):
 *   grow       0 | 1
 *   shrink     0 | 1
 *   order      'first'|'last'|0-5
 *   alignSelf  'auto'|'start'|'end'|'center'|'baseline'|'stretch'
 *   justifySelf 'auto'|'start'|'end'|'center'|'stretch'
 *   colSpan    number | 'full' | { sm?, md?, lg? }  — grid column span
 *   rowSpan    number                                — grid row span
 *   as         HTML tag to render (default 'div')
 *   className, style, children
 */

/* ── Gap token resolver ──────────────────────────────────────────
   Maps semantic names → CSS custom properties from theme.css
   Also accepts plain numbers (treated as px)
   ─────────────────────────────────────────────────────────────── */
const GAP_TOKENS = {
  none: '0',
  xs:   'var(--nxp-space-4)',
  sm:   'var(--nxp-space-8)',
  md:   'var(--nxp-space-12)',
  lg:   'var(--nxp-space-16)',
  '10': 'var(--nxp-space-10)',
  '20': 'var(--nxp-space-20)',
  xl:   'var(--nxp-space-24)',
  '2xl':'var(--nxp-space-32)',
};

function resolveGap(v) {
  if (v === undefined || v === null) return undefined;
  if (typeof v === 'number') return `${v}px`;
  return GAP_TOKENS[v] ?? v;
}

/* ── Class maps (all nxp- utility classes) ───────────────────── */
const DIR_MAP = {
  'row':            'nxp-flex-row',
  'row-reverse':    'nxp-flex-row-reverse',
  'column':         'nxp-flex-col',
  'column-reverse': 'nxp-flex-col-reverse',
};

const JUSTIFY_MAP = {
  start:   'nxp-justify-start',
  end:     'nxp-justify-end',
  center:  'nxp-justify-center',
  between: 'nxp-justify-between',
  around:  'nxp-justify-around',
  evenly:  'nxp-justify-evenly',
};

const ALIGN_MAP = {
  start:    'nxp-items-start',
  end:      'nxp-items-end',
  center:   'nxp-items-center',
  baseline: 'nxp-items-baseline',
  stretch:  'nxp-items-stretch',
};

const WRAP_MAP = {
  wrap:           'nxp-flex-wrap',
  nowrap:         'nxp-flex-nowrap',
  'wrap-reverse': 'nxp-flex-wrap-reverse',
};

const ALIGN_SELF_MAP = {
  auto:     'nxp-self-auto',
  start:    'nxp-self-start',
  end:      'nxp-self-end',
  center:   'nxp-self-center',
  baseline: 'nxp-self-baseline',
  stretch:  'nxp-self-stretch',
};

const JUSTIFY_SELF_MAP = {
  auto:    'nxp-justify-self-auto',
  start:   'nxp-justify-self-start',
  end:     'nxp-justify-self-end',
  center:  'nxp-justify-self-center',
  stretch: 'nxp-justify-self-stretch',
};

/* ── Context (passes type + cols to Item) ────────────────────── */
const ContainerContext = createContext({ containerType: 'flex', cols: undefined });
const useContainerCtx  = () => useContext(ContainerContext);

/* ── Helpers ─────────────────────────────────────────────────── */
function cls(...parts) {
  return parts.filter(Boolean).join(' ').trim() || undefined;
}

/* ══════════════════════════════════════════════════════════════
   Container
   ══════════════════════════════════════════════════════════════ */
function Container({
  containerType = 'flex',
  gap           = 'sm',
  gapX,
  gapY,
  direction,
  justify,
  align,
  wrap,
  cols,
  className = '',
  style     = {},
  as: Tag   = 'div',
  children,
  ...rest
}) {
  /* ── gap → inline style ── */
  const gapStyle = {};
  const gv  = resolveGap(gap);
  if (gv)  gapStyle.gap       = gv;
  const gxv = resolveGap(gapX);
  if (gxv) gapStyle.columnGap = gxv;
  const gyv = resolveGap(gapY);
  if (gyv) gapStyle.rowGap    = gyv;

  /* ── grid cols → CSS custom properties ── */
  const gridVars = {};
  if (containerType === 'grid' && cols !== undefined) {
    if (typeof cols === 'object') {
      // responsive object: { sm: 1, md: 2, lg: 4 }
      const base = cols.lg ?? cols.md ?? cols.sm ?? 1;
      gridVars['--nxp-c-cols']    = base;
      if (cols.md !== undefined) gridVars['--nxp-c-cols-md'] = cols.md;
      if (cols.sm !== undefined) gridVars['--nxp-c-cols-sm'] = cols.sm;
    } else {
      gridVars['--nxp-c-cols'] = cols;
    }
  }

  const classes = cls(
    containerType === 'grid' ? 'nxp-container--grid' : 'nxp-container--flex',
    direction && DIR_MAP[direction],
    justify   && JUSTIFY_MAP[justify],
    align     && ALIGN_MAP[align],
    wrap      && WRAP_MAP[wrap],
    className,
  );

  return (
    <ContainerContext.Provider value={{ containerType, cols }}>
      <Tag
        className={classes}
        style={{ ...gapStyle, ...gridVars, ...style }}
        {...rest}
      >
        {children}
      </Tag>
    </ContainerContext.Provider>
  );
}

/* ══════════════════════════════════════════════════════════════
   Container.Item
   ══════════════════════════════════════════════════════════════ */
function Item({
  grow,
  shrink,
  order,
  alignSelf,
  justifySelf,
  colSpan,
  rowSpan,
  className = '',
  style     = {},
  as: Tag   = 'div',
  children,
  ...rest
}) {
  const { containerType } = useContainerCtx();

  /* ── grid span CSS vars ── */
  const spanVars  = {};
  let   spanClass = '';
  let   rowClass  = '';

  if (containerType === 'grid') {
    if (colSpan !== undefined) {
      if (colSpan === 'full') {
        spanClass = 'nxp-container__item--span-full';
      } else if (typeof colSpan === 'object') {
        // responsive: { sm: 1, md: 2, lg: 3 }
        spanClass = 'nxp-container__item--span';
        const base = colSpan.lg ?? colSpan.md ?? colSpan.sm ?? 1;
        spanVars['--nxp-c-span'] = base;
        if (colSpan.md !== undefined) spanVars['--nxp-c-span-md'] = colSpan.md;
        if (colSpan.sm !== undefined) spanVars['--nxp-c-span-sm'] = colSpan.sm;
      } else {
        spanClass = 'nxp-container__item--span';
        spanVars['--nxp-c-span'] = colSpan;
      }
    }
    if (rowSpan !== undefined) {
      rowClass = 'nxp-container__item--row-span';
      spanVars['--nxp-c-row-span'] = rowSpan;
    }
  }

  /* ── flex item classes ── */
  const growClass = grow === 1 ? 'nxp-grow' : grow === 0 ? 'nxp-grow-0' : '';
  const shrinkClass = shrink === 1 ? 'nxp-shrink' : shrink === 0 ? 'nxp-shrink-0' : '';

  let orderClass = '';
  if      (order === 'first')                            orderClass = 'nxp-order-first';
  else if (order === 'last')                             orderClass = 'nxp-order-last';
  else if (order === 0)                                  orderClass = 'nxp-order-none';
  else if (typeof order === 'number' && order >= 1 && order <= 5) orderClass = `nxp-order-${order}`;

  const classes = cls(
    spanClass,
    rowClass,
    growClass,
    shrinkClass,
    orderClass,
    alignSelf   && ALIGN_SELF_MAP[alignSelf],
    justifySelf && JUSTIFY_SELF_MAP[justifySelf],
    className,
  );

  const hasVars = Object.keys(spanVars).length > 0;

  return (
    <Tag
      className={classes}
      style={hasVars ? { ...spanVars, ...style } : (Object.keys(style).length > 0 ? style : undefined)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ── Compose ─────────────────────────────────────────────────── */
Container.Item = Item;
Container.displayName = 'Container';
Item.displayName = 'Container.Item';

export { Container, Item };
export default Container;
