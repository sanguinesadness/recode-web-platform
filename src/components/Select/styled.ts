import styled from 'styled-components';

export const SelectStyled = styled.div<{ fullWidth?: boolean }>(
  ({ theme, fullWidth }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: fullWidth ? 'space-between' : 'flex-start',
    gap: '15px',
    cursor: 'pointer',
    color: theme.current.secondary.default,
    fontWeight: '700',
    userSelect: 'none',
  }),
);

export const SelectOptionsList = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const SelectOptionStyled = styled.div(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '600',
  borderRadius: '8px',
  padding: '8px 10px',
  transition: '200ms ease all',

  '&:hover': {
    background: theme.current.secondary.shades['10'],
  },
}));

export const IconWrapper = styled.div<{ $rotated?: boolean }>(
  ({ $rotated }) => ({
    svg: {
      transition: '200ms ease transform',
      transform: `rotate(${$rotated ? 180 : 0}deg)`,
    },
  }),
);
