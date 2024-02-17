import styled from 'styled-components';
import { ISeparatorProps } from './types.ts';

export const SeparatorStyled = styled.div<Pick<ISeparatorProps, 'height'>>(
  ({ height }) => ({
    display: 'block',
    height: `${height}px`,
  }),
);
