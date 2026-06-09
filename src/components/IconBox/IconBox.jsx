import React from 'react';
import Button from '../Button';
import { cn } from '../../lib/utils';

/**
 * IconBox
 *
 * Feature card with optional icon/step, title, description, and CTA.
 * CTA renders via Button — pass href for links or onClick for actions.
 *
 * Props:
 *   topline, icon, title, description, step, className, style
 *   cta            {ReactNode}  — CTA label/content
 *   href           {string}     — renders Button as anchor
 *   onClick        {function}   — button click handler (when no href)
 *   variant        {string}     — Button variant (default 'link')
 *   size           {string}     — Button size ('sm' | 'md' | 'lg')
 *   target, rel, download, as, disabled, loading, type
 *   showArrow      {boolean}    — append → after cta (default true)
 *   ctaClassName   {string}     — extra classes on the CTA Button
 */
function IconBox({
  topline,
  icon,
  title,
  description,
  cta,
  href,
  onClick,
  step,
  className = '',
  style,
  variant = 'link',
  size,
  target,
  rel,
  download,
  as,
  disabled = false,
  loading = false,
  type = 'button',
  showArrow = false,
  ctaClassName = '',
}) {
  return (
    <div className={cn('nxp-iconbox', className)} style={style}>
      {topline && <div className="nxp-iconbox__topline">{topline}</div>}
      {step !== undefined && (
        <div className="nxp-iconbox__step">{step}</div>
      )}
      {icon && step === undefined && (
        <div className="nxp-iconbox__icon" aria-hidden="true">{icon}</div>
      )}
      {title && <div className="nxp-iconbox__title">{title}</div>}
      {description && <p className="nxp-iconbox__desc">{description}</p>}
      {cta && (
        <Button
          className={cn('nxp-iconbox__cta', ctaClassName)}
          variant={variant}
          size={size}
          href={href}
          target={target}
          rel={rel}
          download={download}
          as={as}
          type={type}
          onClick={onClick}
          disabled={disabled}
          loading={loading}
        >
          {cta}{showArrow ? ' →' : ''}
        </Button>
      )}
    </div>
  );
}

export { IconBox };
export default IconBox;
