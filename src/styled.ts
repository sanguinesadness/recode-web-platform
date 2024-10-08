import styled from 'styled-components';

export const AppWrapper = styled.div(({ theme }) => ({
  fontFamily: '"Nunito", sans-serif',
  fontSize: 16,
  color: theme.current.primary.default,
  background: `linear-gradient(180deg, ${theme.current.primary.default} 0%, ${theme.current.brand.default} 100%)`,
  height: '100vh',
  width: '100vw',

  strong: {
    fontWeight: 700,
  },

  a: {
    textDecoration: 'none',
    position: 'relative',
    outline: 'none',
    cursor: 'pointer',
  },

  code: {
    fontFamily: '"Fira Mono", monospace',
    fontStyle: 'normal',
    fontSize: '14px',
    padding: '1px 3px',
    background: theme.current.secondary.shades['20'],
    border: `1px solid ${theme.current.secondary.shades['50']}`,
    borderRadius: '5px',
  },

  pre: {
    lineHeight: '22px',
    fontSize: '14px',
    padding: '10px',
    margin: '10px 0',
    background: theme.current.secondary.shades['10'],
    borderRadius: '5px',
    display: 'inline-flex',

    code: {
      background: 'none',
      border: 'none',
      borderRadius: 'none',
      padding: 'none',
      fontSize: 'inherit',
    },
  },

  blockquote: {
    position: 'relative',
    padding: '5px 20px',
    margin: '10px 0',

    '&::before': {
      display: 'block',
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '4px',
      background: theme.current.secondary.shades['40'],
      borderRadius: '2px',
    },
  },
}));
