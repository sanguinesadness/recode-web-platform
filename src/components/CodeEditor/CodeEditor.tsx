import { javascript } from '@codemirror/lang-javascript';
import React from 'react';
import * as Styled from './styled.ts';
import { ICodeEditorProps } from './types.ts';

export const CodeEditor: React.FC<ICodeEditorProps> = ({
  className,
  ...props
}) => {
  return (
    <Styled.CodeEditorStyled
      className={className}
      extensions={[javascript({ jsx: true })]}
      basicSetup={{
        highlightActiveLine: false,
        highlightActiveLineGutter: true,
        lineNumbers: true,
        foldGutter: true,
      }}
      {...props}
    />
  );
};
