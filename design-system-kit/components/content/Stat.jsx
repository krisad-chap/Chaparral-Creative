import React from 'react';

export function Stat({ value, label, className = '', ...rest }) {
  return (
    <div className={['cc-stat', className].filter(Boolean).join(' ')} {...rest}>
      <span className="cc-stat__value">{value}</span>
      <span className="cc-stat__label">{label}</span>
    </div>
  );
}
