import { FieldWrapper } from '@src/components/FieldWrapper';
import React from 'react';
import * as Styled from './styled.ts';
import { ITextInputProps } from './types.ts';

export const TextInput: React.FC<ITextInputProps> = ({
  label,
  required,
  ...props
}) => {
  return (
    <FieldWrapper label={label} required={required}>
      <Styled.TextInputStyled {...props} />
    </FieldWrapper>
  );
};
