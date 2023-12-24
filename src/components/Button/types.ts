import { PropsWithChildren } from 'react';

export interface IButtonProps extends PropsWithChildren {
  type: 'primary' | 'secondary';
}
