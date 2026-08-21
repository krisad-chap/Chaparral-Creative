import React from 'react';

export function Nav({ brand, links = [], actions, inverse = false, className = '', ...rest }) {
  return (
    <nav className={['cc-nav', inverse && 'cc-nav--inverse', className].filter(Boolean).join(' ')} {...rest}>
      <a className="cc-nav__brand" href={typeof brand === 'object' && brand && brand.href ? brand.href : '/'} style={{textDecoration:'none'}}>{brand && brand.label ? brand.label : brand}</a>
      <ul className="cc-nav__links">
        {links.map((l) => (
          <li key={l.label}><a className={['cc-nav__link', l.active && 'cc-nav__link--active'].filter(Boolean).join(' ')} href={l.href} onClick={l.onClick} style={{textDecoration:'none'}}>{l.label}</a></li>
        ))}
        {actions && <li>{actions}</li>}
      </ul>
    </nav>
  );
}
