import { Icon } from '@src/components/Icon';
import { EIconTypes } from '@src/constants';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import * as Styled from './styled.ts';

export const TaskTitle: React.FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { current } = useTheme();

  const toggleLike = (): void => {
    setIsLiked((prev) => !prev);
  };

  return (
    <Styled.TaskTitleStyled>
      <Icon type={EIconTypes.COMMENT_CHECK} />
      <Styled.TaskName>Two sum</Styled.TaskName>
      <Styled.TaskCode>#ekr9h</Styled.TaskCode>
      <Styled.LikeButton
        width={26}
        height={26}
        onClick={toggleLike}
        type={isLiked ? EIconTypes.HEART_SOLID : EIconTypes.HEART}
        color={current.red.default}
      />
    </Styled.TaskTitleStyled>
  );
};
