import React, { useContext, useEffect, useState } from 'react';

import Style from '../styles/index.module.css';
import {
  BigNFTSlider,
  Brand,
  Category,
  Collection,
  Filter,
  FollowerTab,
  Hero,
  Loader,
  NFTCards,
  Service,
  Slider,
  Subscribe,
} from '../components/components_index';
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';
import { getTopCreators } from '../utils/TopCreators';

const Home = () => {
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [creators, setCreators] = useState([]);

  const { fetchNFTs, checkIfWalletConnected } = useContext(
    NFTMarketplaceContext
  );

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchNFTs();
      setNfts(res?.reverse());
      setNftsCopy(res);
    };

    checkIfWalletConnected();
    fetch();

    const creatorsCopy = getTopCreators(nftsCopy);
    setCreators(creatorsCopy);
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
      {creators.length === 0 ? (
        <Loader message='Fetching top Creators, this might take a few moments, please wait!' />
      ) : (
        <FollowerTab TopCreator={creators} />
      )}
      <Subscribe />
      <Brand />
    </div>
  );
};

export default Home;
