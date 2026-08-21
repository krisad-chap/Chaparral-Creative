import * as React from 'react';

/** Data table — uppercase Montserrat headers, Mist row rules, Bone row hover. */
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  columns?: React.ReactNode[];
  rows?: React.ReactNode[][];
}
export function Table(props: TableProps): JSX.Element;
