import React from 'react';
import Markdown from 'react-markdown';
import { CodeBlock } from './CodeBlock.tsx';
import { ICodeBlockProps } from './types.ts';

export const CodeBlockMarkdown: React.FC<ICodeBlockProps> = ({ children }) => {
  return (
    <Markdown
      components={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        code: CodeBlock,
      }}
    >
      {children}
    </Markdown>
  );
};
