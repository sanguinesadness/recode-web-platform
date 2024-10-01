import styled from 'styled-components';

// TODO: do smth with this copypaste
export const CreateTaskPageWrapper = styled.div(() => ({
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 20px)',
  gap: '10px',
}));

export const CreateTaskPageBody = styled.div(() => ({
  display: 'flex',
  gap: '10px',
  flex: '1',
}));
