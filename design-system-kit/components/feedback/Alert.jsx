import React from 'react';

export function Alert({ tone = 'info', title, children, className = '', ...rest }) {
  return (
    <div className={['cc-alert', `cc-alert--${tone}`, className].filter(Boolean).join(' ')} {...rest}>
      <div>{title && <strong>{title}</strong>}{children}</div>
    </div>
  );
}
