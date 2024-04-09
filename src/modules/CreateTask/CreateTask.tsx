import { TextWithIcon } from '@src/components/TextWithIcon';
import { EIconTypes } from '@src/constants';
import React from 'react';
import * as Styled from './styled.ts';

export const CreateTask: React.FC = () => {
  return (
    <Styled.CardStyled
      headerContent={
        <Styled.CardHeader>
          <TextWithIcon
            text="Create a Task"
            iconType={EIconTypes.PLUS_CIRCLE}
          />
        </Styled.CardHeader>
      }
    >
      <Styled.CardBody>hello world</Styled.CardBody>
    </Styled.CardStyled>
  );
};
