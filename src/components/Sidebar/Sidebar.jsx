import React, { useState, useCallback, useRef, useEffect } from 'react';

/* ─── Chevron icon ───────────────────────────────────────────── */
const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Sidebar Item ───────────────────────────────────────────── */
function SidebarItem({
  item,
  active,
  onSelect,
  collapsed,
  depth = 0,
}) {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const isActiveParent = hasChildren && item.children.some((c) => c.id === active);
  const [expanded, setExpanded] = useState(isActiveParent);

  /* auto-expand the active parent when active changes */
  useEffect(() => {
    if (isActiveParent) setExpanded(true);
  }, [isActiveParent]);

  const isActive = item.id === active;

  function handleClick(e) {
    e.preventDefault();
    if (hasChildren && !collapsed) {
      setExpanded((prev) => !prev);
    } else {
      onSelect?.(item.id, item);
    }
  }

  const cls = [
    'nxp-sb__item',
    depth > 0 ? 'nxp-sb__item--child' : '',
    isActive ? 'nxp-sb__item--active' : '',
    isActiveParent ? 'nxp-sb__item--active-parent' : '',
    item.disabled ? 'nxp-sb__item--disabled' : '',
  ].filter(Boolean).join(' ');

  return (
    <li>
      <a
        href={item.href ?? '#'}
        className={cls}
        onClick={handleClick}
        aria-current={isActive ? 'page' : undefined}
        aria-disabled={item.disabled || undefined}
        tabIndex={item.disabled ? -1 : 0}
        title={collapsed ? (typeof item.label === 'string' ? item.label : undefined) : undefined}
      >
        {/* Icon */}
        {item.icon && (
          <span className="nxp-sb__icon" aria-hidden="true">{item.icon}</span>
        )}

        {/* Label — hidden when collapsed */}
        {!collapsed && (
          <span className="nxp-sb__label">{item.label}</span>
        )}

        {/* Badge */}
        {!collapsed && item.badge != null && (
          <span className={`nxp-sb__badge${item.badgeVariant ? ` nxp-sb__badge--${item.badgeVariant}` : ''}`}>
            {item.badge}
          </span>
        )}

        {/* Chevron for sub-menus */}
        {!collapsed && hasChildren && (
          <span className={`nxp-sb__chevron${expanded ? ' nxp-sb__chevron--open' : ''}`}>
            <ChevronDown />
          </span>
        )}
      </a>

      {/* Sub-items */}
      {hasChildren && !collapsed && expanded && (
        <ul className="nxp-sb__sub" role="list">
          {item.children.map((child) => (
            <SidebarItem
              key={child.id}
              item={child}
              active={active}
              onSelect={onSelect}
              collapsed={collapsed}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

/* ─── Sidebar ────────────────────────────────────────────────
 *
 * Props
 * ─────
 * items         SidebarItem[]         Navigation items (see shape below)
 * active        string                Active item id (controlled)
 * defaultActive string                Initial active item (uncontrolled)
 * onSelect      (id, item) => void    Called on item click
 * collapsed     boolean               Collapsed state (controlled)
 * defaultCollapsed boolean            Initial collapsed state
 * onCollapse    (collapsed) => void   Called when toggle clicked
 * collapsible   boolean               Show collapse toggle button (default true)
 * header        ReactNode             Logo / branding area
 * footer        ReactNode             Bottom section (avatar, settings link)
 * width         string                CSS value, default '220px'
 * collapsedWidth string               CSS value, default '56px'
 * className     string
 *
 * SidebarItem shape
 * ─────────────────
 * { id, label, icon?, href?, badge?, badgeVariant?, disabled?, children?: SidebarItem[] }
 */
function Sidebar({
  items = [],
  active,
  defaultActive,
  onSelect,

  collapsed,
  defaultCollapsed = false,
  onCollapse,

  collapsible = true,
  header,
  footer,
  width = '220px',
  collapsedWidth = '56px',
  className = '',
}) {
  /* ── Active state ── */
  const isActiveControlled = active !== undefined;
  const [internalActive, setInternalActive] = useState(defaultActive ?? null);
  const activeId = isActiveControlled ? active : internalActive;

  /* ── Collapsed state ── */
  const isCollapseControlled = collapsed !== undefined;
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const isCollapsed = isCollapseControlled ? collapsed : internalCollapsed;

  function handleSelect(id, item) {
    if (!isActiveControlled) setInternalActive(id);
    onSelect?.(id, item);
  }

  function handleToggle() {
    const next = !isCollapsed;
    if (!isCollapseControlled) setInternalCollapsed(next);
    onCollapse?.(next);
  }

  const cls = [
    'nxp-sb',
    isCollapsed ? 'nxp-sb--collapsed' : '',
    className,
  ].filter(Boolean).join(' ');

  const style = {
    '--nxp-sb-width':   width,
    '--nxp-sb-col-width': collapsedWidth,
    width: isCollapsed ? collapsedWidth : width,
  };

  return (
    <aside className={cls} style={style} aria-label="Sidebar navigation">
      {/* ── Header ── */}
      {header && (
        <div className="nxp-sb__header">{header}</div>
      )}

      {/* ── Nav ── */}
      <nav className="nxp-sb__nav">
        <ul className="nxp-sb__list" role="list">
          {items.map((item) => {
            /* section divider */
            if (item.type === 'divider') {
              return (
                <li key={item.id ?? item.label} className="nxp-sb__divider" role="separator">
                  {!isCollapsed && item.label && (
                    <span className="nxp-sb__section-label">{item.label}</span>
                  )}
                </li>
              );
            }
            return (
              <SidebarItem
                key={item.id}
                item={item}
                active={activeId}
                onSelect={handleSelect}
                collapsed={isCollapsed}
              />
            );
          })}
        </ul>
      </nav>

      {/* ── Footer ── */}
      {footer && (
        <div className="nxp-sb__footer">{footer}</div>
      )}

      {/* ── Collapse toggle ── */}
      {collapsible && (
        <button
          type="button"
          className="nxp-sb__toggle"
          onClick={handleToggle}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg
            width="14" height="14" viewBox="0 0 14 14"
            fill="none" aria-hidden="true"
            style={{ transform: isCollapsed ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}
          >
            <path d="M9 2L5 7l4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </aside>
  );
}

export { Sidebar };
export default Sidebar;
