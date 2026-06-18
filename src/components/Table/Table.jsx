import React from 'react';

function Table({
  columns = [],
  rows = [],
  striped = false,
  actions,
  actionsLabel = 'Actions',
  thClassName = '',
  className = '',
}) {
  return (
    <div className="nxp-overflow-x-auto">
      <table className={`nxp-table${striped ? ' nxp-table--striped' : ''} ${className}`}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`nxp-title-label${col.numeric ? ' nxp-table__num' : ''}${thClassName ? ' ' + thClassName : ''}`}
              >
                {col.label}
              </th>
            ))}
            {actions && (
              <th className={`nxp-title-label nxp-text-right${thClassName ? ' ' + thClassName : ''}`}>
                {actionsLabel}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {columns.map((col) => (
                <td key={col.key} className={col.numeric ? 'nxp-table__num' : ''}>
                  {row[col.key]}
                </td>
              ))}
              {actions && (
                <td>
                  <div className="nxp-table__actions">{actions(row)}</div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Table };
export default Table;
