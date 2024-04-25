import { MarkdownText } from '@src/components/MarkdownText';
import React from 'react';
import { ITaskDescriptionProps } from './types.ts';

export const TaskDescription: React.FC<ITaskDescriptionProps> = ({
  description,
}) => {
  return <MarkdownText text={description} />;
};
