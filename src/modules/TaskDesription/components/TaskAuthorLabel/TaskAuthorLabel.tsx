import React from 'react';
import * as Styled from './styled.ts';
import { ITaskAuthorLabelProps } from './types.ts';

export const TaskAuthorLabel: React.FC<ITaskAuthorLabelProps> = ({ name }) => {
  return (
    <Styled.TaskAuthorLabelStyled>
      by <Styled.TextAnimatedUnderline>@{name}</Styled.TextAnimatedUnderline>
    </Styled.TaskAuthorLabelStyled>
  );
};
