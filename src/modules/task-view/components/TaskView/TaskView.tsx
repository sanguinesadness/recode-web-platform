import React from 'react';
import { TaskAuthor } from '../TaskAuthor';
import { TaskCode } from '../TaskCode';
import { TaskDescription } from '../TaskDescription';
import { TaskTags } from '../TaskTags';
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
  code,
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
      {code && <TaskCode code={code} />}
    </Styled.TaskViewStyled>
  );
};
