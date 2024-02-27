import { Blockquote } from '@src/components/Blockquote';
import { CodeBlockMarkdown } from '@src/components/CodeBlock';
import * as React from 'react';
import Markdown from 'react-markdown';
import { IMarkdownTextProps } from './types.ts';

export const MarkdownText: React.FC<IMarkdownTextProps> = ({ text }) => {
  if (Array.isArray(text.md)) {
    return (
      <Blockquote isEnabled={text.isBlockquote}>
        {text.md.map((item, index) => (
          <MarkdownText key={index} text={item} />
        ))}
      </Blockquote>
    );
  }

  if (text.isCode) {
    return (
      <Blockquote isEnabled={text.isBlockquote}>
        <CodeBlockMarkdown>{text.md}</CodeBlockMarkdown>
      </Blockquote>
    );
  }

  return (
    <Blockquote isEnabled={text.isBlockquote}>
      <Markdown>{text.md}</Markdown>
    </Blockquote>
  );
};
