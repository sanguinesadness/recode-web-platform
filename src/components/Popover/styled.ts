import styled from 'styled-components';
import { TPopoverPosition } from './types.ts';

export const TriggerWrapper = styled.div(() => ({
  display: 'inline-block',
}));

export const PopoverStyled = styled.div<TPopoverPosition>(
  ({ theme, top, left }) => ({
    position: 'absolute',
    top: top,
    left: left,
    background: theme.current.white.shades['50'],
    backdropFilter: 'blur(10px)',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: `0 0 15px ${theme.current.primary.shades['30']}`,
  }),
);
