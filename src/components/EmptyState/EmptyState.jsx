import React from 'react';
import { cn } from '../../lib/utils';

/**
 * EmptyState
 *
 * Props
 * ─────
 * icon                 ReactNode        — illustration / emoji / SVG
 * title                string           — heading text
 * description          string           — body text  (alias: desc)
 * desc                 string           — alias for description
 * action               ReactNode        — rendered as-is  (e.g. <Button>)
 *                    | { label, onClick } — rendered as a primary button
 * className            string           — root wrapper
 * iconClassName        string           — icon slot
 * titleClassName       string           — title slot
 * descriptionClassName string           — body text slot (alias: descClassName)
 * descClassName        string           — alias for descriptionClassName
 * actionClassName      string           — action slot
 */
function EmptyState({
  icon,
  title,
  description,
  desc,
  action,
  className,
  iconClassName,
  titleClassName,
  descriptionClassName,
  descClassName,
  actionClassName,
}) {
  const bodyText = description || desc;
  const bodyClassName = descriptionClassName || descClassName;

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
    <div className={cn('nxp-empty', className)} role="status">
      {icon && (
        <div className={cn('nxp-empty__icon', iconClassName)} aria-hidden="true">
          {icon}
        </div>
      )}
      {title && <div className={cn('nxp-empty__title', titleClassName)}>{title}</div>}
      {bodyText && <p className={cn('nxp-empty__desc', bodyClassName)}>{bodyText}</p>}
      {actionNode && <div className={cn('nxp-empty__action', actionClassName)}>{actionNode}</div>}
    </div>
  );
}

export { EmptyState };
export default EmptyState;
