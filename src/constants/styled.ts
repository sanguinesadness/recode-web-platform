import styled, { keyframes } from 'styled-components';

export const BOUNCE_EASE_FN = 'cubic-bezier(.47,1.64,.41,.8)';

export const FlexCentered = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const scaleAnimation = (dimension: 'x' | 'y', from: 0 | 1) => {
  const isHorizontal = dimension === 'x';
  const to = Math.abs(from - 1);

  return keyframes`
      0% {
          transform: ${isHorizontal ? `scaleX(${from})` : `scaleY(${from})`};
      }

      100% {
          transform: ${isHorizontal ? `scaleX(${to})` : `scaleY(${to})`};
      }
  `;
};
