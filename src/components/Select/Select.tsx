import { AngleDownIcon } from '@src/assets';
import { Popover } from '@src/components/Popover';
import { SelectOption } from '@src/components/Select/SelectOption.tsx';
import React, { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import * as Styled from './styled.ts';
import { ISelectProps, TSelectOption } from './types.ts';

export const Select: React.FC<ISelectProps> = ({
  options,
  value,
  onChange,
  customTrigger,
  fullWidth,
}) => {
  const { current } = useTheme();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    value ?? null,
  );

  const selectedOption: TSelectOption | null = useMemo(
    () => options.find((option) => option.value === selectedValue) ?? null,
    [options, selectedValue],
  );

  const handleOpenedToggle = () => {
    setIsOpened((prev) => !prev);
  };

  const handleClose = () => setIsOpened(false);

  const handleOptionSelect = (value: string) => {
    setSelectedValue(value);
    onChange && onChange(value);
    setIsOpened(false);
  };

  return (
    <Popover
      isOpened={isOpened}
      onOutsideClick={handleClose}
      offsetTop={5}
      trigger={
        customTrigger ? (
          <div onClick={handleOpenedToggle}>{customTrigger}</div>
        ) : (
          <Styled.SelectStyled
            onClick={handleOpenedToggle}
            fullWidth={fullWidth}
          >
            <div>{selectedOption?.label ?? 'не выбрано'}</div>
            <Styled.IconWrapper $rotated={isOpened}>
              <AngleDownIcon
                color={current.secondary.default}
                width={12}
                height={12}
              />
            </Styled.IconWrapper>
          </Styled.SelectStyled>
        )
      }
    >
      <Styled.SelectOptionsList>
        {options.map((option: TSelectOption) => (
          <SelectOption
            key={option.value}
            option={option}
            onClick={() => handleOptionSelect(option.value)}
          />
        ))}
      </Styled.SelectOptionsList>
    </Popover>
  );
};
