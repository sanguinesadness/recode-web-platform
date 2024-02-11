import { InputHTMLAttributes } from 'react';

export interface ISearchBarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onSubmit'> {
  onSubmit?: (value: string) => void;
}
