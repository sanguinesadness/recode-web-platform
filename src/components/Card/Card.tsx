import React from 'react';
import * as Styled from './styled.ts';

import { ICardProps } from './types.ts';

export const Card: React.FC<ICardProps> = ({ children, className, width }) => {
  return (
    <Styled.CardStyled
      className={className}
      style={{ width: width ? `${width}px` : void 0 }}
    >
      {children}
    </Styled.CardStyled>
  );
};
