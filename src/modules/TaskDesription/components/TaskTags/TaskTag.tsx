import React from 'react';
import { useTheme } from 'styled-components';
import * as Styled from './styled.ts';
import { TTaskTagProps } from './types.ts';

export const TaskTag: React.FC<TTaskTagProps> = ({ color, text }) => {
  const { current } = useTheme();

  return (
    <Styled.TaskTagStyled color={current[color]}>{text}</Styled.TaskTagStyled>
  );
};
