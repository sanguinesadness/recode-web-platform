import styled from 'styled-components';

export const TextInputWrapper = styled.div(() => ({
  display: 'flex',
  width: '100%',
}));

export const TextInputStyled = styled.input(({ theme }) => ({
  borderRadius: '10px',
  border: `1px solid ${theme.current.secondary.shades['40']}`,
  outline: 'unset',
  padding: '7px 14px',
  font: 'inherit',
  flex: 1,
}));
