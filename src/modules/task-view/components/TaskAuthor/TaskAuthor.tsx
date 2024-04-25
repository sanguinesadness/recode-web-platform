import { Link } from '@src/components/Link';
import React from 'react';
import * as Styled from './styled.ts';
import { ITaskAuthorProps } from './types.ts';

export const TaskAuthor: React.FC<ITaskAuthorProps> = ({
  authorId,
  authorName,
}) => {
  return (
    <Styled.TaskAuthorStyled>
      by <Link>@{authorName}</Link>
    </Styled.TaskAuthorStyled>
  );
};
