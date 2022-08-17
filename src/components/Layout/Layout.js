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
    console.log(localStorage.getItem('darkModePeterMada'));
    if (localStorage.getItem('darkModePeterMada')) {
      setDarkMode(localStorage.getItem('darkModePeterMada'));
    }
  }, []);

  const handleSetDarkMode = () => {
    console.log('test');
    if (darkMode) {
      localStorage.setItem('darkModePeterMada', false);
      setDarkMode(false);
    } else {
      localStorage.setItem('darkModePeterMada', true);
      setDarkMode(true);
    }
  };

  return (
    <main className={darkMode ? 'dark' : ''}>
      <Header onDarkModeClick={handleSetDarkMode} />
      {children}
    </main>
  );
};
