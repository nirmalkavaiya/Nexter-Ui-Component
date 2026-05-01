import React, { useState, useCallback } from 'react';

const DragHandleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="4.5" cy="3.5" r="1" fill="currentColor" />
    <circle cx="4.5" cy="7"   r="1" fill="currentColor" />
    <circle cx="4.5" cy="10.5" r="1" fill="currentColor" />
    <circle cx="9.5" cy="3.5" r="1" fill="currentColor" />
    <circle cx="9.5" cy="7"   r="1" fill="currentColor" />
    <circle cx="9.5" cy="10.5" r="1" fill="currentColor" />
  </svg>
);

/**
 * items     — array of objects; each must have a unique `id` field
 * onChange  — (reorderedItems) => void
 * renderItem — (item, index) => ReactNode; defaults to item.label ?? item.id
 */
function SortableList({
  items       = [],
  onChange,
  renderItem,
  disabled    = false,
  className   = '',

  /* translatable */
  dragHandleLabel = 'Drag to reorder',
}) {
  const [dragIdx, setDragIdx] = useState(null);
  const [overIdx, setOverIdx] = useState(null);

  const onDragStart = useCallback((i, e) => {
    setDragIdx(i);
    e.dataTransfer.effectAllowed = 'move';
    /* makes Firefox happy */
    e.dataTransfer.setData('text/plain', String(i));
  }, []);

  const onDragOver = useCallback((i, e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (i !== overIdx) setOverIdx(i);
  }, [overIdx]);

  const onDrop = useCallback((i) => {
    if (dragIdx === null || dragIdx === i) {
      setDragIdx(null);
      setOverIdx(null);
      return;
    }
    const next = [...items];
    const [moved] = next.splice(dragIdx, 1);
    next.splice(i, 0, moved);
    onChange?.(next);
    setDragIdx(null);
    setOverIdx(null);
  }, [dragIdx, items, onChange]);

  const onDragEnd = useCallback(() => {
    setDragIdx(null);
    setOverIdx(null);
  }, []);

  const rootClass = ['nxp-sortable', disabled ? 'nxp-sortable--disabled' : '', className]
    .filter(Boolean).join(' ');

  return (
    <div className={rootClass} role="list">
      {items.map((item, i) => {
        const isDragging = dragIdx === i;
        const isOver     = overIdx === i && dragIdx !== null && dragIdx !== i;
        const overTop    = isOver && dragIdx > i;
        const overBottom = isOver && dragIdx < i;

        return (
          <div
            key={item.id ?? i}
            role="listitem"
            className={[
              'nxp-sortable__item',
              isDragging  ? 'nxp-sortable__item--dragging'     : '',
              overTop     ? 'nxp-sortable__item--over-top'     : '',
              overBottom  ? 'nxp-sortable__item--over-bottom'  : '',
            ].filter(Boolean).join(' ')}
            draggable={!disabled}
            onDragStart={(e) => onDragStart(i, e)}
            onDragOver={(e)  => onDragOver(i, e)}
            onDrop={() => onDrop(i)}
            onDragEnd={onDragEnd}
            aria-roledescription="sortable item"
          >
            {!disabled && (
              <span
                className="nxp-sortable__handle"
                aria-label={dragHandleLabel}
                title={dragHandleLabel}
              >
                <DragHandleIcon />
              </span>
            )}
            <div className="nxp-sortable__content">
              {renderItem
                ? renderItem(item, i)
                : <span className="nxp-sortable__label">{item.label ?? item.id}</span>
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { SortableList };
export default SortableList;
