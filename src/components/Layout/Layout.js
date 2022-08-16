import * as React from 'react';
import '@fontsource/anonymous-pro';
import * as layoutStyles from './Layout.module.scss';

export const Layout = ({ children }) => {
  return <main>{children}</main>;
};
