import React from 'react';

export function Hero({ eyebrow, title, children, actions, className = '', ...rest }) {
  return (
    <header className={['cc-hero', className].filter(Boolean).join(' ')} {...rest}>
      <div className="cc-hero__inner">
        {eyebrow && <div className="cc-eyebrow">{eyebrow}</div>}
        {title && <h1>{title}</h1>}
        {children && <p>{children}</p>}
        {actions && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--cc-space-4)' }}>{actions}</div>}
      </div>
    </header>
  );
}
