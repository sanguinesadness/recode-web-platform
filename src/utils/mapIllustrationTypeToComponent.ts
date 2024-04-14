import { EmptyMailboxIllustration } from '@src/assets/illustrations';
import { IIconProps } from '@src/assets/types.ts';
import { EIllustrationTypes } from '@src/constants';
import React from 'react';

export const mapIllustrationTypeToComponent: Record<
  EIllustrationTypes,
  React.FC<IIconProps>
> = {
  [EIllustrationTypes.EMPTY_MAILBOX]: EmptyMailboxIllustration,
};
