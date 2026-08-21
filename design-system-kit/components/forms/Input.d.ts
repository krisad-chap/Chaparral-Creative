import * as React from 'react';

/** Single-line text input — 44px tall, 8px radius, Merriweather Sans 16px. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Danger border + Danger focus ring */
  invalid?: boolean;
}
export function Input(props: InputProps): JSX.Element;
