import React from 'react';

export function TextLink({ href = '#', children, className = '', ...rest }) {
  return <a className={['cc-link', className].filter(Boolean).join(' ')} href={href} {...rest}>{children}</a>;
}
