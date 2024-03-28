import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Style from '../styles/author.module.css';
import images from '../img';
import { Banner } from '../pageComponents/collection/collectionIndex';
import { Brand, Title } from '../components/components_index';
import {
  AuthorNFTCardBox,
  AuthorProfileCard,
  AuthorTabs,
} from '../pageComponents/author/authorindex';
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const author = () => {
  const [listed, setListed] = useState(true);
  const [owned, setOwned] = useState(false);
  const [created, setCreated] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);
  const [allNfts, setAllNfts] = useState([]);

  const { fetchNFTs, fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  const isAuth = Boolean(useSelector((state) => state.token));
  const router = useRouter();

  useEffect(() => {
    fetchMyNFTsOrListedNFTs('fetchItemsListed').then((items) => {
      setNfts(items);
    });
  }, []);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs('fetchMyNFTs').then((items) => {
      setMyNFTs(items);
    });
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchNFTs();
      setAllNfts(res);
    };

    fetch();
  }, []);

  useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  }, [isAuth]);

  return (
    <div className={Style.author}>
      {isAuth && (
        <>
          <Banner bannerImage={images.creatorbackground2} />
          <AuthorProfileCard currentAccount={currentAccount} />
          <AuthorTabs
            setListed={setListed}
            setCreated={setCreated}
            setOwned={setOwned}
            currentAccount={currentAccount}
          />
          <AuthorNFTCardBox
            listed={listed}
            owned={owned}
            created={created}
            nfts={nfts}
            myNFTS={myNFTs}
            allNFTs={allNfts}
          />
          <Brand />
        </>
      )}
    </div>
  );
};

export default author;
