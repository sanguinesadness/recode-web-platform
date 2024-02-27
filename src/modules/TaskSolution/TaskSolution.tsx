import { CardStyled } from '@src/modules/TaskDesription/styled.ts';
import React from 'react';
import { ITaskSolutionProps } from './types.ts';

export const TaskSolution: React.FC<ITaskSolutionProps> = ({ width }) => {
  return <CardStyled width={width}>task solution</CardStyled>;
};
