import styled from 'styled-components';

export const TextWithIconStyled = styled.div<{ reversed?: boolean }>(
  ({ reversed }) => ({
    display: 'flex',
    flexDirection: reversed ? 'row-reverse' : 'row',
    alignItems: 'center',
    gap: '10px',
  }),
);

export const TextWrapper = styled.span(() => ({
  fontWeight: '500',
}));
