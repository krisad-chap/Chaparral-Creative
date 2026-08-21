import * as React from 'react';

/** Uppercase pill label — 11px Montserrat 700, full radius. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger' | 'accent';
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
