import * as React from 'react';

/** Applies one step of the type scale. Poppins for display/title, Montserrat for subtitle, Merriweather Sans for body. */
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'display' | 'title' | 'subtitle' | 'subheading' | 'body-lg' | 'body' | 'body-sm' | 'caption';
  /** Override the rendered element */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export function Text(props: TextProps): JSX.Element;
