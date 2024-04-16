import { Card } from '@src/components/Card';
import styled from 'styled-components';

export const CardStyled = styled(Card)<{ flex?: number }>(({ flex }) => ({
  flex: flex,
  overflow: 'scroll',
  maxHeight: 'calc(100vh - 90px)',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
}));

export const CardBody = styled.div(() => ({
  padding: '30px 40px',
}));

export const CardHeader = styled.div(() => ({
  padding: '15px 40px',
}));
