import React, { ChangeEvent, useState } from 'react';
import * as Styled from './styled.ts';
import { ITextAreaProps } from './types.ts';

export const TextArea: React.FC<ITextAreaProps> = ({
  textAreaRef,
  label,
  required,
  maxLength,
  ...props
}) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <Styled.FieldWrapperStyled label={label} required={required}>
      <Styled.TextAreaStyled
        ref={textAreaRef}
        onChange={handleChange}
        maxLength={maxLength}
        {...props}
      />
      {maxLength && (
        <Styled.MaxLengthLabel>
          {value.length} / {maxLength}
        </Styled.MaxLengthLabel>
      )}
    </Styled.FieldWrapperStyled>
  );
};
