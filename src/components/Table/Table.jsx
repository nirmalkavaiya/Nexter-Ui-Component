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
    <table className={`nxp-table${striped ? ' nxp-table--striped' : ''} ${className}`}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={`nxp-title-label${col.numeric ? ' nxp-table__num' : ''}${thClassName ? ' ' + thClassName : ''}`}
                aria-sort={col.sortDir === 'asc' ? 'ascending' : col.sortDir === 'desc' ? 'descending' : col.sortDir === 'none' ? 'none' : undefined}
              >
                {col.label}
              </th>
            ))}
            {actions && (
              <th scope="col" className={`nxp-title-label nxp-text-right${thClassName ? ' ' + thClassName : ''}`}>
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
  );
}

export { Table };
export default Table;
