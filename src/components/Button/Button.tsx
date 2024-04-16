import { useButtonColor } from '@src/components/Button/hooks';
import React from 'react';
import * as Styled from './styled.ts';
import { IButtonProps } from './types.ts';

export const Button: React.FC<IButtonProps> = ({ type, children }) => {
  const color = useButtonColor(type ?? 'primary');
  return <Styled.ButtonWrapper color={color}>{children}</Styled.ButtonWrapper>;
};
