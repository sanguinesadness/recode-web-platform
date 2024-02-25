import { Separator } from '@src/components/Separator';
import React from 'react';
import {
  mockAuthorName,
  mockTaskTags,
  mockTaskText,
} from './__mocks__/constants.ts';
import { TaskAuthorLabel } from './components/TaskAuthorLabel';
import { TaskTags } from './components/TaskTags';
import { TaskText } from './components/TaskText';
import { TaskTitle } from './components/TaskTitle';
import * as Styled from './styled.ts';

export const TaskDescription: React.FC = () => {
  return (
    <Styled.CardStyled>
      <TaskTitle />
      <Separator height={10} />
      <TaskTags tags={mockTaskTags} />
      <Separator height={20} />
      <TaskAuthorLabel name={mockAuthorName} />
      <Separator height={15} />
      <TaskText main={mockTaskText.main} notes={mockTaskText.notes} />
      <Styled.CopyrightLabel>
        Copyright ©️ 2023 RECODE All rights reserved
      </Styled.CopyrightLabel>
    </Styled.CardStyled>
  );
};
