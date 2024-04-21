import { ITag } from '@src/models/tags';
import { ReactNode } from 'react';

export interface ITagsSelectProps {
  tags: ITag[];
  onChange?: (tags: ITag[]) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  customTrigger?: ReactNode;
}
