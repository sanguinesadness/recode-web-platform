import React from 'react';
import { useTheme } from 'styled-components';

export const ThemeSwitcher: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <div>Theme switcher</div>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};
