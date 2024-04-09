import { Card } from '@src/components/Card';
import styled from 'styled-components';

export const CardStyled = styled(Card)(() => ({
  flex: 3,
}));

export const CardBody = styled.div(() => ({
  padding: '30px 40px',
}));

export const CardHeader = styled.div(() => ({
  padding: '15px 40px',
}));
