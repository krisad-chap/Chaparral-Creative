import * as React from 'react';

/** Checkbox with inline label — 18px box, Signal Blue accent. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
