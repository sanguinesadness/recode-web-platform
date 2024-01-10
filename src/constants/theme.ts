import { ITheme, ThemeTypes } from '@src/types';

export const ColorThemes: Record<ThemeTypes, ITheme> = {
  light: {
    primary: { default: '#002B5F' },
    secondary: { default: '#4D6B8F' },
    brand: {
      default: '#00A6FF',
      shades: {
        '10': '#0095E5',
        '20': '#0090DE',
        '30': '#007ABB',
        '40': '#00679E',
      },
    },
    success: { default: '#00CF6C' },
  },
  dark: {
    primary: { default: '' },
    secondary: { default: '' },
    brand: { default: '' },
    success: { default: '' },
  },
};
