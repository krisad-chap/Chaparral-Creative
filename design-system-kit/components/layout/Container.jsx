import React from 'react';

export function Container({ width, children, className = '', style, ...rest }) {
  return <div className={['cc-container', className].filter(Boolean).join(' ')} style={{ ...(width ? { maxWidth: width } : null), ...style }} {...rest}>{children}</div>;
}
