import { MarkdownText } from '@src/components/MarkdownText';
import React from 'react';
import {
  mockAuthorName,
  mockTaskTags,
  mockTaskText,
} from './__mocks__/constants.ts';
import { TaskAuthorLabel } from './components/TaskAuthorLabel';
import { TaskTags } from './components/TaskTags';
import { TaskTitle } from './components/TaskTitle';
import * as Styled from './styled.ts';
import { ITaskDescriptionProps } from './types.ts';

export const TaskDescription: React.FC<ITaskDescriptionProps> = ({ width }) => {
  return (
    <Styled.CardStyled width={width}>
      <TaskTitle />
      <TaskTags tags={mockTaskTags} />
      <TaskAuthorLabel name={mockAuthorName} />
      <MarkdownText text={mockTaskText} />
      <Styled.CopyrightLabel>
        Copyright ©️ 2023 RECODE All rights reserved
      </Styled.CopyrightLabel>
    </Styled.CardStyled>
  );
};
