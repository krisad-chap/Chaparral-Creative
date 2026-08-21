import React from 'react';

export function Select({ options = [], invalid = false, className = '', children, ...rest }) {
  return (
    <select className={['cc-select', invalid && 'cc-input--error', className].filter(Boolean).join(' ')} {...rest}>
      {children || options.map((o) => (typeof o === 'string' ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>))}
    </select>
  );
}
