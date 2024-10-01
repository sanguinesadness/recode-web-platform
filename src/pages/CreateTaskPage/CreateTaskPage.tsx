import { getTaskMock } from '@src/api/task';
import { CreateTask } from '@src/modules/CreateTask';
import { MainHeader } from '@src/modules/MainHeader';
import { TaskPreview } from '@src/modules/TaskPreview';
import React, { useEffect } from 'react';
import * as Styled from './styled.ts';

export const CreateTaskPage: React.FC = () => {
  useEffect(() => {
    getTaskMock().then((resp) => console.log({ resp }));
  }, []);

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
