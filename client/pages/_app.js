import '../styles/globals.css';
import { CgDarkMode } from "react-icons/cg";
import { NFTMarketplaceProvider } from '../context/NFTMarketplaceContext';
import { Navbar, Footer } from '../components/components_index';
import React, { useState } from 'react';

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div>
      <NFTMarketplaceProvider>
        <CgDarkMode onClick={toggleTheme} className='themeButton'>Toggle Theme</CgDarkMode>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NFTMarketplaceProvider>
    </div>
  );
};

export default MyApp;
