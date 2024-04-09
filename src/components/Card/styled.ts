import styled from 'styled-components';

export const CardStyled = styled.div(({ theme }) => ({
  background: theme.current.white.default,
  boxShadow: `0 4px 10px ${theme.current.black.shades['10']}`,
  borderRadius: '10px',
  minWidth: '400px',
}));

export const CardHeader = styled.div(({ theme }) => ({
  background: theme.current.brand.shades['10'],
  display: 'flex',
  zIndex: 10,
}));
