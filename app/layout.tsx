import type { NextPage } from 'next';

import Header from '@components/layout/Header';

import '../styles/globals.css';

const RootLayout: NextPage = ({ children }) => {
  return (
    <html lang='uk'>
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
};

export default RootLayout;
