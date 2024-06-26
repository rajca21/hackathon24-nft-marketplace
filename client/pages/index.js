import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Style from '../styles/index.module.css';
import {
  BigNFTSlider,
  Brand,
  Collection,
  Hero,
  Loader,
  NFTCards,
  Service,
} from '../components/components_index';
import LoginSignUp from '../pageComponents/login/LoginSignUp';
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';
import { getTopCreators } from '../utils/TopCreators';

const Home = () => {
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [creators, setCreators] = useState([]);

  // const user = useSelector((state) => state.user);
  const isAuth = Boolean(useSelector((state) => state.token));

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
      {!isAuth ? (
        <LoginSignUp />
      ) : (
        <>
          <Hero />
          <Service />
          <BigNFTSlider />
          <Collection />
          {nfts?.length === 0 ? (
            <Loader message='Fetching NFTs, this might take a few moments, please wait!' />
          ) : (
            <NFTCards NFTData={nfts} />
          )}
          <Brand />
        </>
      )}
    </div>
  );
};

export default Home;
