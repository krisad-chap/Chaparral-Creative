import * as React from 'react';

/** Label + control + hint/error wrapper. Wrap every Input, Select, Textarea. */
export interface FieldProps {
  label?: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  hint?: React.ReactNode;
  /** When set, replaces the hint and is shown in Danger */
  error?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export function Field(props: FieldProps): JSX.Element;
