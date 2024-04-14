import { IIconComponentProps } from '@src/components/Icon/types.ts';
import { mapIconTypeToComponent } from '@src/utils';
import React from 'react';

export const Icon: React.FC<IIconComponentProps> = ({ iconType, ...props }) => {
  const IconComponent = mapIconTypeToComponent[iconType];
  return <IconComponent {...props} />;
};
