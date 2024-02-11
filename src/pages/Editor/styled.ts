import styled from 'styled-components';

export const EditorPageWrapper = styled.div(() => ({
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  flex: '1',
}));

export const EditPageBody = styled.div(() => ({
  display: 'flex',
  gap: '10px',
  flex: '1',

  '& > div': {
    flex: '1',
  },
}));
