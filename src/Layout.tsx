import React from 'react';
import Navbar from './components/NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <Navbar />
      <div className="content" style={{ backgroundColor: '#000000' }}>{children}</div>
    </div>
  );
};

export default Layout;
