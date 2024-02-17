import { Card } from '@src/components/Card';
import { Separator } from '@src/components/Separator';
import React from 'react';
import { mockAuthorName, mockTaskTags } from './__mocks__/constants.ts';
import { TaskAuthorLabel } from './components/TaskAuthorLabel';
import { TaskTags } from './components/TaskTags';
import { TaskTitle } from './components/TaskTitle';
import * as Styled from './styled.ts';

export const TaskDescription: React.FC = () => {
  return (
    <Card>
      <Styled.CardContent>
        <TaskTitle />
        <Separator height={10} />
        <TaskTags tags={mockTaskTags} />
        <Separator height={20} />
        <TaskAuthorLabel name={mockAuthorName} />
      </Styled.CardContent>
    </Card>
  );
};
