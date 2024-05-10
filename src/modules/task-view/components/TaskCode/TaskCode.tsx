import { CodeEditor } from '@src/components/CodeEditor';
import React from 'react';
import { ITaskCodeProps } from './types.ts';

export const TaskCode: React.FC<ITaskCodeProps> = ({ code }) => {
  return <CodeEditor readOnly value={code} />;
};
