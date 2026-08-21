import React from 'react';

export function Badge({ tone = 'neutral', children, className = '', ...rest }) {
  return <span className={['cc-badge', `cc-badge--${tone}`, className].filter(Boolean).join(' ')} {...rest}>{children}</span>;
}
