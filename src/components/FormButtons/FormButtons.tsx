import React from 'react';
import * as Styled from './styled.ts';
import { IFormButtonsProps } from './types.ts';

export const FormButtons: React.FC<IFormButtonsProps> = ({
  primaryButton,
  cancelButton,
  secondaryButton,
}) => {
  return (
    <Styled.FormButtonsWrapper>
      <Styled.LeftSide>{cancelButton}</Styled.LeftSide>
      <Styled.RightSide>
        {secondaryButton}
        {primaryButton}
      </Styled.RightSide>
    </Styled.FormButtonsWrapper>
  );
};
