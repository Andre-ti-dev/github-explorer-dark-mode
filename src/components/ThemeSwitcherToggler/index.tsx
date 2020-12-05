import React from 'react';
import { useThemeSwitcher } from '../../contexts/ThemeSwitcher';

import { SwitchToggler } from './styles';

const ThemeSwitcherToggler: React.FC = () => {
  const { theme, toggleTheme } = useThemeSwitcher();
  return (
    <SwitchToggler dark={theme === 'dark'} type="button" onClick={toggleTheme}>
      <span />
    </SwitchToggler>
  );
};

export default ThemeSwitcherToggler;
