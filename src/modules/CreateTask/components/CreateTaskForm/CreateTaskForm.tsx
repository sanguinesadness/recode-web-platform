import { Button } from '@src/components/Button';
import { CodeArea } from '@src/components/CodeArea';
import { FormButtons } from '@src/components/FormButtons';
import { Select } from '@src/components/Select';
import { TagsSelect } from '@src/components/TagsSelect';
import { mockTaskTags } from '@src/components/TagsSelect/__mocks__/constants.ts';
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
          placeholder="How hard will it be?"
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
      <TagsSelect
        label="Tags"
        placeholder="Choose up to 10 tags..."
        required
        tags={mockTaskTags}
      />
      <TextArea
        required
        label="Description"
        placeholder="Describe your cool task here. Do not forget to include links, some notes, blocks of code, quotes etc. "
        rows={20}
        maxLength={2000}
      />
      <CodeArea
        label="Code"
        placeholder="// Here you can write some comments,
// definitions for classes, tips and so on."
        minHeight="400px"
        options={{
          highlightActiveLineGutter: false,
          highlightActiveLine: false,
        }}
      />
      <FormButtons
        cancelButton={<Button type="secondary">Reset</Button>}
        secondaryButton={<Button type="brand">Save</Button>}
        primaryButton={<Button type="success">Save and Send</Button>}
      />
    </Styled.CreateTaskFormStyled>
  );
};
