import { TaskAuthor, TaskTags } from '@src/modules/task-view';
import React from 'react';
import { TaskDescription } from '../TaskDescription';
import { TaskTitle } from '../TaskTitle';
import * as Styled from './styled.ts';
import { TTaskViewProps } from './types.ts';

export const TaskView: React.FC<TTaskViewProps> = ({
  title,
  complexityId,
  isSolved,
  isLiked,
  number,
  description,
  tags,
}) => {
  return (
    <Styled.TaskViewStyled>
      <TaskTitle
        title={title}
        complexityId={complexityId}
        number={number}
        isSolved={isSolved}
        isLiked={isLiked}
      />
      <TaskTags tags={tags} />
      <Styled.TaskAuthorWrapper>
        <TaskAuthor authorId="ID234-234245-43SDF24-234SD" authorName="x8diar" />
      </Styled.TaskAuthorWrapper>
      <TaskDescription description={description} />
    </Styled.TaskViewStyled>
  );
};
