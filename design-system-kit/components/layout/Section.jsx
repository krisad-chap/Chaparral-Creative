import React from 'react';

export function Section({ tone = 'default', children, className = '', ...rest }) {
  const cls = ['cc-section', tone === 'subtle' && 'cc-section--subtle', tone === 'inverse' && 'cc-section--inverse', className].filter(Boolean).join(' ');
  return <section className={cls} {...rest}>{children}</section>;
}
