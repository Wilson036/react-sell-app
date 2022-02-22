import React, { ReactChild, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Nav } from './Nav';

const Layout: React.FC<{ children: ReactChild }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Nav />
      {children}
    </>
  );
};

export default Layout;
