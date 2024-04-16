import { TextWithIcon } from '@src/components/TextWithIcon';
import { EIconTypes } from '@src/constants';
import React from 'react';
import { CreateTaskForm } from './components/CreateTaskForm';
import * as Styled from './styled.ts';

export const CreateTask: React.FC = () => {
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
        <CreateTaskForm />
      </Styled.CardBody>
    </Styled.CardStyled>
  );
};
