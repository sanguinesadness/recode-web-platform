export interface IMarkdownText {
  md: IMarkdownText[] | string;
  isBlockquote?: boolean;
  isCode?: boolean;
}
