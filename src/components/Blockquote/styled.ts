import styled from 'styled-components';

export const BlockquoteStyled = styled.div(({ theme }) => ({
  position: 'relative',
  padding: '10px 20px',
  margin: '15px 0',
  fontSize: '16px',

  '&::before': {
    display: 'block',
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '4px',
    background: theme.current.secondary.shades['40'],
    borderRadius: '2px',
  },
}));
