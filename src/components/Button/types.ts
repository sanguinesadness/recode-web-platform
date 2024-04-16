import { PropsWithChildren } from 'react';

export type TButtonType =
  | 'success'
  | 'secondary'
  | 'primary'
  | 'brand'
  | 'alert'
  | 'warning';

export interface IButtonProps extends PropsWithChildren {
  type?: TButtonType;
}

export type TButtonColors = {
  textColor: string;
  bgColor: string;
};
