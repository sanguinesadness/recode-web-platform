import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export type TButtonColorType =
  | 'success'
  | 'secondary'
  | 'primary'
  | 'brand'
  | 'alert'
  | 'warning';

export type TButtonProps = {
  colorType?: TButtonColorType;
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;
