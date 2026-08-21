import React from 'react';

export function Tabs({ tabs = [], value, onChange, className = '', ...rest }) {
  const [internal, setInternal] = React.useState(tabs[0] && (tabs[0].value || tabs[0]));
  const active = value !== undefined ? value : internal;
  const pick = (v) => { setInternal(v); onChange && onChange(v); };
  return (
    <div className={['cc-tabs', className].filter(Boolean).join(' ')} role="tablist" {...rest}>
      {tabs.map((t) => {
        const v = t.value || t; const label = t.label || t;
        return <button key={v} role="tab" aria-selected={active === v} className={['cc-tab', active === v && 'cc-tab--active'].filter(Boolean).join(' ')} onClick={() => pick(v)}>{label}</button>;
      })}
    </div>
  );
}
