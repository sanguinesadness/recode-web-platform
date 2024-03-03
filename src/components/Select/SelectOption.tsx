import React from 'react';
import * as Styled from './styled.ts';
import { ISelectOptionProps } from './types.ts';

export const SelectOption: React.FC<ISelectOptionProps> = ({
  option,
  onClick,
}) => {
  return (
    <Styled.SelectOptionStyled onClick={onClick}>
      {option.label}
    </Styled.SelectOptionStyled>
  );
};
