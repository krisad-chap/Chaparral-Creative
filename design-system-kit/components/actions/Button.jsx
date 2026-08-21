import React from 'react';

export function Button({ variant = 'primary', size = 'md', block = false, disabled = false, href, icon, children, className = '', ...rest }) {
  const cls = ['cc-btn', `cc-btn--${variant}`, size !== 'md' && `cc-btn--${size}`, block && 'cc-btn--block', className].filter(Boolean).join(' ');
  const content = <>{icon}{children}</>;
  if (href && !disabled) return <a className={cls} href={href} {...rest}>{content}</a>;
  return <button className={cls} type="button" disabled={disabled} {...rest}>{content}</button>;
}
