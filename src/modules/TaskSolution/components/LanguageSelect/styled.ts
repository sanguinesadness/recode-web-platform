import styled from 'styled-components';

export const LanguageSelectStyled = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  cursor: 'pointer',
  color: theme.current.secondary.default,
  fontWeight: '700',
  transition: '200ms ease transform',
  userSelect: 'none',

  '&:hover': {
    transform: 'scale(0.98)',
  },
}));

export const IconWrapper = styled.div<{ rotated?: boolean }>(({ rotated }) => ({
  svg: {
    transition: '200ms ease transform',
    transform: `rotate(${rotated ? 180 : 0}deg)`,
  },
}));
