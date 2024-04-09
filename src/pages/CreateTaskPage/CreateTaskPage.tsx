import { CreateTask } from '@src/modules/CreateTask';
import { MainHeader } from '@src/modules/MainHeader';
import { TaskPreview } from '@src/modules/TaskPreview';
import React from 'react';
import * as Styled from './styled.ts';

export const CreateTaskPage: React.FC = () => {
  return (
    <Styled.CreateTaskPageWrapper>
      <MainHeader />
      <Styled.CreateTaskPageBody>
        <CreateTask />
        <TaskPreview />
      </Styled.CreateTaskPageBody>
    </Styled.CreateTaskPageWrapper>
  );
};
