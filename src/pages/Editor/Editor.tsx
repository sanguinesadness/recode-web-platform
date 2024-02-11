import { MainHeader } from '@src/modules/MainHeader';
import { TaskDescription } from '@src/modules/TaskDesription';
import { TaskSolution } from '@src/modules/TaskSolution';
import React from 'react';
import * as Styled from './styled.ts';

export const Editor: React.FC = () => {
  return (
    <Styled.EditorPageWrapper>
      <MainHeader />
      <Styled.EditPageBody>
        <TaskDescription />
        <TaskSolution />
      </Styled.EditPageBody>
    </Styled.EditorPageWrapper>
  );
};
