import { ICodeEditorProps } from '@src/components/CodeEditor/types.ts';

export interface ICodeAreaProps extends ICodeEditorProps {
  label?: string;
  required?: boolean;
}
