import 'reset-css';
import { ThemeSwitcher } from '@src/components/ThemeSwitcher';
import { ThemeProviderWrapper } from './contexts/theme';
import { AppWrapper } from './styled.ts';

function App() {
  return (
    // eslint-disable-next-line
    // @ts-ignore
    <ThemeProviderWrapper>
      <AppWrapper>
        hello world v5
        <ThemeSwitcher />
      </AppWrapper>
    </ThemeProviderWrapper>
  );
}

export default App;
