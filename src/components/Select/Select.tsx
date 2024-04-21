import { AngleDownIcon } from '@src/assets';
import { Popover } from '@src/components/Popover';
import { SelectOption } from '@src/components/Select/SelectOption.tsx';
import React, { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import {
  DEFAULT_SELECT_PLACEHOLDER,
  EMPTY_SELECT_RESULT_TEXT,
} from './constants.ts';
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

  useEffect(() => {
    setSelectedValue(value ?? null);
  }, [value]);

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
          <Styled.FieldWrapperStyled
            label={label}
            required={required}
            onClick={handleOpenedToggle}
          >
            {selectedOption?.label ? (
              <div>{selectedOption.label}</div>
            ) : (
              <Styled.SelectPlaceholder>
                {placeholder ?? DEFAULT_SELECT_PLACEHOLDER}
              </Styled.SelectPlaceholder>
            )}
            <Styled.SelectIconWrapper $rotated={isOpened}>
              <AngleDownIcon
                color={current.secondary.default}
                width={12}
                height={12}
              />
            </Styled.SelectIconWrapper>
          </Styled.FieldWrapperStyled>
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
        <Styled.EmptyView>{EMPTY_SELECT_RESULT_TEXT}</Styled.EmptyView>
      )}
    </Popover>
  );
};
