import { PropsWithChildren, ReactNode } from 'react';

export interface ICardProps extends PropsWithChildren {
  className?: string;
  width?: number;
  headerContent?: ReactNode;
}
