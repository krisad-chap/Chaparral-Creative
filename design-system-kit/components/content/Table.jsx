import React from 'react';

export function Table({ columns = [], rows = [], className = '', ...rest }) {
  return (
    <table className={['cc-table', className].filter(Boolean).join(' ')} {...rest}>
      <thead><tr>{columns.map((c, i) => <th key={i}>{c}</th>)}</tr></thead>
      <tbody>{rows.map((r, i) => <tr key={i}>{r.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
    </table>
  );
}
