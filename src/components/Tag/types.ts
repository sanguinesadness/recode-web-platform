import { ITag } from '@src/models/tags';

export type TTagProps = Omit<ITag, 'id'> & {
  onClick?: VoidFunction;
};
