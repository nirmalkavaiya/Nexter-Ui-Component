/**
 * VerticalNavigationMenu
 *
 * Mirrors the navbox.jsx DOM structure from the Nexter dashboard:
 *   nxtext_navigation_cover       → .nxp-nav
 *   nxtext_logo_strip             → .nxp-nav__logo-strip
 *   nxtext_navlinks_cover         → .nxp-nav__cover
 *   nxtext_navlinks_inner_cover   → .nxp-nav__inner
 *   nxtext_navlink                → .nxp-nav__link
 *   nxtext_active_tab             → .nxp-nav__link--active
 *   nxtext_navlink_icon           → .nxp-nav__toggle-icon
 *   nxtext-icon-down              → .nxp-nav__toggle-icon--open
 *   nxtext_extra_options_inner_tabs → .nxp-nav__children
 *   nxtext_nav_dropdown_links     → .nxp-nav__child-wrap
 *   nxtext_version_and_system_info → .nxp-nav__footer
 */
import React, { useState, useEffect, useCallback } from 'react';
import './vertical-navigation.css';

/* ── Inline SVG chevron (replaces chevron_right_icon.svg) ──── */
const ChevronIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M5 3L9 7L5 11"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Inline SVG hamburger (replaces nxtext-menu-btn SVG) ────── */
const HamburgerIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M3 11H19M3 5H19M3 17H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ────────────────────────────────────────────────────────────── */
/*  Helpers                                                       */
/* ────────────────────────────────────────────────────────────── */
function hasActiveDescendant(item, activeKey, isActive) {
  if (isActive ? isActive(item, activeKey) : item.key === activeKey) return true;
  if (Array.isArray(item.children)) {
    return item.children.some((c) => hasActiveDescendant(c, activeKey, isActive));
  }
  return false;
}

/** Remove items with visible === false; recurse into children. */
function filterVisibleMenuItems(items = []) {
  return items
    .filter((item) => item.visible !== false)
    .map((item) =>
      Array.isArray(item.children)
        ? { ...item, children: filterVisibleMenuItems(item.children) }
        : item
    );
}

function itemIsActive(item, activeKey, isActive) {
  if (typeof isActive === 'function') return isActive(item, activeKey);
  return activeKey === item.key;
}

