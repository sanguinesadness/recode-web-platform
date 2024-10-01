import { CodeEditor } from '@src/components/CodeEditor';
import { FieldWrapper } from '@src/components/FieldWrapper';
import styled from 'styled-components';

export const FieldWrapperStyled = styled(FieldWrapper)(() => ({
  height: 'auto',
  padding: '14px 18px 14px 10px',
  flexDirection: 'column',
  gap: '10px',
}));

export const CodeEditorStyled = styled(CodeEditor)(() => ({
  '.cm-gutters': {
    paddingRight: '0',
    marginRight: '-4px',
  },
}));
