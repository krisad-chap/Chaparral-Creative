import React from 'react';

export function Checkbox({ label, className = '', ...rest }) {
  return (
    <label className={['cc-check', className].filter(Boolean).join(' ')}>
      <input type="checkbox" {...rest} />
      <span>{label}</span>
    </label>
  );
}