/* ────────────────────────────────────────────────────────────── */
/*  NavLinkContent — shared inner content for all link types     */
/* ────────────────────────────────────────────────────────────── */
function NavLinkContent({ item, hasChildren, isOpen }) {
  return (
    <>
      {item.icon && (
        <span className="nxp-nav__icon" aria-hidden="true">
          {item.icon}
        </span>
      )}
      <span className="nxp-nav__label">{item.label}</span>
      {item.badge && <span className="nxp-nav__badge">{item.badge}</span>}
      {item.suffix && (
        <span className="nxp-nav__suffix" aria-hidden="true">
          {item.suffix}
        </span>
      )}
      {hasChildren && (
        <span
          className={`nxp-nav__toggle-icon${isOpen ? ' nxp-nav__toggle-icon--open' : ''}`}
          aria-hidden="true"
        >
          <ChevronIcon />
        </span>
      )}
    </>
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  NavItem — single nav entry (recursive for children)          */
/* ────────────────────────────────────────────────────────────── */
function NavItem({
  item,
  activeKey,
  onChange,
  depth,
  openGroups,
  toggleGroup,
  linkComponent: LinkComponent,
  isActive,
}) {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const isActiveItem = itemIsActive(item, activeKey, isActive);
  const isOpen = openGroups.has(item.key);
  const isParentOfActive =
    hasChildren && hasActiveDescendant(item, activeKey, isActive);

  const handleLeafAction = useCallback(
    (e) => {
      if (item.disabled) return;
      if (typeof item.onClick === 'function') item.onClick(e);
      if (typeof onChange === 'function') onChange(item.key, item);
    },
    [item, onChange]
  );

  const handleClick = useCallback(
    (e) => {
      if (item.disabled) return;
      if (hasChildren) {
        toggleGroup(item.key);
        return;
      }
      handleLeafAction(e);
    },
    [hasChildren, item.disabled, item.key, toggleGroup, handleLeafAction]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick(e);
      }
    },
    [handleClick]
  );

  const linkClass = [
    'nxp-nav__link',
    depth > 0 ? 'nxp-nav__link--child' : '',
    isActiveItem || isParentOfActive ? 'nxp-nav__link--active' : '',
    item.disabled ? 'nxp-nav__link--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const ariaProps = {
    'aria-current': isActiveItem ? 'page' : undefined,
    'aria-expanded': hasChildren ? isOpen : undefined,
  };

  let linkNode;

  if (hasChildren) {
    linkNode = (
      <span
        className={linkClass}
        role="button"
        tabIndex={item.disabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-disabled={item.disabled || undefined}
        {...ariaProps}
      >
        <NavLinkContent item={item} hasChildren={hasChildren} isOpen={isOpen} />
      </span>
    );
  } else if (item.to && LinkComponent) {
    linkNode = (
      <LinkComponent
        to={item.to}
        className={linkClass}
        onClick={handleLeafAction}
        {...ariaProps}
      >
        <NavLinkContent item={item} hasChildren={false} isOpen={false} />
      </LinkComponent>
    );
  } else if (item.href) {
    linkNode = (
      <a
        href={item.href}
        target={item.target || undefined}
        rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
        className={linkClass}
        onClick={handleLeafAction}
        {...ariaProps}
      >
        <NavLinkContent item={item} hasChildren={false} isOpen={false} />
      </a>
    );
  } else {
    linkNode = (
      <span
        className={linkClass}
        role="button"
        tabIndex={item.disabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-disabled={item.disabled || undefined}
        {...ariaProps}
      >
        <NavLinkContent item={item} hasChildren={false} isOpen={false} />
      </span>
    );
  }

  return (
    <div
      className={`nxp-nav__item-wrap${depth > 0 ? ' nxp-nav__item-wrap--child' : ''}`}
    >
      {linkNode}

      {hasChildren && (
        <div
          className={`nxp-nav__children${isOpen ? ' nxp-nav__children--open' : ''}`}
          role="list"
          aria-label={`${item.label} submenu`}
        >
          <div className="nxp-nav__children-inner">
            {item.children.map((child) => (
              <div key={child.key} className="nxp-nav__child-wrap" role="listitem">
                <NavItem
                  item={child}
                  activeKey={activeKey}
                  onChange={onChange}
                  depth={depth + 1}
                  openGroups={openGroups}
                  toggleGroup={toggleGroup}
                  linkComponent={LinkComponent}
                  isActive={isActive}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  VerticalNavigationMenu — main export                          */
/* ────────────────────────────────────────────────────────────── */
function VerticalNavigationMenu({
  menuItems = [],
  activeKey,
  defaultActiveKey,
  onChange,
  openGroups: controlledOpenGroups,
  defaultOpenGroups = [],
  onOpenGroupsChange,
  logo,
  headerBadge,
  footer,
  linkComponent,
  isActive,
  mobileOpen: controlledMobileOpen,
  onMobileOpenChange,
  theme = 'light',
  className = '',
}) {
  const [internalOpenGroups, setInternalOpenGroups] = useState(
    () => new Set(defaultOpenGroups)
  );
  const [internalMobileOpen, setInternalMobileOpen] = useState(false);

  const openGroups = controlledOpenGroups ?? internalOpenGroups;
  const mobileOpen = controlledMobileOpen ?? internalMobileOpen;

  const setOpenGroups = useCallback(
    (updater) => {
      const next = typeof updater === 'function' ? updater(openGroups) : updater;
      if (onOpenGroupsChange) onOpenGroupsChange(next);
      else setInternalOpenGroups(next);
    },
    [openGroups, onOpenGroupsChange]
  );

  const setMobileOpen = useCallback(
    (value) => {
      const next = typeof value === 'function' ? value(mobileOpen) : value;
      if (onMobileOpenChange) onMobileOpenChange(next);
      else setInternalMobileOpen(next);
    },
    [mobileOpen, onMobileOpenChange]
  );

  const resolvedActiveKey = activeKey ?? defaultActiveKey;
  const visibleItems = filterVisibleMenuItems(menuItems);

  useEffect(() => {
    if (!resolvedActiveKey) return;
    setOpenGroups((prev) => {
      const next = new Set(prev);
      visibleItems.forEach((item) => {
        if (item.defaultOpen) next.add(item.key);
        if (
          Array.isArray(item.children) &&
          item.children.some((c) =>
            hasActiveDescendant(c, resolvedActiveKey, isActive)
          )
        ) {
          next.add(item.key);
        }
      });
      return next;
    });
  }, [resolvedActiveKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleGroup = useCallback(
    (key) => {
      setOpenGroups((prev) => {
        const next = new Set(prev);
        if (next.has(key)) next.delete(key);
        else next.add(key);
        return next;
      });
    },
    [setOpenGroups]
  );

  const navClass = [
    'nxp-nav',
    theme === 'dark' ? 'nxp-nav--dark' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const showLogoStrip = logo || headerBadge;

  return (
    <nav className={navClass} aria-label="Sidebar navigation">
      {showLogoStrip && (
        <div className="nxp-nav__logo-strip">
          {logo && <div className="nxp-nav__logo-wrap">{logo}</div>}
          <div className="nxp-nav__mobile-menu">
            {headerBadge && (
              <div className="nxp-nav__header-badge">{headerBadge}</div>
            )}
            <button
              type="button"
              className="nxp-nav__mobile-toggle"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="nxp-nav-cover"
              onClick={() => setMobileOpen((p) => !p)}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      )}

      <div
        id="nxp-nav-cover"
        className={`nxp-nav__cover${mobileOpen ? ' nxp-nav__cover--open' : ''}`}
      >
        <div className="nxp-nav__inner">
          {visibleItems.map((item) => {
            if (item.type === 'divider') {
              return (
                <div key={item.key} className="nxp-nav__divider" role="separator" />
              );
            }
            if (item.type === 'section') {
              return (
                <div key={item.key} className="nxp-nav__section-label" aria-hidden="true">
                  {item.label}
                </div>
              );
            }
            return (
              <div key={item.key}>
                <NavItem
                  item={item}
                  activeKey={resolvedActiveKey}
                  onChange={onChange}
                  depth={0}
                  openGroups={openGroups}
                  toggleGroup={toggleGroup}
                  linkComponent={linkComponent}
                  isActive={isActive}
                />
              </div>
            );
          })}
        </div>

        {footer && <div className="nxp-nav__footer">{footer}</div>}
      </div>
    </nav>
  );
}

export { VerticalNavigationMenu, filterVisibleMenuItems };
export default VerticalNavigationMenu;
