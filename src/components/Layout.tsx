import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* You can add a header or footer here later */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
