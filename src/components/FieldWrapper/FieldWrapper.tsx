import React from 'react';
import * as Styled from './styled.ts';
import { IFieldWrapperProps } from './types.ts';

export const FieldWrapper: React.FC<IFieldWrapperProps> = ({
  label,
  required,
  className,
  onClick,
  children,
}) => {
  return (
    <Styled.FieldWrapperStyled className={className} onClick={onClick}>
      {label && (
        <Styled.FieldWrapperLabel>
          {label}
          {required && <span>&nbsp;*</span>}
        </Styled.FieldWrapperLabel>
      )}
      {children}
    </Styled.FieldWrapperStyled>
  );
};
