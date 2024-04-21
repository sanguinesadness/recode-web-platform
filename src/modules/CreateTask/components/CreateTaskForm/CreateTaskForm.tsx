import { Button } from '@src/components/Button';
import { CodeArea } from '@src/components/CodeArea';
import { FormButtons } from '@src/components/FormButtons';
import { Select } from '@src/components/Select';
import { TagsSelect } from '@src/components/TagsSelect';
import { mockTaskTags } from '@src/components/TagsSelect/__mocks__/constants.ts';
import { TextArea } from '@src/components/TextArea';
import { TextInput } from '@src/components/TextInput';
import { useFileClipboardPaste } from '@src/hooks/useFileClipboardPaste';
import {
  complexitySelectOptions,
  languageSelectOptions,
} from '@src/modules/CreateTask/components/CreateTaskForm/constants.tsx';
import { ICreateTaskFormProps } from '@src/modules/CreateTask/components/CreateTaskForm/types.ts';
import { CREATE_TASK_STORE_INITIAL_STATE } from '@src/stores/createTask';
import { ICreateTaskStoreValues } from '@src/stores/createTask/types.ts';
import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import * as Styled from './styled.ts';

export const CreateTaskForm: React.FC<ICreateTaskFormProps> = ({
  onValuesChange,
}) => {
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const { values, setFieldValue, setValues, handleSubmit, handleReset } =
    useFormik<ICreateTaskStoreValues>({
      initialValues: CREATE_TASK_STORE_INITIAL_STATE,
      onReset: () => setValues(CREATE_TASK_STORE_INITIAL_STATE),
      onSubmit: (values) => {
        console.log({ values });
      },
    });

  useEffect(() => {
    onValuesChange(values);
  }, [values]);

  useFileClipboardPaste((fileUrl: string) => {
    const textarea = descriptionRef.current;
    if (!textarea) return;

    const markdownImg = `\n\n![Uploaded Image](${fileUrl})\n\n`;
    const { selectionStart, selectionEnd } = textarea;

    const newText =
      textarea.value.substring(0, selectionStart) +
      markdownImg +
      textarea.value.substring(selectionEnd);

    void setFieldValue('description', newText);
  });

  return (
    <Styled.CreateTaskFormStyled onSubmit={handleSubmit}>
      <TextInput
        placeholder="The title of your task goes here..."
        label="Task title"
        required
        value={values.title}
        onChange={(e) => setFieldValue('title', e.target.value)}
      />
      <Styled.FormRow>
        <Select
          label="Complexity"
          placeholder="How hard will it be?"
          required
          value={values.complexityId}
          onChange={(value) => setFieldValue('complexityId', value)}
          options={complexitySelectOptions}
        />
        <Select
          label="Language"
          placeholder="Java or maybe C++?"
          required
          value={values.languageId}
          onChange={(value) => setFieldValue('languageId', value)}
          options={languageSelectOptions}
        />
      </Styled.FormRow>
      <TagsSelect
        label="Tags"
        placeholder="Choose up to 10 tags..."
        values={values.tagsIds}
        onChange={(value) => setFieldValue('tagsIds', value)}
        required
        tags={mockTaskTags}
      />
      <TextArea
        textAreaRef={descriptionRef}
        required
        label="Description"
        placeholder="Describe your cool task here. Do not forget to include links, some notes, blocks of code, quotes etc. "
        value={values.description}
        onChange={(e) => setFieldValue('description', e.target.value)}
        rows={20}
        maxLength={2000}
      />
      <CodeArea
        label="Code"
        placeholder="// Here you can write some comments,
// definitions for classes, tips and so on."
        minHeight="400px"
        value={values.code}
        onChange={(value) => setFieldValue('code', value)}
        options={{
          highlightActiveLineGutter: false,
          highlightActiveLine: false,
        }}
      />
      <FormButtons
        cancelButton={
          <Button type="button" colorType="secondary" onClick={handleReset}>
            Reset
          </Button>
        }
        secondaryButton={
          <Button colorType="brand" disabled>
            Save
          </Button>
        }
        primaryButton={
          <Button type="submit" colorType="success">
            Save and Send
          </Button>
        }
      />
    </Styled.CreateTaskFormStyled>
  );
};
