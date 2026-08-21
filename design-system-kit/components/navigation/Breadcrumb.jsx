import React from 'react';

export function Breadcrumb({ items = [], className = '', ...rest }) {
  return (
    <nav className={['cc-breadcrumb', className].filter(Boolean).join(' ')} aria-label="Breadcrumb" {...rest}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {i === items.length - 1 ? <span aria-current="page">{it.label}</span> : <a href={it.href}>{it.label}</a>}
        </React.Fragment>
      ))}
    </nav>
  );
}
