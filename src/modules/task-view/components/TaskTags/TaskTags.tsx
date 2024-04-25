import { Tag } from '@src/components/Tag';
import React from 'react';
import * as Styled from './styled.ts';
import { ITaskTagsProps } from './types.ts';

export const TaskTags: React.FC<ITaskTagsProps> = ({ tags }) => {
  return (
    <Styled.TaskTagsStyled>
      {tags.map((tag) => (
        <Tag key={tag.id} {...tag} />
      ))}
    </Styled.TaskTagsStyled>
  );
};
