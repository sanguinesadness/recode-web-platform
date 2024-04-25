import { scaleAnimation } from '@src/constants';
import styled from 'styled-components';

export const Animation = styled.a`
  font-weight: 600;
  transition: 200ms ease transform;
  display: inline-block;

  &:active {
    transform: scale(1.02);
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: '';
    border-radius: 3px;
    background: ${(props) => props.theme.current.secondary.shades[10]};
    transform: scaleY(0);
    animation: ${scaleAnimation('y', 1)} 300ms ease 1 forwards;
    transform-origin: top;
  }

  &:hover {
    &::before {
      animation: ${scaleAnimation('y', 0)} 300ms ease 1 forwards;
      transform-origin: bottom;
    }
  }

  &:focus {
    &::before {
      animation: ${scaleAnimation('x', 0)} 300ms ease 1 forwards;
    }
  }
`;
