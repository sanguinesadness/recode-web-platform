import { ITheme } from '@src/types';

export interface ITag {
  id: string;
  text: string;
  color: keyof ITheme;
}
