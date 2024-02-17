import React from 'react';
import * as Styled from './styled.ts';
import { TaskTag } from './TaskTag.tsx';
import { ITaskTagsProps } from './types.ts';

export const TaskTags: React.FC<ITaskTagsProps> = ({ tags }) => {
  return (
    <Styled.TaskTagsStyled>
      {tags.map(({ id, text, color }) => (
        <TaskTag key={id} text={text} color={color} />
      ))}
    </Styled.TaskTagsStyled>
  );
};
