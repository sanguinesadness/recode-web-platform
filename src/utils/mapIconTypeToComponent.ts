import {
  AppsAddIcon,
  CheckIcon,
  CommentCheckIcon,
  CrossIcon,
  HardIcon,
  HeartIcon,
  HeartSolidIcon,
  HomeIcon,
  InfoIcon,
  LandscapeIcon,
  PlusCircleIcon,
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
  [EIconTypes.HEART_SOLID]: HeartSolidIcon,
  [EIconTypes.INFO]: InfoIcon,
  [EIconTypes.SEARCH]: SearchIcon,
  [EIconTypes.CROSS]: CrossIcon,
  [EIconTypes.COMMENT_CHECK]: CommentCheckIcon,
  [EIconTypes.PLUS_CIRCLE]: PlusCircleIcon,
  [EIconTypes.LANDSCAPE]: LandscapeIcon,
  [EIconTypes.APPS_ADD]: AppsAddIcon,
  [EIconTypes.HARD]: HardIcon,
  [EIconTypes.CHECK]: CheckIcon,
};
