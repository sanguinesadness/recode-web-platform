import { PropsWithChildren } from 'react';

export interface IFieldWrapperProps extends PropsWithChildren {
  label?: string;
  required?: boolean;
  className?: string;
  onClick?: VoidFunction;
}
