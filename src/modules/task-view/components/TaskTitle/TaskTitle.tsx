import { Icon } from '@src/components/Icon';
import { EIconTypes } from '@src/constants';
import { complexityIdToIconTypeMap } from '@src/modules/task-view/constants';
import React from 'react';
import { useTheme } from 'styled-components';
import * as Styled from './styled.ts';
import { ITaskTitleProps } from './types.ts';

export const TaskTitle: React.FC<ITaskTitleProps> = ({
  title,
  number,
  complexityId,
  isLiked,
  isSolved,
}) => {
  const { current } = useTheme();

  return (
    <Styled.TaskTitleStyled>
      {complexityId && (
        <Icon iconType={complexityIdToIconTypeMap[complexityId]} />
      )}
      {isSolved && <Icon iconType={EIconTypes.COMMENT_CHECK} />}
      {number && <Styled.TaskNumber>#{number}</Styled.TaskNumber>}
      <Styled.TaskTitle>{title}</Styled.TaskTitle>
      <Styled.LikeButton
        width={26}
        height={26}
        iconType={isLiked ? EIconTypes.HEART_SOLID : EIconTypes.HEART}
        color={current.red.default}
      />
    </Styled.TaskTitleStyled>
  );
};
