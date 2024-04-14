import styled from 'styled-components';

export const TextInputStyled = styled.input(({ theme }) => ({
  border: 'unset',
  outline: 'unset',
  fontFamily: 'inherit',
  flex: 1,
  color: theme.current.primary.default,

  '&::placeholder': {
    color: theme.current.secondary.shades[80],
  },
}));
