import React from 'react';
import * as Styled from './styled.ts';
import { IButtonProps } from './types.ts';

export const Button: React.FC<IButtonProps> = ({ type, children }) => {
  return <Styled.ButtonWrapper type={type}>{children}</Styled.ButtonWrapper>;
};
