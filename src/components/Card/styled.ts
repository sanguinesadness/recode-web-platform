import styled from 'styled-components';

export const CardStyled = styled.div(({ theme }) => ({
  background: theme.current.white.default,
  boxShadow: `0 4px 10px ${theme.current.black.shades['10']}`,
  borderRadius: '10px',
}));
