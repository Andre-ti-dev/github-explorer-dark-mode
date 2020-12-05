import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

interface ThemeSwitcherContextData {
  theme: string;
  toggleTheme(): void;
}

const ThemeSwitcherContext = createContext<ThemeSwitcherContextData>(
  {} as ThemeSwitcherContextData,
);

export const ThemeSwitcherProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('@GithubExplorer:theme');
    if (storedTheme !== null) {
      setTheme(storedTheme);
    }
  }, []);

  function toggleTheme() {
    const selectedTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('@GithubExplorer:theme', selectedTheme);
    setTheme(selectedTheme);
  }

  return (
    <ThemeSwitcherContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeSwitcherContext.Provider>
  );
};

export function useThemeSwitcher(): ThemeSwitcherContextData {
  const context = useContext(ThemeSwitcherContext);
  return context;
}

ThemeSwitcherProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
