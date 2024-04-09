import { TextWithIcon } from '@src/components/TextWithIcon';
import { EIconTypes } from '@src/constants';
import React from 'react';
import * as Styled from './styled.ts';

export const TaskPreview: React.FC = () => {
  return (
    <Styled.CardStyled
      headerContent={
        <Styled.CardHeader>
          <TextWithIcon iconType={EIconTypes.LANDSCAPE} text="Live Preview" />
        </Styled.CardHeader>
      }
    >
      <Styled.CardBody>hello world</Styled.CardBody>
    </Styled.CardStyled>
  );
};
