import { IIconProps } from '@src/assets/types.ts';
import { EIconTypes } from '@src/constants';

export interface IIconButtonProps extends IIconProps {
  onClick?: VoidFunction;
  iconType: EIconTypes;
  disabled?: boolean;
  className?: string;
}
