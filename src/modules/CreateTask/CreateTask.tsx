import { TextWithIcon } from '@src/components/TextWithIcon';
import { EIconTypes } from '@src/constants';
import {
  ICreateTaskStoreValues,
  useCreateTaskStore,
} from '@src/stores/createTask';
import React from 'react';
import { CreateTaskForm } from './components/CreateTaskForm';
import * as Styled from './styled.ts';

export const CreateTask: React.FC = () => {
  const setFormValues = useCreateTaskStore((state) => state.setValues);

  const handleChangeFormValues = (values: ICreateTaskStoreValues) => {
    setFormValues(values);
  };

  return (
    <Styled.CardStyled
      flex={3}
      headerContent={
        <Styled.CardHeader>
          <TextWithIcon text="Create a Task" iconType={EIconTypes.APPS_ADD} />
        </Styled.CardHeader>
      }
    >
      <Styled.CardBody>
        <CreateTaskForm onValuesChange={handleChangeFormValues} />
      </Styled.CardBody>
    </Styled.CardStyled>
  );
};
