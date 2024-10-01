import styled from 'styled-components';

export const SearchBarStyled = styled.div<{
  $isEmpty?: boolean;
  $isHoverEffect?: boolean;
}>(({ theme, $isEmpty, $isHoverEffect }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '6px 10px',
  borderRadius: '10px',
  gap: '10px',
  flex: 1,
  transition: '500ms ease box-shadow',
  boxShadow:
    $isEmpty || !$isHoverEffect
      ? 'none'
      : `0 0 10px ${theme.current.primary.shades['20']}`,

  '&:hover': {
    boxShadow: $isHoverEffect
      ? `0 0 10px ${theme.current.primary.shades['20']}`
      : 'none',
  },
}));

export const SearchBarInput = styled.input(({ theme }) => ({
  border: 'unset',
  outline: 'unset',
  font: 'inherit',
  color: theme.current.primary.shades['90'],
  fontWeight: '600',
  flex: 1,
  background: 'transparent',

  '&::placeholder': {
    color: theme.current.primary.shades['30'],
  },
}));
