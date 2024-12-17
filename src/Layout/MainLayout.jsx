import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>
      
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
