import { MarkdownText } from '@src/components/MarkdownText';
import * as React from 'react';
import Markdown from 'react-markdown';
import * as Styled from './styled.ts';
import { ITaskTextProps } from './types.ts';

export const TaskText: React.FC<ITaskTextProps> = ({ main, notes }) => {
  return (
    <Styled.TaskTextStyled>
      <MarkdownText text={main} />
      <Styled.Notes>
        <Markdown>{'**Notes:**'}</Markdown>
        <MarkdownText text={notes} />
      </Styled.Notes>
    </Styled.TaskTextStyled>
  );
};
