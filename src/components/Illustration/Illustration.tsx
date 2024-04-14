import { mapIllustrationTypeToComponent } from '@src/utils';
import React from 'react';
import { IIllustrationProps } from './types.ts';

export const Illustration: React.FC<IIllustrationProps> = ({
  illustrationType,
  ...props
}) => {
  const IllustrationComponent =
    mapIllustrationTypeToComponent[illustrationType];
  return <IllustrationComponent {...props} />;
};
