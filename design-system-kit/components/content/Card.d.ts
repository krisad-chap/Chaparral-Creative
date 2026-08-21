import * as React from 'react';

/**
 * Surface for a service, case study or list item. 12px radius, 1px Mist border.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  text?: React.ReactNode;
  /** true = empty 150px Sage-tint media band; a node renders inside it */
  media?: boolean | React.ReactNode;
  footer?: React.ReactNode;
  /** Shadow instead of border */
  raised?: boolean;
  /** Lifts 2px on hover — only when the whole card is a link */
  interactive?: boolean;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
