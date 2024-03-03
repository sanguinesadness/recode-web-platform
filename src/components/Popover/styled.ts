import { BOUNCE_EASE_FN } from '@src/constants';
import styled from 'styled-components';
import { TPopoverPosition } from './types.ts';

export const TriggerWrapper = styled.div(() => ({
  display: 'inline-block',
  width: '100%',
}));

export const PopoverStyled = styled.div<
  TPopoverPosition & { $isOpened: boolean }
>(({ theme, top, left, $isOpened }) => ({
  position: 'absolute',
  top: top,
  left: left,
  background: theme.current.white.shades['50'],
  backdropFilter: 'blur(10px)',
  padding: '10px',
  borderRadius: '8px',
  boxShadow: `0 0 15px ${theme.current.primary.shades['30']}`,
  transition: `200ms ${BOUNCE_EASE_FN} all`,
  transform: !$isOpened ? 'scale(0.5)' : 'scale(1.0)',
  opacity: !$isOpened ? '0' : '1',
  pointerEvents: $isOpened ? 'auto' : 'none',
}));
