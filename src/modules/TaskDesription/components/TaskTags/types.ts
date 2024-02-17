import { ITheme } from '@src/types';

export interface ITaskTag {
  id: string;
  text: string;
  color: keyof ITheme;
}

export type TTaskTagProps = Omit<ITaskTag, 'id'>;

export interface ITaskTagsProps {
  tags: ITaskTag[];
}
