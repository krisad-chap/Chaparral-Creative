import * as React from 'react';

/** Single number plus caption. Poppins 42px value; inverts automatically inside cc-section--inverse. */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: React.ReactNode;
}
export function Stat(props: StatProps): JSX.Element;
