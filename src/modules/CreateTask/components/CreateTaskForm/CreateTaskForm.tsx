import { Select } from '@src/components/Select';
import { TextArea } from '@src/components/TextArea';
import { TextInput } from '@src/components/TextInput';
import React from 'react';
import {
  complexitySelectOptions,
  LanguageSelectOptions,
} from './constants.tsx';
import * as Styled from './styled.ts';

export const CreateTaskForm: React.FC = () => {
  return (
    <Styled.CreateTaskFormStyled>
      <TextInput
        placeholder="The title of your task goes here..."
        label="Task name"
        required
      />
      <Styled.FormRow>
        <Select
          label="Complexity"
          placeholder="How hard it'll be?"
          required
          options={complexitySelectOptions}
        />
        <Select
          label="Language"
          placeholder="Java or maybe C++?"
          required
          options={LanguageSelectOptions}
        />
      </Styled.FormRow>
      <Select
        label="Tags"
        placeholder="Choose up to 10 tags..."
        required
        options={[]}
      />
      <TextArea
        required
        label="Description"
        placeholder="Describe your cool task here. Do not forget to include links, some notes,
blocks of code, quotes etc. "
        rows={20}
        maxLength={2000}
      />
    </Styled.CreateTaskFormStyled>
  );
};
