import React from 'react';
import { useTheme } from 'styled-components';
import * as Styled from './styled.ts';
import { TTagProps } from './types.ts';

export const Tag: React.FC<TTagProps> = ({ color, text, onClick }) => {
  const { current } = useTheme();
  return (
    <Styled.TagStyled
      itemID="tag"
      onClick={onClick}
      $isCursorPointer={!!onClick}
      $color={current[color]}
    >
      {text}
    </Styled.TagStyled>
  );
};
