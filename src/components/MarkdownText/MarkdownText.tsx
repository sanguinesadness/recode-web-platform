import * as React from 'react';
import * as Styled from './styled.ts';
import { IMarkdownTextProps } from './types.ts';

export const MarkdownText: React.FC<IMarkdownTextProps> = ({ text }) => {
  return (
    <Styled.MarkdownTextStyled
      urlTransform={(value: string) => value}
      components={{
        img: (props) => <Styled.ImgStyled alt="" {...props} />,
      }}
    >
      {text}
    </Styled.MarkdownTextStyled>
  );
};
