import { IColor } from '@src/types';
import styled from 'styled-components';

export const TagStyled = styled.div<{
  $color: IColor;
  $isCursorPointer?: boolean;
}>(({ $color, $isCursorPointer }) => ({
  color: $color.shades[90],
  cursor: $isCursorPointer ? 'pointer' : 'default',
  fontWeight: 800,
  borderRadius: '8px',
  fontSize: '14px',
  background: $color.shades[10],
  padding: '7px 14px',
  whiteSpace: 'nowrap',
}));
