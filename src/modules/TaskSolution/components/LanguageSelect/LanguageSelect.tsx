import { AngleDownIcon } from '@src/assets';
import { Popover } from '@src/components/Popover';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import * as Styled from './styled.ts';

export const LanguageSelect: React.FC = () => {
  const { current } = useTheme();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleOpenedToggle = () => {
    setIsOpened((prev) => !prev);
  };

  const handleClose = () => setIsOpened(false);

  return (
    <Popover
      isOpened={isOpened}
      onOutsideClick={handleClose}
      offsetTop={5}
      trigger={
        <Styled.LanguageSelectStyled onClick={handleOpenedToggle}>
          <div>Typescript</div>
          <Styled.IconWrapper rotated={isOpened}>
            <AngleDownIcon
              color={current.secondary.default}
              width={12}
              height={12}
            />
          </Styled.IconWrapper>
        </Styled.LanguageSelectStyled>
      }
    >
      Popover content
    </Popover>
  );
};
