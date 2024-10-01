import React from 'react';
import * as Styled from './styled.ts';
import { ISeparatorProps } from './types.ts';

export const Separator: React.FC<ISeparatorProps> = ({ height, className }) => {
  return <Styled.SeparatorStyled height={height} className={className} />;
};
