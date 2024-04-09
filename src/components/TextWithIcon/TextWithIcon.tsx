import { Icon } from '@src/components/Icon';
import React from 'react';
import * as Styled from './styled.ts';
import { ITextWithIconProps } from './types.ts';

export const TextWithIcon: React.FC<ITextWithIconProps> = ({
  iconType,
  icon,
  text,
  reversed,
}) => {
  return (
    <Styled.TextWithIconStyled reversed={reversed}>
      {iconType ? <Icon type={iconType} /> : <>{icon}</>}
      <Styled.TextWrapper>{text}</Styled.TextWrapper>
    </Styled.TextWithIconStyled>
  );
};
