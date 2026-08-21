import React from 'react';

export function Eyebrow({ children, className = '', ...rest }) {
  return <div className={['cc-eyebrow', className].filter(Boolean).join(' ')} {...rest}>{children}</div>;
}
