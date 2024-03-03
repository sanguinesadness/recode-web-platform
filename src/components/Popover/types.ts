import { PropsWithChildren, ReactNode } from 'react';

export interface IPopoverProps extends PropsWithChildren {
  trigger: ReactNode;
  isOpened: boolean;
  onOutsideClick?: VoidFunction;
  offsetTop?: number;
  offsetLeft?: number;
}

export type TPopoverPosition = {
  top: number;
  left: number;
  isOpened?: boolean;
};
