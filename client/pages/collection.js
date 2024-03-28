import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Style from '../styles/collection.module.css';
import images from '../img';
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from '../pageComponents/collection/collectionIndex';
import { Brand, NFTCards, Slider } from '../components/components_index';
import { Filter } from '../components/components_index';

const collection = () => {
  const [nfts, setNfts] = useState([]);

  const isAuth = Boolean(useSelector((state) => state.token));
  const router = useRouter();

  const collectionData = router.query;

  useEffect(() => {
    const getNFTs = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/v1/nfts?nftCollection=${collectionData?._id}`,
          {
            method: 'GET',
          }
        );
        const nftsRes = await res.json();
        if (nftsRes.data) {
          setNfts(nftsRes.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (!isAuth) {
      router.push('/');
    }

    getNFTs();
  }, [isAuth]);

  return (
    <div className={Style.collection}>
      {isAuth && (
        <>
          <Banner bannerImage={images.creatorbackground1} />
          <CollectionProfile collectionData={collectionData} />
          <NFTCardTwo NFTData={nfts} />
          <Brand />
        </>
      )}
    </div>
  );
};

export default collection;
