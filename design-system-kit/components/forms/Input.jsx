import React from 'react';

export function Input({ invalid = false, className = '', ...rest }) {
  return <input className={['cc-input', invalid && 'cc-input--error', className].filter(Boolean).join(' ')} {...rest} />;
}
