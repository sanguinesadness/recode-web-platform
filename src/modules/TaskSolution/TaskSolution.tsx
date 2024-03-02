import { CardStyled } from '@src/modules/TaskDesription/styled.ts';
import React from 'react';
import { LanguageSelect } from './components/LanguageSelect';
import { ITaskSolutionProps } from './types.ts';

export const TaskSolution: React.FC<ITaskSolutionProps> = ({ width }) => {
  return (
    <CardStyled width={width}>
      <LanguageSelect />
    </CardStyled>
  );
};
