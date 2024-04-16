import React, { ChangeEvent, useState } from 'react';
import * as Styled from './styled.ts';
import { ITextAreaProps } from './types.ts';

export const TextArea: React.FC<ITextAreaProps> = (props) => {
  const { label, required, maxLength } = props;
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    props.onChange?.call(null, e);
  };

  return (
    <Styled.FieldWrapperStyled label={label} required={required}>
      <Styled.TextAreaStyled onChange={handleChange} {...props} />
      {maxLength && (
        <Styled.MaxLengthLabel>
          {value.length} / {maxLength}
        </Styled.MaxLengthLabel>
      )}
    </Styled.FieldWrapperStyled>
  );
};
