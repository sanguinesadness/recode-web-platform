import styled from 'styled-components';

export const SearchBarStyled = styled.div<{ $isEmpty?: boolean }>(
  ({ theme, $isEmpty }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '6px 10px',
    borderRadius: '10px',
    gap: '10px',
    width: '100%',
    transition: '500ms ease box-shadow',
    boxShadow: $isEmpty
      ? 'none'
      : `0 0 10px ${theme.current.primary.shades['20']}`,

    '&:hover': {
      boxShadow: `0 0 10px ${theme.current.primary.shades['20']}`,
    },
  }),
);

export const SearchBarInput = styled.input(({ theme }) => ({
  border: 'unset',
  outline: 'unset',
  font: 'inherit',
  color: theme.current.primary.shades['90'],
  fontWeight: '600',
  flex: 1,

  '&::placeholder': {
    color: theme.current.primary.shades['30'],
  },
}));
