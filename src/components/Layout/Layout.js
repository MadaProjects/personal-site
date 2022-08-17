import * as React from 'react';
import { useEffect } from 'react';

import '@fontsource/anonymous-pro';

import '../../styles/global.css';
import * as layoutStyles from './Layout.module.scss';
import { Header } from '../Header/Header';

export const Layout = ({ children }) => {
  useEffect(() => {
    import('flowbite');
  }, []);

  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
