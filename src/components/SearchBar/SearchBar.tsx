import { IconButton } from '@src/components/IconButton';
import { ISearchBarProps } from '@src/components/SearchBar/types.ts';
import { EIconTypes } from '@src/constants';
import React, { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import * as Styled from './styled.ts';

export const SearchBar: React.FC<ISearchBarProps> = ({
  onSubmit,
  ...props
}) => {
  const [value, setValue] = useState<string>('');
  const { current } = useTheme();

  const isEmpty = useMemo(() => !value.length, [value]);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter') {
      onSubmit && onSubmit(value);
    }
  };

  const handleResetValue = (): void => {
    setValue('');
  };

  return (
    <Styled.SearchBarStyled $isEmpty={isEmpty} onKeyDown={handleKeyDown}>
      <IconButton
        height={20}
        width={20}
        iconType={EIconTypes.SEARCH}
        color={!isEmpty ? current.primary.shades['90'] : void 0}
      />
      <Styled.SearchBarInput
        value={value}
        onChange={handleChangeValue}
        {...props}
      />
      {!isEmpty && (
        <IconButton
          color={current.primary.shades['90']}
          onClick={handleResetValue}
          height={20}
          width={20}
          iconType={EIconTypes.CROSS}
        />
      )}
    </Styled.SearchBarStyled>
  );
};
