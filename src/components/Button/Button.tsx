import { useButtonColor } from '@src/components/Button/hooks';
import React from 'react';
import * as Styled from './styled.ts';
import { TButtonProps } from './types.ts';

export const Button: React.FC<TButtonProps> = ({
  colorType,
  children,
  ...props
}) => {
  const color = useButtonColor(colorType ?? 'primary');
  return (
    <Styled.ButtonWrapper $color={color} {...props}>
      {children}
    </Styled.ButtonWrapper>
  );
};
