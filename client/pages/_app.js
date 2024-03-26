import '../styles/globals.css';
import { NFTMarketplaceProvider } from '../context/NFTMarketplaceContext';
import { Navbar, Footer } from '../components/components_index';
import React, { useState } from 'react';
import images from '../img';

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
        <button onClick={toggleTheme} className='themeButton'></button>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </NFTMarketplaceProvider>
    </div>
  );
};

export default MyApp;
