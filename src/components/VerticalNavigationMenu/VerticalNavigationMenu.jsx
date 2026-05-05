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
import React, { useState, useEffect, useCallback, useRef } from 'react';
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
/*  Helper — check if item or any of its children is the active key */
/* ────────────────────────────────────────────────────────────── */
function hasActiveDescendant(item, activeKey) {
  if (item.key === activeKey) return true;
  if (Array.isArray(item.children)) {
    return item.children.some((c) => hasActiveDescendant(c, activeKey));
  }
  return false;
}

/* ────────────────────────────────────────────────────────────── */
/*  NavItem — single nav entry (recursive for children)          */
/*  Mirrors a single <div> + nxtext_navlink block in navbox.jsx  */
/* ────────────────────────────────────────────────────────────── */
function NavItem({ item, activeKey, onChange, depth, openGroups, toggleGroup }) {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const isActive    = activeKey === item.key;
  const isOpen      = openGroups.has(item.key);
  const isParentOfActive = hasChildren && hasActiveDescendant(item, activeKey);

  /* nxtext_navlink click handler */
  const handleClick = useCallback(
    (e) => {
      if (item.disabled) return;
      if (hasChildren) {
        /* mirrors toggleExtensionsOpen / toggleExtraOptions */
        toggleGroup(item.key);
      } else {
        if (typeof item.onClick === 'function') {
          item.onClick(e);
        } else if (typeof onChange === 'function') {
          onChange(item.key);
        }
      }
    },
    [hasChildren, item, onChange, toggleGroup]
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

  /* Class string — mirrors nxtext_navlink + nxtext_active_tab */
  const linkClass = [
    'nxp-nav__link',
    depth > 0                        ? 'nxp-nav__link--child'  : '',
    (isActive || isParentOfActive)   ? 'nxp-nav__link--active' : '',
    item.disabled                    ? 'nxp-nav__link--disabled' : '',
  ].filter(Boolean).join(' ');

  /* Render as <a> when href provided, else <span> (navbox.jsx pattern) */
  const Tag = item.href ? 'a' : 'span';
  const anchorProps = item.href
    ? {
        href:   item.href,
        target: item.target  || undefined,
        rel:    item.target === '_blank' ? 'noopener noreferrer' : undefined,
      }
    : {
        role:        'button',
        tabIndex:    item.disabled ? -1 : 0,
        onKeyDown:   handleKeyDown,
        'aria-disabled': item.disabled || undefined,
      };

  return (
    /* nxtext_navlink parent <div> */
    <div className={`nxp-nav__item-wrap${depth > 0 ? ' nxp-nav__item-wrap--child' : ''}`}>
      {/* nxtext_navlink */}
      <Tag
        className={linkClass}
        onClick={handleClick}
        aria-current={isActive ? 'page' : undefined}
        aria-expanded={hasChildren ? isOpen : undefined}
        aria-haspopup={hasChildren ? 'true' : undefined}
        {...anchorProps}
      >
        {/* Optional icon slot */}
        {item.icon && (
          <span className="nxp-nav__icon" aria-hidden="true">
            {item.icon}
          </span>
        )}

        {/* Label text */}
        <span className="nxp-nav__label">{item.label}</span>

        {/* Optional badge (e.g. "Pro", count) */}
        {item.badge && (
          <span className="nxp-nav__badge">{item.badge}</span>
        )}

        {/* Chevron — mirrors nxtext_navlink_icon + nxtext-icon-down */}
        {hasChildren && (
          <span
            className={`nxp-nav__toggle-icon${isOpen ? ' nxp-nav__toggle-icon--open' : ''}`}
            aria-hidden="true"
          >
            <ChevronIcon />
          </span>
        )}
      </Tag>

      {/* Children — mirrors nxtext_extra_options_inner_tabs */}
      {hasChildren && (
        <div
          className={`nxp-nav__children${isOpen ? ' nxp-nav__children--open' : ''}`}
          role="list"
          aria-label={`${item.label} submenu`}
        >
          {/* Grid-row collapse wrapper — needs inner div for 0fr trick */}
          <div className="nxp-nav__children-inner">
            {item.children.map((child) => (
              /* nxtext_nav_dropdown_links */
              <div key={child.key} className="nxp-nav__child-wrap" role="listitem">
                <NavItem
                  item={child}
                  activeKey={activeKey}
                  onChange={onChange}
                  depth={depth + 1}
                  openGroups={openGroups}
                  toggleGroup={toggleGroup}
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
/**
 * @param {object[]}        menuItems   - Navigation tree
 * @param {string}          activeKey   - Currently active item key
 * @param {function}        onChange    - Called with key when a leaf is clicked
 * @param {ReactNode}       logo        - Logo slot (mirrors nxtext_logo_strip content)
 * @param {ReactNode}       footer      - Footer slot (mirrors nxtext_version_and_system_info)
 * @param {'light'|'dark'}  theme       - Color scheme (default 'light')
 * @param {string}          className   - Extra class on root .nxp-nav
 *
 * menuItem shape:
 * {
 *   key:       string           — unique identifier
 *   label:     string|ReactNode — display text
 *   icon?:     ReactNode        — optional leading icon
 *   badge?:    string|number    — optional badge text
 *   href?:     string           — renders <a> instead of <span>
 *   target?:   string           — link target (e.g. '_blank')
 *   onClick?:  function         — custom click handler for leaf items
 *   disabled?: boolean
 *   children?: menuItem[]       — nested items (multi-level supported)
 *   type?:     'divider'|'section' — special separator/header rows
 * }
 */
function VerticalNavigationMenu({
  menuItems  = [],
  activeKey,
  onChange,
  logo,
  footer,
  theme      = 'light',
  className  = '',
}) {
  /* Which groups are expanded — mirrors extensionsOpen / extraOptionsOpen */
  const [openGroups, setOpenGroups] = useState(new Set());
  /* Mobile drawer toggle — mirrors menuToggle */
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Auto-open groups that contain the active item
     Mirrors the useEffect that calls setExtensionsOpen / setExtraOptionsOpen */
  useEffect(() => {
    if (!activeKey) return;
    setOpenGroups((prev) => {
      const next = new Set(prev);
      menuItems.forEach((item) => {
        if (
          Array.isArray(item.children) &&
          item.children.some((c) => hasActiveDescendant(c, activeKey))
        ) {
          next.add(item.key);
        }
      });
      return next;
    });
  }, [activeKey]); // eslint-disable-line react-hooks/exhaustive-deps

  /* mirrors toggleExtensionsOpen */
  const toggleGroup = useCallback((key) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const navClass = [
    'nxp-nav',
    theme === 'dark' ? 'nxp-nav--dark' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    /* nxtext_navigation_cover */
    <nav className={navClass} aria-label="Sidebar navigation">

      {/* nxtext_logo_strip */}
      {logo && (
        <div className="nxp-nav__logo-strip">
          <div className="nxp-nav__logo-wrap">{logo}</div>
          {/* nxtext-mobile-menu */}
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
      )}

      {/* nxtext_navlinks_cover + tpae_open_menu */}
      <div
        id="nxp-nav-cover"
        className={`nxp-nav__cover${mobileOpen ? ' nxp-nav__cover--open' : ''}`}
      >
        {/* nxtext_navlinks_inner_cover */}
        <div className="nxp-nav__inner" role="list">
          {menuItems.map((item) => {
            /* Special row types */
            if (item.type === 'divider') {
              return <div key={item.key} className="nxp-nav__divider" role="separator" />;
            }
            if (item.type === 'section') {
              return (
                <div key={item.key} className="nxp-nav__section-label" aria-hidden="true">
                  {item.label}
                </div>
              );
            }
            return (
              <div key={item.key} role="listitem">
                <NavItem
                  item={item}
                  activeKey={activeKey}
                  onChange={onChange}
                  depth={0}
                  openGroups={openGroups}
                  toggleGroup={toggleGroup}
                />
              </div>
            );
          })}
        </div>

        {/* nxtext_version_and_system_info */}
        {footer && <div className="nxp-nav__footer">{footer}</div>}
      </div>
    </nav>
  );
}

export { VerticalNavigationMenu };
export default VerticalNavigationMenu;
