import * as React from 'react';

/** Primary site header — brand left, links and one action right. */
export interface NavLink { label: string; href?: string; active?: boolean; onClick?: React.MouseEventHandler }
export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  /** Node (e.g. inlined logo SVG) or { label, href } */
  brand?: React.ReactNode | { label: React.ReactNode; href?: string };
  links?: NavLink[];
  /** Trailing action, usually a primary Button */
  actions?: React.ReactNode;
  /** Ink background for dark headers */
  inverse?: boolean;
}
export function Nav(props: NavProps): JSX.Element;
