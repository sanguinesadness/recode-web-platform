import styled from 'styled-components';

export const IconButtonStyled = styled.div(() => ({
  cursor: 'pointer',
  transition: '200ms ease all',
  padding: '5px',

  '&:hover': {
    transform: 'scale(0.92)',
  },

  '&:active': {
    transform: 'scale(0.86)',
  },
}));
