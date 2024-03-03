import { Select } from '@src/components/Select';
import React from 'react';

export const LanguageSelect: React.FC = () => {
  return (
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
  );
};
