import React from 'react';
import * as Styled from './styled.ts';
import { IActionProps } from './types.ts';

export const Action: React.FC<IActionProps> = ({ children, ...props }) => {
  return <Styled.ActionStyled {...props}>{children}</Styled.ActionStyled>;
};
