import { ReactNode } from 'react';

export type TSelectOption = {
  value: string;
  label: string;
} & Record<string, unknown>;

export interface ISelectProps {
  options: TSelectOption[];
  onChange?: (value: string) => void;
  value?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  customTrigger?: ReactNode;
}

export interface ISelectOptionProps {
  option: TSelectOption;
  onClick: VoidFunction;
  isSelected: boolean;
}
