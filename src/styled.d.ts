import 'styled-components';
import { IThemeContext } from './contexts/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeContext {}
}
