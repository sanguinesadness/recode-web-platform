import { mockTaskTags } from '@src/components/TagsSelect/__mocks__/constants.ts';
import { TextWithIcon } from '@src/components/TextWithIcon';
import { EIconTypes } from '@src/constants';
import { useTagsSelector } from '@src/hooks';
import { TaskView } from '@src/modules/task-view';
import { useCreateTaskStore } from '@src/stores/createTask';
import React from 'react';
import * as Styled from '../CreateTask/styled.ts';

export const TaskPreview: React.FC = () => {
  const { title, complexityId, description, tagsIds } = useCreateTaskStore(
    (state) => state,
  );

  const tags = useTagsSelector(mockTaskTags, tagsIds);

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
        <TaskView
          title={title}
          complexityId={complexityId}
          description={description}
          tags={tags}
        />
      </Styled.CardBody>
    </Styled.CardStyled>
  );
};
