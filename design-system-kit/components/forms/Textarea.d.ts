import * as React from 'react';

/** Multi-line input — 110px minimum height, vertical resize only. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}
export function Textarea(props: TextareaProps): JSX.Element;
