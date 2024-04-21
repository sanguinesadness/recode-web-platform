import { PropsWithChildren, ReactNode } from 'react';

export interface IPopoverProps extends PropsWithChildren {
  trigger: ReactNode;
  isOpened: boolean;
  onOutsideClick?: (element: HTMLDivElement | null) => void;
  offsetTop?: number;
  offsetLeft?: number;
}

export type TPopoverPosition = {
  top: number;
  left: number;
  isOpened?: boolean;
  width?: number;
};
