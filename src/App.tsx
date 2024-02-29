import 'reset-css';
import { Router } from '@src/modules/Router';
import { ThemeProviderWrapper } from './contexts/theme';
import { AppWrapper } from './styled.ts';

function App() {
  return (
    // eslint-disable-next-line
    // @ts-ignore
    <ThemeProviderWrapper>
      <AppWrapper id="app">
        <Router />
      </AppWrapper>
    </ThemeProviderWrapper>
  );
}

export default App;
