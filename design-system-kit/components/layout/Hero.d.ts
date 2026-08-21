import * as React from 'react';

/**
 * Ink page opener — eyebrow, display headline under nine words, one sentence, up to two actions.
 */
export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Supporting sentence */
  children?: React.ReactNode;
  actions?: React.ReactNode;
}
export function Hero(props: HeroProps): JSX.Element;
