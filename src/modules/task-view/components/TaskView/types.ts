import { ITaskDescriptionProps } from '../TaskDescription/types.ts';
import { ITaskTagsProps } from '../TaskTags/types.ts';
import { ITaskTitleProps } from '../TaskTitle/types.ts';

export type TTaskViewProps = ITaskTitleProps &
  ITaskDescriptionProps &
  ITaskTagsProps;
