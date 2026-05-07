import React from 'react';

/**
 * Sheet — card-style panel with optional header, body, footer.
 *
 * Two usage patterns:
 *
 * 1) Prop-based (simple):
 *    <Sheet title="Title" byline="Subtitle" footer={<Button>Save</Button>}>
 *      content
 *    </Sheet>
 *
 * 2) Compound (explicit slots):
 *    <Sheet>
 *      <Sheet.Head>
 *        <Sheet.Title>Title</Sheet.Title>
 *        <Sheet.Byline>Subtitle</Sheet.Byline>
 *      </Sheet.Head>
 *      <Sheet.Body>content</Sheet.Body>
 *      <Sheet.Foot><Button>Save</Button></Sheet.Foot>
 *    </Sheet>
 */
function Sheet({ title, byline, children, footer, className = '' }) {
  return (
    <div className={`nxp-sheet ${className}`}>
      {(title || byline) && (
        <div className="nxp-sheet__head">
          {title  && <div className="nxp-sheet__title">{title}</div>}
          {byline && <div className="nxp-sheet__byline">{byline}</div>}
        </div>
      )}
      <div className="nxp-sheet__body">{children}</div>
      {footer && <div className="nxp-sheet__foot">{footer}</div>}
    </div>
  );
}

/* ── Compound subcomponents ── */
Sheet.Head   = function SheetHead({ children, className = '' }) {
  return <div className={`nxp-sheet__head ${className}`}>{children}</div>;
};
Sheet.Title  = function SheetTitle({ children, className = '' }) {
  return <div className={`nxp-sheet__title ${className}`}>{children}</div>;
};
Sheet.Byline = function SheetByline({ children, className = '' }) {
  return <div className={`nxp-sheet__byline ${className}`}>{children}</div>;
};
Sheet.Body   = function SheetBody({ children, className = '' }) {
  return <div className={`nxp-sheet__body ${className}`}>{children}</div>;
};
Sheet.Foot   = function SheetFoot({ children, className = '' }) {
  return <div className={`nxp-sheet__foot ${className}`}>{children}</div>;
};

export { Sheet };
export default Sheet;
