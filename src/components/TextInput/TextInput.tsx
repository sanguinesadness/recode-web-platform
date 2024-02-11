import React from 'react';
import * as Styled from './styled.ts';
import { ITextInputProps } from './types.ts';

export const TextInput: React.FC<ITextInputProps> = (props) => {
  return (
    <Styled.TextInputWrapper>
      <Styled.TextInputStyled {...props} />
    </Styled.TextInputWrapper>
  );
};
