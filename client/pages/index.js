import React, { useContext, useEffect, useState } from 'react';

import Style from '../styles/index.module.css';
import {
  BigNFTSlider,
  Brand,
  Category,
  Collection,
  Filter,
  Hero,
  Loader,
  NFTCards,
  Service,
  Slider,
  Subscribe,
} from '../components/components_index';
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const Home = () => {
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  const { fetchNFTs, checkIfWalletConnected } = useContext(
    NFTMarketplaceContext
  );

  useEffect(() => {
    checkIfWalletConnected();

    fetchNFTs().then((item) => {
      setNfts(item?.reverse());
      setNftsCopy(item);
    });
  }, []);

  return (
    <div className={Style.homePage}>
      <Hero />
      <Service />
      <BigNFTSlider />
      <Slider />
      <Collection />
      <Filter />
      {nfts?.length === 0 ? (
        <Loader message='Fetching NFTs, this might take a few moments, please wait!' />
      ) : (
        <NFTCards NFTData={nfts} />
      )}
      <Category />
      <Subscribe />
      <Brand />
    </div>
  );
};

export default Home;
