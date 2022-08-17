import * as React from 'react';
import { useEffect, useState } from 'react';

import '@fontsource/anonymous-pro';

import '../../styles/global.css';
import './Layout.scss';
import { Header } from '../Header/Header';

export const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [paused, setPaused] = useState(false);

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

  useEffect(() => {
    if (localStorage.paused) {
      setPaused(true);
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

  const handlePauseClick = () => {
    if (paused) {
      localStorage.setItem('paused', false);
      setPaused(false);
    } else {
      localStorage.setItem('paused', true);
      setPaused(true);
    }
  };

  const darkModeClass = darkMode ? 'dark bg-primary' : 'bg-white';
  const pausedClass = paused ? 'paused' : '';
  const mainClass = `${darkModeClass} ${pausedClass}`;

  return (
    <main className={mainClass}>
      <Header
        onDarkModeClick={handleSetDarkMode}
        onPauseClick={handlePauseClick}
      />
      {children}
    </main>
  );
};
