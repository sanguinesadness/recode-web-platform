import styled from 'styled-components';

export const FieldWrapperStyled = styled.div(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  height: '45px',
  padding: '0 18px',
  borderRadius: '10px',
  border: `1px solid ${theme.current.secondary.shades['40']}`,

  '*': {
    fontSize: '14px',
  },
}));

export const FieldWrapperLabel = styled.div(({ theme }) => ({
  position: 'absolute',
  fontSize: '12px',
  top: '-6px',
  left: '15px',
  zIndex: 5,
  background: theme.current.white.default,
  padding: '0 4px',

  '> span': {
    color: theme.current.red.default,
  },
}));
