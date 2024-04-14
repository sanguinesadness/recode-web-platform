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
  required,
  label,
  placeholder,
  onChange,
  customTrigger,
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
            label={label}
            required={required}
            onClick={handleOpenedToggle}
          >
            {selectedOption?.label ? (
              <div>{selectedOption.label}</div>
            ) : (
              <Styled.SelectPlaceholder>
                {placeholder ?? 'Select option'}
              </Styled.SelectPlaceholder>
            )}
            <Styled.SelectIconWrapper $rotated={isOpened}>
              <AngleDownIcon
                color={current.secondary.default}
                width={12}
                height={12}
              />
            </Styled.SelectIconWrapper>
          </Styled.SelectStyled>
        )
      }
    >
      {options.length > 0 ? (
        <Styled.SelectOptionsList>
          {options.map((option: TSelectOption) => (
            <SelectOption
              key={option.value}
              isSelected={selectedValue === option.value}
              option={option}
              onClick={() => handleOptionSelect(option.value)}
            />
          ))}
        </Styled.SelectOptionsList>
      ) : (
        <Styled.EmptyView>Nothing to show :(</Styled.EmptyView>
      )}
    </Popover>
  );
};
