import { IColor } from '@src/types';
import styled from 'styled-components';

export const TaskTagsStyled = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  marginBottom: '20px',
}));

export const TaskTagStyled = styled.div<{ color: IColor }>(({ color }) => ({
  color: color.default,
  fontWeight: 700,
  borderRadius: '7px',
  fontSize: '14px',
  background: color.shades['10'],
  padding: '7px 14px',
}));
