import { Icon } from '@src/components/Icon';
import { EIconTypes } from '@src/constants';
import React from 'react';
import * as Styled from './styled.ts';
import { ISelectOptionProps } from './types.ts';

export const SelectOption: React.FC<ISelectOptionProps> = ({
  option,
  onClick,
  isSelected,
}) => {
  return (
    <Styled.SelectOptionStyled onClick={onClick}>
      <div>{option.label}</div>
      <Styled.SelectOptionIconWrapper $visible={isSelected}>
        <Icon iconType={EIconTypes.CHECK} width={10} height={10} />
      </Styled.SelectOptionIconWrapper>
    </Styled.SelectOptionStyled>
  );
};
