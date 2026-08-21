import * as React from 'react';

/** Underlined tab row. Uncontrolled unless `value` is supplied. */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs?: Array<string | { value: string; label: React.ReactNode }>;
  value?: string;
  onChange?: (value: string) => void;
}
export function Tabs(props: TabsProps): JSX.Element;
