import Head from 'next/head';

import '../styles/globals.css';
import { NFTMarketplaceProvider } from '../context/NFTMarketplaceContext';
import { Navbar, Footer } from '../components/components_index';
import { CgDarkMode } from 'react-icons/cg';
import React, { useState, useEffect } from 'react';

import authReducer from '../state';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: authReducer,
});

const App = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('light');
    }
  }, []);

  return (
    <div>
      <NFTMarketplaceProvider>
        <Head>
          <title>GlamChain</title>
          <link rel='icon' type='image/x-icon' href='./logo.png' />
        </Head>
        <Provider store={store}>
          <CgDarkMode
            onClick={toggleTheme}
            className='themeButton'
          ></CgDarkMode>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </NFTMarketplaceProvider>
    </div>
  );
};

export default App;
