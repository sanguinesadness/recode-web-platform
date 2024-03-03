import { ReactNode } from 'react';

export type TSelectOption = {
  value: string;
  label: string;
} & Record<string, unknown>;

export interface ISelectProps {
  options: TSelectOption[];
  onChange?: (value: string) => void;
  value?: string;
  customTrigger?: ReactNode;
  fullWidth?: boolean;
}

export interface ISelectOptionProps {
  option: TSelectOption;
  onClick: VoidFunction;
}
