import { CodeEditor } from '@src/components/CodeEditor';
import React from 'react';
import * as Styled from './styled.ts';
import { ICodeAreaProps } from './types.ts';

export const CodeArea: React.FC<ICodeAreaProps> = (props) => {
  const { label, required } = props;
  return (
    <Styled.FieldWrapperStyled label={label} required={required}>
      <CodeEditor {...props} />
    </Styled.FieldWrapperStyled>
  );
};
