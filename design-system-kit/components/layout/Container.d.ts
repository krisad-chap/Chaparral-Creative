import * as React from 'react';

/** Centres content at 1200px (--cc-container). Narrow to 760px for prose. */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  children?: React.ReactNode;
}
export function Container(props: ContainerProps): JSX.Element;
