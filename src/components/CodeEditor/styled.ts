import CodeMirror from '@uiw/react-codemirror';
import styled from 'styled-components';

export const CodeEditorStyled = styled(CodeMirror)(({ theme }) => ({
  fontSize: '14px',

  '& > .cm-focused': {
    outline: 'none',
  },

  '.cm-gutters': {
    background: 'unset',
    borderRight: 'unset',
    paddingRight: '8px',
    color: theme.current.secondary.shades['50'],
  },

  '.cm-placeholder': {
    color: theme.current.secondary.shades['80'],
    fontSize: '14px',
  },
}));
