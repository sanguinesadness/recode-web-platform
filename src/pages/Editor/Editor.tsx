import { MainHeader } from '@src/modules/MainHeader';
import React from 'react';
import * as Styled from './styled.ts';

export const Editor: React.FC = () => {
  return (
    <Styled.EditorPageWrapper>
      <MainHeader />
    </Styled.EditorPageWrapper>
  );
};
