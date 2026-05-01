import React from 'react';

function IconBox({ topline, icon, title, description, cta, href, step, className = '' }) {
  return (
    <div className={`nxp-iconbox ${className}`}>
      {topline && <div className="nxp-iconbox__topline">{topline}</div>}
      {step !== undefined && (
        <div className="nxp-iconbox__step">{step}</div>
      )}
      {icon && !step && (
        <div className="nxp-iconbox__icon" aria-hidden="true">{icon}</div>
      )}
      {title && <div className="nxp-iconbox__title">{title}</div>}
      {description && <p className="nxp-iconbox__desc">{description}</p>}
      {cta && (
        <a className="nxp-iconbox__cta" href={href || '#'} onClick={!href ? (e) => e.preventDefault() : undefined}>
          {cta} →
        </a>
      )}
    </div>
  );
}

export { IconBox };
export default IconBox;
