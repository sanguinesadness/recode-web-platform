import { IIconProps } from '@src/assets/types.ts';
import { EIllustrationTypes } from '@src/constants';

export interface IIllustrationProps extends IIconProps {
  illustrationType: EIllustrationTypes;
}
