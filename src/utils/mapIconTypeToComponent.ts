import {
  CrossIcon,
  HeartIcon,
  HomeIcon,
  InfoIcon,
  SearchIcon,
} from '@src/assets';
import { IIconProps } from '@src/assets/types.ts';
import { EIconTypes } from '@src/constants';
import React from 'react';

export const mapIconTypeToComponent: Record<
  EIconTypes,
  React.FC<IIconProps>
> = {
  [EIconTypes.HOME]: HomeIcon,
  [EIconTypes.HEART]: HeartIcon,
  [EIconTypes.INFO]: InfoIcon,
  [EIconTypes.SEARCH]: SearchIcon,
  [EIconTypes.CROSS]: CrossIcon,
};
