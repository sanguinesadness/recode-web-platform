import styled from 'styled-components';

export const TaskTextStyled = styled.div(() => ({
  paddingRight: '10%',
  lineHeight: '24px',

  '& > p': {
    padding: '4px 0',
  },
}));

export const Notes = styled.div(() => ({
  padding: '20px 0',
}));
