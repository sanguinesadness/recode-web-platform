import React from 'react';
import * as Styled from './styled.ts';

import { ICardProps } from './types.ts';

export const Card: React.FC<ICardProps> = ({ children }) => {
  return <Styled.CardWrapper>{children}</Styled.CardWrapper>;
};
