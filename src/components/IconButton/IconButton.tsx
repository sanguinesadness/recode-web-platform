import { mapIconTypeToComponent } from '@src/utils';
import React from 'react';
import * as Styled from './styled.ts';
import { IIconButtonProps } from './types.ts';

export const IconButton: React.FC<IIconButtonProps> = ({
  iconType,
  onClick,
  disabled,
  className,
  ...iconProps
}) => {
  const IconComponent = mapIconTypeToComponent[iconType];

  const handleClick = (): void => {
    if (disabled) return;
    onClick && onClick();
  };

  return (
    <Styled.IconButtonStyled onClick={handleClick} className={className}>
      <IconComponent {...iconProps} />
    </Styled.IconButtonStyled>
  );
};
