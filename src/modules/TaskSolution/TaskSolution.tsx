import { CardStyled } from '@src/modules/TaskDesription/styled.ts';
import React from 'react';
import { CodeArea } from './components/CodeArea';
import { LanguageSelect } from './components/LanguageSelect';
import * as Styled from './styled.ts';
import { ITaskSolutionProps } from './types.ts';

export const TaskSolution: React.FC<ITaskSolutionProps> = ({ width }) => {
  return (
    <CardStyled width={width}>
      <Styled.TaskSolutionHeader>
        <LanguageSelect />
      </Styled.TaskSolutionHeader>
      <CodeArea />
    </CardStyled>
  );
};
