import * as React from 'react';

/**
 * Primary action control. Montserrat 600, 44px tall, 8px radius.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = Signal Blue fill; ink = Chaparral Ink fill; inverse = white on dark; secondary = outline; ghost = text only */
  variant?: 'primary' | 'secondary' | 'ink' | 'ghost' | 'inverse';
  /** sm 36px · md 44px · lg 54px */
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  disabled?: boolean;
  /** Renders as an anchor when set */
  href?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
