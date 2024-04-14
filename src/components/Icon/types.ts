import { IIconProps } from '@src/assets/types.ts';
import { EIconTypes } from '@src/constants';

export interface IIconComponentProps extends IIconProps {
  iconType: EIconTypes;
}
