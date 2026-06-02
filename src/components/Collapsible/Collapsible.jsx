import React, { useState, useCallback, useId } from 'react';
import { ChevronDownIcon } from '../../lib/icons';

const ChevronIcon = () => <ChevronDownIcon className="nxp-collapsible__chevron-svg" />;

/**
 * Collapsible
 *
 * A single generic collapse panel — like one Accordion item but
 * standalone, with full control over the trigger slot.
 *
 * Props
 * ─────
 * open            boolean             Controlled open state
 * defaultOpen     boolean             Uncontrolled initial state (default: false)
 * onOpenChange    (open) => void      Called when open state changes
 * trigger         ReactNode | string  Trigger content (default: show/hide text)
 * showChevron     boolean             Show animated chevron (default: true)
 * disabled        boolean
 * children        ReactNode           Collapsible body content
 * className       string
 */
function Collapsible({
  open,
  defaultOpen = false,
  onOpenChange,
  trigger,
  showChevron = true,
  disabled = false,
  children,
  className = '',
}) {
  const isControlled = open !== undefined;
  const [internal, setInternal] = useState(defaultOpen);
  const isOpen = isControlled ? open : internal;
  const panelId = useId();

  const toggle = useCallback(() => {
    if (disabled) return;
    const next = !isOpen;
    if (!isControlled) setInternal(next);
    onOpenChange && onOpenChange(next);
  }, [disabled, isOpen, isControlled, onOpenChange]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    },
    [toggle]
  );

  const rootClass = [
    'nxp-collapsible',
    isOpen    ? 'nxp-collapsible--open'     : '',
    disabled  ? 'nxp-collapsible--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={rootClass}>
      {/* ── Trigger ── */}
      <button
        type="button"
        className="nxp-collapsible__trigger"
        onClick={toggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={panelId}
        disabled={disabled}
      >
        <span className="nxp-collapsible__trigger-content">
          {trigger ?? (isOpen ? 'Hide' : 'Show')}
        </span>
        {showChevron && (
          <span className={`nxp-collapsible__chevron${isOpen ? ' nxp-collapsible__chevron--open' : ''}`}>
            <ChevronIcon />
          </span>
        )}
      </button>

      {/* ── Content panel ── */}
      <div
        id={panelId}
        className="nxp-collapsible__content"
        aria-hidden={!isOpen}
        role="region"
      >
        <div className="nxp-collapsible__inner">
          {children}
        </div>
      </div>
    </div>
  );
}

export { Collapsible };
export default Collapsible;
