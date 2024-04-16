import { IColor } from '@src/types';
import styled from 'styled-components';

export const ButtonWrapper = styled.button<{ color: IColor }>(({ color }) => ({
  background: color.shades[10],
  color: color.default,
  cursor: 'pointer',
  padding: '14px 24px',
  borderRadius: '10px',
  outline: 'unset',
  border: 'unset',
  transition: '200ms ease all',
  font: 'inherit',
  fontWeight: '800',
  fontSize: '16px',

  '&:hover': {
    transform: 'scale(0.98)',
  },

  '&:active': {
    transform: 'scale(0.94)',
  },
}));
