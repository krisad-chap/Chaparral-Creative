import React from 'react';

export function Field({ label, htmlFor, required = false, hint, error, children, className = '', ...rest }) {
  return (
    <div className={['cc-field', className].filter(Boolean).join(' ')} {...rest}>
      {label && <label className="cc-field__label" htmlFor={htmlFor}>{label}{required && <span className="req">*</span>}</label>}
      {children}
      {error ? <span className="cc-field__error">{error}</span> : hint ? <span className="cc-field__hint">{hint}</span> : null}
    </div>
  );
}
