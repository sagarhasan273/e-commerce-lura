import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ShoppingCartIcon } from 'lucide-react';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Fixed Cart Button for Mobile */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <a 
          href="/cart" 
          className="btn btn-primary h-12 w-12 rounded-full flex items-center justify-center shadow-lg"
        >
          <ShoppingCartIcon size={20} />
        </a>
      </div>
    </div>
  );
};

export default Layout;