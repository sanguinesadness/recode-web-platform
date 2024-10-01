import React from 'react';
import * as Styled from './styled.ts';
import { IBlockquoteProps } from './types.ts';

export const Blockquote: React.FC<IBlockquoteProps> = ({
  isEnabled,
  children,
}) => {
  return isEnabled ? (
    <Styled.BlockquoteStyled>{children}</Styled.BlockquoteStyled>
  ) : (
    <>{children}</>
  );
};
