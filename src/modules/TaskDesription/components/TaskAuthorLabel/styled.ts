import styled from 'styled-components';

export const TaskAuthorLabelStyled = styled.div(({ theme }) => ({
  color: theme.current.secondary.shades['50'],
  marginBottom: '15px',
}));

export const TextAnimatedUnderline = styled.span(({ theme }) => ({
  cursor: 'pointer',
  fontWeight: 700,
  display: 'inline-block',
  position: 'relative',
  padding: '4px 1px',
  transition: '200ms ease transform',

  '&:active': {
    transform: 'scale(0.95)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    transform: 'scaleX(0)',
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    bottom: 0,
    left: 0,
    backgroundColor: theme.current.secondary.shades['10'],
    transformOrigin: 'bottom right',
    transition: 'transform 0.25s ease-out',
  },

  '&:hover::after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left',
  },
}));
