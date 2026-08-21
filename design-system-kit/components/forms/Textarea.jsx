import React from 'react';

export function Textarea({ invalid = false, className = '', ...rest }) {
  return <textarea className={['cc-textarea', invalid && 'cc-input--error', className].filter(Boolean).join(' ')} {...rest} />;
}
