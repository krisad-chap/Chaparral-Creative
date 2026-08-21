import * as React from 'react';

/** Native select styled to match Input. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<string | { value: string; label: string }>;
  invalid?: boolean;
}
export function Select(props: SelectProps): JSX.Element;
