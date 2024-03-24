import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import axios from 'axios';
import { create as ipfsHttpClient } from 'ipfs-http-client';

import { NFTMarketplaceABI, NFTMarketplaceAddress } from './constants';

const client = ipfsHttpClient({
  host: 'infura-ipfs.io',
  port: 5001,
  protocol: 'https',
  headers: {},
});

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

const connectingWithSmartContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.error(
      'Something went wrong while connecting with smart contract: ' + error
    );
  }
};

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');

  // Function for testing connection to Smart Contract
  const checkContract = async () => {
    const contract = await connectingWithSmartContract();
    console.log(contract);
  };

  // Function for checking wallet connectivity
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return console.error('Install MetaMask!');

      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.error('No Account Found!');
      }
    } catch (error) {
      console.error(
        'Something went wrong while connecting to wallet: ' + error
      );
    }
  };

  // Function for connecting the wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.error('Install MetaMask!');

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(
        'Something went wrong while connecting the wallet: ' + error
      );
    }
  };

  // Function for uploading images to IPFS
  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({
        content: file,
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      return url;
    } catch (error) {
      console.error('Something went wrong while uploading to IPFS: ' + error);
    }
  };

  // Function for creating NFTs
  const createNFT = async (formInput, fileURL, router) => {
    try {
      const { name, description, price } = formInput;
      if (!name || !description || !price || !fileURL)
        return console.error('Data is missing! ' + error);

      const data = JSON.stringify({ name, description, image: fileURL });

      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      await createSale(url, price);
    } catch (error) {
      console.error('Something went wrong while creating NFT: ' + error);
    }
  };

  // Function for creating NFT sale
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, 'ether');
      const contract = await connectingWithSmartContract();
      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
      console.log(transaction);
    } catch (error) {
      console.error('Something went wrong while creating NFT sale: ' + error);
    }
  };

  // Function for retrieving all NFTs inside of market place
  const fetchNFTs = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);

      const data = await contract.fetchMarketItem();
      console.log(data);

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);

            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              'ether'
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );

      return items;
    } catch (error) {
      console.error('Something went wrong while fetching NFTs: ' + error);
    }
  };

  // Function that retrieves NFTs related to a user
  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const contract = await connectingWithSmartContract();
      const data =
        type === 'fetchItemsListed'
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFT();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);

            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              'ether'
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );

      return items;
    } catch (error) {
      console.error(
        'Something went wrong while fetching listed NFTs: ' + error
      );
    }
  };

  // Function for buying NFTs
  const buyNft = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');

      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
    } catch (error) {
      console.error('Something went wrong while buying NFT: ' + error);
    }
  };

  // Functions we call on init
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  return (
    <NFTMarketplaceContext.Provider
      value={{
        currentAccount,
        checkContract,
        checkIfWalletConnected,
        connectWallet,
        uploadToIPFS,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNft,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
