import React from 'react';

const TAGS = { display: 'h1', title: 'h1', subtitle: 'h2', subheading: 'h3', body: 'p', 'body-lg': 'p', 'body-sm': 'p', caption: 'p' };

export function Text({ variant = 'body', as, children, className = '', ...rest }) {
  const Tag = as || TAGS[variant] || 'p';
  return <Tag className={[`cc-${variant}`, className].filter(Boolean).join(' ')} {...rest}>{children}</Tag>;
}
