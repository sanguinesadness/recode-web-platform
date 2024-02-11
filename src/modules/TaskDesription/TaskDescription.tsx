import { Card } from '@src/components/Card';
import { Icon } from '@src/components/Icon';
import { EIconTypes } from '@src/constants';
import React from 'react';
import * as Styled from './styled.ts';

export const TaskDescription: React.FC = () => {
  return (
    <Card>
      <Styled.CardContent>
        <Icon type={EIconTypes.COMMENT_CHECK} />
      </Styled.CardContent>
    </Card>
  );
};
