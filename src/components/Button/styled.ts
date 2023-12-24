import styled from 'styled-components';
import { IButtonProps } from './types.ts';

export const ButtonWrapper = styled.button<Pick<IButtonProps, 'type'>>(
  ({ type }) => ({
    background: type === 'primary' ? 'aliceblue' : 'grey',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '10px',
    outline: 'unset',
    border: 'unset',
    transition: '200ms ease all',

    '&:active': {
      transform: 'scale(1.1)',
    },
  }),
);
