import * as React from 'react';
import * as Styled from './styled.ts';
import { IMarkdownTextProps } from './types.ts';

export const MarkdownText: React.FC<IMarkdownTextProps> = ({ text }) => {
  return <Styled.MarkdownTextStyled>{text}</Styled.MarkdownTextStyled>;
};
