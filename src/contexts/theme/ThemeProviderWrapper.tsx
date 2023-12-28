import { ColorThemes } from '@src/constants';
import { ThemeTypes } from '@src/types';
import React, { useMemo, useState } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  ThemeProviderComponent,
} from 'styled-components';
import { IThemeContext } from './types.ts';

export const ThemeProviderWrapper: React.FC<
  ThemeProviderComponent<IThemeContext>
> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeTypes>(ThemeTypes.LIGHT);
  const theme = useMemo(() => ColorThemes[themeType], [themeType]);

  const toggleThemeType = (): void => {
    setThemeType((prevState: ThemeTypes) => {
      return prevState === ThemeTypes.LIGHT
        ? ThemeTypes.DARK
        : ThemeTypes.LIGHT;
    });
  };

  const contextValue = { current: theme, toggleTheme: toggleThemeType };

  return (
    <StyledThemeProvider theme={contextValue}>{children}</StyledThemeProvider>
  );
};
