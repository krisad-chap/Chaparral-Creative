import * as React from 'react';

/** Full-width page band — 80px vertical padding. Alternate default/subtle down the page. */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** default = White · subtle = Bone · inverse = Ink (max two per page) */
  tone?: 'default' | 'subtle' | 'inverse';
  children?: React.ReactNode;
}
export function Section(props: SectionProps): JSX.Element;
