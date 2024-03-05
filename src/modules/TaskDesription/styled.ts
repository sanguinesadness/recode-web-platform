import { Card } from '@src/components/Card';
import styled from 'styled-components';

export const CardStyled = styled(Card)(() => ({
  padding: '40px',
  overflow: 'scroll',
  maxHeight: 'calc(100vh - 170px)',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  display: 'flex',
  flexDirection: 'column',

  '&::webkit-scrollbar': {
    display: 'none',
  },
}));

export const CopyrightLabel = styled.div(({ theme }) => ({
  marginTop: 'auto',
  paddingTop: '40px',
  fontSize: '14px',
  color: theme.current.secondary.shades['70'],
}));
