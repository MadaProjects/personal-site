import * as React from 'react';
import { useEffect, useState } from 'react';

import '@fontsource/anonymous-pro';

import '../../styles/global.css';
import * as layoutStyles from './Layout.module.scss';
import { Header } from '../Header/Header';

export const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    import('flowbite');
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStorage.setItem('darkModePeterMada', true);
      setDarkMode(true);
    } else {
      localStorage.setItem('darkModePeterMada', false);
      setDarkMode(false);
    }
  }, []);

  const handleSetDarkMode = () => {
    if (darkMode) {
      localStorage.setItem('darkModePeterMada', false);
      setDarkMode(false);
    } else {
      localStorage.setItem('darkModePeterMada', true);
      setDarkMode(true);
    }
  };

  return (
    <main className={darkMode ? 'dark bg-primary' : 'bg-white'}>
      <Header onDarkModeClick={handleSetDarkMode} />
      {children}
    </main>
  );
};
