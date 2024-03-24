import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import web3Model from 'web3modal';
import { ethers } from 'ethers';

import { NFTMarketplaceABI, NFTMarketplaceAddress } from './constants';

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  return (
    <NFTMarketplaceContext.Provider value={{}}>
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
