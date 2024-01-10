import 'reset-css';
import { ThemeProviderWrapper } from './contexts/theme';
import { AppWrapper } from './styled.ts';

function App() {
  return (
    <ThemeProviderWrapper>
      <AppWrapper>hello world</AppWrapper>
    </ThemeProviderWrapper>
  );
}

export default App;
