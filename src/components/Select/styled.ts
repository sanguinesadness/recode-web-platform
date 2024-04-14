import { FieldWrapper } from '@src/components/FieldWrapper';
import styled from 'styled-components';

export const SelectStyled = styled(FieldWrapper)(() => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '15px',
  cursor: 'pointer',
  userSelect: 'none',
}));

export const SelectOptionsList = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const SelectPlaceholder = styled.div(({ theme }) => ({
  color: theme.current.secondary.shades[80],
}));

export const SelectOptionStyled = styled.div(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '14px',
  borderRadius: '8px',
  padding: '10px',
  transition: '200ms ease all',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '30px',
  justifyContent: 'space-between',

  '&:hover': {
    background: theme.current.secondary.shades['10'],
  },
}));

export const SelectOptionIconWrapper = styled.div<{ $visible: boolean }>(
  ({ $visible }) => ({
    width: '10px',
    height: '10px',

    svg: {
      display: $visible ? 'block' : 'none',
    },
  }),
);

export const SelectIconWrapper = styled.div<{ $rotated?: boolean }>(
  ({ $rotated }) => ({
    svg: {
      transition: '200ms ease transform',
      transform: `rotate(${$rotated ? 180 : 0}deg)`,
    },
  }),
);
