import React, { memo, useMemo } from 'react';
import { cn } from '../../lib/utils';

function Dialog({
  open = true,
  onClose,
  icon,
  iconVariant = 'warning',
  title,
  description,
  actions,
  className = '',
}) {
  const rootClass = useMemo(() => cn('nxp-dialog', className), [className]);

  if (!open) return null;

  return (
    <div
      className={rootClass}
      role="alertdialog"
      aria-modal="true"
      aria-label={title}
    >
      {icon && (
        <div className={`nxp-dialog__icon nxp-dialog__icon--${iconVariant}`} aria-hidden="true">
          {icon}
        </div>
      )}
      {title && <div className="nxp-dialog__title">{title}</div>}
      {description && <p className="nxp-dialog__desc">{description}</p>}
      {actions && <div className="nxp-dialog__actions">{actions}</div>}
    </div>
  );
}

const DialogMemoized = memo(Dialog);
export { DialogMemoized as Dialog };
export default DialogMemoized;
