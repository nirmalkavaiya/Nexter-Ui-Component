import React from 'react';

/**
 * EmptyState
 *
 * Props
 * ─────
 * icon        ReactNode        — illustration / emoji / SVG
 * title       string           — heading text
 * description string           — body text  (alias: desc)
 * desc        string           — alias for description
 * action      ReactNode        — rendered as-is  (e.g. <Button>)
 *           | { label, onClick } — rendered as a primary button
 * className   string
 */
function EmptyState({ icon, title, description, desc, action, className = '' }) {
  const bodyText = description || desc;

  /* action: ReactNode → render directly; object {label,onClick} → button */
  let actionNode = null;
  if (action) {
    if (React.isValidElement(action)) {
      actionNode = action;
    } else if (action && typeof action === 'object' && action.label) {
      actionNode = (
        <button
          type="button"
          className="nxp-btn nxp-btn--primary nxp-btn--sm"
          onClick={action.onClick}
        >
          {action.label}
        </button>
      );
    }
  }

  return (
    <div className={`nxp-empty ${className}`} role="status">
      {icon  && <div className="nxp-empty__icon"  aria-hidden="true">{icon}</div>}
      {title && <div className="nxp-empty__title">{title}</div>}
      {bodyText && <p className="nxp-empty__desc">{bodyText}</p>}
      {actionNode && <div className="nxp-empty__action">{actionNode}</div>}
    </div>
  );
}

export { EmptyState };
export default EmptyState;
