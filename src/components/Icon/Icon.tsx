import { IIconComponentProps } from '@src/components/Icon/types.ts';
import { mapIconTypeToComponent } from '@src/utils';
import React from 'react';

export const Icon: React.FC<IIconComponentProps> = ({ type, ...props }) => {
  const IconComponent = mapIconTypeToComponent[type];
  return <IconComponent {...props} />;
};
