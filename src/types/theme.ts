export enum ThemeTypes {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface ITheme {
  white: IColor;
  black: IColor;
  primary: IColor;
  secondary: IColor;
  brand: IColor;
  success: IColor;
}

export interface IColor {
  default: string;
  shades?: IColorShades;
}

export interface IColorShades {
  10?: string;
  20?: string;
  30?: string;
  40?: string;
  50?: string;
  60?: string;
  70?: string;
  80?: string;
  90?: string;
}
