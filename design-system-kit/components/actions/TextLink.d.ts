import * as React from 'react';

/** Inline link — Signal Blue, underlined at 1px, thickening to 2px on hover. */
export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children?: React.ReactNode;
}
export function TextLink(props: TextLinkProps): JSX.Element;
