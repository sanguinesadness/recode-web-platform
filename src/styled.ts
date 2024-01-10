import styled from 'styled-components';

export const AppWrapper = styled.div(({ theme }) => ({
  fontFamily: '"Nunito", sans-serif',
  fontSize: 16,
  color: theme.current.primary.default,
  background: `linear-gradient(180deg, ${theme.current.brand.default} 0%, ${theme.current.brand.shades[40]} 100%)`,
  height: '100vh',
  width: '100vw',
}));
