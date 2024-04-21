import { MarkdownText } from '@src/components/MarkdownText';
import { TextWithIcon } from '@src/components/TextWithIcon';
import { EIconTypes } from '@src/constants';
import { useCreateTaskStore } from '@src/stores/createTask';
import React from 'react';
import * as Styled from '../CreateTask/styled.ts';

export const TaskPreview: React.FC = () => {
  const { description } = useCreateTaskStore((state) => state);

  return (
    <Styled.CardStyled
      flex={4}
      headerContent={
        <Styled.CardHeader>
          <TextWithIcon iconType={EIconTypes.LANDSCAPE} text="Live Preview" />
        </Styled.CardHeader>
      }
    >
      <Styled.CardBody>
        <MarkdownText text={description} />
      </Styled.CardBody>
    </Styled.CardStyled>
  );
};
