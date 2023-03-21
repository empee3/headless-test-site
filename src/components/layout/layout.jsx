import React from 'react';
import * as layoutStyles from './layout.module.scss';

export default function Layout({ children }) {
  return <main className={layoutStyles.layout}>{children}</main>;
}
