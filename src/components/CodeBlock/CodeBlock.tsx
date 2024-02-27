import * as React from 'react';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { useTheme } from 'styled-components';
import { ICodeBlockProps } from './types.ts';

export const CodeBlock: React.FC<ICodeBlockProps> = ({ children }) => {
  const { current } = useTheme();

  return (
    <SyntaxHighlighter
      language={typescript}
      customStyle={{
        lineHeight: '22px',
        fontSize: '14px',
        padding: '10px',
        margin: '10px 0',
        background: current.secondary.shades['10'],
        borderRadius: '5px',
        display: 'inline-flex',
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};
