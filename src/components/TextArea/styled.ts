import { FieldWrapper } from '@src/components/FieldWrapper';
import styled from 'styled-components';

export const FieldWrapperStyled = styled(FieldWrapper)(() => ({
  height: 'auto',
  padding: '14px 18px',
  flexDirection: 'column',
  gap: '10px',
}));

export const TextAreaStyled = styled.textarea(({ theme }) => ({
  border: 'unset',
  outline: 'unset',
  fontFamily: 'inherit',
  flex: 1,
  color: theme.current.primary.default,
  resize: 'none',

  '&::placeholder': {
    color: theme.current.secondary.shades[80],
  },
}));

export const MaxLengthLabel = styled.div(({ theme }) => ({
  color: theme.current.secondary.shades[80],
  fontSize: '12px',
  alignSelf: 'flex-end',
}));
