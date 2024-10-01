import { FieldWrapper } from '@src/components/FieldWrapper';
import styled from 'styled-components';

export const FieldWrapperStyled = styled(FieldWrapper)(() => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '15px',
  cursor: 'pointer',
  userSelect: 'none',
  height: 'auto',
  paddingTop: '16px',
  paddingBottom: '16px',
}));

export const SelectPlaceholder = styled.div(({ theme }) => ({
  color: theme.current.secondary.shades[80],
}));

export const SelectIconWrapper = styled.div<{ $rotated?: boolean }>(
  ({ $rotated }) => ({
    svg: {
      transition: '200ms ease transform',
      transform: `rotate(${$rotated ? 180 : 0}deg)`,
    },
  }),
);

export const TagsList = styled.div(() => ({
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
}));

export const TagsGrid = styled.div(() => ({
  padding: '10px',
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
}));

export const EmptyTagsListMessage = styled.div(({ theme }) => ({
  fontWeight: 700,
  fontSize: '14px',
  color: theme.current.primary.shades[30],
}));
