import { ITag } from '@src/models/tags';
import { ReactNode } from 'react';

export interface ITagsSelectProps {
  tags: ITag[];
  values: string[];
  onChange?: (tagsIds: string[]) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  customTrigger?: ReactNode;
}
