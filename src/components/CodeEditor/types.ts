import type { BasicSetupOptions } from '@uiw/codemirror-extensions-basic-setup';
import { ReactCodeMirrorProps } from '@uiw/react-codemirror/src';

export interface ICodeEditorProps extends ReactCodeMirrorProps {
  className?: string;
  options?: BasicSetupOptions;
}
