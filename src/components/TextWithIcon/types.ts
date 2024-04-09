import { EIconTypes } from '@src/constants';
import { ReactNode } from 'react';

export interface ITextWithIconProps {
  text: string;
  iconType?: EIconTypes;
  icon?: ReactNode;
  reversed?: boolean;
}
