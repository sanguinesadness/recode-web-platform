import { Select } from '@src/components/Select';
import React from 'react';
import * as Styled from './styled.ts';

export const LanguageSelect: React.FC = () => {
  return (
    <Styled.LanguageSelectStyled>
      <Select
        value="typescript"
        options={[
          {
            value: 'typescript',
            label: 'Typescript',
          },
          {
            value: 'java',
            label: 'Java',
          },
          {
            value: 'c#',
            label: 'C#',
          },
          {
            value: 'javascript',
            label: 'Javascript',
          },
        ]}
      />
    </Styled.LanguageSelectStyled>
  );
};
