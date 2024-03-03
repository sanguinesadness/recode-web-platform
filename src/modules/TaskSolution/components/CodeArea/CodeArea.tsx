import React, { useState } from 'react';
import { mockCodeAreaValue } from '../../__mocks__/constants.ts';
import * as Styled from './styled.ts';

export const CodeArea: React.FC = () => {
  const [code, setCode] = useState<string>(mockCodeAreaValue);

  return (
    <Styled.CodeAreaStyled
      value={code}
      onChange={setCode}
      height="calc(100vh - 270px)"
    />
  );
};
