import { ITheme, ThemeTypes } from '@src/types';

export const ColorThemes: Record<ThemeTypes, ITheme> = {
  light: {
    primary: { default: '#002B5F' },
    secondary: { default: '#4D6B8F' },
    brand: { default: '#00A6FF' },
    success: { default: '#00CF6C' },
  },
  dark: {
    primary: { default: '' },
    secondary: { default: '' },
    brand: { default: '' },
    success: { default: '' },
  },
};
