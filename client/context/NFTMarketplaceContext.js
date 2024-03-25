import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import axios from 'axios';

import { NFTMarketplaceABI, NFTMarketplaceAddress } from './constants';

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
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
  const [error, setError] = useState('');
  const [openError, setOpenError] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const router = useRouter();

  // Function for testing connection to Smart Contract
  const checkContract = async () => {
    const contract = await connectingWithSmartContract();
    console.log(contract);
  };

  // Function for checking wallet connectivity
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError('Install MetaMask');

      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        // console.log(accounts[0]);
      } else {
        // setError("No Account Found");
        // setOpenError(true);
        console.log('No account');
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const getBalance = await provider.getBalance(accounts[0]);
      const bal = ethers.utils.formatEther(getBalance);
      setAccountBalance(bal);
    } catch (error) {
      console.error(
        'Something went wrong while connecting to wallet: ' + error
      );
    }
  };

  // Function for connecting the wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError('Install MetaMask');

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log(accounts);
      setCurrentAccount(accounts[0]);

      // window.location.reload();
      connectingWithSmartContract();
    } catch (error) {
      console.error(
        'Something went wrong while connecting the wallet: ' + error
      );
    }
  };

  // Function for uploading images to IPFS
  const uploadToPinata = async (file) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios({
          method: 'post',
          url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
          data: formData,
          headers: {
            'Authorization':
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmMmRlMTA3ZC00NmI3LTRhZGYtYjQ5MC1kNjg1Mzg5ZmU5Y2UiLCJlbWFpbCI6ImdsYW1jaGFpbjI0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiNTMzMmMxNDIxZWFlMjYzNDUyMiIsInNjb3BlZEtleVNlY3JldCI6IjJmYjRhNWNiMmNhZDEwMWFmZDc5MjhiYTc4MDhhZWM1ODRiN2E5YjNkMWYxZGE3ZDI1YTNlOWIxZDU2ZTVhYjciLCJpYXQiOjE3MTEzMTg5MjF9.IOpJEM79kYQopxe7XvsMr9PIrTozXKdSYXgAwbfNrug',
            'Content-Type': 'multipart/form-data',
          },
        });

        const imgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        return imgHash;
      } catch (error) {
        console.error(
          'Something went wrong while uploading to Pinata: ' + error
        );
      }
    }
  };

  // Function for creating NFTs
  const createNFT = async (name, price, image, description, router) => {
    try {
      if (!name || !description || !price || !image)
        return console.error('Data is missing! ' + error);

      const data = JSON.stringify({ name, description, image });

      const response = await axios({
        method: 'POST',
        url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        data: data,
        headers: {
          'Authorization':
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmMmRlMTA3ZC00NmI3LTRhZGYtYjQ5MC1kNjg1Mzg5ZmU5Y2UiLCJlbWFpbCI6ImdsYW1jaGFpbjI0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiNTMzMmMxNDIxZWFlMjYzNDUyMiIsInNjb3BlZEtleVNlY3JldCI6IjJmYjRhNWNiMmNhZDEwMWFmZDc5MjhiYTc4MDhhZWM1ODRiN2E5YjNkMWYxZGE3ZDI1YTNlOWIxZDU2ZTVhYjciLCJpYXQiOjE3MTEzMTg5MjF9.IOpJEM79kYQopxe7XvsMr9PIrTozXKdSYXgAwbfNrug',
          'Content-Type': 'application/json',
        },
      });

      const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

      await createSale(url, price);
      router.push('/search');
    } catch (error) {
      console.error('Something went wrong while creating NFT: ' + error);
      setOpenError(true);
    }
  };

  // Function for creating NFT sale
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      console.log(url, formInputPrice, isReselling, id);
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
      setError('error while creating sale');
      setOpenError(true);
    }
  };

  // Function for retrieving all NFTs inside of market place
  const fetchNFTs = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const contract = fetchContract(provider);
      const data = await contract.fetchMarketItems();

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
    fetchNFTs();
  }, []);

  return (
    <NFTMarketplaceContext.Provider
      value={{
        currentAccount,
        checkContract,
        checkIfWalletConnected,
        connectWallet,
        uploadToPinata,
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
