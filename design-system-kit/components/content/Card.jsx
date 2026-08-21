import React from 'react';

export function Card({ title, text, media = false, footer, raised = false, interactive = false, children, className = '', ...rest }) {
  const cls = ['cc-card', raised && 'cc-card--raised', interactive && 'cc-card--interactive', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {media && <div className="cc-card__media">{media !== true ? media : null}</div>}
      <div className="cc-card__body">
        {title && <h3 className="cc-card__title">{title}</h3>}
        {text && <p className="cc-card__text">{text}</p>}
        {children}
      </div>
      {footer && <div className="cc-card__foot">{footer}</div>}
    </div>
  );
}
