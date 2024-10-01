import { RefObject, TextareaHTMLAttributes } from 'react';

export interface ITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  textAreaRef?: RefObject<HTMLTextAreaElement>;
}
