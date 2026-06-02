import React, { memo } from 'react';

/**
 * Label
 *
 * Standalone accessible form label — use when you need a label
 * outside of the <Field> wrapper (e.g. for a custom control or
 * a group of checkboxes).
 *
 * Props
 * ─────
 * htmlFor    string       id of the associated control
 * required   boolean      appends a red asterisk (aria-hidden)
 * disabled   boolean      dims the label
 * children   ReactNode
 * className  string
 *
 * @example
 * <Label htmlFor="my-input" required>Email address</Label>
 * <Input id="my-input" type="email" />
 */
function Label({
  htmlFor,
  required = false,
  disabled = false,
  children,
  className = '',
}) {
  const cls = [
    'nxp-label',
    disabled ? 'nxp-label--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <label htmlFor={htmlFor} className={cls}>
      {children}
      {required && (
        <span className="nxp-label__required" aria-hidden="true"> *</span>
      )}
    </label>
  );
}

const LabelMemoized = memo(Label);
export { LabelMemoized as Label };
export default LabelMemoized;
