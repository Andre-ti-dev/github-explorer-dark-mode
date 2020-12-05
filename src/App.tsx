import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useThemeSwitcher } from './contexts/ThemeSwitcher';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import ThemeSwitcherToggler from './components/ThemeSwitcherToggler';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  const { theme } = useThemeSwitcher();
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <BrowserRouter>
        <Routes />
        <ThemeSwitcherToggler />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
