import * as React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';

import '@fontsource/anonymous-pro';
import '../../styles/global.css';
import './Layout.scss';
import { Header } from '../Header/Header';

export const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const handleSetDarkMode = () => {
    if (darkMode) {
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  const darkModeClass = darkMode ? 'dark bg-primary' : 'bg-white';
  const mainClass = `${darkModeClass}`;

  return (
    <div className={mainClass} data-testid='layoutWrapper'>
      <a className='sr-only' href='#main'>
        Skip to Main Content
      </a>
      <Header onDarkModeClick={handleSetDarkMode} />
      {children}
    </div>
  );
};
