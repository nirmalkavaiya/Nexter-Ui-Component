import React, { memo } from 'react';

/**
 * Separator
 *
 * Props
 * ─────
 * orientation  'horizontal' | 'vertical'   default: 'horizontal'
 * label        ReactNode                    optional centered label (horizontal only)
 * decorative   boolean                      if true, aria-hidden (default: true)
 * className    string
 */
function Separator({
  orientation = 'horizontal',
  label,
  decorative = true,
  className = '',
}) {
  if (label && orientation === 'horizontal') {
    return (
      <div
        className={`nxp-sep nxp-sep--label ${className}`}
        role={decorative ? 'none' : 'separator'}
        aria-orientation={!decorative ? orientation : undefined}
      >
        {label}
      </div>
    );
  }

  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation={!decorative ? orientation : undefined}
      className={`nxp-sep nxp-sep--${orientation} ${className}`}
    />
  );
}

const SeparatorMemoized = memo(Separator);
export { SeparatorMemoized as Separator };
export default SeparatorMemoized;
