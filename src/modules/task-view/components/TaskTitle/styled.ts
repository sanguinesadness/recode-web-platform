import { IconButton } from '@src/components/IconButton';
import styled from 'styled-components';

export const TaskTitleStyled = styled.div(() => ({
  fontSize: '20px',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
}));

export const TaskNumber = styled.div(({ theme }) => ({
  color: theme.current.secondary.shades['80'],
}));

export const TaskTitle = styled.div(({ theme }) => ({
  color: theme.current.primary.default,
}));

export const LikeButton = styled(IconButton)(() => ({
  marginLeft: 'auto',
}));
