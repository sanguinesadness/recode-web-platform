import Markdown from 'react-markdown';
import styled from 'styled-components';

export const MarkdownTextStyled = styled(Markdown)(() => ({
  lineHeight: '24px',

  '& > p': {
    padding: '4px 0',
  },
}));
