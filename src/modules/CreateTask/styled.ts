import { Card } from '@src/components/Card';
import styled from 'styled-components';

export const CardStyled = styled(Card)<{ flex?: number }>(({ flex }) => ({
  flex: flex,
}));

export const CardBody = styled.div(() => ({
  padding: '30px 40px',
  overflow: 'scroll',
  maxHeight: 'calc(100vh - 200px)',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
}));

export const CardHeader = styled.div(() => ({
  padding: '15px 40px',
}));
