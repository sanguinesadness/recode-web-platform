import styled from 'styled-components';

export const EditorPageWrapper = styled.div(() => ({
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 20px)',
  gap: '10px',
}));

export const EditPageBody = styled.div(() => ({
  display: 'flex',
  flex: '1',
}));

export const ResizeButton = styled.div(() => ({
  alignSelf: 'center',
  cursor: 'ew-resize',
  padding: '10px 0',
}));
