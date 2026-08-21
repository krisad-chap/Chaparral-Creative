import * as React from 'react';

/** Ancestry trail; last item is the current page and is not a link. */
export interface BreadcrumbItem { label: React.ReactNode; href?: string }
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItem[];
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
