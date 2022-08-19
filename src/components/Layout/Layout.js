import * as React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';

import '@fontsource/anonymous-pro';
import '../../styles/global.css';
import './Layout.scss';
import { Header } from '../Header/Header';

export const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [paused, setPaused] = useState(false);

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

  useEffect(() => {
    if (localStorage.paused) {
      setPaused(true);
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
