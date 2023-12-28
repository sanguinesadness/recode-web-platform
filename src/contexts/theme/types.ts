import { ITheme } from '@src/types';

export interface IThemeContext {
  toggleTheme: VoidFunction;
  current: ITheme;
}
