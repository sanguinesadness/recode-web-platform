import { ColorThemes } from '@src/constants';
import { ThemeTypes } from '@src/types';
import React, { PropsWithChildren, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProviderComponent } from 'styled-components/macro';
import { IThemeContext } from './types.ts';

export const ThemeProviderWrapper: React.FC<
  PropsWithChildren<ThemeProviderComponent<IThemeContext>>
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
